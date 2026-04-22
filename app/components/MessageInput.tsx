'use client';

import { useState } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';

export function MessageInput() {
    const [input, setInput] = useState('');

    return (
        <div  className="fixed bottom-0 left-0 right-0 lg:left-64 px-4 py-4 bg-gradient-to-t from-[var(--background)] to-[var(--background)]/80 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-xl focus-within:border-[var(--primary)] transition-colors">
                    <button className="p-2 hover:bg-[var(--border)] rounded-lg transition-colors text-gray-400 hover:text-gray-200">
                        <Paperclip className="w-5 h-5" />
                    </button>

                    <input
                        type="text"
                        placeholder="Ask me anything..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-1 bg-transparent text-gray-100 placeholder-gray-500 focus:outline-none"
                    />

                    <button className="p-2 hover:bg-[var(--border)] rounded-lg transition-colors text-gray-400 hover:text-gray-200">
                        <Mic className="w-5 h-5" />
                    </button>

                    <button className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/20 text-white">
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
