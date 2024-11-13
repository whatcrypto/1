import React from 'react';
import { useMemberstack } from '@memberstack/react';
import { Check } from 'lucide-react';
import { Logo } from '../components/Logo';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const { openModal } = useMemberstack();

  const handleGetStarted = () => {
    openModal('SIGNUP');
  };

  const features = [
    'Clear buy/sell signals for top cryptocurrencies',
    'Entry and exit price guidance',
    'Risk management recommendations',
    'Model portfolios to follow',
    'Real-time market alerts',
    'Educational resources and guides',
    'Email & community support'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <Logo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-900">WhatCrypto</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
                Guides
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Start Your Crypto Journey Today
            </h1>
            <p className="text-xl text-gray-600">
              Get clear guidance on what crypto to buy, when to buy, and when to sell
            </p>
          </div>

          <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
            <div className="px-6 py-8 bg-blue-500 sm:p-10 sm:pb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl leading-6 font-semibold text-white">
                    Pro Membership
                  </h2>
                  <p className="mt-2 text-base text-blue-100">
                    Everything you need to invest with confidence
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline text-white">
                  <span className="text-5xl font-bold tracking-tight">$29</span>
                  <span className="ml-1 text-2xl font-medium">/month</span>
                </div>
              </div>
            </div>
            <div className="px-6 pt-6 pb-8 bg-white sm:p-10">
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-6 w-6 text-green-500" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <button
                  onClick={handleGetStarted}
                  className="w-full px-6 py-4 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  Get Started Now
                </button>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  30-day money-back guarantee • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}