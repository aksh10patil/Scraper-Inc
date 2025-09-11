'use client';

import { useState } from 'react';

// Define the structure of a message for type safety
interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function Chat() {
  // State to manage if the chat window is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // State to hold the conversation history
  const [messages, setMessages] = useState<Message[]>([]);

  // State for the user's current input
  const [input, setInput] = useState('');

  // State to show a "Thinking..." message while waiting for a response
  const [isLoading, setIsLoading] = useState(false);

  // This function is called when the user sends a message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return; // Don't send empty messages

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    // --- TODO: REPLACE THIS WITH A REAL API CALL to /api/chat ---
    // This is a placeholder to simulate a bot response
    setTimeout(() => {
      const botMessage: Message = { text: `This is a placeholder response for: "${input}"`, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
      setIsLoading(false);
    }, 1500);
    // -----------------------------------------------------------------
  };

  // If the chat is closed, only show the floating button
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 gradient-style text-white p-3 rounded-full shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        aria-label="Open chat"
      >
        Chat with Us
      </button>
    );
  }

  // If the chat is open, show the full chat window
  return (
    <div className="fixed bottom-5 right-5 w-80 h-96 gradient-style border border-gray-700 rounded-lg shadow-lg flex flex-col z-50">
      
      {/* Header Section */}
      <div className="p-3 border-b border-gray-700 flex justify-between items-center">
        <h2 className="font-bold text-white">Virtual Assistant</h2>
        <button 
          onClick={() => setIsOpen(false)} 
          className="text-gray-300 hover:text-white text-2xl leading-none"
          aria-label="Close chat"
        >
          &times;
        </button>
      </div>

      {/* Message Display Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-2 rounded-lg text-sm max-w-[80%] ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-white'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="p-2 rounded-lg bg-gray-700 text-white text-sm">
              Thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input Form Section */}
      <form onSubmit={handleSubmit} className="p-2 border-t border-gray-700 flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 py-1 px-2 bg-gray-800 text-white border border-gray-600 rounded-l-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white p-2 rounded-r-md text-sm font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed" 
          disabled={isLoading}
          aria-label="Send message"
        >
          Send
        </button>
      </form>
    </div>
  );
}
