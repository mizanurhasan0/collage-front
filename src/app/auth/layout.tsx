import React from 'react';

export default function AuthLayout(
  { children }: { children: React.ReactNode; }
) {
  return (
    <div className="container mx-auto h-screen flex flex-col">
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
