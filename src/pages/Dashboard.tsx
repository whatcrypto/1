import React from 'react';
import { TrendingUp, ArrowUp, ArrowDown, Star, AlertTriangle, Activity, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  // Sample portfolio data - in a real app, this would come from a store/API
  const portfolioData = {
    riskScore: 7.2,
    healthScore: 82,
    holdings: [
      {
        name: 'Bitcoin',
        symbol: 'BTC',
        allocation: 45,
        change24h: 2.4,
        action: 'HOLD',
        signal: 'Accumulation'
      },
      {
        name: 'Ethereum',
        symbol: 'ETH',
        allocation: 35,
        change24h: -1.2,
        action: 'BUY',
        signal: 'Distribution'
      },
      {
        name: 'Solana',
        symbol: 'SOL',
        allocation: 20,
        change24h: 5.6,
        action: 'HOLD',
        signal: 'Breakout'
      }
    ],
    watchlist: [
      {
        name: 'Cardano',
        symbol: 'ADA',
        price: 1.25,
        change24h: 3.8,
        signal: 'Accumulation',
        alert: 'Approaching buy zone'
      },
      {
        name: 'Polkadot',
        symbol: 'DOT',
        price: 18.75,
        change24h: -2.1,
        signal: 'Distribution',
        alert: 'Support level test'
      }
    ],
    alerts: [
      {
        type: 'PRICE',
        coin: 'BTC',
        message: 'Bitcoin approaching resistance at $45,000',
        timestamp: '2h ago'
      },
      {
        type: 'SIGNAL',
        coin: 'ETH',
        message: 'Ethereum showing accumulation pattern',
        timestamp: '4h ago'
      },
      {
        type: 'PORTFOLIO',
        message: 'Portfolio rebalancing recommended',
        timestamp: '1d ago'
      }
    ]
  };

  return (
    <div className="space-y-6">
      {/* Portfolio Overview */}
      <div className="bg-[#151C2C] rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Portfolio Overview</h2>
          <Link 
            to="/portfolios"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            View All Portfolios
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-slate-800/50 rounded-lg">
            <p className="text-sm text-slate-400">Risk Score</p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-2xl font-bold text-white">{portfolioData.riskScore}</p>
              <span className="text-sm text-yellow-400">Medium</span>
            </div>
          </div>

          <div className="p-4 bg-slate-800/50 rounded-lg">
            <p className="text-sm text-slate-400">Health Score</p>
            <div className="flex items-baseline gap-2 mt-1">
              <p className="text-2xl font-bold text-white">{portfolioData.healthScore}%</p>
              <span className="text-sm text-green-400">Good</span>
            </div>
          </div>
        </div>

        {/* Holdings */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">Current Holdings</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-400 uppercase">Asset</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase">Allocation</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-slate-400 uppercase">24h Change</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-slate-400 uppercase">Action</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-slate-400 uppercase">Signal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {portfolioData.holdings.map((holding) => (
                  <tr key={holding.symbol} className="hover:bg-slate-800/50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <img
                          src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/${holding.symbol.toLowerCase()}.png`}
                          alt={holding.name}
                          className="w-8 h-8 rounded-full"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/generic.png';
                          }}
                        />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-white">{holding.name}</div>
                          <div className="text-sm text-slate-400">{holding.symbol}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className="text-sm text-white">{holding.allocation}%</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className={`flex items-center justify-end ${
                        holding.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {holding.change24h >= 0 ? (
                          <ArrowUp className="w-4 h-4 mr-1" />
                        ) : (
                          <ArrowDown className="w-4 h-4 mr-1" />
                        )}
                        <span>{Math.abs(holding.change24h)}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        holding.action === 'BUY' 
                          ? 'bg-green-500/10 text-green-400'
                          : holding.action === 'SELL'
                          ? 'bg-red-500/10 text-red-400'
                          : 'bg-yellow-500/10 text-yellow-400'
                      }`}>
                        {holding.action}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-sm text-slate-400">{holding.signal}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Watchlist & Alerts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Watchlist */}
        <div className="bg-[#151C2C] rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Watchlist</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm">
              Add Coin
            </button>
          </div>

          <div className="space-y-4">
            {portfolioData.watchlist.map((coin) => (
              <div 
                key={coin.symbol}
                className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/${coin.symbol.toLowerCase()}.png`}
                      alt={coin.name}
                      className="w-8 h-8 rounded-full"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/32/color/generic.png';
                      }}
                    />
                    <div className="ml-3">
                      <div className="text-sm font-medium text-white">{coin.name}</div>
                      <div className="text-sm text-slate-400">{coin.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-white">
                      ${coin.price}
                    </div>
                    <div className={`flex items-center justify-end ${
                      coin.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {coin.change24h >= 0 ? (
                        <ArrowUp className="w-4 h-4 mr-1" />
                      ) : (
                        <ArrowDown className="w-4 h-4 mr-1" />
                      )}
                      <span className="text-sm">{Math.abs(coin.change24h)}%</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm text-slate-400">{coin.signal}</span>
                  <span className="text-sm text-yellow-400">{coin.alert}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-[#151C2C] rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Recent Alerts</h2>
            <button className="text-blue-400 hover:text-blue-300 text-sm">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {portfolioData.alerts.map((alert, index) => (
              <div 
                key={index}
                className="p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg ${
                    alert.type === 'PRICE'
                      ? 'bg-blue-500/20 text-blue-400'
                      : alert.type === 'SIGNAL'
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {alert.type === 'PRICE' ? (
                      <Activity className="w-5 h-5" />
                    ) : alert.type === 'SIGNAL' ? (
                      <Eye className="w-5 h-5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm text-white">{alert.message}</p>
                    <p className="text-xs text-slate-400 mt-1">{alert.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;