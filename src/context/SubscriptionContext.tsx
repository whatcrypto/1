import React, { createContext, useContext } from 'react';
import { useMemberstack } from '@memberstack/react';

interface SubscriptionContextType {
  isSubscribed: boolean;
  currentPlan: string | null;
  subscribe: () => Promise<void>;
}

const SubscriptionContext = createContext<SubscriptionContextType>({
  isSubscribed: false,
  currentPlan: null,
  subscribe: async () => {}
});

export function SubscriptionProvider({ children }: { children: React.ReactNode }) {
  const { member } = useMemberstack();

  const subscribe = async () => {
    if (!member) {
      throw new Error('Must be logged in to subscribe');
    }

    await member.redirectToCheckout({
      planId: 'prc_pro-monthly-th3o0q7o',
      successUrl: window.location.origin + '/dashboard',
      cancelUrl: window.location.origin + '/pricing'
    });
  };

  return (
    <SubscriptionContext.Provider value={{
      isSubscribed: member?.planConnections?.some(plan => plan.id === 'prc_pro-monthly-th3o0q7o') ?? false,
      currentPlan: member?.planConnections?.[0]?.id ?? null,
      subscribe
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  return useContext(SubscriptionContext);
}