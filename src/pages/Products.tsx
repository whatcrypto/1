import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  LineChart, 
  Bell, 
  Target,
  ArrowRight
} from 'lucide-react';

export default function Products() {
  const products = [
    {
      title: "Technical Analysis Suite",
      description: "Professional-grade charting tools and technical indicators for advanced market analysis.",
      icon: LineChart,
      features: [
        "Advanced chart patterns recognition",
        "200+ technical indicators",
        "Multi-timeframe analysis",
        "Custom indicator builder"
      ]
    },
    {
      title: "Smart Alert System",
      description: "Never miss a trading opportunity with our intelligent alert system.",
      icon: Bell,
      features: [
        "Price action alerts",
        "Pattern recognition notifications",
        "Volume spike detection",
        "Customizable alert conditions"
      ]
    },
    {
      title: "Portfolio Analytics",
      description: "Track and optimize your portfolio performance with institutional-grade tools.",
      icon: Target,
      features: [
        "Real-time portfolio tracking",
        "Risk analysis tools",
        "Performance metrics",
        "Portfolio rebalancing suggestions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B1121]">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">WhatCrypto</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/products" className="text-slate-400 hover:text-white transition-colors">Products</Link>
              <Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link>
              <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link>
              <Link 
                to="/pricing"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Professional Trading Tools
            </h1>
            <p className="text-xl text-slate-400">
              Access institutional-grade tools and analytics used by professional traders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-800 transition-colors">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-3">
                    {product.title}
                  </h2>
                  <p className="text-slate-400 mb-6">
                    {product.description}
                  </p>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/pricing"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}