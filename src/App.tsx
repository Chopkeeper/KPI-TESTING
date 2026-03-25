/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from '@/src/components/dashboard/Sidebar';
import { Header } from '@/src/components/dashboard/Header';
import { MISDashboard } from '@/src/components/dashboard/MISDashboard';
import { StrategicKPI } from '@/src/components/dashboard/StrategicKPI';
import { BackofficeMonitor } from '@/src/components/dashboard/BackofficeMonitor';
import { BackofficeDetail } from '@/src/components/dashboard/BackofficeDetail';
import { ReportCenter } from '@/src/components/dashboard/ReportCenter';
import { DataAndStats } from '@/src/components/dashboard/DataAndStats';
import { DepartmentDashboard } from '@/src/components/dashboard/DepartmentDashboard';
import { LabSearch } from '@/src/components/dashboard/LabSearch';
import { VaccineDashboard } from '@/src/components/dashboard/VaccineDashboard';
import { VaccineData } from '@/src/components/dashboard/VaccineData';
import { UserManual } from '@/src/components/dashboard/UserManual';
import { SettingsDashboard } from '@/src/components/dashboard/SettingsDashboard';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isAdmin, setIsAdmin] = useState(false);
  
  const [appTitles, setAppTitles] = useState({
    mainTitle: 'MIS 4.0 Dashboard',
    home: 'Home Dashboard',
    kpi: 'KPI ยุทธศาสตร์องค์กร',
    backoffice: 'Monitor ระบบ Backoffice',
    reports: 'ระบบขอ/ส่งออกรายงาน',
    dataStats: 'ข้อมูลและสถิติ',
    labSearch: 'ค้นผล LAB',
    vaccine: 'งานวัคซีน (Vaccine)',
    manual: 'คู่มือใช้งาน'
  });

  const renderContent = () => {
    if (currentView.startsWith('dept-')) {
      const deptId = currentView.replace('dept-', '');
      return <DepartmentDashboard departmentId={deptId} />;
    }

    if (currentView.startsWith('backoffice-')) {
      const deptId = currentView.replace('backoffice-', '');
      return <BackofficeDetail dept={deptId} />;
    }

    switch (currentView) {
      case 'settings':
        return <SettingsDashboard appTitles={appTitles} setAppTitles={setAppTitles} />;
      case 'strategic-kpi':
        return <StrategicKPI />;
      case 'backoffice':
        return <BackofficeMonitor setCurrentView={setCurrentView} />;
      case 'reports':
        return <ReportCenter />;
      case 'data-stats':
        return <DataAndStats />;
      case 'lab-search':
        return <LabSearch />;
      case 'vaccine-dashboard':
        return <VaccineDashboard />;
      case 'vaccine-data':
        return <VaccineData />;
      case 'user-manual':
        return <UserManual />;
      case 'dashboard':
      default:
        return <MISDashboard mainTitle={appTitles.mainTitle} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#ecf0f5] overflow-hidden font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} isAdmin={isAdmin} appTitles={appTitles} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header isAdmin={isAdmin} setIsAdmin={setIsAdmin} setCurrentView={setCurrentView} />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
