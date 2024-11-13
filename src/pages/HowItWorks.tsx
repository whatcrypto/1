import React from 'react';
import { Link } from 'react-router-dom';
import { 
  LineChart, 
  Bell, 
  ShieldCheck, 
  Target,
  ArrowRight,
  CheckCircle2,
  Zap,
  Compass
} from 'lucide-react';
import { Logo } from '../components/Logo';

export default function HowItWorks() {
  const steps = [
    {
      icon: Compass,
      title: "Market Analysis",
      description: "We monitor the crypto market 24/7 to identify the best opportunities",
      details: [
        "Track market sentiment",
        "Monitor key price levels",
        "Analyze trading volume",
        "Identify market trends"
      ]
    },
    {
      icon: Target,
      title: "Clear Signals",
      description: "Receive straightforward buy and sell recommendations",
      details: [
        "Specific entry points",
        "Clear price targets",
        "Stop-loss levels",
        "Risk management guidance"
      ]
    },
    {
      icon: Bell,
      title: "Timely Alerts",
      description: "Get notified when it's time to take action",
      details: [
        "Buy opportunity alerts",
        "Sell signals",
        "Risk warnings",
        "Market updates"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Portfolio Guidance",
      description: "Follow our model portfolios based on your goals",
      details: [
        "Conservative to aggressive options",
        "Regular rebalancing guidance",
        "Position sizing help",
        "Diversification strategy"
      ]
    }
  ];

  const features = [
    {
      title: "Clear Buy/Sell Signals",
      description: "Know exactly when to enter and exit positions with specific price targets",
      example: {
        type: "buy",
        coin: "Bitcoin",
        entry: "$42,500",
        target: "$52,000",
        stop: "$39,000"
      }
    },
    {
      title: "Risk Management",
      description: "Protect your investment with clear stop-loss levels and position sizing guidance",
      example: {
        type: "risk",
        position: "1-5% per trade",
        stopLoss: "Always included",
        riskReward: "Minimum 2:1"
      }
    },
    {
      title: "Model Portfolios",
      description: "Follow our ready-made portfolios designed for different risk levels",
      example: {
        type: "portfolio",
        options: [
          "Conservative (lower risk)",
          "Balanced Growth",
          "High Growth"
        ]
      }
    }
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
              <Link to="/how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</Link>
              <Link to="/pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">Guides</Link>
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

      {/* Hero Section */}
      <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            How WhatCrypto Works
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, clear guidance to help you invest in crypto with confidence. No complex charts or technical jargon.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <step.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    <ul className="text-left space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to invest with confidence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  {feature.example.type === 'buy' && (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Entry Price</span>
                        <span className="text-gray-900 font-medium">{feature.example.entry}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Target</span>
                        <span className="text-green-600 font-medium">{feature.example.target}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stop Loss</span>
                        <span className="text-red-600 font-medium">{feature.example.stop}</span>
                      </div>
                    </div>
                  )}
                  {feature.example.type === 'risk' && (
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Position Size</span>
                        <span className="text-gray-900 font-medium">{feature.example.position}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Stop Loss</span>
                        <span className="text-gray-900 font-medium">{feature.example.stopLoss}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Risk/Reward</span>
                        <span className="text-gray-900 font-medium">{feature.example.riskReward}</span>
                      </div>
                    </div>
                  )}
                  {feature.example.type === 'portfolio' && (
                    <ul className="space-y-2">
                      {feature.example.options.map((option, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-gray-700">{option}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Crypto Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of beginners who are successfully navigating the crypto market with our guidance.
          </p>
          <Link
            to="/pricing"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </Link>
          <p className="mt-4 text-gray-500">
            No credit card required to create account
          </p>
        </div>
      </div>
    </div>
  );
}