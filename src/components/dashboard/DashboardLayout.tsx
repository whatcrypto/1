import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMemberstack } from '@memberstack/react';
import Dashboard from '../../pages/Dashboard';

export default function DashboardLayout() {
  const { member } = useMemberstack();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAccess = async () => {
      if (!member) {
        navigate('/pricing');
        return;
      }

      const plans = await member.getPlans();
      const hasPremium = plans.some(plan => 
        plan.id === 'pln_premium-monthly' || 
        plan.id === 'pln_premium-yearly'
      );

      if (!hasPremium) {
        navigate('/pricing');
      }
    };

    checkAccess();
  }, [member, navigate]);

  if (!member) return null;

  return <Dashboard />;
}