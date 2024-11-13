import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertTriangle, Wallet, Shield } from 'lucide-react';
import { Logo } from '../components/Logo';

export default function GettingStarted() {
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
          <h1>Getting Started with Crypto Investment</h1>
          <p className="lead">
            A complete beginner's guide to buying your first cryptocurrency safely and confidently.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h2 className="text-blue-800 flex items-center gap-2 mt-0">
              <Shield className="w-5 h-5" />
              Before You Start
            </h2>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Only invest what you can afford to lose</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Do your own research beyond this guide</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Start small and learn as you go</span>
              </li>
            </ul>
          </div>

          <h2>1. Understanding Cryptocurrency Basics</h2>
          <p>
            Cryptocurrency is a digital or virtual form of currency that uses cryptography for security. 
            Unlike traditional currencies issued by governments, cryptocurrencies are typically decentralized 
            systems based on blockchain technology.
          </p>

          <h3>Key Concepts:</h3>
          <ul>
            <li>
              <strong>Blockchain:</strong> A distributed ledger that records all transactions across a 
              network of computers
            </li>
            <li>
              <strong>Decentralization:</strong> No central authority controls the currency
            </li>
            <li>
              <strong>Private Keys:</strong> Your secret code that gives you access to your crypto
            </li>
            <li>
              <strong>Public Keys:</strong> Your cryptocurrency address that others can send funds to
            </li>
          </ul>

          <h2>2. Setting Up Your First Wallet</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 my-8">
            <h3 className="text-yellow-800 flex items-center gap-2 mt-0">
              <AlertTriangle className="w-5 h-5" />
              Security Tips
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Never share your private keys or recovery phrase with anyone</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Use two-factor authentication (2FA) whenever possible</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <span>Store your recovery phrase in a secure, offline location</span>
              </li>
            </ul>
          </div>

          <p>
            A cryptocurrency wallet is where you'll store your digital assets. There are several types:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-500" />
                <h4 className="font-semibold text-gray-900 m-0">Hardware Wallets</h4>
              </div>
              <p className="text-gray-600 text-sm m-0">
                Physical devices that store your crypto offline. Most secure option but requires purchase.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wallet className="w-5 h-5 text-purple-500" />
                <h4 className="font-semibold text-gray-900 m-0">Software Wallets</h4>
              </div>
              <p className="text-gray-600 text-sm m-0">
                Apps or programs on your computer or phone. Free and convenient but less secure.
              </p>
            </div>
          </div>

          <h2>3. Buying Your First Cryptocurrency</h2>
          <p>
            When you're ready to make your first purchase, follow these steps:
          </p>

          <ol>
            <li>
              <strong>Choose a reputable exchange</strong>
              <p>
                Look for exchanges with:
              </p>
              <ul>
                <li>Strong security measures</li>
                <li>High trading volume</li>
                <li>Good customer support</li>
                <li>Reasonable fees</li>
              </ul>
            </li>
            <li>
              <strong>Verify your identity</strong>
              <p>
                Most exchanges require KYC (Know Your Customer) verification. You'll need:
              </p>
              <ul>
                <li>Government-issued ID</li>
                <li>Proof of address</li>
                <li>Personal information</li>
              </ul>
            </li>
            <li>
              <strong>Add funds</strong>
              <p>
                Common funding methods include:
              </p>
              <ul>
                <li>Bank transfer</li>
                <li>Credit/debit card</li>
                <li>Digital payment services</li>
              </ul>
            </li>
            <li>
              <strong>Make your purchase</strong>
              <p>
                Start with a small amount and focus on major cryptocurrencies like Bitcoin or Ethereum.
              </p>
            </li>
          </ol>

          <h2>4. Managing Your Investment</h2>
          <p>
            After making your first purchase, follow these best practices:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 m-0 mb-4">Do</h4>
              <ul className="space-y-2 m-0">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Keep track of your purchases and trades</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Regularly review your portfolio</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <span>Stay informed about market news</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 m-0 mb-4">Don't</h4>
              <ul className="space-y-2 m-0">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Invest based on FOMO or hype</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Share your private keys or wallet details</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span>Invest more than you can afford to lose</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>Next Steps</h2>
          <p>
            Now that you understand the basics, consider:
          </p>
          <ul>
            <li>Learning about different cryptocurrencies and their use cases</li>
            <li>Understanding technical analysis basics</li>
            <li>Exploring different investment strategies</li>
            <li>Joining cryptocurrency communities to learn from others</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="text-gray-900 m-0 mb-4">Additional Resources</h3>
            <ul className="space-y-2 m-0">
              <li>
                <Link to="/guides/market-cycles" className="text-blue-600 hover:text-blue-800">
                  Understanding Crypto Market Cycles
                </Link>
              </li>
              <li>
                <Link to="/guides/risk-management" className="text-blue-600 hover:text-blue-800">
                  Crypto Risk Management Guide
                </Link>
              </li>
              <li>
                <Link to="/guides/portfolio-building" className="text-blue-600 hover:text-blue-800">
                  Building Your First Crypto Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}