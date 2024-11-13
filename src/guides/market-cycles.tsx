import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, TrendingUp, TrendingDown, AlertTriangle, Target } from 'lucide-react';
import { Logo } from '../components/Logo';

export default function MarketCycles() {
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
          <h1>Understanding Crypto Market Cycles</h1>
          <p className="lead">
            Learn when to buy and sell based on market cycles - explained in simple terms without technical jargon.
          </p>

          <h2>What Are Market Cycles?</h2>
          <p>
            Cryptocurrency markets move in cycles, similar to traditional markets. Understanding these cycles 
            can help you make better investment decisions. A complete market cycle typically consists of four phases:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900 m-0">Accumulation Phase</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Market has bottomed</li>
                <li>Smart money starts buying</li>
                <li>Sentiment is still negative</li>
                <li>Price moves sideways</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-gray-900 m-0">Markup Phase</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Price starts trending up</li>
                <li>Public interest grows</li>
                <li>Positive news coverage</li>
                <li>FOMO kicks in</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                <h3 className="font-semibold text-gray-900 m-0">Distribution Phase</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Smart money starts selling</li>
                <li>Price reaches peak</li>
                <li>Maximum euphoria</li>
                <li>Warning signs appear</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-gray-900 m-0">Markdown Phase</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Price starts declining</li>
                <li>Sentiment turns negative</li>
                <li>Media coverage fades</li>
                <li>Weak hands sell at a loss</li>
              </ul>
            </div>
          </div>

          <h2>Identifying Market Phases</h2>
          <p>
            Each phase has distinct characteristics that can help you identify where we are in the cycle:
          </p>

          <h3>Accumulation Phase Indicators</h3>
          <ul>
            <li>Price has been declining for an extended period</li>
            <li>Trading volume is low but stable</li>
            <li>Negative news has little impact on price</li>
            <li>Long-term investors start accumulating</li>
          </ul>

          <h3>Markup Phase Indicators</h3>
          <ul>
            <li>Price breaks above key resistance levels</li>
            <li>Trading volume increases significantly</li>
            <li>Positive news drives further gains</li>
            <li>New investors enter the market</li>
          </ul>

          <h3>Distribution Phase Indicators</h3>
          <ul>
            <li>Price reaches all-time highs</li>
            <li>Extreme optimism in media coverage</li>
            <li>Many new projects launching</li>
            <li>Early investors start taking profits</li>
          </ul>

          <h3>Markdown Phase Indicators</h3>
          <ul>
            <li>Price consistently makes lower lows</li>
            <li>Trading volume decreases</li>
            <li>Negative news dominates headlines</li>
            <li>Projects start shutting down</li>
          </ul>

          <h2>How to Use This Knowledge</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-blue-800 m-0 mb-4">Investment Strategy by Phase</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Accumulation Phase</h4>
                <p className="text-sm text-gray-600 m-0">
                  Start building positions in strong projects. Focus on dollar-cost averaging and 
                  fundamental analysis.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Markup Phase</h4>
                <p className="text-sm text-gray-600 m-0">
                  Continue adding to positions but be more selective. Start taking partial profits 
                  as price rises.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Distribution Phase</h4>
                <p className="text-sm text-gray-600 m-0">
                  Take significant profits. Reduce position sizes and raise stop-loss levels.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Markdown Phase</h4>
                <p className="text-sm text-gray-600 m-0">
                  Stay mostly in cash or stablecoins. Build a watchlist of projects to accumulate 
                  when the cycle bottoms.
                </p>
              </div>
            </div>
          </div>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li>
              <strong>FOMO during markup:</strong> Don't chase prices higher without a plan
            </li>
            <li>
              <strong>Holding through distribution:</strong> Take profits when euphoria is high
            </li>
            <li>
              <strong>Selling in panic:</strong> Avoid emotional decisions during markdown
            </li>
            <li>
              <strong>Missing accumulation:</strong> Build positions when others are fearful
            </li>
          </ul>

          <h2>Risk Management</h2>
          <p>
            Regardless of the market phase, always follow these risk management principles:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 m-0 mb-4">Position Sizing</h4>
              <ul className="space-y-2 m-0">
                <li>Never invest more than you can afford to lose</li>
                <li>Use percentage-based position sizing</li>
                <li>Maintain cash reserves for opportunities</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 m-0 mb-4">Stop Losses</h4>
              <ul className="space-y-2 m-0">
                <li>Always use stop-loss orders</li>
                <li>Move stops up as price rises</li>
                <li>Don't move stops lower</li>
              </ul>
            </div>
          </div>

          <h2>Next Steps</h2>
          <p>
            To deepen your understanding of market cycles:
          </p>
          <ul>
            <li>Study historical crypto market cycles</li>
            <li>Practice identifying cycle phases in real-time</li>
            <li>Create a trading plan for each phase</li>
            <li>Join communities to discuss market analysis</li>
          </ul>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-8">
            <h3 className="text-gray-900 m-0 mb-4">Related Guides</h3>
            <ul className="space-y-2 m-0">
              <li>
                <Link to="/guides/technical-analysis" className="text-blue-600 hover:text-blue-800">
                  Introduction to Technical Analysis
                </Link>
              </li>
              <li>
                <Link to="/guides/risk-management" className="text-blue-600 hover:text-blue-800">
                  Risk Management Strategies
                </Link>
              </li>
              <li>
                <Link to="/guides/portfolio-building" className="text-blue-600 hover:text-blue-800">
                  Building a Balanced Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}