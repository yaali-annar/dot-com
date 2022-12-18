import React, { ReactNode } from 'react';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode
}

const RootLayout=({children}: RootLayoutProps) => (
  <html>
    <head >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;