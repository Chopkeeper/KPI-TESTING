import React from 'react';
import { Stethoscope, Bed, Hand, Quote, X, Ambulance, Accessibility, Activity, Home } from 'lucide-react';

export function MISDashboard() {
  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal">MIS 4.0 Dashboard</h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <Home size={12} /> Home <span className="mx-1">&gt;</span> Dashboard
        </div>
      </div>

      {/* Top 4 Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <LargeCard 
          bg="bg-[#00c0ef]" 
          number="280" 
          title="ผู้รับบริการวันนี้" 
          subtitle="(เดือนนี้ 4,934 คน / 8,116 ครั้ง)" 
          icon={<Stethoscope size={60} className="text-black/20" />} 
        />
        <LargeCard 
          bg="bg-[#dd4b39]" 
          number="1" 
          title="Admit วันนี้" 
          subtitle="(เดือนนี้ 248 คน / 273 ครั้ง)" 
          icon={<Bed size={60} className="text-black/20" />} 
        />
        <LargeCard 
          bg="bg-[#00a65a]" 
          number="6" 
          title="แพทย์แผนไทย วันนี้" 
          subtitle="(เดือนนี้ 273 คน / 384 ครั้ง)" 
          icon={<Hand size={60} className="text-black/20" />} 
        />
        <LargeCard 
          bg="bg-[#f39c12]" 
          number="13" 
          title="ทันตกรรม วันนี้" 
          subtitle="(เดือนนี้ 642 คน / 792 ครั้ง)" 
          icon={<Quote size={60} className="text-black/20" />} 
        />
      </div>

      {/* Middle 4 Small Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <SmallCard 
          bg="bg-[#00c0ef]" 
          icon={<X size={30} className="text-white" />} 
          title="วันนี้ 15" 
          subtitle="X-RAY" 
          desc="เดือนนี้ 497 คน / 595 ครั้ง" 
        />
        <SmallCard 
          bg="bg-[#dd4b39]" 
          icon={<Ambulance size={30} className="text-white" />} 
          title="วันนี้ 50" 
          subtitle="อุบัติเหตุ" 
          desc="เดือนนี้ 1,041 คน / 1,041 ครั้ง" 
        />
        <SmallCard 
          bg="bg-[#00a65a]" 
          icon={<Accessibility size={30} className="text-white" />} 
          title="วันนี้ 7" 
          subtitle="กายภาพบำบัด" 
          desc="เดือนนี้ 136 คน / 312 ครั้ง" 
        />
        <SmallCard 
          bg="bg-[#f39c12]" 
          icon={<Activity size={30} className="text-white" />} 
          title="วันนี้ 0" 
          subtitle="ผู้ป่วยผ่าตัด" 
          desc="เดือนนี้ 0 คน / 0 ครั้ง (OPD 0 / IPD 0)" 
        />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white shadow-sm rounded-sm overflow-hidden">
            <div className="bg-[#dd4b39] text-white p-4 flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                <Bed size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">สถิติผู้ป่วยในวันนี้</h3>
                <p className="text-sm">จำนวนเตียงทั้งหมด 395 เตียง</p>
              </div>
            </div>
            <div className="p-0">
              <table className="w-full text-sm">
                <tbody>
                  <TableRow label="รับใหม่วันนี้" value="1 เตียง" badgeColor="bg-[#dd4b39]" label2="สิทธิ์ชำระเงินและเบิกได้" value2="0 เตียง" badgeColor2="bg-gray-400" />
                  <TableRow label="จำหน่ายวันนี้" value="0 เตียง" badgeColor="bg-[#f39c12]" label2="สิทธิ์ UC" value2="18 เตียง" badgeColor2="bg-gray-400" />
                  <TableRow label="Admit อยู่" value="48 เตียง" badgeColor="bg-[#00c0ef]" label2="สิทธิ์อื่นๆ" value2="24 เตียง" badgeColor2="bg-gray-400" />
                  <TableRow label="เตียงว่าง" value="347 เตียง" badgeColor="bg-[#00a65a]" label2="อัตราการครองเตียง" value2="11.06 %" badgeColor2="bg-[#dd4b39]" />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 space-y-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <WardCard title="Admit 6 / เตียง (เต็ม)" subtitle="ครองเตียง 0.00%" />
            <WardCard title="ตึก IPD1" subtitle="Admit 28 / 105 เตียง (ว่าง 77)" desc="ครองเตียง 26.67%" />
            <WardCard title="มินิธัญญารักษ์" subtitle="Admit 10 / 32 เตียง (ว่าง 22)" desc="ครองเตียง 31.25%" />
            <WardCard title="HOMEWARD" subtitle="Admit 4 / 30 เตียง (ว่าง 26)" desc="ครองเตียง 13.33%" />
          </div>
        </div>
      </div>
      
      {/* Bottom-most Section */}
      <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white shadow-sm rounded-sm">
          <div className="border-b border-gray-100 p-2 text-sm font-bold flex items-center gap-2">
            <span className="text-gray-500">📢</span> ประกาศ
          </div>
          <div className="p-4 min-h-[100px]"></div>
        </div>
        <div className="bg-white shadow-sm rounded-sm">
          <div className="border-b border-gray-100 p-2 text-sm font-bold flex items-center gap-2">
            <span className="text-gray-500">📄</span> คู่มือและข้อตกลงการใช้งาน
          </div>
          <div className="p-4 min-h-[100px]"></div>
        </div>
      </div>
    </div>
  );
}

