import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemberstack } from '@memberstack/react';

interface Props {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: Props) {
  const { member } = useMemberstack();
  const location = useLocation();

  if (!member) {
    // Redirect to pricing page but save the attempted URL
    return <Navigate to="/pricing" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}