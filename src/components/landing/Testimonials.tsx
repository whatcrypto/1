import React from 'react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "New Crypto Investor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
      content: "Finally, a crypto platform that speaks my language! No confusing charts or technical jargon - just clear guidance on what to buy and when.",
      rating: 5
    },
    {
      name: "Michael R.",
      role: "Part-time Trader",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
      content: "The model portfolios are fantastic. I've been following the Balanced Growth strategy and it's performed better than my own picks.",
      rating: 5
    },
    {
      name: "David L.",
      role: "Retail Investor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
      content: "The risk management guidance has been invaluable. It's helped me avoid common mistakes and protect my investments.",
      rating: 5
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Members Say
          </h2>
          <p className="text-xl text-gray-600">
            Join thousands of successful crypto investors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}