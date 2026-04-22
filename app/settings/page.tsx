'use client';

import { useState } from 'react';
import { Save, Copy, Eye, EyeOff, Trash2 } from 'lucide-react';

interface ApiKey {
    id: string;
    name: string;
    key: string;
    created: string;
}

const mockApiKeys: ApiKey[] = [
    {
        id: '1',
        name: 'Production Key',
        key: 'sk-proj-abcdef1234567890',
        created: '2024-01-15',
    },
    {
        id: '2',
        name: 'Development Key',
        key: 'sk-proj-0987654321fedcba',
        created: '2024-02-01',
    },
];

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState<'profile' | 'api' | 'appearance'>('profile');
    const [formData, setFormData] = useState({
        name: 'Alex Johnson',
        email: 'alex@example.com',
    });
    const [apiKeys, setApiKeys] = useState<ApiKey[]>(mockApiKeys);
    const [newKeyName, setNewKeyName] = useState('');
    const [showKeyId, setShowKeyId] = useState<string | null>(null);
    const [fontSize, setFontSize] = useState(16);
    const [density, setDensity] = useState<'compact' | 'comfortable'>('comfortable');
    const [darkMode, setDarkMode] = useState(true);

    const maskKey = (key: string) => {
        const visible = key.substring(0, 7);
        const hidden = '*'.repeat(12);
        const end = key.substring(key.length - 4);
        return `${visible}${hidden}${end}`;
    };

    const handleAddApiKey = () => {
        if (newKeyName.trim()) {
            const newKey: ApiKey = {
                id: Date.now().toString(),
                name: newKeyName,
                key: `sk-proj-${Math.random().toString(36).substring(2, 18)}`,
                created: new Date().toISOString().split('T')[0],
            };
            setApiKeys([...apiKeys, newKey]);
            setNewKeyName('');
        }
    };

    const handleDeleteApiKey = (id: string) => {
        setApiKeys(apiKeys.filter((k) => k.id !== id));
    };

    return (
        <div className="flex flex-col h-screen bg-[var(--background)] lg:ml-72 transition-all duration-300 ease-in-out">
            {/* Header */}
            <header className="sticky top-0 h-16 border-b border-[var(--border)] flex items-center px-6 bg-[var(--background)]/80 backdrop-blur-sm z-30 transition-all duration-300">
                <h1 className="text-2xl font-bold text-white">Settings</h1>
            </header>

            {/* Content */}
            <div className="flex-1 overflow-y-auto pb-10">
                <div className="max-w-4xl mx-auto px-4 py-8">
                    {/* Tabs */}
                    <div className="flex gap-4 mb-8 border-b border-[var(--border)] pb-4">
                        {(['profile', 'api', 'appearance'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 font-medium transition-colors border-b-2 ${activeTab === tab
                                    ? 'border-[var(--primary)] text-[var(--primary)]'
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Profile Tab */}
                    {activeTab === 'profile' && (
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Avatar</label>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                        AJ
                                    </div>
                                    <button className="px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-lg hover:bg-[var(--border)] transition-colors text-sm">
                                        Change Avatar
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-lg text-white placeholder-gray-500 focus:border-[var(--primary)] focus:outline-none transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-lg text-white placeholder-gray-500 focus:border-[var(--primary)] focus:outline-none transition-colors"
                                />
                            </div>

                            <button className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20 text-white">
                                <Save className="w-4 h-4" />
                                Save Changes
                            </button>
                        </div>
                    )}

                    {/* API Keys Tab */}
                    {activeTab === 'api' && (
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Add New API Key</h3>
                                <div className="flex gap-2 mb-6">
                                    <input
                                        type="text"
                                        placeholder="Key name (e.g., Production API)"
                                        value={newKeyName}
                                        onChange={(e) => setNewKeyName(e.target.value)}
                                        className="flex-1 px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-lg text-white placeholder-gray-500 focus:border-[var(--primary)] focus:outline-none transition-colors"
                                    />
                                    <button
                                        onClick={handleAddApiKey}
                                        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-purple-500/20 text-white"
                                    >
                                        Add Key
                                    </button>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Your API Keys</h3>
                                <div className="space-y-3">
                                    {apiKeys.map((apiKey) => (
                                        <div
                                            key={apiKey.id}
                                            className="flex items-center justify-between p-4 bg-[var(--card)] border border-[var(--border)] rounded-lg"
                                        >
                                            <div className="flex-1">
                                                <p className="font-medium text-white">{apiKey.name}</p>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <code className="text-xs text-gray-400 font-mono">
                                                        {showKeyId === apiKey.id ? apiKey.key : maskKey(apiKey.key)}
                                                    </code>
                                                    <button
                                                        onClick={() =>
                                                            setShowKeyId(showKeyId === apiKey.id ? null : apiKey.id)
                                                        }
                                                        className="p-1 hover:bg-[var(--border)] rounded transition-colors"
                                                    >
                                                        {showKeyId === apiKey.id ? (
                                                            <EyeOff className="w-4 h-4 text-gray-400" />
                                                        ) : (
                                                            <Eye className="w-4 h-4 text-gray-400" />
                                                        )}
                                                    </button>
                                                    <button className="p-1 hover:bg-[var(--border)] rounded transition-colors">
                                                        <Copy className="w-4 h-4 text-gray-400" />
                                                    </button>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-2">Created: {apiKey.created}</p>
                                            </div>
                                            <button
                                                onClick={() => handleDeleteApiKey(apiKey.id)}
                                                className="p-2 hover:bg-red-500/10 rounded transition-colors text-red-400"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Appearance Tab */}
                    {activeTab === 'appearance' && (
                        <div className="space-y-6 max-w-2xl">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-4">Theme</h3>
                                <div className="flex items-center gap-4 p-4 bg-[var(--card)] border border-[var(--border)] rounded-lg">
                                    <div>
                                        <p className="text-white font-medium mb-1">Dark Mode</p>
                                        <p className="text-sm text-gray-400">Currently: {darkMode ? 'Enabled' : 'Disabled'}</p>
                                    </div>
                                    <button
                                        onClick={() => setDarkMode(!darkMode)}
                                        className={`ml-auto w-12 h-6 rounded-full transition-colors ${darkMode ? 'bg-[var(--primary)]' : 'bg-gray-600'
                                            }`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-4">
                                    Font Size: {fontSize}px
                                </label>
                                <input
                                    type="range"
                                    min="12"
                                    max="20"
                                    value={fontSize}
                                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                                    className="w-full h-2 bg-[var(--border)] rounded-lg appearance-none cursor-pointer accent-[var(--primary)]"
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-2">
                                    <span>Small (12px)</span>
                                    <span>Large (20px)</span>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-3">Density</label>
                                <div className="space-y-2">
                                    {(['compact', 'comfortable'] as const).map((d) => (
                                        <button
                                            key={d}
                                            onClick={() => setDensity(d)}
                                            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${density === d
                                                ? 'bg-[var(--primary)]/20 border-[var(--primary)] text-[var(--primary)]'
                                                : 'border-[var(--border)] text-gray-300 hover:bg-[var(--card)]'
                                                }`}
                                        >
                                            <p className="font-medium capitalize">{d}</p>
                                            <p className="text-xs text-gray-500">
                                                {d === 'compact'
                                                    ? 'Reduced spacing for a compact view'
                                                    : 'Normal spacing for comfortable reading'}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
