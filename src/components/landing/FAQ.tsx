import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does WhatCrypto help me invest in crypto?",
      answer: "We provide clear, actionable buy and sell recommendations for cryptocurrencies, along with specific entry points, targets, and stop-loss levels. Our guidance is written in plain English, making it easy for beginners to understand and follow."
    },
    {
      question: "Do I need any trading experience?",
      answer: "No! WhatCrypto is specifically designed for beginners. We explain everything in simple terms and provide step-by-step guidance for each recommendation."
    },
    {
      question: "How much money do I need to start?",
      answer: "You can start with any amount you're comfortable with. Our recommendations include percentage-based position sizing to work with any investment amount."
    },
    {
      question: "What cryptocurrencies do you cover?",
      answer: "We focus on established cryptocurrencies and carefully vetted opportunities. Our recommendations primarily cover the top 100 cryptocurrencies by market cap."
    },
    {
      question: "How do I receive trading signals?",
      answer: "Signals are delivered through our platform and via email. Premium members also receive mobile notifications for time-sensitive opportunities."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period."
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about WhatCrypto
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}