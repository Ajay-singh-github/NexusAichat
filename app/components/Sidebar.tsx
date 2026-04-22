'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, Plus, MessageSquare, Settings, BarChart3, X, Home, Search, MoreVertical, Trash2, Edit3 } from 'lucide-react';

const conversations = [
    { id: 1, title: 'React Performance Tips', date: 'Today', model: 'GPT-4', messages: 12 },
    { id: 2, title: 'Next.js 14 Features', date: 'Yesterday', model: 'Claude', messages: 8 },
    { id: 3, title: 'TypeScript Generics', date: '2 days ago', model: 'GPT-3.5', messages: 15 },
    { id: 4, title: 'Tailwind CSS Best Practices', date: '1 week ago', model: 'Gemini', messages: 6 },
    { id: 5, title: 'API Design Patterns', date: '2 weeks ago', model: 'GPT-4', messages: 20 },
];

export function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const pathname = usePathname();

    const filteredConversations = conversations.filter(conv =>
        conv.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 left-4 z-50 lg:hidden p-3 rounded-xl bg-[var(--card)]/80 backdrop-blur-sm border border-[var(--border)] hover:bg-[var(--card)] transition-all duration-200 hover:shadow-lg hover:shadow-black/20"
            >
                {isOpen ? (
                    <X className="w-5 h-5 text-gray-300" />
                ) : (
                    <Menu className="w-5 h-5 text-gray-300" />
                )}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed left-0 top-0 h-full w-72 bg-gradient-to-b from-[var(--sidebar)] via-[var(--sidebar)] to-[var(--sidebar)]/95 border-r border-[var(--border)] flex flex-col transition-all duration-300 ease-in-out lg:translate-x-0 z-40 backdrop-blur-xl ${isOpen ? 'translate-x-0 shadow-2xl shadow-black/20' : '-translate-x-full'
                    }`}
            >
                {/* Header */}
                <div className="p-6 border-b border-[var(--border)]/50">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-105">
                            <span className="text-white font-bold text-xl">N</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                NexusAI
                            </span>
                            <span className="text-xs text-gray-400 font-medium">AI Assistant</span>
                        </div>
                    </Link>
                </div>

                {/* New Chat Button */}
                <div className="p-4">
                    <button className="w-full flex items-center justify-center gap-3 px-4 py-3.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-[1.02] hover:-translate-y-0.5">
                        <Plus className="w-5 h-5" />
                        <span>New Chat</span>
                    </button>
                </div>

                {/* Search */}
                <div className="px-4 pb-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2.5 bg-[var(--card)]/50 border border-[var(--border)] rounded-lg text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Conversations */}
                <div className="flex-1 overflow-y-auto px-4">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                            Recent Chats
                        </h3>
                        <span className="text-xs text-gray-500 bg-[var(--card)]/50 px-2 py-1 rounded-full">
                            {filteredConversations.length}
                        </span>
                    </div>

                    <div className="space-y-1">
                        {filteredConversations.map((conv) => (
                            <div
                                key={conv.id}
                                className={`group relative p-3 rounded-xl transition-all duration-200 cursor-pointer border ${pathname === '/chat'
                                    ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-blue-500/30 shadow-lg shadow-blue-500/10'
                                    : 'bg-[var(--card)]/30 border-transparent hover:bg-[var(--card)]/60 hover:border-[var(--border)] hover:shadow-md'
                                    }`}
                            >
                                <div className="flex items-start justify-between">
                                    <div className="flex-1 min-w-0">
                                        <div className={`font-medium text-sm truncate mb-1 ${pathname === '/chat' ? 'text-white' : 'text-gray-200 group-hover:text-white'}`}>
                                            {conv.title}
                                        </div>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span className="truncate">{conv.model}</span>
                                            <span>•</span>
                                            <span>{conv.messages} msgs</span>
                                            <span>•</span>
                                            <span>{conv.date}</span>
                                        </div>
                                    </div>

                                    {/* Context Menu */}
                                    <button className="opacity-0 group-hover:opacity-100 p-1 rounded-lg hover:bg-[var(--card)] transition-all duration-200 ml-2">
                                        <MoreVertical className="w-4 h-4 text-gray-400 hover:text-gray-300" />
                                    </button>
                                </div>

                                {/* Hover Actions */}
                                <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-all duration-200 flex gap-1">
                                    <button className="p-1.5 rounded-lg bg-[var(--card)]/80 hover:bg-[var(--card)] transition-colors" title="Edit">
                                        <Edit3 className="w-3 h-3 text-gray-400 hover:text-gray-300" />
                                    </button>
                                    <button className="p-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors" title="Delete">
                                        <Trash2 className="w-3 h-3 text-red-400 hover:text-red-300" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredConversations.length === 0 && searchQuery && (
                        <div className="text-center py-8">
                            <Search className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                            <p className="text-sm text-gray-500">No conversations found</p>
                        </div>
                    )}
                </div>

                {/* Navigation Links */}
                <div className="border-t border-[var(--border)]/50 p-4 space-y-1">
                    <Link
                        href="/"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${pathname === '/'
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30'
                            : 'text-gray-400 hover:bg-[var(--card)]/60 hover:text-gray-300'
                            }`}
                    >
                        <Home className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm font-medium">Home</span>
                    </Link>

                    <Link
                        href="/chat"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${pathname === '/chat'
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30'
                            : 'text-gray-400 hover:bg-[var(--card)]/60 hover:text-gray-300'
                            }`}
                    >
                        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm font-medium">Chat</span>
                    </Link>

                    <Link
                        href="/dashboard"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${pathname === '/dashboard'
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30'
                            : 'text-gray-400 hover:bg-[var(--card)]/60 hover:text-gray-300'
                            }`}
                    >
                        <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm font-medium">Dashboard</span>
                    </Link>

                    <Link
                        href="/settings"
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${pathname === '/settings'
                            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30'
                            : 'text-gray-400 hover:bg-[var(--card)]/60 hover:text-gray-300'
                            }`}
                    >
                        <Settings className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm font-medium">Settings</span>
                    </Link>
                </div>

                {/* User Profile Section */}
                <div className="border-t border-[var(--border)]/50 p-4">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-[var(--card)]/30 hover:bg-[var(--card)]/50 transition-all duration-200 cursor-pointer group">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">U</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-200 truncate">User</div>
                            <div className="text-xs text-gray-500">Free Plan</div>
                        </div>
                        <Settings className="w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors" />
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
