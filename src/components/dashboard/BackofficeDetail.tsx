import React, { useState } from 'react';
import { FileText, Calculator, Wallet, Package, Wrench, Users, Server, Activity, CheckCircle, AlertTriangle, Clock, X, Plus, FileSpreadsheet, BarChart2, Settings } from 'lucide-react';

interface BackofficeDetailProps {
  dept: string;
}

export function BackofficeDetail({ dept }: BackofficeDetailProps) {
  const [activeAction, setActiveAction] = useState<{id: string, label: string, type: string} | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleActionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast(`ดำเนินการ "${activeAction?.label}" สำเร็จแล้ว`);
    setActiveAction(null);
  };

  const getDeptInfo = () => {
    switch (dept) {
      case 'admin':
        return {
          title: 'การจัดการบริหาร (Administration)',
          icon: <FileText size={24} className="text-[#3c8dbc]" />,
          color: 'border-[#3c8dbc]',
          stats: [
            { label: 'เอกสารรออนุมัติ', value: '12', color: 'text-orange-500' },
            { label: 'สัญญาที่กำลังจะหมดอายุ', value: '3', color: 'text-red-500' },
            { label: 'ประกาศองค์กรล่าสุด', value: '5', color: 'text-blue-500' },
          ],
          actions: [
            { id: 'admin-1', label: 'สร้างประกาศใหม่', icon: <Plus size={16} />, type: 'form' },
            { id: 'admin-2', label: 'ตรวจสอบเอกสาร', icon: <FileSpreadsheet size={16} />, type: 'table' },
            { id: 'admin-3', label: 'รายงานการประชุม', icon: <BarChart2 size={16} />, type: 'report' },
            { id: 'admin-4', label: 'ตั้งค่าแผนก', icon: <Settings size={16} />, type: 'settings' },
          ]
        };
      case 'accounting':
        return {
          title: 'การบัญชี (Accounting)',
          icon: <Calculator size={24} className="text-[#00a65a]" />,
          color: 'border-[#00a65a]',
          stats: [
            { label: 'รายการรอตรวจสอบ', value: '45', color: 'text-orange-500' },
            { label: 'ปิดงบประจำเดือน', value: '80%', color: 'text-green-500' },
            { label: 'เอกสารเบิกจ่าย', value: '128', color: 'text-blue-500' },
          ],
          actions: [
            { id: 'acc-1', label: 'บันทึกรายการบัญชี', icon: <Plus size={16} />, type: 'form' },
            { id: 'acc-2', label: 'ตรวจสอบเอกสารเบิกจ่าย', icon: <FileSpreadsheet size={16} />, type: 'table' },
            { id: 'acc-3', label: 'สรุปงบการเงิน', icon: <BarChart2 size={16} />, type: 'report' },
            { id: 'acc-4', label: 'ตั้งค่าบัญชี', icon: <Settings size={16} />, type: 'settings' },
          ]
        };
      case 'finance':
        return {
          title: 'การเงิน (Finance)',
          icon: <Wallet size={24} className="text-[#f39c12]" />,
          color: 'border-[#f39c12]',
          stats: [
            { label: 'รายรับวันนี้', value: '฿125,400', color: 'text-green-500' },
            { label: 'รอการชำระเงิน', value: '15', color: 'text-orange-500' },
            { label: 'สถานะสภาพคล่อง', value: 'ปกติ', color: 'text-blue-500' },
          ],
          actions: [
            { id: 'fin-1', label: 'สร้างใบเสร็จรับเงิน', icon: <Plus size={16} />, type: 'form' },
            { id: 'fin-2', label: 'รายการรอชำระ', icon: <FileSpreadsheet size={16} />, type: 'table' },
            { id: 'fin-3', label: 'รายงานรายรับ-รายจ่าย', icon: <BarChart2 size={16} />, type: 'report' },
            { id: 'fin-4', label: 'ตั้งค่าการเงิน', icon: <Settings size={16} />, type: 'settings' },
          ]
        };
      case 'inventory':
        return {
          title: 'งานพัสดุ (Inventory & Order Management)',
          icon: <Package size={24} className="text-[#dd4b39]" />,
          color: 'border-[#dd4b39]',
          stats: [
            { label: 'วัสดุใกล้หมดสต็อก', value: '8', color: 'text-red-500' },
            { label: 'ใบสั่งซื้อ (PO) รอดำเนินการ', value: '24', color: 'text-orange-500' },
            { label: 'ความคืบหน้า ITA', value: '92%', color: 'text-green-500' },
          ],
          actions: [
            { id: 'inv-1', label: 'สร้างใบสั่งซื้อ (PO)', icon: <Plus size={16} />, type: 'form' },
            { id: 'inv-2', label: 'ตรวจสอบสต็อกคงเหลือ', icon: <FileSpreadsheet size={16} />, type: 'table' },
            { id: 'inv-3', label: 'รายงานการเบิกจ่าย', icon: <BarChart2 size={16} />, type: 'report' },
            { id: 'inv-4', label: 'ตั้งค่าคลังสินค้า', icon: <Settings size={16} />, type: 'settings' },
          ]
        };
      case 'maintenance':
        return {
          title: 'ฝ่ายปฏิบัติการซ่อมบำรุง (Maintenance)',
          icon: <Wrench size={24} className="text-[#605ca8]" />,
          color: 'border-[#605ca8]',
          stats: [
            { label: 'แจ้งซ่อมรอดำเนินการ', value: '6', color: 'text-red-500' },
            { label: 'กำลังซ่อมแซม', value: '4', color: 'text-orange-500' },
            { label: 'PM ตามแผนเดือนนี้', value: '85%', color: 'text-green-500' },
          ],
          actions: [
            { id: 'mtn-1', label: 'เปิดใบแจ้งซ่อม', icon: <Plus size={16} />, type: 'form' },
            { id: 'mtn-2', label: 'ตารางบำรุงรักษา (PM)', icon: <FileSpreadsheet size={16} />, type: 'table' },
            { id: 'mtn-3', label: 'รายงานประวัติซ่อม', icon: <BarChart2 size={16} />, type: 'report' },
            { id: 'mtn-4', label: 'ตั้งค่าช่างผู้รับผิดชอบ', icon: <Settings size={16} />, type: 'settings' },
          ]
        };
      case 'hr':
        return {
          title: 'ทรัพยากรบุคคล (HR)',
          icon: <Users size={24} className="text-[#00c0ef]" />,
          color: 'border-[#00c0ef]',
          stats: [
            { label: 'บุคลากรมาปฏิบัติงาน', value: '412/450', color: 'text-green-500' },
            { label: 'คำขอลาพักผ่อน', value: '15', color: 'text-orange-500' },
            { label: 'ประเมินผลงาน', value: 'กำลังเปิด', color: 'text-blue-500' },
          ],
          actions: [
            { id: 'hr-1', label: 'เพิ่มบุคลากรใหม่', icon: <Plus size={16} />, type: 'form' },
            { id: 'hr-2', label: 'อนุมัติวันลา', icon: <FileSpreadsheet size={16} />, type: 'table' },
            { id: 'hr-3', label: 'รายงานการเข้างาน', icon: <BarChart2 size={16} />, type: 'report' },
            { id: 'hr-4', label: 'ตั้งค่าสวัสดิการ', icon: <Settings size={16} />, type: 'settings' },
          ]
        };
      default:
        return {
          title: 'Unknown Department',
          icon: <Server size={24} />,
          color: 'border-gray-500',
          stats: [],
          actions: []
        };
    }
  };

  const info = getDeptInfo();

  // Render different modal content based on action type
  const renderModalContent = () => {
    if (!activeAction) return null;

    if (activeAction.type === 'form') {
      return (
        <form onSubmit={handleActionSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">หัวข้อ / รายการ</label>
            <input type="text" required className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#3c8dbc]" placeholder="ระบุข้อมูล..." />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">รายละเอียดเพิ่มเติม</label>
            <textarea rows={3} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#3c8dbc]" placeholder="ระบุรายละเอียด..."></textarea>
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">วันที่ดำเนินการ</label>
            <input type="date" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#3c8dbc]" />
          </div>
          <div className="pt-4 flex justify-end gap-2 border-t border-gray-100">
            <button type="button" onClick={() => setActiveAction(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-medium transition-colors">ยกเลิก</button>
            <button type="submit" className="px-4 py-2 bg-[#3c8dbc] hover:bg-[#367fa9] text-white rounded text-sm font-medium transition-colors">บันทึกข้อมูล</button>
          </div>
        </form>
      );
    }

    if (activeAction.type === 'table') {
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <input type="text" placeholder="ค้นหารายการ..." className="border border-gray-300 rounded px-3 py-1.5 text-sm focus:outline-none focus:border-[#3c8dbc]" />
            <button type="button" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-sm transition-colors">ส่งออก Excel</button>
          </div>
          <div className="overflow-x-auto border border-gray-200 rounded">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-2">รหัสรายการ</th>
                  <th className="px-4 py-2">รายละเอียด</th>
                  <th className="px-4 py-2">วันที่</th>
                  <th className="px-4 py-2">สถานะ</th>
                  <th className="px-4 py-2 text-center">จัดการ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="hover:bg-gray-50">
                    <td className="px-4 py-2">DOC-2026-{item.toString().padStart(3, '0')}</td>
                    <td className="px-4 py-2">รายการทดสอบระบบ {item}</td>
                    <td className="px-4 py-2">25/03/2026</td>
                    <td className="px-4 py-2"><span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs">รอดำเนินการ</span></td>
                    <td className="px-4 py-2 text-center">
                      <button type="button" onClick={handleActionSubmit} className="text-[#3c8dbc] hover:underline text-xs">ตรวจสอบ</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pt-4 flex justify-end">
            <button type="button" onClick={() => setActiveAction(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-medium transition-colors">ปิดหน้าต่าง</button>
          </div>
        </div>
      );
    }

    if (activeAction.type === 'report') {
      return (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded border border-blue-100 text-center">
              <p className="text-sm text-blue-600 mb-1">ยอดรวมทั้งหมด</p>
              <h4 className="text-2xl font-bold text-blue-800">1,254</h4>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-100 text-center">
              <p className="text-sm text-green-600 mb-1">ดำเนินการแล้วเสร็จ</p>
              <h4 className="text-2xl font-bold text-green-800">89%</h4>
            </div>
          </div>
          <div className="h-48 bg-gray-50 border border-gray-200 rounded flex items-center justify-center text-gray-400">
            [พื้นที่แสดงกราฟสถิติ]
          </div>
          <div className="pt-4 flex justify-end">
            <button type="button" onClick={() => setActiveAction(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-medium transition-colors">ปิดหน้าต่าง</button>
          </div>
        </div>
      );
    }

    // Settings type
    return (
      <form onSubmit={handleActionSubmit} className="space-y-4">
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-3 rounded text-sm mb-4">
          การตั้งค่าในส่วนนี้จะมีผลกับผู้ใช้งานในแผนก <strong>{info.title}</strong> เท่านั้น
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="rounded text-[#3c8dbc] focus:ring-[#3c8dbc]" defaultChecked />
            เปิดใช้งานการแจ้งเตือนผ่าน LINE
          </label>
        </div>
        <div>
          <label className="flex items-center gap-2 text-sm text-gray-700">
            <input type="checkbox" className="rounded text-[#3c8dbc] focus:ring-[#3c8dbc]" defaultChecked />
            อนุญาตให้หัวหน้าแผนกอนุมัติอัตโนมัติ
          </label>
        </div>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1 mt-3">อีเมลสำหรับรับรายงาน</label>
          <input type="email" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#3c8dbc]" defaultValue={`manager@${dept}.local`} />
        </div>
        <div className="pt-4 flex justify-end gap-2 border-t border-gray-100">
          <button type="button" onClick={() => setActiveAction(null)} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-medium transition-colors">ยกเลิก</button>
          <button type="submit" className="px-4 py-2 bg-[#3c8dbc] hover:bg-[#367fa9] text-white rounded text-sm font-medium transition-colors">บันทึกการตั้งค่า</button>
        </div>
      </form>
    );
  };

  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-3 rounded shadow-lg flex items-center gap-2 z-50 animate-in fade-in slide-in-from-top-4">
          <CheckCircle size={18} />
          <span className="text-sm font-medium">{toast}</span>
        </div>
      )}

      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal">{info.title}</h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <Server size={12} /> Backoffice <span className="mx-1">&gt;</span> {dept}
        </div>
      </div>

      <div className={`bg-white shadow-sm rounded-sm border-t-[3px] ${info.color} mb-4`}>
        <div className="p-4 border-b border-gray-100 flex items-center gap-2">
          {info.icon}
          <h2 className="text-lg font-bold text-[#333]">ภาพรวมการทำงาน (Dashboard)</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {info.stats.map((stat, idx) => (
              <div key={idx} className="border border-gray-100 rounded-lg p-6 text-center shadow-sm bg-gray-50">
                <p className="text-sm text-gray-500 mb-2 font-medium">{stat.label}</p>
                <h3 className={`text-3xl font-bold ${stat.color}`}>{stat.value}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <div className="border border-gray-200 rounded-lg">
              <div className="bg-gray-50 p-3 border-b border-gray-200 font-bold text-[#333] flex items-center gap-2">
                <Activity size={16} className="text-blue-500" />
                กิจกรรมล่าสุด (Recent Activities)
              </div>
              <div className="p-0">
                <ul className="divide-y divide-gray-100">
                  <li className="p-3 flex items-start gap-3 hover:bg-gray-50">
                    <CheckCircle size={16} className="text-green-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-[#333]">อนุมัติรายการสำเร็จ</p>
                      <p className="text-xs text-gray-500">10 นาทีที่แล้ว</p>
                    </div>
                  </li>
                  <li className="p-3 flex items-start gap-3 hover:bg-gray-50">
                    <AlertTriangle size={16} className="text-orange-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-[#333]">พบรายการรอตรวจสอบ 3 รายการ</p>
                      <p className="text-xs text-gray-500">45 นาทีที่แล้ว</p>
                    </div>
                  </li>
                  <li className="p-3 flex items-start gap-3 hover:bg-gray-50">
                    <Clock size={16} className="text-blue-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-[#333]">อัปเดตข้อมูลระบบประจำวัน</p>
                      <p className="text-xs text-gray-500">2 ชั่วโมงที่แล้ว</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border border-gray-200 rounded-lg">
              <div className="bg-gray-50 p-3 border-b border-gray-200 font-bold text-[#333] flex items-center gap-2">
                <Server size={16} className="text-gray-600" />
                เมนูลัด (Quick Actions)
              </div>
              <div className="p-4 grid grid-cols-2 gap-3">
                {info.actions.map((action) => (
                  <button 
                    key={action.id}
                    onClick={() => setActiveAction(action)}
                    className="bg-white border border-gray-300 hover:bg-gray-50 hover:border-[#3c8dbc] hover:text-[#3c8dbc] text-[#333] py-3 px-3 rounded text-sm text-left shadow-sm transition-all flex items-center gap-2 group"
                  >
                    <span className="text-gray-400 group-hover:text-[#3c8dbc] transition-colors">
                      {action.icon}
                    </span>
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Modal */}
      {activeAction && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className={`p-4 text-white flex justify-between items-center ${info.color.replace('border-', 'bg-')}`}>
              <h3 className="font-bold flex items-center gap-2 text-lg">
                {activeAction.icon}
                {activeAction.label}
              </h3>
              <button onClick={() => setActiveAction(null)} className="hover:bg-white/20 p-1 rounded transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              {renderModalContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
