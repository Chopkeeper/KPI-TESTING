import React, { useState } from 'react';
import { FileSpreadsheet, Download, History, FileText, CheckCircle, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { th } from 'date-fns/locale';

type LogEntry = {
  id: string;
  timestamp: Date;
  user: string;
  reportName: string;
  format: string;
  status: 'success' | 'processing';
};

export function ReportCenter() {
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: '1', timestamp: new Date(Date.now() - 1000 * 60 * 30), user: 'นพ. สมชาย ใจดี', reportName: 'รายงานผู้ป่วยนอก (OPD) ประจำเดือน', format: 'Excel', status: 'success' },
    { id: '2', timestamp: new Date(Date.now() - 1000 * 60 * 120), user: 'พญ. หญิง รักษา', reportName: 'สถิติโรค NCD 10 อันดับแรก', format: 'CSV', status: 'success' },
    { id: '3', timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), user: 'คุณ สมภพ ไอที', reportName: 'รายงานรายได้แยกตามสิทธิการรักษา', format: 'Excel', status: 'success' },
  ]);

  const [selectedReport, setSelectedReport] = useState('opd_visit');
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = (formatType: string) => {
    setIsExporting(true);
    
    // Simulate API call and export delay
    setTimeout(() => {
      const reportNames: Record<string, string> = {
        'opd_visit': 'รายงานผู้ป่วยนอก (OPD) ประจำวัน',
        'ipd_admit': 'รายงานผู้ป่วยใน (IPD) Admit/Discharge',
        'revenue': 'รายงานรายได้และค่าใช้จ่าย',
        'kpi_summary': 'สรุปตัวชี้วัด KPI ประจำเดือน'
      };

      const newLog: LogEntry = {
        id: Math.random().toString(36).substr(2, 9),
        timestamp: new Date(),
        user: 'Guest (Current User)',
        reportName: reportNames[selectedReport] || 'รายงานทั่วไป',
        format: formatType,
        status: 'success'
      };

      setLogs([newLog, ...logs]);
      setIsExporting(false);
      
      // In a real app, this would trigger a file download
      alert(`ส่งออกรายงาน ${newLog.reportName} รูปแบบ ${formatType} สำเร็จ!`);
    }, 1500);
  };

  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal">ระบบขอและส่งออกรายงาน (Report Center)</h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <FileSpreadsheet size={12} /> รายงาน <span className="mx-1">&gt;</span> ส่งออก
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Export Form */}
        <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#3c8dbc] lg:col-span-1">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333] flex items-center gap-2">
            <Download size={16} className="text-[#3c8dbc]" />
            ระบุเงื่อนไขการขอรายงาน
          </div>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#333] mb-1">เลือกประเภทรายงาน</label>
              <select 
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full border border-gray-300 rounded-sm p-2 text-sm focus:border-[#3c8dbc] focus:ring-0 outline-none"
              >
                <option value="opd_visit">รายงานผู้ป่วยนอก (OPD) ประจำวัน</option>
                <option value="ipd_admit">รายงานผู้ป่วยใน (IPD) Admit/Discharge</option>
                <option value="revenue">รายงานรายได้และค่าใช้จ่าย</option>
                <option value="kpi_summary">สรุปตัวชี้วัด KPI ประจำเดือน</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-xs font-bold text-[#333] mb-1">ตั้งแต่วันที่</label>
                <input type="date" className="w-full border border-gray-300 rounded-sm p-2 text-sm focus:border-[#3c8dbc] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#333] mb-1">ถึงวันที่</label>
                <input type="date" className="w-full border border-gray-300 rounded-sm p-2 text-sm focus:border-[#3c8dbc] outline-none" />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex gap-2">
              <button 
                onClick={() => handleExport('Excel')}
                disabled={isExporting}
                className="flex-1 bg-[#00a65a] hover:bg-[#008d4c] text-white py-2 px-4 rounded-sm text-sm font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                <FileSpreadsheet size={16} />
                {isExporting ? 'กำลังประมวลผล...' : 'ส่งออก Excel'}
              </button>
              <button 
                onClick={() => handleExport('CSV')}
                disabled={isExporting}
                className="flex-1 bg-[#f39c12] hover:bg-[#e08e0b] text-white py-2 px-4 rounded-sm text-sm font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
              >
                <FileText size={16} />
                {isExporting ? 'กำลังประมวลผล...' : 'ส่งออก CSV'}
              </button>
            </div>
            <p className="text-[10px] text-gray-500 text-center mt-2">
              * การส่งออกรายงานจะถูกบันทึกประวัติ (Log) เพื่อการตรวจสอบความปลอดภัยของข้อมูล
            </p>
          </div>
        </div>

        {/* Audit Log Table */}
        <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#f39c12] lg:col-span-2">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333] flex items-center gap-2">
            <History size={16} className="text-[#f39c12]" />
            บันทึกหลักฐานการขอส่งรายงาน (Audit Log)
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-[#333]">
                  <th className="py-3 px-4 text-left font-semibold w-[180px]">วัน-เวลาที่ขอ</th>
                  <th className="py-3 px-4 text-left font-semibold">ผู้ดำเนินการ</th>
                  <th className="py-3 px-4 text-left font-semibold">ชื่อรายงานที่ส่งออก</th>
                  <th className="py-3 px-4 text-center font-semibold">รูปแบบ</th>
                  <th className="py-3 px-4 text-center font-semibold">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="py-3 px-4 text-[#555] text-xs">
                      {format(log.timestamp, 'dd MMM yyyy HH:mm:ss', { locale: th })}
                    </td>
                    <td className="py-3 px-4 text-[#3c8dbc] font-medium">{log.user}</td>
                    <td className="py-3 px-4 text-[#333]">{log.reportName}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`text-[10px] px-2 py-1 rounded font-bold ${log.format === 'Excel' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}`}>
                        {log.format}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      {log.status === 'success' ? (
                        <span className="inline-flex items-center gap-1 text-[#00a65a] text-xs">
                          <CheckCircle size={12} /> สำเร็จ
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[#f39c12] text-xs">
                          <Clock size={12} /> กำลังประมวลผล
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
                {logs.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-8 text-center text-gray-500">
                      ไม่มีประวัติการส่งออกรายงาน
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
