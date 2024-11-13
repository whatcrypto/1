import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0B1121]">
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">WhatCrypto</span>
            </Link>
            <Link 
              to="/"
              className="flex items-center text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-slate-400 mb-4">
              We collect information you provide directly to us when you create an account, 
              subscribe to our service, or communicate with us.
            </p>
            <ul className="list-disc pl-6 text-slate-400 space-y-2">
              <li>Email address</li>
              <li>Name and contact information</li>
              <li>Payment information</li>
              <li>Usage data and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-400 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-slate-400 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">3. Information Sharing</h2>
            <p className="text-slate-400 mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-slate-400 space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">4. Security</h2>
            <p className="text-slate-400">
              We take reasonable measures to help protect your personal information from 
              loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Contact Us</h2>
            <p className="text-slate-400">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:privacy@whatcrypto.com" className="text-blue-400 hover:text-blue-300">
                privacy@whatcrypto.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}