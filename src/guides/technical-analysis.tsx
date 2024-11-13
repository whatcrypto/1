import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, LineChart, TrendingUp, TrendingDown, Activity, BarChart2, Target } from 'lucide-react';
import { Logo } from '../components/Logo';

export default function TechnicalAnalysis() {
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
          <h1>Technical Analysis Basics</h1>
          <p className="lead">
            Learn how to read charts and identify key patterns to make better trading decisions.
          </p>

          <h2>Understanding Price Action</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900 m-0">Uptrend</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Higher highs</li>
                <li>Higher lows</li>
                <li>Price above moving averages</li>
                <li>Strong buying volume</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-5 h-5 text-red-500" />
                <h3 className="font-semibold text-gray-900 m-0">Downtrend</h3>
              </div>
              <ul className="m-0 text-sm text-gray-600">
                <li>Lower highs</li>
                <li>Lower lows</li>
                <li>Price below moving averages</li>
                <li>Strong selling volume</li>
              </ul>
            </div>
          </div>

          <h2>Key Technical Indicators</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <LineChart className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold text-gray-900 m-0">Moving Averages</h3>
              </div>
              <p className="text-gray-600 text-sm m-0 mb-4">
                Moving averages help identify trends and support/resistance levels.
              </p>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium text-gray-900 m-0">Common Moving Averages:</h4>
                  <ul className="text-sm text-gray-600 m-0">
                    <li>20-day MA: Short-term trend</li>
                    <li>50-day MA: Medium-term trend</li>
                    <li>200-day MA: Long-term trend</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-purple-500" />
                <h3 className="font-semibold text-gray-900 m-0">RSI (Relative Strength Index)</h3>
              </div>
              <p className="text-gray-600 text-sm m-0 mb-4">
                Measures momentum and identifies overbought/oversold conditions.
              </p>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium text-gray-900 m-0">Key Levels:</h4>
                  <ul className="text-sm text-gray-600 m-0">
                    <li>Above 70: Overbought</li>
                    <li>Below 30: Oversold</li>
                    <li>50: Neutral level</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <BarChart2 className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold text-gray-900 m-0">Volume</h3>
              </div>
              <p className="text-gray-600 text-sm m-0 mb-4">
                Confirms trend strength and potential reversals.
              </p>
              <div className="space-y-2">
                <div>
                  <h4 className="font-medium text-gray-900 m-0">Volume Analysis:</h4>
                  <ul className="text-sm text-gray-600 m-0">
                    <li>High volume: Strong trend confirmation</li>
                    <li>Low volume: Weak trend/potential reversal</li>
                    <li>Volume spikes: Important price levels</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Chart Patterns</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 m-0 mb-4">Continuation Patterns</h3>
              <ul className="space-y-2 m-0">
                <li>
                  <strong>Bull Flag:</strong>
                  <p className="text-sm text-gray-600 m-0">
                    Short consolidation after uptrend
                  </p>
                </li>
                <li>
                  <strong>Triangle:</strong>
                  <p className="text-sm text-gray-600 m-0">
                    Price converges before breakout
                  </p>
                </li>
                <li>
                  <strong>Cup and Handle:</strong>
                  <p className="text-sm text-gray-600 m-0">
                    Rounded bottom with small pullback
                  </p>
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 m-0 mb-4">Reversal Patterns</h3>
              <ul className="space-y-2 m-0">
                <li>
                  <strong>Double Top/Bottom:</strong>
                  <p className="text-sm text-gray-600 m-0">
                    Two peaks/troughs at similar levels
                  </p>
                </li>
                <li>
                  <strong>Head and Shoulders:</strong>
                  <p className="text-sm text-gray-600 m-0">
                    Three peaks with middle highest
                  </p>
                </li>
                <li>
                  <strong>Rising/Falling Wedge:</strong>
                  <p className="text-sm text-gray-600 m-0">
                    Converging trendlines with slope
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <h2>Support and Resistance</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-blue-800 flex items-center gap-2 mt-0">
              <Target className="w-5 h-5" />
              Key Price Levels
            </h3>
            <div className="space-y-4 mt-4">
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Support Levels</h4>
                <ul className="text-sm text-gray-600 m-0">
                  <li>Previous lows</li>
                  <li>Moving averages</li>
                  <li>Round numbers</li>
                  <li>High volume areas</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 m-0">Resistance Levels</h4>
                <ul className="text-sm text-gray-600 m-0">
                  <li>Previous highs</li>
                  <li>Trend lines</li>
                  <li>Fibonacci levels</li>
                  <li>Psychological levels</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Practical Application</h2>

          <h3>Creating a Trading Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 m-0 mb-4">Entry Rules</h4>
              <ul className="space-y-2 m-0">
                <li>Multiple indicator confirmation</li>
                <li>Volume confirmation</li>
                <li>Pattern completion</li>
                <li>Risk/reward ratio check</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 m-0 mb-4">Exit Rules</h4>
              <ul className="space-y-2 m-0">
                <li>Target levels reached</li>
                <li>Pattern invalidation</li>
                <li>Indicator divergence</li>
                <li>Stop loss hit</li>
              </ul>
            </div>
          </div>

          <h2>Common Mistakes to Avoid</h2>
          <ul>
            <li>Over-analyzing (paralysis by analysis)</li>
            <li>Using too many indicators</li>
            <li>Ignoring market context</li>
            <li>Not confirming with multiple timeframes</li>
            <li>Trading against the trend</li>
          </ul>

          <h2>Next Steps</h2>
          <p>
            To improve your technical analysis skills:
          </p>
          <ol>
            <li>Practice identifying patterns on historical charts</li>
            <li>Start with basic indicators before adding complexity</li>
            <li>Keep a trading journal to track your analysis</li>
            <li>Review your trades regularly to improve</li>
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
                <Link to="/guides/portfolio-building" className="text-blue-600 hover:text-blue-800">
                  Building Your First Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </article>
      </main>
    </div>
  );
}