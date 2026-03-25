import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Progress } from '@/src/components/ui/progress';
import { Badge } from '@/src/components/ui/badge';
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

type KPI = {
  id: string;
  name: string;
  metric: string;
  target: number;
  current: number;
  cases: number;
  status: 'success' | 'warning' | 'danger';
  reverse?: boolean;
};

export function ServicePlanKPI() {
  const [kpis, setKpis] = useState<KPI[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/kpi/service-plan');
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setKpis(json);
      } catch (error) {
        console.error("Failed to fetch KPI data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>ตัวชี้วัด Service Plan (เรียลไทม์)</CardTitle>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
            ซิงค์ข้อมูลสด
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {kpis.map((kpi) => (
            <div key={kpi.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-800">{kpi.name}</span>
                  {kpi.status === 'success' && <CheckCircle2 className="h-4 w-4 text-emerald-500" />}
                  {kpi.status === 'warning' && <Clock className="h-4 w-4 text-amber-500" />}
                  {kpi.status === 'danger' && <AlertCircle className="h-4 w-4 text-red-500" />}
                </div>
                <div className="text-sm text-slate-500">
                  เป้าหมาย: {kpi.reverse ? '<' : '>'}{kpi.target}% | จำนวนเคส: {kpi.cases}
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">{kpi.metric}</span>
                <span className={`font-bold ${
                  kpi.status === 'success' ? 'text-emerald-600' : 
                  kpi.status === 'warning' ? 'text-amber-600' : 'text-red-600'
                }`}>
                  {kpi.current.toFixed(1)}%
                </span>
              </div>
              <Progress 
                value={kpi.reverse ? (100 - (kpi.current / kpi.target * 50)) : kpi.current} 
                className={`h-2 ${
                  kpi.status === 'success' ? '[&>div]:bg-emerald-500' : 
                  kpi.status === 'warning' ? '[&>div]:bg-amber-500' : '[&>div]:bg-red-500'
                }`}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
