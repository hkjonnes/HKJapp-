import React, { useState, useEffect } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('hkChat');
    if (saved) setMessages(JSON.parse(saved));
  }, []);

  const sendMessage = () => {
    if (!input) return;
    const newMsg = { text: input, time: new Date().toLocaleTimeString() };
    const updated = [...messages, newMsg];
    setMessages(updated);
    setInput('');
    localStorage.setItem('hkChat', JSON.stringify(updated));
  };

  return (
    <div className="container p-4">
      <h2 className="text-2xl mb-3">Chat 💬</h2>
      <div className="chat-box border p-2 rounded h-64 overflow-y-auto mb-2">
        {messages.map((msg, idx) => (
          <div key={idx} className="mb-1">
            <span style={{ fontSize: 12, color: '#666' }}>{msg.time}</span> - {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border p-1 rounded"
          placeholder="Type message..."
        />
        <button onClick={sendMessage} className="bg-purple-500 text-white px-3 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
