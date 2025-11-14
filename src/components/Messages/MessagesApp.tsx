'use client';

import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageEditor from './MessageEditor';
import useMessages from '../../hooks/useMessages';

export default function MessagesApp() {
  const { messages, addMessage, updateMessage, removeMessage } = useMessages();
  const [editingId, setEditingId] = useState<string | null>(null);

  const startNew = () => setEditingId(null);
  const startEdit = (id: string) => setEditingId(id);
  const stopEdit = () => setEditingId(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-medium">Message Templates</h2>
          <button className="btn-primary" onClick={startNew}>New</button>
        </div>
        <MessageList messages={messages} onEdit={startEdit} onDelete={removeMessage} />
      </div>
      <div>
        <MessageEditor
          key={editingId ?? 'new'}
          message={editingId ? messages.find(m => m.id === editingId) ?? null : null}
          onSave={(payload) => {
            if (editingId) {
              updateMessage(editingId, payload);
            } else {
              addMessage(payload);
            }
            stopEdit();
          }}
          onCancel={stopEdit}
        />
      </div>
    </div>
  );
}

