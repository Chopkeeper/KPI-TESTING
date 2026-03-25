import React from 'react';
import { Menu, User, Settings, Bell, Users } from 'lucide-react';

export function Header() {
  return (
    <header className="flex h-[50px] items-center justify-between bg-[#3c8dbc] px-4 text-white shrink-0">
      <div className="flex items-center">
        <button className="hover:bg-[#367fa9] p-2 rounded transition-colors">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <div className="flex items-center text-sm gap-1">
        <div className="hidden md:flex items-center mr-4 text-[10px] bg-red-500/20 px-2 py-1 rounded border border-red-500/30 text-red-100">
          ไม่สามารถเชื่อมต่อฐานข้อมูลได้ : SQLSTATE[HY000] [1045] Access denied for user 'sa'@'localhost' (using password: YES)
        </div>
        <button className="hover:bg-[#367fa9] p-2 rounded flex items-center gap-1 relative transition-colors">
          <Users className="h-4 w-4" />
          <span className="bg-green-500 text-white text-[9px] px-1 rounded absolute top-1 right-0">0</span>
        </button>
        <button className="hover:bg-[#367fa9] p-2 rounded relative transition-colors">
          <Bell className="h-4 w-4" />
        </button>
        <button className="hover:bg-[#367fa9] p-2 rounded flex items-center gap-2 transition-colors">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">เข้าระบบสมาชิก</span>
        </button>
        <button className="hover:bg-[#367fa9] p-2 rounded transition-colors">
          <Settings className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
