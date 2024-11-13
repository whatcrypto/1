import React from 'react';
import { TrendingUp } from 'lucide-react';

interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  return (
    <TrendingUp className={`text-blue-500 ${className}`} />
  );
}