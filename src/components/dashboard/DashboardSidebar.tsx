import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LineChart, 
  Briefcase, 
  Crown,
  X,
  TrendingUp
} from 'lucide-react';
import { usePremium } from '../../context/PremiumContext';
import { useSubscription } from '../../context/SubscriptionContext';

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DashboardSidebar({ isOpen, onClose }: DashboardSidebarProps) {
  const { isPremium } = usePremium();
  const { isSubscribed } = useSubscription();

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: LineChart, label: 'Markets', path: '/dashboard/markets' },
    { icon: Briefcase, label: 'Portfolios', path: '/dashboard/portfolios' },
    { icon: Crown, label: 'Premium', path: '/dashboard/premium' },
  ];

  const handleNavClick = (e: React.MouseEvent, requiresPremium: boolean) => {
    if (requiresPremium && !isPremium && !isSubscribed) {
      e.preventDefault();
      onClose();
      window.location.href = '/dashboard/premium';
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-50 h-screen w-[280px]
        bg-[#151C2C] border-r border-slate-800
        transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static
      `}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <Link to="/dashboard" className="flex items-center gap-2" onClick={onClose}>
              <TrendingUp className="h-6 w-6 text-blue-500" />
              <span className="text-lg font-bold text-white">WhatCrypto</span>
            </Link>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors lg:hidden"
            >
              <X className="h-5 w-5 text-slate-400" />
            </button>
          </div>

          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.label !== 'Premium')}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-lg
                  transition-colors
                  ${isActive 
                    ? 'bg-blue-500/10 text-blue-500' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'}
                `}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}