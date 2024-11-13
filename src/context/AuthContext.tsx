import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMemberstack } from '@memberstack/react';

interface AuthContextType {
  isAuthenticated: boolean;
  isPremium: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  isPremium: false,
  loading: true
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { member } = useMemberstack();
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => {
    const checkMembership = async () => {
      if (member) {
        const plans = await member.getPlans();
        setIsPremium(plans.some(plan => plan.id === 'prc_pro-monthly-th3o0q7o'));
      }
      setLoading(false);
    };

    checkMembership();
  }, [member]);

  return (
    <AuthContext.Provider value={{
      isAuthenticated: !!member,
      isPremium,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}