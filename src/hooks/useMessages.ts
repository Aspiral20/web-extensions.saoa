'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Message, MessagePayload } from '../types/message';

const STORAGE_KEY = 'saoa_messages_v1';

function readStorage(): Message[] {
  try {
    const raw = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return raw ? JSON.parse(raw) as Message[] : [];
  } catch (err) {
    console.error('Failed to read messages from localStorage', err);
    return [];
  }
}

function writeStorage(items: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error('Failed to write messages to localStorage', err);
  }
}

export default function useMessages() {
  const [messages, setMessages] = useState<Message[]>(() => readStorage());

  useEffect(() => {
    writeStorage(messages);
  }, [messages]);

  function addMessage(payload: MessagePayload) {
    const m: Message = { id: uuidv4(), text: payload.text, tags: payload.tags ?? [], createdAt: new Date().toISOString() };
    setMessages(prev => [m, ...prev]);
  }

  function updateMessage(id: string, payload: MessagePayload) {
    setMessages(prev => prev.map(m => m.id === id ? { ...m, text: payload.text, tags: payload.tags ?? [] } : m));
  }

  function removeMessage(id: string) {
    setMessages(prev => prev.filter(m => m.id !== id));
  }

  return { messages, addMessage, updateMessage, removeMessage };
}

