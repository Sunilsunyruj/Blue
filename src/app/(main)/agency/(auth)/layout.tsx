import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default AuthLayout;
