import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft } from 'lucide-react';

export default function Terms() {
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
        <h1 className="text-3xl font-bold text-white mb-8">Terms of Service</h1>
        
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-400">
              By accessing or using WhatCrypto's services, you agree to be bound by these Terms. 
              If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">2. Use of Service</h2>
            <p className="text-slate-400 mb-4">
              Our service provides cryptocurrency market analysis and portfolio management tools. 
              You agree to use the service only for lawful purposes and in accordance with these Terms.
            </p>
            <ul className="list-disc pl-6 text-slate-400 space-y-2">
              <li>You must be at least 18 years old to use the service</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You agree not to share your account credentials with others</li>
              <li>You must provide accurate and complete information when creating an account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">3. Subscriptions and Payments</h2>
            <p className="text-slate-400 mb-4">
              Some aspects of the service are provided on a subscription basis.
            </p>
            <ul className="list-disc pl-6 text-slate-400 space-y-2">
              <li>Subscription fees are billed in advance</li>
              <li>You can cancel your subscription at any time</li>
              <li>Refunds are provided in accordance with our refund policy</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">4. Disclaimer</h2>
            <p className="text-slate-400">
              The information provided through our service is for informational purposes only 
              and should not be considered as financial advice. We are not responsible for any 
              financial losses incurred based on the use of our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
            <p className="text-slate-400">
              In no event shall WhatCrypto be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising out of or relating to your use of 
              the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Contact</h2>
            <p className="text-slate-400">
              If you have any questions about these Terms, please contact us at{' '}
              <a href="mailto:legal@whatcrypto.com" className="text-blue-400 hover:text-blue-300">
                legal@whatcrypto.com
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}