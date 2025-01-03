import React from 'react'
import NavBar from '../_components/navbar/NavBar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>
    <NavBar  />
    {children}
  </div>;
}
