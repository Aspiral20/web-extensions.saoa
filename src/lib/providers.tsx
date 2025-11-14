"use client"
import React, { FC } from 'react';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Providers;