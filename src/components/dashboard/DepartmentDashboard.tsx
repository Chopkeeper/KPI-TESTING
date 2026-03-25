import React from 'react';
import { Users, UserPlus, Clock, Activity, Bed, ArrowRightLeft, AlertTriangle, Syringe, ShieldAlert, HeartPulse, Accessibility, Beaker, FileText, Search, Stethoscope, Ambulance } from 'lucide-react';

interface DepartmentDashboardProps {
  departmentId: string;
}

export function DepartmentDashboard({ departmentId }: DepartmentDashboardProps) {
  // Configuration for different departments
  const deptConfig: Record<string, any> = {
    'opd': {
      title: 'ข้อมูลและสถิติ: ผู้รับบริการ (OPD)',
      icon: <Users size={24} className="text-[#00c0ef]" />,
      color: 'bg-[#00c0ef]',
      stats: [
        { label: 'ผู้ป่วยนอกวันนี้', value: '452', desc: 'คน', icon: <Users size={40} /> },
        { label: 'ผู้ป่วยใหม่', value: '38', desc: 'คน', icon: <UserPlus size={40} /> },
        { label: 'นัดหมายล่วงหน้า', value: '315', desc: 'คน', icon: <Clock size={40} /> },
        { label: 'เวลารอคอยเฉลี่ย', value: '45', desc: 'นาที', icon: <Activity size={40} /> },
      ],
      tableHeaders: ['เวลา', 'HN', 'ชื่อ-สกุล', 'แผนก', 'สถานะ'],
      tableData: [
        ['08:30', 'HN-66001', 'สมชาย ใจดี', 'อายุรกรรม', 'รอตรวจ'],
        ['08:45', 'HN-66002', 'สมหญิง รักษา', 'ศัลยกรรม', 'กำลังตรวจ'],
        ['09:00', 'HN-66003', 'ใจดี มีสุข', 'กุมารเวชกรรม', 'รับยา'],
      ]
    },
    'ipd': {
      title: 'ข้อมูลและสถิติ: ผู้ป่วยใน (IPD)',
      icon: <Bed size={24} className="text-[#dd4b39]" />,
      color: 'bg-[#dd4b39]',
      stats: [
        { label: 'Admit ปัจจุบัน', value: '128', desc: 'เตียง', icon: <Bed size={40} /> },
        { label: 'รับใหม่วันนี้', value: '15', desc: 'คน', icon: <UserPlus size={40} /> },
        { label: 'จำหน่ายวันนี้', value: '12', desc: 'คน', icon: <ArrowRightLeft size={40} /> },
        { label: 'อัตราครองเตียง', value: '85%', desc: 'ของทั้งหมด', icon: <Activity size={40} /> },
      ],
      tableHeaders: ['เตียง', 'HN', 'ชื่อ-สกุล', 'วันที่ Admit', 'แพทย์เจ้าของไข้'],
      tableData: [
        ['IPD1-01', 'HN-65012', 'วิชาญ ชาญชัย', '20/03/2026', 'นพ. สมเกียรติ'],
        ['IPD1-02', 'HN-65088', 'มาลี สีสด', '22/03/2026', 'พญ. สุดา'],
        ['IPD2-05', 'HN-66102', 'สมศักดิ์ ภักดี', '24/03/2026', 'นพ. สมเกียรติ'],
      ]
    },
    'dental': {
      title: 'ข้อมูลและสถิติ: ทันตกรรม',
      icon: <Stethoscope size={24} className="text-[#f39c12]" />,
      color: 'bg-[#f39c12]',
      stats: [
        { label: 'ผู้รับบริการวันนี้', value: '85', desc: 'คน', icon: <Users size={40} /> },
        { label: 'ถอนฟัน/ผ่าฟันคุด', value: '24', desc: 'ซี่', icon: <Activity size={40} /> },
        { label: 'อุดฟัน', value: '42', desc: 'ซี่', icon: <Activity size={40} /> },
        { label: 'ขูดหินปูน', value: '19', desc: 'คน', icon: <Activity size={40} /> },
      ],
      tableHeaders: ['เวลา', 'HN', 'ชื่อ-สกุล', 'หัตถการ', 'ทันตแพทย์'],
      tableData: [
        ['09:00', 'HN-66045', 'กนกวรรณ วรรณดี', 'อุดฟัน', 'ทพ. สมชาย'],
        ['09:30', 'HN-66046', 'วิชัย ชัยวิชิต', 'ขูดหินปูน', 'ทพญ. สมหญิง'],
      ]
    },
    'er': {
      title: 'ข้อมูลและสถิติ: อุบัติเหตุและฉุกเฉิน (ER)',
      icon: <Ambulance size={24} className="text-[#dd4b39]" />,
      color: 'bg-[#dd4b39]',
      stats: [
        { label: 'ผู้ป่วย ER วันนี้', value: '45', desc: 'คน', icon: <Ambulance size={40} /> },
        { label: 'Trauma', value: '12', desc: 'คน', icon: <AlertTriangle size={40} /> },
        { label: 'Non-Trauma', value: '33', desc: 'คน', icon: <Activity size={40} /> },
        { label: 'Refer Out', value: '2', desc: 'คน', icon: <ArrowRightLeft size={40} /> },
      ],
      tableHeaders: ['เวลา', 'Triage', 'ชื่อ-สกุล', 'อาการสำคัญ', 'สถานะ'],
      tableData: [
        ['10:15', 'Level 1 (แดง)', 'ชายไม่ทราบชื่อ', 'อุบัติเหตุจราจร หมดสติ', 'กำลังช่วยชีวิต'],
        ['10:30', 'Level 3 (เหลือง)', 'สมหมาย ปลายทาง', 'ปวดท้องรุนแรง', 'รอผล Lab'],
      ]
    },
    'default': {
      title: 'ข้อมูลและสถิติ: แผนกทั่วไป',
      icon: <Activity size={24} className="text-[#00a65a]" />,
      color: 'bg-[#00a65a]',
      stats: [
        { label: 'ผู้รับบริการวันนี้', value: '120', desc: 'คน', icon: <Users size={40} /> },
        { label: 'ทำหัตถการ', value: '45', desc: 'ครั้ง', icon: <Activity size={40} /> },
        { label: 'รอคิว', value: '12', desc: 'คน', icon: <Clock size={40} /> },
        { label: 'เสร็จสิ้น', value: '108', desc: 'คน', icon: <CheckCircle size={40} /> },
      ],
      tableHeaders: ['ลำดับ', 'HN', 'ชื่อ-สกุล', 'รายละเอียด', 'สถานะ'],
      tableData: [
        ['1', 'HN-001', 'ทดสอบ ระบบ', 'ตรวจติดตามอาการ', 'เสร็จสิ้น'],
      ]
    }
  };

  const config = deptConfig[departmentId] || deptConfig['default'];

  // Map department IDs to specific titles for those not explicitly defined above
  const titleMap: Record<string, string> = {
    'thai-med': 'แพทย์แผนไทย',
    'or': 'ผ่าตัดและวิสัญญี',
    'cd': 'โรคติดต่อ CD',
    'ncd': 'โรคไม่ติดต่อ NCD',
    'pt': 'กายภาพบำบัด',
    'hemo': 'ไตเทียม',
    'lab-xray': 'ชันสูตรและ X-Ray'
  };

  if (titleMap[departmentId] && !deptConfig[departmentId]) {
    config.title = `ข้อมูลและสถิติ: ${titleMap[departmentId]}`;
  }

  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      {/* Header */}
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal flex items-center gap-2">
          {config.icon}
          {config.title}
        </h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <Activity size={12} /> ข้อมูลและสถิติ <span className="mx-1">&gt;</span> {config.title.split(': ')[1]}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        {config.stats.map((stat: any, index: number) => (
          <div key={index} className={`${config.color} rounded-sm text-white relative overflow-hidden shadow-sm`}>
            <div className="p-4 z-10 relative">
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-sm font-medium">{stat.label}</p>
              <p className="text-xs mt-1">{stat.desc}</p>
            </div>
            <div className="absolute top-4 right-4 z-0 opacity-30">
              {stat.icon}
            </div>
            <a href="#" className="block text-center bg-black/10 py-1 text-xs hover:bg-black/20 transition-colors z-10 relative">
              รายละเอียด <span className="ml-1">➔</span>
            </a>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Table Section */}
        <div className="lg:col-span-2 bg-white shadow-sm rounded-sm border-t-[3px] border-[#3c8dbc]">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333] flex items-center justify-between">
            <span>รายการผู้ป่วยล่าสุด</span>
            <div className="flex gap-2">
              <input 
                type="text" 
                placeholder="ค้นหา HN, ชื่อ..." 
                className="border border-gray-300 rounded-sm px-2 py-1 text-xs font-normal outline-none focus:border-[#3c8dbc]"
              />
              <button className="bg-[#3c8dbc] text-white px-2 py-1 rounded-sm text-xs hover:bg-[#367fa9]">
                ค้นหา
              </button>
            </div>
          </div>
          <div className="p-0 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-[#333]">
                  {config.tableHeaders.map((header: string, i: number) => (
                    <th key={i} className="py-3 px-4 text-left font-semibold">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {config.tableData.map((row: string[], i: number) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    {row.map((cell: string, j: number) => (
                      <td key={j} className="py-3 px-4 text-[#555]">
                        {/* Add color to Triage levels for ER */}
                        {cell.includes('แดง') ? <span className="bg-red-500 text-white px-2 py-1 rounded text-xs">{cell}</span> :
                         cell.includes('เหลือง') ? <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">{cell}</span> :
                         cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-3 border-t border-gray-100 text-center">
            <a href="#" className="text-[#3c8dbc] text-xs hover:underline">ดูข้อมูลทั้งหมด</a>
          </div>
        </div>

        {/* Chart/Summary Section */}
        <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#00a65a]">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333]">
            สัดส่วนการให้บริการ (เดือนนี้)
          </div>
          <div className="p-4 flex flex-col items-center justify-center min-h-[250px]">
            {/* CSS Pie Chart Simulation */}
            <div className="relative w-40 h-40 rounded-full bg-gray-200 mb-6" style={{ background: 'conic-gradient(#00c0ef 0% 45%, #00a65a 45% 75%, #f39c12 75% 90%, #dd4b39 90% 100%)' }}>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center flex-col">
                <span className="text-2xl font-bold text-[#333]">100%</span>
                <span className="text-[10px] text-gray-500">รวมทั้งหมด</span>
              </div>
            </div>
            
            <div className="w-full space-y-2 text-xs">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#00c0ef]"></span> ทั่วไป</div>
                <span className="font-bold">45%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#00a65a]"></span> นัดหมาย</div>
                <span className="font-bold">30%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#f39c12]"></span> ฉุกเฉิน/เร่งด่วน</div>
                <span className="font-bold">15%</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-sm bg-[#dd4b39]"></span> ส่งต่อ (Refer)</div>
                <span className="font-bold">10%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dummy CheckCircle icon for default config
function CheckCircle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
