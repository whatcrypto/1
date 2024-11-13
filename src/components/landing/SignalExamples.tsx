import React from 'react';
import { ArrowUpRight, ArrowDownRight, Target, AlertTriangle } from 'lucide-react';

export function SignalExamples() {
  const signals = [
    {
      type: 'buy',
      coin: 'Bitcoin',
      symbol: 'BTC',
      price: 42500,
      target: 52000,
      stopLoss: 39000,
      reasoning: "Strong accumulation phase with increasing institutional buying. Key resistance levels broken with high volume."
    },
    {
      type: 'sell',
      coin: 'Ethereum',
      symbol: 'ETH',
      price: 2850,
      target: 2400,
      stopLoss: 3000,
      reasoning: "Approaching major resistance with declining volume. Consider taking profits at these levels."
    }
  ];

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Clear, Actionable Signals
          </h2>
          <p className="text-xl text-gray-600">
            Every signal includes specific entry points, targets, and protective stops
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {signals.map((signal) => (
            <div key={signal.symbol} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/${signal.symbol.toLowerCase()}.png`}
                    alt={signal.coin}
                    className="w-12 h-12"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{signal.coin}</h3>
                    <span className="text-gray-600">{signal.symbol}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  signal.type === 'buy' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}>
                  {signal.type.toUpperCase()} Signal
                </span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Entry Price</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ${signal.price.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Target</p>
                    <p className={`text-lg font-semibold ${
                      signal.type === 'buy' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      ${signal.target.toLocaleString()}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Stop Loss</p>
                    <p className="text-lg font-semibold text-red-600">
                      ${signal.stopLoss.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      {signal.reasoning}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      {signal.type === 'buy'
                        ? "Set a stop loss to protect your position. Consider scaling in if price drops to accumulate at better levels."
                        : "Lock in profits with a trailing stop. Watch for potential bounce at support levels."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}