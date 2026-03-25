import React, { useState } from 'react';
import { Search, Server, Activity, FileText, CheckCircle, XCircle, Clock, RefreshCw } from 'lucide-react';

export function LabSearch() {
  const [isSearching, setIsSearching] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useState({ hn: '', name: '', date: '' });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setHasSearched(false);
    
    // Simulate API call to LIS Server
    setTimeout(() => {
      setIsSearching(false);
      setHasSearched(true);
    }, 1500);
  };

  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal flex items-center gap-2">
          <FileText size={24} className="text-[#3c8dbc]" />
          ระบบค้นหาผล LAB (LIS Integration)
        </h1>
        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold border border-green-200 shadow-sm">
          <Server size={14} />
          <span>LIS Server: Connected (192.168.1.105)</span>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1"></span>
        </div>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#3c8dbc] mb-4">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-sm font-bold text-[#333] flex items-center gap-2">
            <Search size={16} /> ค้นหาข้อมูลจากระบบปฏิบัติการห้องชันสูตร
          </h3>
        </div>
        <div className="p-4">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-bold text-[#333] mb-1">HN (รหัสผู้ป่วย)</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:border-[#3c8dbc] outline-none"
                placeholder="เช่น 6600123"
                value={searchParams.hn}
                onChange={(e) => setSearchParams({...searchParams, hn: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#333] mb-1">ชื่อ-นามสกุล</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:border-[#3c8dbc] outline-none"
                placeholder="ชื่อ หรือ นามสกุล"
                value={searchParams.name}
                onChange={(e) => setSearchParams({...searchParams, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#333] mb-1">วันที่สั่งตรวจ</label>
              <input 
                type="date" 
                className="w-full border border-gray-300 rounded-sm px-3 py-2 text-sm focus:border-[#3c8dbc] outline-none"
                value={searchParams.date}
                onChange={(e) => setSearchParams({...searchParams, date: e.target.value})}
              />
            </div>
            <div>
              <button 
                type="submit" 
                disabled={isSearching}
                className="w-full bg-[#3c8dbc] text-white rounded-sm px-4 py-2 text-sm font-bold hover:bg-[#367fa9] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSearching ? <RefreshCw size={16} className="animate-spin" /> : <Search size={16} />}
                {isSearching ? 'กำลังดึงข้อมูลจาก LIS...' : 'ค้นหาผล LAB'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Results Area */}
      {hasSearched && !isSearching && (
        <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#00a65a]">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-sm font-bold text-[#333]">ผลการค้นหา (ดึงข้อมูลล่าสุดเมื่อ {new Date().toLocaleTimeString()})</h3>
            <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded border border-gray-300 flex items-center gap-1">
              <FileText size={12} /> พิมพ์ใบรายงานผล
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-[#333]">
                  <th className="py-3 px-4 text-left font-semibold">วันที่/เวลา</th>
                  <th className="py-3 px-4 text-left font-semibold">Order No.</th>
                  <th className="py-3 px-4 text-left font-semibold">HN / ชื่อ-สกุล</th>
                  <th className="py-3 px-4 text-left font-semibold">รายการตรวจ (Test Name)</th>
                  <th className="py-3 px-4 text-left font-semibold">ผลตรวจ (Result)</th>
                  <th className="py-3 px-4 text-left font-semibold">ค่าอ้างอิง (Normal Range)</th>
                  <th className="py-3 px-4 text-center font-semibold">สถานะ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-[#555]">24/03/2026 08:30</td>
                  <td className="py-3 px-4 text-[#3c8dbc] font-mono">LAB-260324-001</td>
                  <td className="py-3 px-4 text-[#555]">
                    <div className="font-bold">HN-660123</div>
                    <div className="text-xs text-gray-500">นายสมชาย ใจดี</div>
                  </td>
                  <td className="py-3 px-4 text-[#555]">Fasting Blood Sugar (FBS)</td>
                  <td className="py-3 px-4 font-bold text-red-600">125 mg/dL <span className="text-xs">↑</span></td>
                  <td className="py-3 px-4 text-[#777] text-xs">70 - 100 mg/dL</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Approved</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-[#555]">24/03/2026 08:30</td>
                  <td className="py-3 px-4 text-[#3c8dbc] font-mono">LAB-260324-001</td>
                  <td className="py-3 px-4 text-[#555]">
                    <div className="font-bold">HN-660123</div>
                    <div className="text-xs text-gray-500">นายสมชาย ใจดี</div>
                  </td>
                  <td className="py-3 px-4 text-[#555]">HbA1c</td>
                  <td className="py-3 px-4 font-bold text-[#555]">6.2 %</td>
                  <td className="py-3 px-4 text-[#777] text-xs">4.8 - 6.4 %</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">Approved</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-[#555]">24/03/2026 09:15</td>
                  <td className="py-3 px-4 text-[#3c8dbc] font-mono">LAB-260324-042</td>
                  <td className="py-3 px-4 text-[#555]">
                    <div className="font-bold">HN-660123</div>
                    <div className="text-xs text-gray-500">นายสมชาย ใจดี</div>
                  </td>
                  <td className="py-3 px-4 text-[#555]">Creatinine</td>
                  <td className="py-3 px-4 font-bold text-gray-400 italic">กำลังตรวจวิเคราะห์...</td>
                  <td className="py-3 px-4 text-[#777] text-xs">0.67 - 1.17 mg/dL</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold">In Process</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
