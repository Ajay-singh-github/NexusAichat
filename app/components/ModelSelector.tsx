'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ModelOption {
    category: string;
    label: string;
    value: string;
}

const models: ModelOption[] = [
    // Chat Models
    { category: 'Chat', label: 'GPT-4 Turbo', value: 'gpt-4-turbo' },
    { category: 'Chat', label: 'GPT-4', value: 'gpt-4' },
    { category: 'Chat', label: 'Claude 3 Opus', value: 'claude-opus' },
    { category: 'Chat', label: 'Gemini Pro', value: 'gemini-pro' },

    // Image Models
    { category: 'Image', label: 'DALL-E 3', value: 'dalle-3' },
    { category: 'Image', label: 'Midjourney', value: 'midjourney' },

    // Code Models
    { category: 'Code', label: 'GitHub Copilot', value: 'copilot' },
    { category: 'Code', label: 'Codex', value: 'codex' },
];

export function ModelSelector() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(models[0]);

    const groupedModels = models.reduce(
        (acc, model) => {
            const existing = acc.find((g) => g.category === model.category);
            if (existing) {
                existing.models.push(model);
            } else {
                acc.push({ category: model.category, models: [model] });
            }
            return acc;
        },
        [] as { category: string; models: ModelOption[] }[]
    );

    return (
        <div className="relative">
            <button
            style={{paddingLeft:8,paddingRight:4}}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-[var(--card)] border border-[var(--border)] rounded-lg hover:bg-[var(--card)]/80 transition-colors"
            >
                <span className="text-sm font-medium">{selected.label}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full right-0 mt-2 w-64 bg-[var(--card)] border border-[var(--border)] rounded-lg shadow-xl z-50 overflow-hidden">
                        {groupedModels.map((group, idx) => (
                            <div key={group.category}>
                                {idx > 0 && (
                                    <div className="border-t border-[var(--border)]" />
                                )}
                                <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                    {group.category}
                                </div>
                                {group.models.map((model) => (
                                    <button
                                        style={{paddingLeft:8,paddingRight:4}}
                                        key={model.value}
                                        onClick={() => {
                                            setSelected(model);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full text-left px-3 py-2 text-sm transition-colors ${selected.value === model.value
                                                ? 'bg-[var(--primary)] text-white'
                                                : 'text-gray-300 hover:bg-[var(--border)]'
                                            }`}
                                    >
                                        {model.label}
                                    </button>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
