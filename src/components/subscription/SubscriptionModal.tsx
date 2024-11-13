import React from 'react';
import { X } from 'lucide-react';
import { useSubscription } from '../../context/SubscriptionContext';

interface Props {
  onClose: () => void;
}

export function SubscriptionModal({ onClose }: Props) {
  const { subscribe } = useSubscription();

  const handleSubscribe = async () => {
    try {
      await subscribe();
      onClose();
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#151C2C] rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">Upgrade to Premium</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">$29/month</div>
            <p className="text-slate-400">Get access to all premium features</p>
          </div>

          <ul className="space-y-3">
            {[
              'Clear buy/sell signals',
              'Real-time market alerts',
              'Model portfolios',
              'Risk management guidance',
              'Priority support'
            ].map((feature, index) => (
              <li key={index} className="flex items-center gap-3 text-slate-300">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                {feature}
              </li>
            ))}
          </ul>

          <button
            onClick={handleSubscribe}
            className="w-full py-3 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Upgrade Now
          </button>

          <p className="text-center text-sm text-slate-400">
            Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </div>
  );
}