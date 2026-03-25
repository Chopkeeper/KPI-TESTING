import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Activity, Users, Bed, Stethoscope } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Overview() {
  const [data, setData] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalOpd: 0,
    totalIpd: 0,
    bedOccupancy: 0,
    erCases: 0
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/kpi/overview');
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setStats({
          totalOpd: json.totalOpd,
          totalIpd: json.totalIpd,
          bedOccupancy: json.bedOccupancy,
          erCases: json.erCases
        });
        if (json.flowData) setData(json.flowData);
      } catch (error) {
        console.error("Failed to fetch overview data:", error);
      }
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="ผู้ป่วยนอก (OPD) ทั้งหมด" 
          value={stats.totalOpd.toLocaleString()} 
          icon={<Users className="h-4 w-4 text-blue-500" />} 
          trend="ข้อมูลสดจาก HIS" 
        />
        <StatCard 
          title="ผู้ป่วยใน (IPD) ปัจจุบัน" 
          value={stats.totalIpd.toLocaleString()} 
          icon={<Stethoscope className="h-4 w-4 text-emerald-500" />} 
          trend="ข้อมูลสดจาก HIS" 
        />
        <StatCard 
          title="อัตราการครองเตียง" 
          value={`${stats.bedOccupancy.toFixed(1)}%`} 
          icon={<Bed className="h-4 w-4 text-amber-500" />} 
          trend={stats.bedOccupancy > 80 ? "ระดับวิกฤต > 80%" : "ปกติ"} 
          alert={stats.bedOccupancy > 80}
        />
        <StatCard 
          title="ผู้ป่วยฉุกเฉิน (ER) ปัจจุบัน" 
          value={stats.erCases.toLocaleString()} 
          icon={<Activity className="h-4 w-4 text-red-500" />} 
          trend="ข้อมูลสดจาก HIS" 
        />
      </div>

      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>การไหลเวียนผู้ป่วย (เรียลไทม์)</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorOpd" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorEr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <Tooltip />
                <Area type="monotone" dataKey="opd" stroke="#3b82f6" fillOpacity={1} fill="url(#colorOpd)" name="OPD" />
                <Area type="monotone" dataKey="er" stroke="#ef4444" fillOpacity={1} fill="url(#colorEr)" name="ER" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({ title, value, icon, trend, alert }: { title: string, value: string | number, icon: React.ReactNode, trend: string, alert?: boolean }) {
  return (
    <Card className={alert ? "border-amber-200 bg-amber-50/50" : ""}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${alert ? "text-amber-600" : "text-slate-900"}`}>{value}</div>
        <p className="text-xs text-slate-500 mt-1">{trend}</p>
      </CardContent>
    </Card>
  );
}
