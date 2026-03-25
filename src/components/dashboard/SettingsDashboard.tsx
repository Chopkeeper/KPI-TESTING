import React, { useState } from 'react';
import { Save, CheckCircle, Settings, LayoutDashboard, Database, Server, Link as LinkIcon } from 'lucide-react';

interface SettingsDashboardProps {
  appTitles: Record<string, string>;
  setAppTitles: (titles: Record<string, string>) => void;
}

export function SettingsDashboard({ appTitles, setAppTitles }: SettingsDashboardProps) {
  const [activeTab, setActiveTab] = useState('general');
  const [localTitles, setLocalTitles] = useState(appTitles);
  const [saved, setSaved] = useState(false);
  
  // API & Server Settings State
  const [apiSettings, setApiSettings] = useState({
    hisHost: '192.168.1.100',
    hisPort: '3306',
    hisUser: 'sa',
    hisPass: '********',
    hisDbName: 'hos',
    mophApiUrl: 'https://api.moph.go.th/v1',
    mophToken: 'moph_token_xyz_12345',
    referralApiUrl: 'https://refer.moph.go.th/api',
    syncInterval: '60'
  });
  const [isApiSaved, setIsApiSaved] = useState(false);

  const handleChange = (key: string, value: string) => {
    setLocalTitles(prev => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleApiChange = (key: string, value: string) => {
    setApiSettings(prev => ({ ...prev, [key]: value }));
    setIsApiSaved(false);
  };

  const handleSave = () => {
    setAppTitles(localTitles);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const saveApiSettings = () => {
    // In a real app, this would send data to a backend
    console.log('Saving API Settings:', apiSettings);
    setIsApiSaved(true);
    setTimeout(() => setIsApiSaved(false), 3000);
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-sm shadow-sm border-t-[3px] border-[#3c8dbc] flex overflow-hidden min-h-[600px]">
        {/* Settings Sidebar */}
        <div className="w-64 bg-gray-50 border-r border-gray-200 flex-shrink-0">
          <div className="p-4 border-b border-gray-100 flex items-center gap-2">
            <Settings className="text-[#3c8dbc]" size={20} />
            <h2 className="text-lg font-medium text-[#333]">ตั้งค่าระบบ</h2>
          </div>
          <ul className="py-2">
            <li 
              className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition-colors ${activeTab === 'general' ? 'bg-white border-l-4 border-[#3c8dbc] text-[#3c8dbc] font-medium' : 'text-gray-600 hover:bg-gray-100 border-l-4 border-transparent'}`}
              onClick={() => setActiveTab('general')}
            >
              <LayoutDashboard size={18} />
              ตั้งค่าทั่วไป (General)
            </li>
            <li 
              className={`px-4 py-3 flex items-center gap-3 cursor-pointer transition-colors ${activeTab === 'api' ? 'bg-white border-l-4 border-[#00a65a] text-[#00a65a] font-medium' : 'text-gray-600 hover:bg-gray-100 border-l-4 border-transparent'}`}
              onClick={() => setActiveTab('api')}
            >
              <Database size={18} />
              การเชื่อมต่อ (API & Server)
            </li>
          </ul>
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-6">
          
          {/* General Settings Tab */}
          {activeTab === 'general' && (
            <div>
              <div className="mb-6 pb-2 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#333]">ตั้งค่าชื่อเมนูและหัวข้อ (Menu Titles)</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1 */}
                <div className="space-y-5">
                  <h3 className="text-md font-bold text-[#333] border-b pb-2">ตั้งค่าชื่อระบบหลัก</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">ชื่อระบบหลัก (Main Title)</label>
                    <input 
                      type="text" 
                      value={localTitles.mainTitle || ''} 
                      onChange={e => handleChange('mainTitle', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                    <p className="text-xs text-gray-500 mt-1">แสดงที่หน้า Home Dashboard</p>
                  </div>

                  <h3 className="text-md font-bold text-[#333] border-b pb-2 pt-4">ตั้งค่าชื่อเมนู (Sidebar)</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">เมนู Home</label>
                    <input 
                      type="text" 
                      value={localTitles.home || ''} 
                      onChange={e => handleChange('home', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">เมนู KPI</label>
                    <input 
                      type="text" 
                      value={localTitles.kpi || ''} 
                      onChange={e => handleChange('kpi', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">เมนู Backoffice</label>
                    <input 
                      type="text" 
                      value={localTitles.backoffice || ''} 
                      onChange={e => handleChange('backoffice', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-5">
                  <h3 className="text-md font-bold text-[#333] border-b pb-2 hidden md:block opacity-0">Spacer</h3>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">เมนู รายงาน</label>
                    <input 
                      type="text" 
                      value={localTitles.reports || ''} 
                      onChange={e => handleChange('reports', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">เมนู ข้อมูลและสถิติ</label>
                    <input 
                      type="text" 
                      value={localTitles.dataStats || ''} 
                      onChange={e => handleChange('dataStats', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">เมนู ค้นผล LAB</label>
                    <input 
                      type="text" 
                      value={localTitles.labSearch || ''} 
                      onChange={e => handleChange('labSearch', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">เมนู งานวัคซีน</label>
                    <input 
                      type="text" 
                      value={localTitles.vaccine || ''} 
                      onChange={e => handleChange('vaccine', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#333] mb-1">เมนู คู่มือใช้งาน</label>
                    <input 
                      type="text" 
                      value={localTitles.manual || ''} 
                      onChange={e => handleChange('manual', e.target.value)} 
                      className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-sm" 
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-4">
                <button 
                  onClick={handleSave} 
                  className="bg-[#3c8dbc] hover:bg-[#367fa9] text-white px-6 py-2 rounded-sm flex items-center gap-2 font-bold transition-colors"
                >
                  <Save size={18} /> บันทึกการตั้งค่า
                </button>
                {saved && (
                  <span className="text-green-600 flex items-center gap-1 text-sm font-medium animate-in fade-in">
                    <CheckCircle size={18} /> บันทึกสำเร็จ
                  </span>
                )}
              </div>
            </div>
          )}

          {/* API & Server Settings Tab */}
          {activeTab === 'api' && (
            <div>
              <div className="mb-6 pb-2 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#333]">การเชื่อมต่อฐานข้อมูลและ API (Database & API Connections)</h2>
              </div>

              <div className="space-y-8">
                {/* Database Settings */}
                <section>
                  <h3 className="text-md font-bold text-[#333] mb-4 flex items-center gap-2">
                    <Server size={18} className="text-[#3c8dbc]" />
                    ฐานข้อมูลหลัก (HIS Database)
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded border border-gray-200">
                    <div>
                      <label className="block text-sm font-bold text-[#333] mb-1">Host / IP Address</label>
                      <input 
                        type="text" 
                        value={apiSettings.hisHost} 
                        onChange={(e) => handleApiChange('hisHost', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#333] mb-1">Port</label>
                      <input 
                        type="text" 
                        value={apiSettings.hisPort} 
                        onChange={(e) => handleApiChange('hisPort', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#333] mb-1">Database Name</label>
                      <input 
                        type="text" 
                        value={apiSettings.hisDbName} 
                        onChange={(e) => handleApiChange('hisDbName', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                      />
                    </div>
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-[#333] mb-1">Username</label>
                        <input 
                          type="text" 
                          value={apiSettings.hisUser} 
                          onChange={(e) => handleApiChange('hisUser', e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-[#333] mb-1">Password</label>
                        <input 
                          type="password" 
                          value={apiSettings.hisPass} 
                          onChange={(e) => handleApiChange('hisPass', e.target.value)}
                          className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2 mt-2">
                      <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1.5 rounded text-sm transition-colors border border-gray-300">
                        ทดสอบการเชื่อมต่อ (Test Connection)
                      </button>
                    </div>
                  </div>
                </section>

                {/* External APIs */}
                <section>
                  <h3 className="text-md font-bold text-[#333] mb-4 flex items-center gap-2">
                    <LinkIcon size={18} className="text-[#f39c12]" />
                    เชื่อมต่อ API ภายนอก (External APIs)
                  </h3>
                  <div className="grid grid-cols-1 gap-4 bg-gray-50 p-4 rounded border border-gray-200">
                    <div>
                      <label className="block text-sm font-bold text-[#333] mb-1">MOPH Claim API URL</label>
                      <input 
                        type="text" 
                        value={apiSettings.mophApiUrl} 
                        onChange={(e) => handleApiChange('mophApiUrl', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[#333] mb-1">MOPH API Token</label>
                      <input 
                        type="password" 
                        value={apiSettings.mophToken} 
                        onChange={(e) => handleApiChange('mophToken', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                      />
                    </div>
                    <hr className="border-gray-200 my-2" />
                    <div>
                      <label className="block text-sm font-bold text-[#333] mb-1">Referral System API URL</label>
                      <input 
                        type="text" 
                        value={apiSettings.referralApiUrl} 
                        onChange={(e) => handleApiChange('referralApiUrl', e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                      />
                    </div>
                    <hr className="border-gray-200 my-2" />
                    <div>
                      <label className="block text-sm font-bold text-[#333] mb-1">ความถี่ในการซิงค์ข้อมูล (Sync Interval - นาที)</label>
                      <input 
                        type="number" 
                        value={apiSettings.syncInterval} 
                        onChange={(e) => handleApiChange('syncInterval', e.target.value)}
                        className="w-1/3 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#00a65a] focus:ring-1 focus:ring-[#00a65a]"
                      />
                    </div>
                  </div>
                </section>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-4">
                <button 
                  onClick={saveApiSettings} 
                  className="bg-[#00a65a] hover:bg-[#008d4c] text-white px-6 py-2 rounded-sm flex items-center gap-2 font-bold transition-colors"
                >
                  <Save size={18} /> บันทึกการตั้งค่า
                </button>
                {isApiSaved && (
                  <span className="text-green-600 flex items-center gap-1 text-sm font-medium animate-in fade-in">
                    <CheckCircle size={18} /> บันทึกสำเร็จ
                  </span>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
