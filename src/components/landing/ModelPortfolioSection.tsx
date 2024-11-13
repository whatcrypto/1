import React from 'react';
import { Shield, Rocket, Target } from 'lucide-react';

export function ModelPortfolioSection() {
  const portfolios = [
    {
      icon: Shield,
      name: "Conservative",
      description: "Lower-risk portfolio focused on established cryptocurrencies",
      allocation: [
        { coin: "Bitcoin", percentage: 50 },
        { coin: "Ethereum", percentage: 30 },
        { coin: "Stablecoins", percentage: 20 }
      ],
      features: [
        "Emphasis on capital preservation",
        "Lower volatility exposure",
        "Regular rebalancing",
        "Suitable for beginners"
      ]
    },
    {
      icon: Target,
      name: "Balanced Growth",
      description: "Balanced mix of established and growth opportunities",
      allocation: [
        { coin: "Bitcoin", percentage: 40 },
        { coin: "Ethereum", percentage: 30 },
        { coin: "Top Altcoins", percentage: 25 },
        { coin: "Stablecoins", percentage: 5 }
      ],
      features: [
        "Moderate risk exposure",
        "Focus on top 10 cryptocurrencies",
        "Monthly rebalancing",
        "Growth with protection"
      ]
    },
    {
      icon: Rocket,
      name: "Aggressive Growth",
      description: "High-potential opportunities for maximum returns",
      allocation: [
        { coin: "Bitcoin", percentage: 30 },
        { coin: "Ethereum", percentage: 30 },
        { coin: "Growth Altcoins", percentage: 35 },
        { coin: "Stablecoins", percentage: 5 }
      ],
      features: [
        "Higher risk tolerance required",
        "Focus on emerging opportunities",
        "Active management",
        "Maximum growth potential"
      ]
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Model Portfolios
          </h2>
          <p className="text-xl text-gray-600">
            Follow our expertly curated portfolios based on your goals
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {portfolios.map((portfolio) => {
            const Icon = portfolio.icon;
            return (
              <div key={portfolio.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{portfolio.name}</h3>
                    <p className="text-sm text-gray-600">{portfolio.description}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-3">Target Allocation</h4>
                    <div className="space-y-2">
                      {portfolio.allocation.map((item) => (
                        <div key={item.coin} className="flex items-center justify-between">
                          <span className="text-gray-700">{item.coin}</span>
                          <span className="text-gray-600">{item.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-3">Features</h4>
                    <ul className="space-y-2">
                      {portfolio.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}