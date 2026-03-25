import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/src/components/ui/card';
import { Database, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

export function Settings() {
  const [dbStatus, setDbStatus] = useState<{ status: string; message: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const checkDbConnection = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/health/db');
      const data = await res.json();
      setDbStatus(data);
    } catch (error: any) {
      setDbStatus({ status: 'error', message: error.message || 'Failed to connect to server' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkDbConnection();
  }, []);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            ตั้งค่าการเชื่อมต่อฐานข้อมูล
          </CardTitle>
          <CardDescription>
            กำหนดค่าการเชื่อมต่อฐานข้อมูล SQL เพื่อดึงข้อมูล HIS แบบเรียลไทม์
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border p-4 bg-slate-50">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-slate-800">สถานะการเชื่อมต่อ</h4>
              <button 
                onClick={checkDbConnection}
                disabled={loading}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                ทดสอบการเชื่อมต่อ
              </button>
            </div>
            
            {dbStatus && (
              <div className={`flex items-start gap-3 p-3 rounded-md ${
                dbStatus.status === 'ok' ? 'bg-emerald-100 text-emerald-800' :
                dbStatus.status === 'warning' ? 'bg-amber-100 text-amber-800' :
                'bg-red-100 text-red-800'
              }`}>
                {dbStatus.status === 'ok' ? <CheckCircle className="h-5 w-5 mt-0.5" /> : <AlertCircle className="h-5 w-5 mt-0.5" />}
                <div>
                  <p className="font-medium">{dbStatus.status === 'ok' ? 'เชื่อมต่อแล้ว' : dbStatus.status === 'warning' ? 'ยังไม่ได้ตั้งค่า' : 'ข้อผิดพลาดในการเชื่อมต่อ'}</p>
                  <p className="text-sm mt-1">{dbStatus.message}</p>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-slate-800">วิธีการตั้งค่าฐานข้อมูล SQL ของคุณ</h4>
            <p className="text-sm text-slate-600">
              ในการเชื่อมต่อแดชบอร์ดนี้กับระบบ HIS ของคุณ (เช่น HOSxP, HOMES) คุณต้องตั้งค่าตัวแปรสภาพแวดล้อม (Environment Variables) ต่อไปนี้ในระบบของคุณ หรือในไฟล์ <code>.env</code>:
            </p>
            
            <div className="bg-slate-950 text-slate-300 p-4 rounded-md font-mono text-sm overflow-x-auto">
              <div>DB_HOST="ไอพีเซิร์ฟเวอร์ฐานข้อมูลของคุณ"</div>
              <div>DB_USER="ชื่อผู้ใช้งานฐานข้อมูล"</div>
              <div>DB_PASSWORD="รหัสผ่านฐานข้อมูล"</div>
              <div>DB_NAME="ชื่อฐานข้อมูล"</div>
              <div>DB_PORT="3306"</div>
            </div>

            <div className="bg-blue-50 text-blue-800 p-4 rounded-md text-sm">
              <p className="font-semibold mb-1">หมายเหตุสำหรับนักพัฒนา:</p>
              <p>API ฝั่งเซิร์ฟเวอร์อยู่ที่ไฟล์ <code>server.ts</code> เมื่อเชื่อมต่อฐานข้อมูลแล้ว คุณสามารถแก้ไขคำสั่ง SQL ใน API routes (<code>/api/kpi/overview</code>, ฯลฯ) เพื่อให้ตรงกับโครงสร้างฐานข้อมูล HIS ของคุณ</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
