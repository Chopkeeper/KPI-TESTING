import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, Search, FileText, Server, Syringe } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export function UserManual() {
  const [openSection, setOpenSection] = useState<string | null>('intro');

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      {/* Header */}
      <div className="flex justify-between items-end mb-6">
        <h1 className="text-2xl text-[#333] font-normal flex items-center gap-2">
          <BookOpen size={24} className="text-[#605ca8]" />
          คู่มือการใช้งานระบบ MIS 4.0
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation for Manual */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#605ca8] overflow-hidden">
            <div className="p-3 border-b border-gray-100 bg-gray-50">
              <h3 className="text-sm font-bold text-[#333]">สารบัญคู่มือ</h3>
            </div>
            <ul className="flex flex-col text-sm">
              <ManualNavItem 
                id="intro" 
                title="1. แนะนำระบบเบื้องต้น" 
                isOpen={openSection === 'intro'} 
                onClick={() => toggleSection('intro')} 
              />
              <ManualNavItem 
                id="dashboard" 
                title="2. การดูข้อมูล Dashboard" 
                isOpen={openSection === 'dashboard'} 
                onClick={() => toggleSection('dashboard')} 
              />
              <ManualNavItem 
                id="lab" 
                title="3. การค้นหาผล LAB" 
                isOpen={openSection === 'lab'} 
                onClick={() => toggleSection('lab')} 
              />
              <ManualNavItem 
                id="vaccine" 
                title="4. ระบบงานวัคซีน" 
                isOpen={openSection === 'vaccine'} 
                onClick={() => toggleSection('vaccine')} 
              />
              <ManualNavItem 
                id="export" 
                title="5. การส่งออกรายงาน (Export)" 
                isOpen={openSection === 'export'} 
                onClick={() => toggleSection('export')} 
              />
            </ul>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-sm shadow-sm p-6 min-h-[500px]">
            
            {openSection === 'intro' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-[#333] mb-4 border-b pb-2">1. แนะนำระบบเบื้องต้น (Introduction)</h2>
                <p className="text-[#555] mb-4 leading-relaxed">
                  ระบบ MIS 4.0 (Management Information System) เป็นระบบสารสนเทศเพื่อการบริหารจัดการสำหรับโรงพยาบาล 
                  ที่รวบรวมข้อมูลจากระบบ HIS (Hospital Information System) และระบบอื่นๆ มาแสดงผลในรูปแบบ Dashboard 
                  เพื่อให้ผู้บริหารและผู้ปฏิบัติงานสามารถติดตามสถานการณ์และสถิติต่างๆ ได้แบบ Real-time
                </p>
                <div className="bg-blue-50 p-4 rounded border border-blue-100 text-sm text-blue-800">
                  <strong>หมายเหตุ:</strong> ข้อมูลในระบบจะถูกอัปเดตอัตโนมัติจากฐานข้อมูลหลัก โปรดตรวจสอบสถานะการเชื่อมต่อ (Monitor ระบบ Backoffice) หากพบว่าข้อมูลไม่เป็นปัจจุบัน
                </div>
              </div>
            )}

            {openSection === 'dashboard' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-[#333] mb-4 border-b pb-2">2. การดูข้อมูล Dashboard</h2>
                <p className="text-[#555] mb-4 leading-relaxed">
                  หน้า Dashboard หลักจะแสดงภาพรวมของการให้บริการในแต่ละวัน คุณสามารถคลิกที่เมนูย่อยในหมวด <strong>"ข้อมูลและสถิติ"</strong> เพื่อดูรายละเอียดเชิงลึกของแต่ละแผนกได้
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#555]">
                  <li><strong>กล่องสีฟ้า (ผู้รับบริการวันนี้):</strong> แสดงยอดรวมผู้ป่วยนอกทั้งหมด</li>
                  <li><strong>กล่องสีชมพู (Admit วันนี้):</strong> แสดงยอดผู้ป่วยในที่รับใหม่ในวันนี้</li>
                  <li><strong>แถบสถิติผู้ป่วยใน (ด้านล่าง):</strong> แสดงอัตราการครองเตียงของแต่ละหอผู้ป่วยแบบ Real-time</li>
                </ul>
              </div>
            )}

            {openSection === 'lab' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-[#333] mb-4 border-b pb-2 flex items-center gap-2">
                  <Search className="text-[#3c8dbc]" /> 3. การค้นหาผล LAB
                </h2>
                <p className="text-[#555] mb-4 leading-relaxed">
                  ระบบค้นหาผล LAB เชื่อมต่อกับ LIS Server โดยตรง ทำให้สามารถดูผลการตรวจทางห้องปฏิบัติการได้ทันที
                </p>
                <h4 className="font-bold text-[#333] mt-4 mb-2">ขั้นตอนการค้นหา:</h4>
                <ol className="list-decimal pl-5 space-y-2 text-[#555]">
                  <li>ไปที่เมนู <strong>"ค้นผล LAB"</strong> ที่แถบด้านซ้าย</li>
                  <li>กรอกข้อมูลที่ต้องการค้นหา เช่น <strong>HN</strong>, <strong>ชื่อ-นามสกุล</strong> หรือ <strong>วันที่สั่งตรวจ</strong> (กรอกอย่างใดอย่างหนึ่งหรือรวมกันก็ได้)</li>
                  <li>กดปุ่ม <strong>"ค้นหาผล LAB"</strong></li>
                  <li>ระบบจะแสดงรายการผลตรวจ พร้อมระบุสถานะ (Approved / In Process) และไฮไลท์ค่าที่ผิดปกติ (ตัวสีแดง)</li>
                </ol>
              </div>
            )}

            {openSection === 'vaccine' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-[#333] mb-4 border-b pb-2 flex items-center gap-2">
                  <Syringe className="text-[#00a65a]" /> 4. ระบบงานวัคซีน
                </h2>
                <p className="text-[#555] mb-4 leading-relaxed">
                  ระบบงานวัคซีนแบ่งออกเป็น 2 ส่วนหลัก:
                </p>
                
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-bold text-[#333] flex items-center gap-2 mb-2">
                      <Activity size={16} className="text-[#00a65a]" /> Dashboard วัคซีน
                    </h4>
                    <p className="text-sm text-[#555]">
                      แสดงภาพรวมการฉีดวัคซีนทั้งหมด สัดส่วนชนิดวัคซีน ความครอบคลุมตามกลุ่มเป้าหมาย และรายการผู้ที่มารับวัคซีนล่าสุดในวันนี้
                    </p>
                  </div>
                  
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-bold text-[#333] flex items-center gap-2 mb-2">
                      <Search size={16} className="text-[#0073b7]" /> ข้อมูลการฉีดวัคซีน
                    </h4>
                    <p className="text-sm text-[#555] mb-2">
                      ใช้สำหรับค้นหาประวัติการรับวัคซีนรายบุคคล หรือดูรายการตามชนิดวัคซีน
                    </p>
                    <ul className="list-disc pl-5 text-sm text-[#555]">
                      <li>สามารถค้นหาด้วย <strong>ชื่อ-นามสกุล</strong> เพื่อดูว่าบุคคลนั้นฉีดวัคซีนไปแล้วกี่เข็ม ชนิดใดบ้าง</li>
                      <li>ระบบจะสรุปยอดรวมจำนวนเข็มที่ฉีดให้ที่ด้านบนของตาราง หากค้นหาด้วยชื่อหรือ HN</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {openSection === 'export' && (
              <div className="animate-in fade-in duration-300">
                <h2 className="text-xl font-bold text-[#333] mb-4 border-b pb-2 flex items-center gap-2">
                  <FileText className="text-[#f39c12]" /> 5. การส่งออกรายงาน (Export)
                </h2>
                <p className="text-[#555] mb-4 leading-relaxed">
                  ในหลายๆ หน้าจอ (เช่น ระบบขอ/ส่งออกรายงาน, ข้อมูลการฉีดวัคซีน) จะมีปุ่มสำหรับส่งออกข้อมูลเป็นไฟล์ Excel หรือ CSV
                </p>
                <div className="bg-yellow-50 p-4 rounded border border-yellow-100 text-sm text-yellow-800">
                  <strong>ข้อควรระวัง:</strong> ข้อมูลที่ส่งออกอาจมีข้อมูลส่วนบุคคลของผู้ป่วย (PDPA) กรุณาเก็บรักษาไฟล์อย่างระมัดระวังและใช้เพื่องานราชการ/การรักษาพยาบาลเท่านั้น
                </div>
              </div>
            )}

            {!openSection && (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <BookOpen size={64} className="mb-4 opacity-20" />
                <p>กรุณาเลือกหัวข้อคู่มือจากเมนูด้านซ้าย</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

function ManualNavItem({ id, title, isOpen, onClick }: { id: string, title: string, isOpen: boolean, onClick: () => void }) {
  return (
    <li className="border-b border-gray-100 last:border-0">
      <button 
        onClick={onClick}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left",
          isOpen ? "bg-gray-50 text-[#605ca8] font-bold border-l-4 border-[#605ca8]" : "text-[#555] border-l-4 border-transparent"
        )}
      >
        <span>{title}</span>
        {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>
    </li>
  );
}
