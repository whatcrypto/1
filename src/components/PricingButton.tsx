import React from 'react';
import { useMemberstack } from '@memberstack/react';

interface Props {
  className?: string;
}

export function PricingButton({ className }: Props) {
  const { member, openModal } = useMemberstack();

  const handleClick = async () => {
    if (!member) {
      // First create an account
      await openModal('SIGNUP', {
        onSuccess: async (member) => {
          // After successful signup, redirect to checkout
          await member.redirectToCheckout({
            planId: 'prc_pro-monthly-th3o0q7o',
            successUrl: window.location.origin + '/dashboard',
            cancelUrl: window.location.origin + '/pricing'
          });
        }
      });
      return;
    }
    
    // If already logged in, go directly to checkout
    await member.redirectToCheckout({
      planId: 'prc_pro-monthly-th3o0q7o',
      successUrl: window.location.origin + '/dashboard',
      cancelUrl: window.location.origin + '/pricing'
    });
  };

  return (
    <button
      onClick={handleClick}
      className={className}
    >
      Get Started
    </button>
  );
}