function LargeCard({ bg, number, title, subtitle, icon }: any) {
  return (
    <div className={`${bg} rounded-sm text-white relative overflow-hidden shadow-sm`}>
      <div className="p-4 z-10 relative">
        <h3 className="text-4xl font-bold mb-2">{number}</h3>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs mt-1">{subtitle}</p>
      </div>
      <div className="absolute top-4 right-4 z-0">
        {icon}
      </div>
      <a href="#" className="block text-center bg-black/10 py-1 text-xs hover:bg-black/20 transition-colors z-10 relative">
        รายละเอียด <span className="ml-1">➔</span>
      </a>
    </div>
  );
}

function SmallCard({ bg, icon, title, subtitle, desc }: any) {
  return (
    <div className="flex bg-white shadow-sm rounded-sm overflow-hidden">
      <div className={`${bg} w-20 flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="p-3 flex-1">
        <h4 className="text-sm font-bold text-[#333]">{title}</h4>
        <p className="text-sm text-[#333] mt-0.5">{subtitle}</p>
        <p className="text-xs text-[#777] mt-1">{desc}</p>
      </div>
    </div>
  );
}

function TableRow({ label, value, badgeColor, label2, value2, badgeColor2 }: any) {
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-2 px-4 text-[#333] w-1/4">{label}</td>
      <td className="py-2 px-4 w-1/4 text-right">
        <span className={`${badgeColor} text-white text-[10px] px-2 py-0.5 rounded-xl`}>{value}</span>
      </td>
      <td className="py-2 px-4 text-[#333] w-1/4">{label2}</td>
      <td className="py-2 px-4 w-1/4 text-right">
        <span className={`${badgeColor2} text-white text-[10px] px-2 py-0.5 rounded-xl`}>{value2}</span>
      </td>
    </tr>
  );
}

function WardCard({ title, subtitle, desc, warning }: any) {
  return (
    <div className="bg-[#00a65a] text-white p-3 rounded-sm shadow-sm flex items-start gap-3">
      <Bed size={32} className="text-white/80 shrink-0 mt-1" />
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-sm">{subtitle}</p>
        {warning && (
          <p className="text-[10px] font-bold mt-1">
            {warning}
          </p>
        )}
        {desc && <p className="text-xs mt-1">{desc}</p>}
      </div>
    </div>
  );
}
