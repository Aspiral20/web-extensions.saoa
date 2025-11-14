'use client';

import React from 'react';
import type { Message } from '../../types/message';

export default function MessageList({ messages, onEdit, onDelete } : { messages: Message[]; onEdit: (id: string) => void; onDelete: (id: string) => void; }) {
  if (!messages.length) {
    return <div className="p-4 border rounded text-sm text-gray-600">No messages yet. Click "New" to add one.</div>;
  }

  return (
    <ul className="space-y-3">
      {messages.map(m => (
        <li key={m.id} className="p-3 border rounded flex items-start justify-between">
          <div className="flex-1">
            <div className="font-medium">{m.text.length > 80 ? m.text.slice(0,80) + '…' : m.text}</div>
            <div className="text-xs text-gray-500 mt-2">{new Date(m.createdAt).toLocaleString()}</div>
          </div>
          <div className="ml-4 flex items-center gap-2">
            <button className="text-sm text-blue-600" onClick={() => onEdit(m.id)}>Edit</button>
            <button className="text-sm text-red-600" onClick={() => onDelete(m.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

