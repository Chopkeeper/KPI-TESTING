import React from 'react';
import { Server, Cpu, Database, HardDrive, Network, Activity, AlertTriangle, CheckCircle } from 'lucide-react';

export function BackofficeMonitor() {
  return (
    <div className="p-4 bg-[#ecf0f5] min-h-full font-sans">
      <div className="flex justify-between items-end mb-4">
        <h1 className="text-2xl text-[#333] font-normal">Backoffice System Monitor</h1>
        <div className="text-xs text-[#777] flex items-center gap-1">
          <Server size={12} /> ระบบ <span className="mx-1">&gt;</span> Monitor
        </div>
      </div>

      {/* Server Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <MonitorCard title="CPU Usage" value="45%" icon={<Cpu size={40} />} color="bg-[#00c0ef]" status="Normal" />
        <MonitorCard title="RAM Usage" value="78%" icon={<Activity size={40} />} color="bg-[#f39c12]" status="Warning" />
        <MonitorCard title="Disk Space" value="62%" icon={<HardDrive size={40} />} color="bg-[#00a65a]" status="Normal" />
        <MonitorCard title="Network Load" value="125 Mbps" icon={<Network size={40} />} color="bg-[#3c8dbc]" status="Normal" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Database Status */}
        <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#dd4b39]">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333] flex items-center gap-2">
            <Database size={16} className="text-[#dd4b39]" />
            สถานะฐานข้อมูล (HIS Database)
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <DbStat label="Active Connections" value="842 / 1000" percent={84} color="bg-[#f39c12]" />
              <DbStat label="Query Cache Hit Rate" value="92.5%" percent={92.5} color="bg-[#00a65a]" />
              <DbStat label="Slow Queries (Last 1hr)" value="15 queries" percent={15} color="bg-[#dd4b39]" />
              <DbStat label="Replication Lag" value="0.5 sec" percent={5} color="bg-[#00a65a]" />
            </div>
            <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700 flex items-start gap-2">
              <AlertTriangle size={16} className="shrink-0 mt-0.5" />
              <div>
                <strong>Alert:</strong> พบ Slow Query ในระบบห้องจ่ายยา (Pharmacy Module) เวลา 10:45 น. แนะนำให้ตรวจสอบ Index ของตาราง `rx_order`
              </div>
            </div>
          </div>
        </div>

        {/* API & Services Status */}
        <div className="bg-white shadow-sm rounded-sm border-t-[3px] border-[#00a65a]">
          <div className="border-b border-gray-100 p-3 text-sm font-bold text-[#333] flex items-center gap-2">
            <Server size={16} className="text-[#00a65a]" />
            สถานะ API และ Services เชื่อมต่อ
          </div>
          <div className="p-0">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-[#333]">
                  <th className="py-3 px-4 text-left font-semibold">Service Name</th>
                  <th className="py-3 px-4 text-left font-semibold">Response Time</th>
                  <th className="py-3 px-4 text-center font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                <ServiceRow name="HIS Core API" time="45 ms" status="online" />
                <ServiceRow name="ระบบส่งต่อ (Referral API)" time="120 ms" status="online" />
                <ServiceRow name="MOPH Claim Service" time="850 ms" status="warning" />
                <ServiceRow name="ระบบคิว (Queue API)" time="35 ms" status="online" />
                <ServiceRow name="PACS Integration" time="Timeout" status="offline" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function MonitorCard({ title, value, icon, color, status }: any) {
  return (
    <div className="bg-white shadow-sm rounded-sm flex overflow-hidden">
      <div className={`${color} w-24 flex items-center justify-center text-white/80 shrink-0`}>
        {icon}
      </div>
      <div className="p-4 flex-1">
        <p className="text-xs text-[#777] uppercase font-bold">{title}</p>
        <h3 className="text-2xl font-bold text-[#333] mt-1">{value}</h3>
        <p className={`text-xs mt-1 font-medium ${status === 'Normal' ? 'text-[#00a65a]' : status === 'Warning' ? 'text-[#f39c12]' : 'text-[#dd4b39]'}`}>
          Status: {status}
        </p>
      </div>
    </div>
  );
}

function DbStat({ label, value, percent, color }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-[#333]">{label}</span>
        <span className="font-bold text-[#333]">{value}</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-sm overflow-hidden">
        <div className={`${color} h-2`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}

function ServiceRow({ name, time, status }: any) {
  return (
    <tr className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
      <td className="py-3 px-4 text-[#333]">{name}</td>
      <td className="py-3 px-4 text-[#555]">{time}</td>
      <td className="py-3 px-4 text-center">
        {status === 'online' && <span className="inline-flex items-center gap-1 bg-[#00a65a] text-white text-[10px] px-2 py-1 rounded"><CheckCircle size={10} /> Online</span>}
        {status === 'warning' && <span className="inline-flex items-center gap-1 bg-[#f39c12] text-white text-[10px] px-2 py-1 rounded"><AlertTriangle size={10} /> Slow</span>}
        {status === 'offline' && <span className="inline-flex items-center gap-1 bg-[#dd4b39] text-white text-[10px] px-2 py-1 rounded"><AlertTriangle size={10} /> Offline</span>}
      </td>
    </tr>
  );
}
