import React, { useState } from 'react';
import { Menu, User, Settings, Bell, Users, X, LogOut } from 'lucide-react';

interface HeaderProps {
  isAdmin?: boolean;
  setIsAdmin?: (value: boolean) => void;
  setCurrentView?: (view: string) => void;
}

export function Header({ isAdmin = false, setIsAdmin = () => {}, setCurrentView = () => {} }: HeaderProps) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'Renuhos11108') {
      setIsAdmin(true);
      setShowLoginModal(false);
      setUsername('');
      setPassword('');
      setLoginError('');
    } else {
      setLoginError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setCurrentView('dashboard');
  };

  return (
    <>
      <header className="flex h-[50px] items-center justify-between bg-[#3c8dbc] px-4 text-white shrink-0">
        <div className="flex items-center">
          <button className="hover:bg-[#367fa9] p-2 rounded transition-colors">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center text-sm gap-1">
          <div className="hidden md:flex items-center mr-4 text-[10px] bg-red-500/20 px-2 py-1 rounded border border-red-500/30 text-red-100">
            ไม่สามารถเชื่อมต่อฐานข้อมูลได้ : SQLSTATE[HY000] [1045] Access denied for user 'sa'@'localhost' (using password: YES)
          </div>
          <button className="hover:bg-[#367fa9] p-2 rounded flex items-center gap-1 relative transition-colors">
            <Users className="h-4 w-4" />
            <span className="bg-green-500 text-white text-[9px] px-1 rounded absolute top-1 right-0">0</span>
          </button>
          <button className="hover:bg-[#367fa9] p-2 rounded relative transition-colors">
            <Bell className="h-4 w-4" />
          </button>
          
          {isAdmin ? (
            <>
              <button 
                onClick={handleLogout}
                className="hover:bg-[#367fa9] p-2 rounded flex items-center gap-2 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">ADMIN LOGOUT</span>
              </button>
              <button 
                onClick={() => setCurrentView('settings')}
                className="hover:bg-[#367fa9] p-2 rounded transition-colors"
              >
                <Settings className="h-4 w-4" />
              </button>
            </>
          ) : (
            <button 
              onClick={() => setShowLoginModal(true)}
              className="hover:bg-[#367fa9] p-2 rounded flex items-center gap-2 transition-colors"
            >
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">ADMIN LOGIN</span>
            </button>
          )}
        </div>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center font-sans">
          <div className="bg-white rounded-sm shadow-lg w-full max-w-md overflow-hidden">
            <div className="bg-[#3c8dbc] text-white px-4 py-3 flex justify-between items-center">
              <h3 className="font-bold flex items-center gap-2">
                <User size={18} />
                Admin Login
              </h3>
              <button onClick={() => setShowLoginModal(false)} className="hover:text-gray-200">
                <X size={18} />
              </button>
            </div>
            <div className="p-6">
              <form onSubmit={handleLogin}>
                {loginError && (
                  <div className="bg-red-50 text-red-600 p-3 rounded text-sm mb-4 border border-red-200">
                    {loginError}
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Username</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-black"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-[#3c8dbc] text-black"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#3c8dbc] text-white font-bold py-2 px-4 rounded hover:bg-[#367fa9] transition-colors"
                >
                  เข้าสู่ระบบ
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
