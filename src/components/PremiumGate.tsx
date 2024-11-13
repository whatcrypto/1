import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemberstack } from '@memberstack/react';

interface Props {
  children: React.ReactNode;
}

export function PremiumGate({ children }: Props) {
  const { member } = useMemberstack();
  const navigate = useNavigate();

  useEffect(() => {
    const checkPremiumAccess = async () => {
      if (!member) {
        navigate('/dashboard/premium');
        return;
      }

      const plans = await member.getPlans();
      const hasPremium = plans.some(plan => 
        plan.id === 'pln_premium-monthly' || 
        plan.id === 'pln_premium-yearly'
      );

      if (!hasPremium) {
        navigate('/dashboard/premium');
      }
    };

    checkPremiumAccess();
  }, [member, navigate]);

  if (!member) {
    return (
      <div className="min-h-screen bg-[#0B1121] flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return <>{children}</>;
}