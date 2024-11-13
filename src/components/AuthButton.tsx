import React from 'react';
import { useMemberstack } from '@memberstack/react';

interface Props {
  type: 'login' | 'signup';
  className?: string;
  children?: React.ReactNode;
}

export function AuthButton({ type, className, children }: Props) {
  const { openModal } = useMemberstack();

  return (
    <button
      onClick={() => openModal(type.toUpperCase())}
      className={className}
    >
      {children || (type === 'login' ? 'Sign In' : 'Get Started')}
    </button>
  );
}