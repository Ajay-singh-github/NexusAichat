'use client';

import { useState } from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';

export function MessageInput() {
    const [input, setInput] = useState('');
    const { isOpen } = useSidebar();

    return (
        <div style={{ marginLeft: isOpen ? '288px' : '0' }} className="fixed bottom-0 left-0 right-0 px-4 py-4 bg-gradient-to-b from-transparent to-[#0f0f1a] flex justify-center transition-all duration-300">
            <div className="max-w-4xl w-full">
                <div style={{ marginBottom: 24, paddingLeft: 8, paddingRight: 8, paddingTop: 8, paddingBottom: 8 }} className="flex items-center gap-3 px-4 py-3 bg-[var(--card)] border border-[var(--border)] rounded-xl focus-within:border-[var(--primary)] transition-colors">
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

                    <button style={{padding:4}} className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg transition-all hover:shadow-lg hover:shadow-purple-500/20 text-white">
                        <Send className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
