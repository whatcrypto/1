import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, Target, Wallet } from 'lucide-react';
import { Logo } from '../components/Logo';

export default function RiskManagement() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <Logo className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold text-gray-900">WhatCrypto</span>
            </Link>
            <Link 
              to="/blog"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Guides
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg max-w-none">
          <h1>How to Manage Risk in Crypto</h1>
          <p className="lead">
            Simple strategies to protect your investment and avoid common mistakes that new crypto investors make.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
            <h2 className="text-red-800 flex items-center gap-2 mt-0">
              <AlertTriangle className="w-5 h-5" />
              Important Warning
            </h2>
            <p className="text-red-700 m-0">
              Cryptocurrency investing carries significant risks. Never invest more than you can afford 
              to lose, and always do your own research before making any investment decisions.
            </p>
          </div>

          <h2>Common Mistakes to Avoid</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-8">
            <h3 className="text-red-800 m-0 mb-4">Warning Signs</h3>
            <ul className="space-y-2 m-0">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>FOMO: Buying based on fear of missing out</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Averaging down without a plan</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Not using stop losses</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <span>Over-leveraging positions</span>
              </li>
            </ul>
          </div>

          <h2>Core Risk Management Principles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900 m-0">Position Sizing</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Never risk more than 1-2% per trade</li>
                <li>Maximum 5-10% in any single asset</li>
                <li>Keep emergency cash reserves</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-gray-900 m-0">Stop Losses</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Always use stop-loss orders</li>
                <li>Place stops at logical levels</li>
                <li>Never move stops lower</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="w-5 h-5 text-purple-500" />
                <h3 className="font-semibold text-gray-900 m-0">Diversification</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Spread across multiple assets</li>
                <li>Mix different risk levels</li>
                <li>Include some stable assets</li>
              </ul>
            </div>
          </div>

          <h2>Next Steps</h2>
          <p>
            To implement these risk management strategies:
          </p>
          <ol>
            <li>Create your personal risk management plan</li>
            <li>Set up portfolio tracking tools</li>
            <li>Practice position sizing calculations</li>
            <li>Review and adjust your current positions</li>
          </ol>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="text-gray-900 m-0 mb-4">Related Guides</h3>
            <ul className="space-y-2 m-0">
              <li>
                <Link to="/guides/portfolio-building" className="text-blue-600 hover:text-blue-800">
                  Building Your First Portfolio
                </Link>
              </li>
              <li>
                <Link to="/guides/market-cycles" className="text-blue-600 hover:text-blue-800">
                  Understanding Market Cycles
                </Link>
              </li>
              <li>
                <Link to="/guides/technical-analysis" className="text-blue-600 hover:text-blue-800">
                  Technical Analysis Basics
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}