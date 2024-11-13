import React from 'react';
import { 
  LineChart, 
  Bell, 
  ShieldCheck, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  Compass
} from 'lucide-react';

export function FeatureShowcase() {
  return (
    <div className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Clear Guidance for Every Step
          </h2>
          <p className="text-xl text-gray-600">
            Simple, actionable insights that help you make better investment decisions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Signal Example */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <LineChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Clear Buy/Sell Signals</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src="https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/btc.png"
                    alt="Bitcoin"
                    className="w-8 h-8"
                  />
                  <span className="text-gray-900 font-medium">Bitcoin</span>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  Buy Signal
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                Bitcoin is showing strong accumulation patterns with increasing adoption. Consider adding to your position.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Entry Price: <span className="text-gray-900">$42,500</span></span>
                <span className="text-gray-500">Target: <span className="text-green-600">$52,000</span></span>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Get straightforward recommendations based on market conditions and risk levels
            </p>
          </div>

          {/* Alert Example */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Bell className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Smart Alerts</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mt-1">
                  <ArrowUpRight className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium mb-1">Buy Opportunity: Ethereum</p>
                  <p className="text-gray-600 text-sm">Price has reached our recommended entry point of $2,850. Consider starting a position now.</p>
                </div>
                <span className="text-gray-500 text-xs whitespace-nowrap">5m ago</span>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mt-1">
                  <AlertTriangle className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium mb-1">Take Profit: Bitcoin</p>
                  <p className="text-gray-600 text-sm">Approaching target price of $45,000. Consider taking partial profits.</p>
                </div>
                <span className="text-gray-500 text-xs whitespace-nowrap">15m ago</span>
              </div>
            </div>
          </div>

          {/* Risk Management */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Risk Protection</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h4 className="text-gray-900 font-medium mb-3">Investment Guidelines</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Position Size</span>
                  <span className="text-gray-900">1-5% per trade</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Stop Loss</span>
                  <span className="text-gray-900">Always included</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Risk/Reward</span>
                  <span className="text-gray-900">Minimum 2:1</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Clear guidelines to help protect your investment and manage risk
            </p>
          </div>

          {/* Market Guidance */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Compass className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Market Guidance</h3>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Market Phase</p>
                    <p className="text-gray-600 text-sm">Current market is in accumulation phase. Focus on building positions in strong projects.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-900 font-medium mb-1">Key Levels</p>
                    <p className="text-gray-600 text-sm">Major resistance at $48,000. Watch for breakout confirmation before adding.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}