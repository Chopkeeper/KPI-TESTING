import React, { useState } from 'react';
import { Search, Syringe, User, FileText, Download } from 'lucide-react';

export function VaccineData() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data
  const allData = [
    { id: 1, date: '24/03/2026', hn: 'HN-66089', cid: '1-1020-XXXXX-XX-1', name: 'นางสมศรี ดีใจ', vaccine: 'Influenza (Vaxigrip)', dose: 1, lot: 'LOT-2026A1', provider: 'พยบ. วิไลวรรณ' },
    { id: 2, date: '24/03/2026', hn: 'HN-65012', cid: '3-1005-XXXXX-XX-2', name: 'นายวิชาญ ชาญชัย', vaccine: 'COVID-19 (Moderna)', dose: 4, lot: 'MOD-9982X', provider: 'พยบ. สมร' },
    { id: 3, date: '24/03/2026', hn: 'HN-66105', cid: '1-1011-XXXXX-XX-3', name: 'ด.ญ. มาลี สีสด', vaccine: 'HPV (Gardasil)', dose: 2, lot: 'HPV-4451B', provider: 'พยบ. วิไลวรรณ' },
    { id: 4, date: '23/03/2026', hn: 'HN-64002', cid: '3-1022-XXXXX-XX-4', name: 'นายสมชาย ใจดี', vaccine: 'HBV (ไวรัสตับอักเสบบี)', dose: 3, lot: 'HBV-1122C', provider: 'พยบ. สมร' },
    { id: 5, date: '22/03/2026', hn: 'HN-66089', cid: '1-1020-XXXXX-XX-1', name: 'นางสมศรี ดีใจ', vaccine: 'COVID-19 (Pfizer)', dose: 3, lot: 'PFZ-7761A', provider: 'พยบ. วิไลวรรณ' },
  ];

  const filteredData = allData.filter(item => 
    item.name.includes(searchTerm) || 
    item.hn.includes(searchTerm) || 
    item.cid.includes(searchTerm) ||
    item.vaccine.includes(searchTerm)
  );

  // Calculate stats for the searched person if searching by name/HN
  const isPersonSearch = searchTerm.length > 2 && filteredData.length > 0 && 
    (filteredData[0].name.includes(searchTerm) || filteredData[0].hn.includes(searchTerm));
  
  const personStats = isPersonSearch ? {
    name: filteredData[0].name,
    hn: filteredData[0].hn,
    totalDoses: filteredData.length
  } : null;

  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal flex items-center gap-2">
          <FileText size={24} className="text-[#0073b7]" />
          ข้อมูลประวัติการฉีดวัคซีน
        </h1>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#3c8dbc] mb-4">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-sm font-bold text-[#333] flex items-center gap-2">
            <Search size={16} /> ค้นหาประวัติการรับวัคซีน
          </h3>
          <button className="text-xs bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded shadow-sm flex items-center gap-1 transition-colors">
            <Download size={12} /> ส่งออก Excel
          </button>
        </div>
        <div className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-sm pl-10 pr-3 py-2 text-sm focus:border-[#3c8dbc] outline-none"
                placeholder="ค้นหาด้วย ชื่อ-นามสกุล, HN, เลขบัตรประชาชน หรือ ชื่อวัคซีน..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="bg-[#3c8dbc] text-white px-6 py-2 rounded-sm text-sm font-bold hover:bg-[#367fa9] transition-colors">
              ค้นหา
            </button>
          </div>
        </div>
      </div>

      {/* Person Summary (Shows only when searching for a specific person) */}
      {personStats && (
        <div className="bg-blue-50 border border-blue-200 rounded-sm p-4 mb-4 flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <User size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-800">{personStats.name} <span className="text-sm font-normal text-blue-600 ml-2">(HN: {personStats.hn})</span></h3>
            <p className="text-sm text-blue-700 mt-1">
              ประวัติการรับวัคซีนทั้งหมด: <span className="font-bold text-lg">{personStats.totalDoses}</span> เข็ม
            </p>
          </div>
        </div>
      )}

      {/* Results Table */}
      <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#00a65a]">
        <div className="p-0 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-[#333]">
                <th className="py-3 px-4 text-left font-semibold">วันที่ฉีด</th>
                <th className="py-3 px-4 text-left font-semibold">HN / เลขบัตร ปชช.</th>
                <th className="py-3 px-4 text-left font-semibold">ชื่อ-สกุล ผู้รับวัคซีน</th>
                <th className="py-3 px-4 text-left font-semibold">ชื่อวัคซีน</th>
                <th className="py-3 px-4 text-center font-semibold">เข็มที่</th>
                <th className="py-3 px-4 text-left font-semibold">Lot No.</th>
                <th className="py-3 px-4 text-left font-semibold">ผู้ให้บริการ</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 text-[#555]">{row.date}</td>
                    <td className="py-3 px-4 text-[#555]">
                      <div className="font-bold text-[#3c8dbc]">{row.hn}</div>
                      <div className="text-xs text-gray-500">{row.cid}</div>
                    </td>
                    <td className="py-3 px-4 text-[#555] font-medium">{row.name}</td>
                    <td className="py-3 px-4 text-[#555]">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{row.vaccine}</span>
                    </td>
                    <td className="py-3 px-4 text-center font-bold text-[#555]">{row.dose}</td>
                    <td className="py-3 px-4 text-[#777] text-xs font-mono">{row.lot}</td>
                    <td className="py-3 px-4 text-[#555] text-xs">{row.provider}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-gray-500">
                    ไม่พบข้อมูลที่ค้นหา
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="p-3 border-t border-gray-100 text-xs text-gray-500 flex justify-between items-center">
          <span>แสดง {filteredData.length} รายการ</span>
          <div className="flex gap-1">
            <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>ก่อนหน้า</button>
            <button className="px-2 py-1 border border-gray-300 rounded bg-[#3c8dbc] text-white">1</button>
            <button className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50" disabled>ถัดไป</button>
          </div>
        </div>
      </div>
    </div>
  );
}
