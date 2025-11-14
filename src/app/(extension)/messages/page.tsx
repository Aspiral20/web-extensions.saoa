'use client';

import React from 'react';
import MessagesApp from '@/components/Messages/MessagesApp';

export default function MessagesPage() {
  return (
    <main className="min-h-screen w-full max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-semibold mb-6">Messages</h1>
      <p className="text-sm text-gray-600 mb-6">Create and manage your outreach message templates. Use random preview to see how messages might appear to recipients.</p>
      <MessagesApp />
    </main>
  );
}

