import { ArrowRight } from 'lucide-react';
import { AuthButton } from '../components/AuthButton';
import { FeatureShowcase } from '../components/landing/FeatureShowcase';
import { BenefitsSection } from '../components/landing/BenefitsSection';
import { HowItWorks } from '../components/landing/HowItWorks';
import { SignalExamples } from '../components/landing/SignalExamples';
import { ModelPortfolioSection } from '../components/landing/ModelPortfolioSection';
import { Testimonials } from '../components/landing/Testimonials';
import { FAQ } from '../components/landing/FAQ';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
     <Navbar />

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