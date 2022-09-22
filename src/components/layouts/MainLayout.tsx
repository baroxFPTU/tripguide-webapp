import React from 'react';

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
