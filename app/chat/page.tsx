'use client';

import { MessageBubble } from '@/components/MessageBubble';
import { MessageInput } from '@/components/MessageInput';
import { ModelSelector } from '@/components/ModelSelector';
import { useRef, useEffect, useState } from 'react';
import { Sparkles, Bot, User } from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';


const sampleMessages = [
    {
        role: 'user' as const,
        content: 'Can you explain the differences between React hooks and class components?',
        timestamp: '10:30 AM',
    },
    {
        role: 'assistant' as const,
        content: (
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-blue-400 font-medium">NexusAI Assistant</span>
                </div>
                <p className="mb-4 text-gray-200">
                    Great question! Here are the key differences between React hooks and class components:
                </p>

                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Hooks allow you to use state and lifecycle features in functional components.</li>
                    <li>Class components use lifecycle methods like componentDidMount.</li>
                    <li>Hooks make code cleaner and easier to reuse.</li>
                    <li>Less boilerplate compared to classes.</li>
                </ul>
            </div>
        ),
        timestamp: '10:31 AM',
    },
    {
        role: 'user' as const,
        content: 'That makes sense! Can you show me an example of using useState hook?',
        timestamp: '10:32 AM',
    },
    {
        role: 'assistant' as const,
        content: (
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-blue-400 font-medium">NexusAI Assistant</span>
                </div>

                <p className="mb-4 text-gray-200">
                    Absolutely! Here's a simple counter example using useState:
                </p>

                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4">
                    <pre className="text-sm overflow-x-auto">
                        <code className="text-green-400">
                            {`import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                        </code>
                    </pre>
                </div>

                <p className="text-sm text-gray-400 italic">
                    💡 useState returns current state + updater function
                </p>
            </div>
        ),
        timestamp: '10:33 AM',
    },

    // 👇 NEW MESSAGES (extended chat)

    {
        role: 'user' as const,
        content: 'Nice! What about useEffect? When should I use it?',
        timestamp: '10:34 AM',
    },
    {
        role: 'assistant' as const,
        content: (
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-blue-400 font-medium">NexusAI Assistant</span>
                </div>

                <p className="mb-4 text-gray-200">
                    useEffect is used for handling side effects like API calls, subscriptions, or DOM updates.
                </p>

                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                    <li>Fetching data from API</li>
                    <li>Listening to events</li>
                    <li>Updating document title</li>
                </ul>

                <p className="mt-4 text-gray-400 text-sm">
                    It runs after render and depends on dependency array.
                </p>
            </div>
        ),
        timestamp: '10:35 AM',
    },
    {
        role: 'user' as const,
        content: 'Got it! Can you give me a real-world example?',
        timestamp: '10:36 AM',
    },
    {
        role: 'assistant' as const,
        content: (
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-blue-400 font-medium">NexusAI Assistant</span>
                </div>

                <p className="mb-4 text-gray-200">
                    Sure! Here's an example of fetching data from an API:
                </p>

                <div className="bg-gray-900 p-4 rounded-lg border border-gray-700 mb-4">
                    <pre className="text-sm overflow-x-auto">
                        <code className="text-green-400">
                            {`import { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <div>{users.length} users loaded</div>;
}`}
                        </code>
                    </pre>
                </div>

                <p className="text-sm text-gray-400 italic">
                    💡 Empty dependency array means it runs only once (on mount)
                </p>
            </div>
        ),
        timestamp: '10:37 AM',
    },
    {
        role: 'user' as const,
        content: 'Awesome! Thanks, this really helped 🙌',
        timestamp: '10:38 AM',
    },
    {
        role: 'assistant' as const,
        content: (
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-blue-400 font-medium">NexusAI Assistant</span>
                </div>

                <p className="text-gray-200">
                    You're welcome! 😊 Feel free to ask anytime. Happy coding 🚀
                </p>
            </div>
        ),
        timestamp: '10:38 AM',
    },
];

export default function ChatPage() {
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const [isTyping, setIsTyping] = useState(false);
    const { isOpen } = useSidebar();

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    return (
        <div style={{ marginLeft: isOpen ? '288px' : '0' }} className="flex flex-col min-h-screen transition-all duration-300 lg:ml-72">
            {/* Header */}
            <header style={{ paddingLeft: 8, paddingRight: 8 }} className="sticky top-0 h-16 border-b border-gray-700/50 flex items-center justify-between px-6 bg-gray-900/80 backdrop-blur-md z-30 transition-all duration-300 ease-in-out">
                <div className="hidden lg:block">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-xl font-bold text-white">NexusAI Chat</h1>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div style={{ paddingLeft: 4, paddingRight: 8 }} className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400 font-medium">Online</span>
                    </div>
                    <ModelSelector />
                </div>
            </header>

            {/* Messages Area */}
            <div className="flex-1 flex flex-col items-center w-full bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e]">
                <main className="flex-1 overflow-y-auto pt-6 pb-32 transition-all duration-300 ease-in-out w-full flex flex-col items-center">
                    <div className="max-w-4xl mx-auto px-6 py-6 w-full sm:px-4">
                        {/* Welcome Message */}
                        <div style={{ marginBottom: 16 }} className="text-center mb-8">
                            <div style={{ paddingLeft: 4, paddingRight: 8, paddingTop: 2, paddingBottom: 2, marginTop: 16, marginBottom: 8 }} className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl mb-4">
                                <Sparkles className="w-5 h-5 text-blue-400" />
                                <span className="text-blue-300 font-medium">Welcome to NexusAI</span>
                            </div>
                            <p className="text-gray-400 text-sm">Start a conversation with our AI assistant</p>
                        </div>

                        {/* Messages */}
                        <div className="space-y-6" style={{ paddingBottom: 100 }}>
                            {sampleMessages.map((msg, idx) => (
                                <div key={idx} className="animate-fade-in">
                                    <MessageBubble role={msg.role} content={msg.content} />
                                    <div className={`flex items-center gap-2 mt-2 text-xs text-gray-500 ${msg.role === 'user' ? 'justify-end' : 'justify-start'
                                        }`}>
                                        {msg.role === 'user' ? (
                                            <>
                                                <span>{msg.timestamp}</span>
                                                <User className="w-3 h-3" />
                                            </>
                                        ) : (
                                            <>
                                                <Bot className="w-3 h-3" />
                                                <span>{msg.timestamp}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}

                            {/* Typing Indicator */}
                            {isTyping && (
                                <div className="flex justify-start animate-fade-in">
                                    <div className="bg-gray-800/50 border border-gray-700/50 text-gray-200 px-4 py-3 rounded-lg rounded-bl-none max-w-xs">
                                        <div className="flex items-center gap-1">
                                            <div className="flex gap-1">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            </div>
                                            <span className="text-sm text-gray-400 ml-2">AI is typing...</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div ref={messagesEndRef} />
                    </div>
                </main>
            </div>

            {/* Fixed Message Input */}
            <MessageInput />
        </div>
    );
}
