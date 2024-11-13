import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Shield, Target, Rocket } from 'lucide-react';
import { Logo } from '../components/Logo';

export default function PortfolioBuilding() {
  return (
    <div className="min-h-screen bg-white">
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
          <h1>Building Your First Crypto Portfolio</h1>
          <p className="lead">
            Step-by-step guide to creating a balanced cryptocurrency portfolio that matches your goals.
          </p>

          <h2>Understanding Portfolio Types</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900 m-0">Conservative</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Lower risk tolerance</li>
                <li>Focus on established coins</li>
                <li>Emphasis on preservation</li>
                <li>Longer holding periods</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-purple-500" />
                <h3 className="font-semibold text-gray-900 m-0">Balanced</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Moderate risk tolerance</li>
                <li>Mix of assets</li>
                <li>Regular rebalancing</li>
                <li>Growth with protection</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Rocket className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-gray-900 m-0">Aggressive</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>High risk tolerance</li>
                <li>Focus on growth</li>
                <li>More altcoin exposure</li>
                <li>Active management</li>
              </ul>
            </div>
          </div>

          <h2>Sample Portfolio Allocations</h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-blue-800 m-0 mb-6">Conservative Portfolio (Lower Risk)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Bitcoin (BTC): 50-60%</h4>
                <p className="text-sm text-gray-600 m-0">
                  The most established cryptocurrency with the longest track record
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Ethereum (ETH): 20-30%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Leading smart contract platform with strong institutional adoption
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Stablecoins: 20%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Cash position for opportunities and risk management
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 my-8">
            <h3 className="text-purple-800 m-0 mb-6">Balanced Portfolio (Moderate Risk)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Bitcoin (BTC): 30-40%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Core position for stability
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Ethereum (ETH): 20-30%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Major smart contract exposure
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Large Cap Altcoins: 20%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Top 10 projects by market cap
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Stablecoins: 10-20%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Reserve for opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
            <h3 className="text-green-800 m-0 mb-6">Aggressive Portfolio (Higher Risk)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Bitcoin (BTC): 20-30%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Foundation position
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Ethereum (ETH): 20-30%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Smart contract platform exposure
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Mid-Cap Altcoins: 20%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Established projects with growth potential
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Small-Cap Altcoins: 15%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Higher risk/reward opportunities
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Stablecoins: 5-15%</h4>
                <p className="text-sm text-gray-600 m-0">
                  Trading reserves
                </p>
              </div>
            </div>
          </div>

          <h2>Building Your Portfolio</h2>

          <h3>Step 1: Assess Your Risk Tolerance</h3>
          <p>
            Consider these factors when determining your risk tolerance:
          </p>
          <ul>
            <li>Investment timeline</li>
            <li>Financial goals</li>
            <li>Experience level</li>
            <li>Emotional temperament</li>
          </ul>

          <h3>Step 2: Choose Your Assets</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h4 className="font-semibold text-gray-900 m-0 mb-4">Selection Criteria</h4>
            <ul className="space-y-2 m-0">
              <li>Market capitalization</li>
              <li>Trading volume</li>
              <li>Development activity</li>
              <li>Team background</li>
              <li>Use case and adoption</li>
            </ul>
          </div>

          <h3>Step 3: Determine Position Sizes</h3>
          <p>
            Follow these guidelines for position sizing:
          </p>
          <ul>
            <li>Larger allocations to established projects</li>
            <li>Smaller positions in higher-risk assets</li>
            <li>Keep some cash/stablecoins for opportunities</li>
            <li>Consider correlation between assets</li>
          </ul>

          <h3>Step 4: Implementation Strategy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 m-0 mb-4">Lump Sum</h4>
              <ul className="space-y-2 m-0">
                <li>Invest all at once</li>
                <li>Better in bull markets</li>
                <li>Higher short-term risk</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 m-0 mb-4">Dollar-Cost Averaging</h4>
              <ul className="space-y-2 m-0">
                <li>Spread purchases over time</li>
                <li>Reduces timing risk</li>
                <li>More psychological comfort</li>
              </ul>
            </div>
          </div>

          <h2>Portfolio Management</h2>

          <h3>Regular Rebalancing</h3>
          <p>
            Keep your portfolio aligned with your target allocations:
          </p>
          <ul>
            <li>Review monthly or quarterly</li>
            <li>Rebalance when allocations drift 5-10%</li>
            <li>Consider tax implications</li>
            <li>Document all trades</li>
          </ul>

          <h3>Monitoring and Adjusting</h3>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h4 className="font-semibold text-gray-900 m-0 mb-4">Regular Review Checklist</h4>
            <ul className="space-y-2 m-0">
              <li>✓ Check asset performance</li>
              <li>✓ Review market conditions</li>
              <li>✓ Assess risk levels</li>
              <li>✓ Update investment thesis</li>
              <li>✓ Consider rebalancing needs</li>
            </ul>
          </div>

          <h2>Next Steps</h2>
          <p>
            To implement your portfolio strategy:
          </p>
          <ol>
            <li>Choose your portfolio type based on risk tolerance</li>
            <li>Select specific assets using the criteria above</li>
            <li>Determine your entry strategy (lump sum or DCA)</li>
            <li>Set up portfolio tracking tools</li>
            <li>Create a regular review schedule</li>
          </ol>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="text-gray-900 m-0 mb-4">Related Guides</h3>
            <ul className="space-y-2 m-0">
              <li>
                <Link to="/guides/risk-management" className="text-blue-600 hover:text-blue-800">
                  Risk Management Strategies
                </Link>
              </li>
              <li>
                <Link to="/guides/market-cycles" className="text-blue-600 hover:text-blue-800">
                  Understanding Market Cycles
                </Link>
              </li>
              <li>
                <Link to="/guides/technical-analysis" className="text-blue-600 hover:text-blue-800">
                  Technical Analysis Basics
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}