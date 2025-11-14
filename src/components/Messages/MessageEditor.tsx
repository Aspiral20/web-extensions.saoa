'use client';

import React, { useEffect, useState } from 'react';
import type { MessagePayload, Message } from '../../types/message';

export default function MessageEditor({ message, onSave, onCancel } : { message: Message | null; onSave: (payload: MessagePayload) => void; onCancel: () => void; }) {
  const [text, setText] = useState(message?.text ?? '');
  const [tags, setTags] = useState((message?.tags ?? []).join(', '));

  useEffect(() => {
    setText(message?.text ?? '');
    setTags((message?.tags ?? []).join(', '));
  }, [message]);

  function handleSave() {
    const payload: MessagePayload = { text: text.trim(), tags: tags.split(',').map(t => t.trim()).filter(Boolean) };
    if (!payload.text) return alert('Message cannot be empty');
    onSave(payload);
    // If we're adding a new message (no message prop), clear inputs to allow creating another quickly
    if (!message) {
      setText('');
      setTags('');
    }
  }

  function handlePreviewRandom() {
    // simple randomization example — in real app you'd sampling different messages
    alert(text || 'No text to preview');
  }

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-medium mb-2">{message ? 'Edit' : 'New'} Message</h3>
      <textarea className="w-full h-40 p-2 border rounded mb-2" value={text} onChange={e => setText(e.target.value)} />
      <input className="w-full p-2 border rounded mb-2" placeholder="tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} />
      <div className="flex gap-2">
        <button className="btn-primary" onClick={handleSave}>{message ? 'Save' : 'Add'}</button>
        <button className="btn-secondary" onClick={onCancel}>Cancel</button>
        <button className="ml-auto text-sm text-gray-600" onClick={handlePreviewRandom}>Preview</button>
      </div>
    </div>
  );
}
