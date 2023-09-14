'use client';

import Header from '@/Components/Header';
import './globals.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <Header />
          <div className='mt-8'>
            {children}
          </div>
        </body>
      </html>
    )
  }