import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Create MySQL connection pool
  // It will only connect if DB_HOST is provided
  const pool = mysql.createPool({
    host: process.env.DB_HOST || '',
    user: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || '',
    port: Number(process.env.DB_PORT) || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  const isDbConfigured = !!process.env.DB_HOST;

  // Health check endpoint
  app.get("/api/health/db", async (req, res) => {
    if (!isDbConfigured) {
      return res.json({ status: "warning", message: "ยังไม่ได้ตั้งค่าฐานข้อมูล กำลังใช้ข้อมูลจำลอง กรุณาตั้งค่า DB_HOST ใน Environment Variables" });
    }
    try {
      const connection = await pool.getConnection();
      connection.release();
      res.json({ status: "ok", message: "เชื่อมต่อฐานข้อมูล MySQL สำเร็จ" });
    } catch (error: any) {
      res.status(500).json({ status: "error", message: error.message });
    }
  });

  // Overview KPI endpoint
  app.get("/api/kpi/overview", async (req, res) => {
    if (isDbConfigured) {
      try {
        // Example query for HIS (HOSxP style or general)
        // const [rows] = await pool.query('SELECT count(*) as totalOpd FROM vn_stat WHERE vstdate = CURRENT_DATE');
        // For now, we return a structured response that the user can map their SQL to.
        // In a real scenario, they would replace this query with their actual HIS query.
      } catch (error) {
        console.error("DB Error:", error);
      }
    }
    
    // Fallback Mock Data
    res.json({
      totalOpd: 650 + Math.floor(Math.random() * 20),
      totalIpd: 68 + Math.floor(Math.random() * 5),
      bedOccupancy: 85 + (Math.random() * 2 - 1),
      erCases: 50 + Math.floor(Math.random() * 5),
      flowData: [
        { time: '08:00', opd: 120, ipd: 45, er: 15 },
        { time: '09:00', opd: 250, ipd: 50, er: 22 },
        { time: '10:00', opd: 380, ipd: 55, er: 30 },
        { time: '11:00', opd: 450, ipd: 60, er: 35 },
        { time: '12:00', opd: 510, ipd: 62, er: 40 },
        { time: '13:00', opd: 580, ipd: 65, er: 45 },
        { time: '14:00', opd: 650, ipd: 68, er: 50 },
      ]
    });
  });

  // Service Plan KPI endpoint
  app.get("/api/kpi/service-plan", async (req, res) => {
    if (isDbConfigured) {
      try {
        // Example SQL query to fetch service plan KPIs
      } catch (error) {
        console.error("DB Error:", error);
      }
    }
    // Fallback Mock Data
    res.json([
      { id: 'stroke', name: 'ช่องทางด่วนหลอดเลือดสมอง (Stroke)', metric: 'Door to Needle < 45 นาที', target: 80, current: 75.5 + (Math.random() * 2 - 1), cases: 12 + Math.floor(Math.random() * 2), status: 'warning' },
      { id: 'stemi', name: 'ช่องทางด่วนโรคหัวใจ (STEMI)', metric: 'Door to Balloon < 90 นาที', target: 90, current: 92.3 + (Math.random() * 2 - 1), cases: 8, status: 'success' },
      { id: 'sepsis', name: 'ติดเชื้อในกระแสเลือด (Sepsis)', metric: 'Door to Antibiotic < 1 ชม.', target: 85, current: 68.4 + (Math.random() * 2 - 1), cases: 24, status: 'danger' },
      { id: 'trauma', name: 'อุบัติเหตุรุนแรง (Trauma)', metric: 'อัตราการเสียชีวิตที่ ER', target: 5, current: 4.2 + (Math.random() * 0.5 - 0.25), cases: 45, status: 'success', reverse: true }
    ]);
  });

  // Feed endpoint
  app.get("/api/kpi/feed", async (req, res) => {
    if (isDbConfigured) {
      try {
        // Example SQL query to fetch recent events
      } catch (error) {
        console.error("DB Error:", error);
      }
    }
    
    // Fallback Mock Data
    const types = ['alert', 'info', 'success'];
    const depts = ['ฉุกเฉิน (ER)', 'ผู้ป่วยนอก (OPD)', 'ผู้ป่วยใน (IPD)', 'ห้องผ่าตัด (OR)', 'ไอซียู (ICU)'];
    const messages = [
      'เริ่มโปรโตคอล Sepsis',
      'ทำเวลา Door to needle ผ่านเกณฑ์',
      'มีผู้ป่วยอุบัติเหตุรุนแรงรายใหม่',
      'อัตราครองเตียงถึงระดับวิกฤต',
      'ส่งต่อผู้ป่วย STEMI สำเร็จ'
    ];
    
    const feed = Array.from({ length: 5 }).map((_, i) => ({
      id: Math.random().toString(36).substr(2, 9),
      time: new Date(Date.now() - i * 1000 * 60 * 5),
      type: types[Math.floor(Math.random() * types.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
      department: depts[Math.floor(Math.random() * depts.length)],
    }));
    
    res.json(feed);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
