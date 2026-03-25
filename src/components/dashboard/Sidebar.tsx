import React from 'react';
import { Home, Folder, User, Users, Stethoscope, Activity, Ambulance, Syringe, ShieldAlert, HeartPulse, Accessibility, Beaker, FileText, Search, BookOpen, ChevronLeft, Target, Server, FileSpreadsheet } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface SidebarProps {
  currentView?: string;
  setCurrentView?: (view: string) => void;
}

export function Sidebar({ currentView = 'dashboard', setCurrentView = () => {} }: SidebarProps) {
  return (
    <div className="flex flex-col w-[230px] bg-[#222d32] text-[#b8c7ce] h-screen overflow-y-auto text-sm shrink-0">
      {/* Logo Area */}
      <div className="h-[50px] bg-[#367fa9] text-white flex items-center justify-center text-lg font-bold shrink-0">
        {/* Empty or Logo */}
      </div>
      
      {/* User Panel */}
      <div className="flex items-center p-4 gap-3">
        <div className="h-10 w-10 rounded-full bg-slate-400 flex items-center justify-center text-white overflow-hidden shrink-0">
          <User className="h-6 w-6" />
        </div>
        <div>
          <p className="text-white font-medium">Guest</p>
          <p className="text-xs flex items-center gap-1 mt-1">
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            User Offline
          </p>
        </div>
      </div>
      
      {/* Sidebar Menu */}
      <div className="px-4 py-2 text-xs text-[#4b646f] uppercase bg-[#1a2226]">เมนูหลัก</div>
      
      <ul className="flex flex-col pb-4">
        <SidebarItem 
          icon={<Home size={16} />} 
          label="Home Dashboard" 
          active={currentView === 'dashboard'} 
          onClick={() => setCurrentView('dashboard')}
        />
        
        {/* New Management Section */}
        <li className="flex flex-col mt-2">
          <div className="px-4 py-2 text-xs text-[#4b646f] uppercase bg-[#1a2226]">ระบบบริหารจัดการ</div>
          <SidebarItem 
            icon={<Target size={16} />} 
            label="KPI ยุทธศาสตร์องค์กร" 
            active={currentView === 'strategic-kpi'} 
            onClick={() => setCurrentView('strategic-kpi')}
          />
          <SidebarItem 
            icon={<Server size={16} />} 
            label="Monitor ระบบ Backoffice" 
            active={currentView === 'backoffice'} 
            onClick={() => setCurrentView('backoffice')}
          />
          <SidebarItem 
            icon={<FileSpreadsheet size={16} />} 
            label="ระบบขอ/ส่งออกรายงาน" 
            active={currentView === 'reports'} 
            onClick={() => setCurrentView('reports')}
          />
        </li>

        <li className="flex flex-col mt-2">
          <div className="flex items-center justify-between px-4 py-3 hover:bg-[#1e282c] hover:text-white cursor-pointer border-l-4 border-transparent transition-colors">
            <div className="flex items-center gap-2">
              <Folder size={16} />
              <span>ข้อมูลและสถิติ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#3c8dbc] text-white text-[10px] px-1.5 py-0.5 rounded">10</span>
              <ChevronLeft size={14} className="-rotate-90" />
            </div>
          </div>
          <ul className="bg-[#2c3b41] py-1">
            <SubMenuItem icon={<User size={14} />} label="ผู้รับบริการ" />
            <SubMenuItem icon={<Users size={14} />} label="ผู้ป่วยใน" badge="9" badgeColor="bg-red-500" />
            <SubMenuItem icon={<Stethoscope size={14} />} label="ทันตกรรม" />
            <SubMenuItem icon={<Activity size={14} />} label="แพทย์แผนไทย" />
            <SubMenuItem icon={<Ambulance size={14} />} label="อุบัติเหตุและฉุกเฉิน" />
            <SubMenuItem icon={<Syringe size={14} />} label="ผ่าตัดและวิสัญญี" />
            <SubMenuItem icon={<ShieldAlert size={14} />} label="โรคติดต่อ CD" />
            <SubMenuItem icon={<HeartPulse size={14} />} label="โรคไม่ติดต่อ NCD" />
            <SubMenuItem icon={<Accessibility size={14} />} label="กายภาพบำบัด" />
            <SubMenuItem icon={<Beaker size={14} />} label="ไตเทียม" />
            <SubMenuItem icon={<FileText size={14} />} label="ชันสูตรและ X-Ray" />
          </ul>
        </li>
        
        <SidebarItem icon={<Search size={16} />} label="ค้นผล LAB" />
        <SidebarItem icon={<Search size={16} />} label="ข้อมูล Vaccine" />
        
        <li className="flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 hover:bg-[#1e282c] hover:text-white cursor-pointer border-l-4 border-transparent transition-colors">
            <div className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>คู่มือใช้งาน</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[#3c8dbc] text-white text-[10px] px-1.5 py-0.5 rounded">4</span>
              <ChevronLeft size={14} />
            </div>
          </div>
        </li>
      </ul>

      <div className="mt-auto p-4 text-xs text-[#4b646f]">
        <p>« Create by GHOST »</p>
        <p className="mt-1">จำนวนผู้เข้าชม</p>
        <p className="text-white font-mono text-lg tracking-widest mt-1">1 5 3 3 6</p>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick?: () => void }) {
  return (
    <li 
      onClick={onClick}
      className={cn(
        "flex items-center px-4 py-3 hover:bg-[#1e282c] hover:text-white cursor-pointer border-l-4 transition-colors",
        active ? "border-[#3c8dbc] bg-[#1e282c] text-white" : "border-transparent"
      )}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
    </li>
  );
}

function SubMenuItem({ icon, label, badge, badgeColor }: { icon: React.ReactNode, label: string, badge?: string, badgeColor?: string }) {
  return (
    <li className="flex items-center justify-between px-4 py-2 pl-8 hover:text-white cursor-pointer text-xs transition-colors">
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      {badge && <span className={cn("text-white text-[10px] px-1.5 py-0.5 rounded", badgeColor)}>{badge}</span>}
    </li>
  );
}
