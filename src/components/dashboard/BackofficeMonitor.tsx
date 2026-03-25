import React from 'react';
import { Server, FileText, Calculator, Wallet, Package, Wrench, Users } from 'lucide-react';

interface BackofficeMonitorProps {
  setCurrentView?: (view: string) => void;
}

export function BackofficeMonitor({ setCurrentView = () => {} }: BackofficeMonitorProps) {
  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal">Monitor ระบบ Backoffice</h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <Server size={12} /> ระบบ <span className="mx-1">&gt;</span> Monitor
        </div>
      </div>

      <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#3c8dbc] mb-4">
        <div className="p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-[#333]">บทบาทและความสำคัญของ Back Office</h2>
          <p className="text-sm text-[#777] mt-1">ระบบสนับสนุนการทำงานเบื้องหลังที่มีความสำคัญต่อการขับเคลื่อนองค์กร (คลิกที่แต่ละหัวข้อเพื่อเข้าสู่ระบบงาน)</p>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Administration */}
            <div 
              onClick={() => setCurrentView('backoffice-admin')}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all bg-slate-50 cursor-pointer hover:border-[#3c8dbc] group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#3c8dbc] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <h3 className="text-md font-bold text-[#333] group-hover:text-[#3c8dbc] transition-colors">การจัดการบริหาร<br/><span className="text-sm font-normal text-gray-500">(Administration)</span></h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                จัดทำเอกสาร สัญญา และข้อมูลต่างๆ เพื่อสนับสนุนการทำงานของทุกฝ่ายในองค์กรให้เป็นไปอย่างราบรื่น
              </p>
            </div>

            {/* Accounting */}
            <div 
              onClick={() => setCurrentView('backoffice-accounting')}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all bg-slate-50 cursor-pointer hover:border-[#00a65a] group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#00a65a] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Calculator size={24} />
                </div>
                <h3 className="text-md font-bold text-[#333] group-hover:text-[#00a65a] transition-colors">การบัญชี<br/><span className="text-sm font-normal text-gray-500">(Accounting)</span></h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                ตรวจสอบบัญชี บันทึกรายการทางการค้า จัดทำงบการเงิน และสรุปผลการดำเนินงานขององค์กร
              </p>
            </div>

            {/* Finance */}
            <div 
              onClick={() => setCurrentView('backoffice-finance')}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all bg-slate-50 cursor-pointer hover:border-[#f39c12] group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#f39c12] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Wallet size={24} />
                </div>
                <h3 className="text-md font-bold text-[#333] group-hover:text-[#f39c12] transition-colors">การเงิน<br/><span className="text-sm font-normal text-gray-500">(Finance)</span></h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                ดูแลเรื่องการชำระเงิน การรับจ่ายเงิน บริหารสภาพคล่อง และวางแผนการเงินขององค์กร
              </p>
            </div>

            {/* Inventory & Order Management */}
            <div 
              onClick={() => setCurrentView('backoffice-inventory')}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all bg-slate-50 cursor-pointer hover:border-[#dd4b39] group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#dd4b39] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Package size={24} />
                </div>
                <h3 className="text-md font-bold text-[#333] group-hover:text-[#dd4b39] transition-colors">งานพัสดุ<br/><span className="text-sm font-normal text-gray-500">(Inventory & Order Mgt.)</span></h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                ทำหน้าที่เช็กสต็อกของใช้งานสำนักงาน จัดหาซื้ออุปกรณ์การแพทย์ทุกอย่าง และดูแลงาน ITA
              </p>
            </div>

            {/* Maintenance */}
            <div 
              onClick={() => setCurrentView('backoffice-maintenance')}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all bg-slate-50 cursor-pointer hover:border-[#605ca8] group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#605ca8] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Wrench size={24} />
                </div>
                <h3 className="text-md font-bold text-[#333] group-hover:text-[#605ca8] transition-colors">ฝ่ายปฏิบัติการซ่อมบำรุง<br/><span className="text-sm font-normal text-gray-500">(Maintenance)</span></h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                รับรายงาน แจ้งซ่อมแซม บำรุงรักษาเครื่องมือต่างๆ และดูแลงานโครงสร้างพื้นฐานขององค์กร
              </p>
            </div>

            {/* HR */}
            <div 
              onClick={() => setCurrentView('backoffice-hr')}
              className="border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-all bg-slate-50 cursor-pointer hover:border-[#00c0ef] group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#00c0ef] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                  <Users size={24} />
                </div>
                <h3 className="text-md font-bold text-[#333] group-hover:text-[#00c0ef] transition-colors">ทรัพยากรบุคคล<br/><span className="text-sm font-normal text-gray-500">(HR)</span></h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                บริหารจัดการพนักงานภายในองค์กร สรรหาบุคลากร ดูแลสวัสดิการ และพัฒนาศักยภาพบุคลากร
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
