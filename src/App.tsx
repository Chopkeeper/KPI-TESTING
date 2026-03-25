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
import { ReportCenter } from '@/src/components/dashboard/ReportCenter';
import { DataAndStats } from '@/src/components/dashboard/DataAndStats';
import { DepartmentDashboard } from '@/src/components/dashboard/DepartmentDashboard';
import { LabSearch } from '@/src/components/dashboard/LabSearch';
import { VaccineDashboard } from '@/src/components/dashboard/VaccineDashboard';
import { VaccineData } from '@/src/components/dashboard/VaccineData';
import { UserManual } from '@/src/components/dashboard/UserManual';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    if (currentView.startsWith('dept-')) {
      const deptId = currentView.replace('dept-', '');
      return <DepartmentDashboard departmentId={deptId} />;
    }

    switch (currentView) {
      case 'strategic-kpi':
        return <StrategicKPI />;
      case 'backoffice':
        return <BackofficeMonitor />;
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
        return <MISDashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#ecf0f5] overflow-hidden font-sans">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
