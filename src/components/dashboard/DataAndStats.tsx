import React from 'react';
import { Stethoscope, Bed, Leaf, FileText, X, Ambulance, Accessibility, Activity, Pill, FlaskConical, ArrowRightLeft, Heart, PlusSquare, Candy, Brain, Wind, Droplet, Coins, Baby, UserCircle, HeartPulse, Home } from 'lucide-react';

export function DataAndStats() {
  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      {/* Page Header */}
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal flex items-baseline gap-2">
          MIS 4.0 Dashboard <span className="text-sm text-[#777]">โรงพยาบาลเชียรใหญ่</span>
        </h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <Home size={12} /> Home <span className="mx-1">&gt;</span> Dashboard
        </div>
      </div>

      {/* Top 4 Large Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <LargeCard 
          bg="bg-[#0073b7]" 
          number="20" 
          title="ผู้รับบริการวันนี้" 
          subtitle="(เดือนนี้ 4,845 คน / 6,366 ครั้ง)" 
          icon={<Stethoscope size={60} className="text-black/20" />} 
        />
        <LargeCard 
          bg="bg-[#f012be]" 
          number="0" 
          title="Admit วันนี้" 
          subtitle="(เดือนนี้ 274 คน / 289 ครั้ง)" 
          icon={<Bed size={60} className="text-black/20" />} 
        />
        <LargeCard 
          bg="bg-[#3d9970]" 
          number="0" 
          title="แพทย์แผนไทย วันนี้" 
          subtitle="(เดือนนี้ 126 คน / 137 ครั้ง)" 
          icon={<Leaf size={60} className="text-black/20" />} 
        />
        <LargeCard 
          bg="bg-[#39cccc]" 
          number="0" 
          title="ทันตกรรม วันนี้" 
          subtitle="(เดือนนี้ 566 คน / 689 ครั้ง)" 
          icon={<FileText size={60} className="text-black/20" />} 
        />
      </div>

      {/* Middle Grid of Small Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {/* Row 1 */}
        <SmallCard bg="bg-[#39cccc]" icon={<X size={30} className="text-white" />} title="วันนี้ 0" subtitle="X-RAY" desc="เดือนนี้ 495 คน / 532 ครั้ง" />
        <SmallCard bg="bg-[#dd4b39]" icon={<Ambulance size={30} className="text-white" />} title="วันนี้ 0" subtitle="อุบัติเหตุ" desc="เดือนนี้ 161 คน / 164 ครั้ง" />
        <SmallCard bg="bg-[#001f3f]" icon={<Accessibility size={30} className="text-white" />} title="วันนี้ 0" subtitle="กายภาพบำบัด" desc="เดือนนี้ 0 คน / 0 ครั้ง" />
        <SmallCard bg="bg-[#ff851b]" icon={<UserCircle size={30} className="text-white" />} title="วันนี้ 0" subtitle="ผู้ป่วยนอกผ่าตัด" desc="เดือนนี้ 0 คน / 0 ครั้ง" />

        {/* Row 2 */}
        <SmallCard bg="bg-[#ff851b]" icon={<Pill size={30} className="text-white" />} title="วันนี้ 0" subtitle="ห้องยา" desc="เดือนนี้ 0 คน / 0 ครั้ง" />
        <SmallCard bg="bg-[#d81b60]" icon={<FlaskConical size={30} className="text-white" />} title="วันนี้ 0" subtitle="LAB" desc="เดือนนี้ 1,806 คน / 1,971 ครั้ง" />
        <SmallCard bg="bg-[#dd4b39]" icon={<ArrowRightLeft size={30} className="text-white" />} title="วันนี้ 0" subtitle="REFER OUT" desc="เดือนนี้ 113 คน / 114 ครั้ง" />
        <SmallCard bg="bg-[#0073b7]" icon={<Heart size={30} className="text-white" />} title="วันนี้ 1" subtitle="ผู้ป่วยเรื้อรัง" desc="เดือนนี้ 1,020 คน / 1,343 ครั้ง" />

        {/* Row 3 */}
        <SmallCard bg="bg-[#00a65a]" icon={<PlusSquare size={30} className="text-white" />} title="วันนี้ 0" subtitle="ความดัน" desc="เดือนนี้ 543 คน / 546 ครั้ง" />
        <SmallCard bg="bg-[#0073b7]" icon={<Candy size={30} className="text-white" />} title="วันนี้ 0" subtitle="เบาหวาน" desc="เดือนนี้ 446 คน / 454 ครั้ง" />
        <SmallCard bg="bg-[#605ca8]" icon={<Brain size={30} className="text-white" />} title="วันนี้ 0" subtitle="จิตเวช" desc="เดือนนี้ 0 คน / 0 ครั้ง" />
        <SmallCard bg="bg-[#39cccc]" icon={<Wind size={30} className="text-white" />} title="วันนี้ 0" subtitle="ARI" desc="เดือนนี้ 9 คน / 9 ครั้ง" />

        {/* Row 4 */}
        <SmallCard bg="bg-[#0073b7]" icon={<Droplet size={30} className="text-white" />} title="วันนี้ 0" subtitle="คลินิกโรคไต" desc="เดือนนี้ 1 คน / 1 ครั้ง" />
        <SmallCard bg="bg-[#dd4b39]" icon={<Ambulance size={30} className="text-white" />} title="วันนี้ 0" subtitle="ER (รวม)" desc="เดือนนี้ 884 คน / 1,024 ครั้ง" />
        <SmallCard bg="bg-[#0073b7]" icon={<Coins size={30} className="text-white" />} title="วันนี้ 0" subtitle="การเงิน" desc="เดือนนี้ 1,412 คน / 1,753 ครั้ง" />
        <SmallCard bg="bg-[#00a65a]" icon={<Baby size={30} className="text-white" />} title="วันนี้ 0" subtitle="สุขภาพเด็ก" desc="เดือนนี้ 0 คน / 0 ครั้ง" />

        {/* Row 5 */}
        <SmallCard bg="bg-[#605ca8]" icon={<UserCircle size={30} className="text-white" />} title="วันนี้ 0" subtitle="ฝากครรภ์" desc="เดือนนี้ 0 คน / 0 ครั้ง" />
        <SmallCard bg="bg-[#f39c12]" icon={<HeartPulse size={30} className="text-white" />} title="วันนี้ 0" subtitle="ผู้ป่วยผ่าตัด" desc="เดือนนี้ 0 คน / 0 ครั้ง (OPD: 0 / IPD: 0)" />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Column */}
        <div className="lg:col-span-4">
          <div className="bg-[#dd4b39] text-white p-4 flex items-center gap-4 rounded-sm shadow-sm h-full">
            <div className="bg-white/20 p-3 rounded-full shrink-0">
              <Bed size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold">สถิติผู้ป่วยในวันนี้</h3>
              <p className="text-sm">จำนวนเตียงทั้งหมด 70 เตียง</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <WardCard title="หอผู้ป่วยใน 1" subtitle="Admit 24 / 30 (ว่าง 6)" desc="ครองเตียง 80.00%" progress={80} />
            <WardCard title="หอผู้ป่วยใน 2" subtitle="Admit 28 / 30 (ว่าง 2)" desc="ครองเตียง 93.33%" progress={93.33} />
          </div>
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
    <div className="flex bg-white shadow-sm rounded-sm overflow-hidden h-[80px]">
      <div className={`${bg} w-20 flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div className="p-3 flex-1 flex flex-col justify-center">
        <h4 className="text-sm font-bold text-[#333] leading-tight">{title}</h4>
        <p className="text-sm text-[#333] leading-tight mt-0.5">{subtitle}</p>
        <p className="text-xs text-[#777] mt-1">{desc}</p>
      </div>
    </div>
  );
}

function WardCard({ title, subtitle, desc, progress }: any) {
  return (
    <div className="bg-[#f39c12] text-white p-3 rounded-sm shadow-sm flex items-start gap-3 h-full">
      <Bed size={32} className="text-white/80 shrink-0 mt-1" />
      <div className="flex-1 w-full">
        <h4 className="text-xs">{title}</h4>
        <p className="font-bold text-sm mt-0.5">{subtitle}</p>
        <div className="w-full bg-black/20 h-0.5 mt-2 mb-1">
          <div className="bg-white h-0.5" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
}
