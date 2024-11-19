'use client';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { useState } from 'react';
import { QueryClientProvider, useQueryClient } from '@tanstack/react-query';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [getQC] = useState(() => useQueryClient());
  return (
    <html lang="en">
      <QueryClientProvider client={getQC}>
        <body>{children}</body>
      </QueryClientProvider>
    </html>
  );
}
