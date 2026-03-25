import React from 'react';
import { Syringe, Users, Activity, Calendar, ShieldCheck, AlertCircle, CheckCircle } from 'lucide-react';

export function VaccineDashboard() {
  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal flex items-center gap-2">
          <Syringe size={24} className="text-[#00a65a]" />
          Dashboard งานวัคซีน
        </h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <Activity size={12} /> ข้อมูลและสถิติ <span className="mx-1">&gt;</span> Dashboard วัคซีน
        </div>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="bg-[#00a65a] rounded-sm text-white relative overflow-hidden shadow-sm">
          <div className="p-4 z-10 relative">
            <h3 className="text-4xl font-bold mb-2">12,450</h3>
            <p className="text-sm font-medium">จำนวนวัคซีนที่ฉีดสะสม</p>
            <p className="text-xs mt-1">Dose ทั้งหมด</p>
          </div>
          <div className="absolute top-4 right-4 z-0 opacity-30">
            <Syringe size={60} />
          </div>
        </div>
        
        <div className="bg-[#0073b7] rounded-sm text-white relative overflow-hidden shadow-sm">
          <div className="p-4 z-10 relative">
            <h3 className="text-4xl font-bold mb-2">8,230</h3>
            <p className="text-sm font-medium">จำนวนผู้รับวัคซีนสะสม</p>
            <p className="text-xs mt-1">คน (นับแยกรายบุคคล)</p>
          </div>
          <div className="absolute top-4 right-4 z-0 opacity-30">
            <Users size={60} />
          </div>
        </div>

        <div className="bg-[#f39c12] rounded-sm text-white relative overflow-hidden shadow-sm">
          <div className="p-4 z-10 relative">
            <h3 className="text-4xl font-bold mb-2">45</h3>
            <p className="text-sm font-medium">ฉีดวันนี้</p>
            <p className="text-xs mt-1">Dose</p>
          </div>
          <div className="absolute top-4 right-4 z-0 opacity-30">
            <Calendar size={60} />
          </div>
        </div>

        <div className="bg-[#dd4b39] rounded-sm text-white relative overflow-hidden shadow-sm">
          <div className="p-4 z-10 relative">
            <h3 className="text-4xl font-bold mb-2">75.4%</h3>
            <p className="text-sm font-medium">ความครอบคลุมในพื้นที่</p>
            <p className="text-xs mt-1">เป้าหมาย 80%</p>
          </div>
          <div className="absolute top-4 right-4 z-0 opacity-30">
            <ShieldCheck size={60} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        {/* Chart 1: Vaccine Types */}
        <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#00a65a]">
          <div className="p-3 border-b border-gray-100">
            <h3 className="text-sm font-bold text-[#333]">สัดส่วนชนิดวัคซีนที่ให้บริการ</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <ProgressBar label="Influenza (ไข้หวัดใหญ่)" value={4500} total={12450} color="bg-[#00a65a]" />
              <ProgressBar label="COVID-19 (Moderna/Pfizer)" value={3200} total={12450} color="bg-[#0073b7]" />
              <ProgressBar label="HPV (มะเร็งปากมดลูก)" value={2100} total={12450} color="bg-[#f39c12]" />
              <ProgressBar label="HBV (ไวรัสตับอักเสบบี)" value={1500} total={12450} color="bg-[#dd4b39]" />
              <ProgressBar label="อื่นๆ" value={1150} total={12450} color="bg-[#605ca8]" />
            </div>
          </div>
        </div>

        {/* Chart 2: Target Groups */}
        <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#0073b7]">
          <div className="p-3 border-b border-gray-100">
            <h3 className="text-sm font-bold text-[#333]">ความครอบคลุมตามกลุ่มเป้าหมาย</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <ProgressBar label="บุคลากรทางการแพทย์" value={98} total={100} color="bg-[#00a65a]" isPercent />
              <ProgressBar label="ผู้สูงอายุ (60 ปีขึ้นไป)" value={82} total={100} color="bg-[#0073b7]" isPercent />
              <ProgressBar label="ผู้มีโรคประจำตัว 7 กลุ่มโรค" value={75} total={100} color="bg-[#f39c12]" isPercent />
              <ProgressBar label="หญิงตั้งครรภ์" value={45} total={100} color="bg-[#dd4b39]" isPercent />
              <ProgressBar label="ประชาชนทั่วไป" value={68} total={100} color="bg-[#605ca8]" isPercent />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#f39c12]">
        <div className="p-3 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-bold text-[#333]">รายการฉีดวัคซีนล่าสุด (วันนี้)</h3>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">อัปเดต Real-time</span>
        </div>
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-[#333]">
                <th className="py-3 px-4 text-left font-semibold">เวลา</th>
                <th className="py-3 px-4 text-left font-semibold">HN / ชื่อ-สกุล</th>
                <th className="py-3 px-4 text-left font-semibold">ชนิดวัคซีน</th>
                <th className="py-3 px-4 text-left font-semibold">เข็มที่</th>
                <th className="py-3 px-4 text-left font-semibold">Lot No.</th>
                <th className="py-3 px-4 text-left font-semibold">ผู้ให้บริการ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-[#555]">10:45</td>
                <td className="py-3 px-4 text-[#555]"><span className="font-bold">HN-66089</span> <br/><span className="text-xs">นางสมศรี ดีใจ</span></td>
                <td className="py-3 px-4 text-[#555] font-medium">Influenza (Vaxigrip)</td>
                <td className="py-3 px-4 text-[#555]">1</td>
                <td className="py-3 px-4 text-[#777] text-xs">LOT-2026A1</td>
                <td className="py-3 px-4 text-[#555]">พยบ. วิไลวรรณ</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50">
                <td className="py-3 px-4 text-[#555]">10:30</td>
                <td className="py-3 px-4 text-[#555]"><span className="font-bold">HN-65012</span> <br/><span className="text-xs">นายวิชาญ ชาญชัย</span></td>
                <td className="py-3 px-4 text-[#555] font-medium">COVID-19 (Moderna)</td>
                <td className="py-3 px-4 text-[#555]">4 (Booster)</td>
                <td className="py-3 px-4 text-[#777] text-xs">MOD-9982X</td>
                <td className="py-3 px-4 text-[#555]">พยบ. สมร</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 text-[#555]">10:15</td>
                <td className="py-3 px-4 text-[#555]"><span className="font-bold">HN-66105</span> <br/><span className="text-xs">ด.ญ. มาลี สีสด</span></td>
                <td className="py-3 px-4 text-[#555] font-medium">HPV (Gardasil)</td>
                <td className="py-3 px-4 text-[#555]">2</td>
                <td className="py-3 px-4 text-[#777] text-xs">HPV-4451B</td>
                <td className="py-3 px-4 text-[#555]">พยบ. วิไลวรรณ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ProgressBar({ label, value, total, color, isPercent = false }: any) {
  const percentage = isPercent ? value : Math.round((value / total) * 100);
  const displayValue = isPercent ? `${value}%` : `${value.toLocaleString()} Dose (${percentage}%)`;

  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className="font-bold text-[#333]">{label}</span>
        <span className="text-[#777]">{displayValue}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
