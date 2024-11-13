import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export function BenefitsSection() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose WhatCrypto?
          </h2>
          <p className="text-xl text-gray-600">
            We make crypto investing simple, safe, and successful
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "For Complete Beginners",
              benefits: [
                "No technical knowledge required",
                "Plain English explanations",
                "Step-by-step guidance",
                "Start with any amount"
              ]
            },
            {
              title: "Smart Investment Tools",
              benefits: [
                "Clear buy/sell recommendations",
                "Risk-appropriate position sizes",
                "Portfolio rebalancing alerts",
                "Stop-loss guidance"
              ]
            },
            {
              title: "Ongoing Support",
              benefits: [
                "24/7 market monitoring",
                "Educational resources",
                "Regular market updates",
                "Community support"
              ]
            }
          ].map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}