import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Logo } from '../components/Logo';
import { AuthButton } from '../components/AuthButton';
import { FeatureShowcase } from '../components/landing/FeatureShowcase';
import { BenefitsSection } from '../components/landing/BenefitsSection';
import { HowItWorks } from '../components/landing/HowItWorks';
import { SignalExamples } from '../components/landing/SignalExamples';
import { ModelPortfolioSection } from '../components/landing/ModelPortfolioSection';
import { Testimonials } from '../components/landing/Testimonials';
import { FAQ } from '../components/landing/FAQ';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
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
              <AuthButton 
                type="login"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              />
              <AuthButton 
                type="signup"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Know What Crypto to Buy, When to Buy, and When to Sell
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Simple, clear guidance for your crypto investment journey. No complex charts or confusing terms - just straightforward recommendations you can trust.
            </p>
            <AuthButton
              type="signup"
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </AuthButton>
          </div>
        </div>
      </div>

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* How It Works */}
      <HowItWorks />

      {/* Signal Examples */}
      <SignalExamples />

      {/* Model Portfolio Section */}
      <ModelPortfolioSection />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />

      {/* CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Crypto Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of beginners who are successfully navigating the crypto market with our guidance.
          </p>
          <AuthButton
            type="signup"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-6 h-6" />
          </AuthButton>
          <p className="mt-4 text-gray-500">
            No credit card required to start
          </p>
        </div>
      </div>
    </div>
  );
}