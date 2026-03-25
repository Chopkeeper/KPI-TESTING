import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { format } from 'date-fns';
import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

type FeedItem = {
  id: string;
  time: string | Date;
  type: 'alert' | 'info' | 'success';
  message: string;
  department: string;
};

export function RealtimeFeed() {
  const [feed, setFeed] = useState<FeedItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/kpi/feed');
        if (!res.ok) throw new Error('Network response was not ok');
        const json = await res.json();
        setFeed(json);
      } catch (error) {
        console.error("Failed to fetch feed data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 8000); // Poll every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>กิจกรรมในระบบ HIS สด</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {feed.map((item) => (
            <div key={item.id} className="flex items-start gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0 animate-in fade-in slide-in-from-top-2">
              <div className={`mt-0.5 rounded-full p-1.5 ${
                item.type === 'alert' ? 'bg-red-100 text-red-600' :
                item.type === 'success' ? 'bg-emerald-100 text-emerald-600' :
                'bg-blue-100 text-blue-600'
              }`}>
                {item.type === 'alert' ? <AlertTriangle className="h-4 w-4" /> :
                 item.type === 'success' ? <CheckCircle className="h-4 w-4" /> :
                 <Activity className="h-4 w-4" />}
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-slate-900">{item.message}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="h-3 w-3" />
                  {format(new Date(item.time), 'HH:mm:ss')}
                  <span className="mx-1">•</span>
                  <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
                    {item.department}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
