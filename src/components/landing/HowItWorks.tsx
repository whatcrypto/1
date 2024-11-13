import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: "We Monitor Markets",
      description: "Our system analyzes crypto markets 24/7 to identify the best opportunities for you.",
      color: "blue"
    },
    {
      number: '2',
      title: "You Get Clear Signals",
      description: "Receive simple buy and sell recommendations with specific entry points and targets.",
      color: "green"
    },
    {
      number: '3',
      title: "We Guide You",
      description: "Follow our step-by-step guidance on when to buy, sell, and how much to invest.",
      color: "purple"
    },
    {
      number: '4',
      title: "You Stay Protected",
      description: "Every recommendation includes risk management to protect your investment.",
      color: "orange"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            Simple steps to start your crypto investment journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
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
  );
}