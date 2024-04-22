import Navigation from '@/components/site/navigation';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <main className="h-full">
        {children}
      </main>
    </>
  );
}

const LayoutWithClerk = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <Layout>
        {children}
      </Layout>
    </ClerkProvider>
  );
}

export default LayoutWithClerk;
