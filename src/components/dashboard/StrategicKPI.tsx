import React from 'react';
import { Target, TrendingUp, Users, HeartPulse, Award, DollarSign } from 'lucide-react';

export function StrategicKPI() {
  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal">Dashboard KPI ยุทธศาสตร์องค์กร</h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <Target size={12} /> ยุทธศาสตร์ <span className="mx-1">&gt;</span> KPI หลัก
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <KpiSummaryCard title="เป้าหมายผ่านเกณฑ์" value="18/24" percent="75%" color="bg-[#00a65a]" icon={<Award size={40} className="text-white/30" />} />
        <KpiSummaryCard title="เป้าหมายที่ต้องเฝ้าระวัง" value="4/24" percent="16%" color="bg-[#f39c12]" icon={<TrendingUp size={40} className="text-white/30" />} />
        <KpiSummaryCard title="เป้าหมายไม่ผ่านเกณฑ์" value="2/24" percent="9%" color="bg-[#dd4b39]" icon={<Target size={40} className="text-white/30" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Strategy 1 */}
        <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#00c0ef]">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333] flex items-center gap-2">
            <HeartPulse size={16} className="text-[#00c0ef]" />
            ยุทธศาสตร์ที่ 1: การพัฒนาคุณภาพบริการที่เป็นเลิศ (Excellence Service)
          </div>
          <div className="p-4 space-y-4">
            <KpiProgress name="อัตราการเสียชีวิตของผู้ป่วยวิกฤต (เป้าหมาย < 5%)" current="3.2%" value={80} color="bg-[#00a65a]" />
            <KpiProgress name="อัตราการติดเชื้อในโรงพยาบาล (เป้าหมาย < 1%)" current="0.8%" value={90} color="bg-[#00a65a]" />
            <KpiProgress name="ระยะเวลารอคอยเฉลี่ย OPD (เป้าหมาย < 60 นาที)" current="75 นาที" value={60} color="bg-[#f39c12]" />
            <KpiProgress name="อัตราการกลับมารักษาซ้ำภายใน 28 วัน (Readmission)" current="4.5%" value={45} color="bg-[#dd4b39]" />
          </div>
        </div>

        {/* Strategy 2 */}
        <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#00a65a]">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333] flex items-center gap-2">
            <Users size={16} className="text-[#00a65a]" />
            ยุทธศาสตร์ที่ 2: การพัฒนาบุคลากรและเครือข่าย (People & Network)
          </div>
          <div className="p-4 space-y-4">
            <KpiProgress name="ความพึงพอใจของผู้รับบริการ (เป้าหมาย > 85%)" current="88%" value={88} color="bg-[#00a65a]" />
            <KpiProgress name="ความสุขในการทำงานของบุคลากร (Happy Workplace)" current="72%" value={72} color="bg-[#f39c12]" />
            <KpiProgress name="อัตราการลาออกของบุคลากรทางการแพทย์ (เป้าหมาย < 5%)" current="2.1%" value={95} color="bg-[#00a65a]" />
          </div>
        </div>

        {/* Strategy 3 */}
        <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#f39c12] lg:col-span-2">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333] flex items-center gap-2">
            <DollarSign size={16} className="text-[#f39c12]" />
            ยุทธศาสตร์ที่ 3: การบริหารจัดการองค์กรและนวัตกรรม (Management & Innovation)
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <KpiProgress name="อัตราส่วนต้นทุนต่อรายได้ (Operating Margin > 10%)" current="12.5%" value={100} color="bg-[#00a65a]" />
              <KpiProgress name="การเบิกจ่ายงบประมาณตามแผน (เป้าหมาย > 95%)" current="85%" value={85} color="bg-[#f39c12]" />
            </div>
            <div className="space-y-4">
              <KpiProgress name="ความสำเร็จของการพัฒนาระบบ Smart Hospital" current="60%" value={60} color="bg-[#3c8dbc]" />
              <KpiProgress name="ร้อยละของหน่วยงานที่ผ่าน HA ขั้น 3" current="100%" value={100} color="bg-[#00a65a]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiSummaryCard({ title, value, percent, color, icon }: any) {
  return (
    <div className={`${color} rounded-sm text-white relative overflow-hidden shadow-sm p-4 flex items-center justify-between`}>
      <div className="z-10 relative">
        <h3 className="text-3xl font-bold mb-1">{value}</h3>
        <p className="text-sm font-medium">{title}</p>
        <div className="mt-2 text-xs bg-black/20 inline-block px-2 py-1 rounded">
          คิดเป็น {percent}
        </div>
      </div>
      <div className="z-0">
        {icon}
      </div>
    </div>
  );
}

function KpiProgress({ name, current, value, color }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[#333] font-medium">{name}</span>
        <span className="font-bold text-[#333]">{current}</span>
      </div>
      <div className="w-full bg-gray-200 h-2.5 rounded-sm overflow-hidden">
        <div className={`${color} h-2.5`} style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
}
