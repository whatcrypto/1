import React from 'react';
import { useMemberstack } from '@memberstack/react';

interface Props {
  type: 'login' | 'signup';
  className?: string;
}

export function AuthButton({ type, className }: Props) {
  const { openModal } = useMemberstack();

  return (
    <button
      onClick={() => openModal(type.toUpperCase())}
      className={className}
    >
      {type === 'login' ? 'Sign In' : 'Get Started'}
    </button>
  );
}