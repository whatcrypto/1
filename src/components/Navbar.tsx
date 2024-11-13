import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMemberstack } from '@memberstack/react';
import { TrendingUp, Menu, X } from 'lucide-react';

export default function Navbar() {
  const { member, openModal } = useMemberstack();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleGetStarted = async () => {
    if (!member) {
      await openModal('SIGNUP');
      return;
    }

    const plans = await member.getPlans();
    const hasPremium = plans.some(
      (plan) => plan.id === 'pln_premium-monthly' || plan.id === 'pln_premium-yearly'
    );

    if (hasPremium) {
      navigate('/dashboard');
    } else {
      navigate('/pricing');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="border-b border-slate-800 bg-[#0B1121]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <TrendingUp className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-white">WhatCrypto</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/products" className="text-slate-400 hover:text-white transition-colors">
              Products
            </Link>
            <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
              Blog
            </Link>
            {member ? (
              member.planConnections?.length > 0 ? (
                <Link
                  to="/dashboard"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Launch App
                </Link>
              ) : (
                <Link
                  to="/pricing"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Upgrade
                </Link>
              )
            ) : (
              <>
                <button
                  onClick={() => openModal('LOGIN')}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={handleGetStarted}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get Started
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-2 border-t border-slate-700 pt-4">
            <Link
              to="/products"
              className="block text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/pricing"
              className="block text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="block text-slate-400 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            {member ? (
              member.planConnections?.length > 0 ? (
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Launch App
                </Link>
              ) : (
                <Link
                  to="/pricing"
                  className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Upgrade
                </Link>
              )
            ) : (
              <>
                <button
                  onClick={() => {
                    openModal('LOGIN');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    handleGetStarted();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
