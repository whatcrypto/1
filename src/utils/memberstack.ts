import { useMemberstack } from '@memberstack/react';

export const MEMBERSTACK_CONFIG = {
  publicKey: 'pk_23cde470764e72440410',
  appId: 'app_cm0blq3ox00bu0sv8fvk20apa'
};

export const PLAN_ID = 'prc_pro-monthly-th3o0q7o';

export function useSubscription() {
  const { member } = useMemberstack();

  const checkSubscription = async () => {
    if (!member) return false;
    const plans = await member.getPlans();
    return plans.some(plan => plan.id === PLAN_ID);
  };

  const subscribe = async () => {
    if (!member) {
      throw new Error('Must be logged in to subscribe');
    }

    return member.redirectToCheckout({
      planId: PLAN_ID,
      successUrl: window.location.origin + '/dashboard',
      cancelUrl: window.location.origin + '/pricing'
    });
  };

  return {
    checkSubscription,
    subscribe
  };
}