import { ReactNode } from 'react';

interface MessageBubbleProps {
    role: 'user' | 'assistant';
    content: ReactNode;
}

export function MessageBubble({ role, content }: MessageBubbleProps) {
    const isUser = role === 'user';

    return (
        <div
            className={`flex mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`max-w-[80%] lg:max-w-[60%] px-4 py-3 rounded-lg ${isUser
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-br-none'
                        : 'bg-[var(--card)] border border-[var(--border)] text-gray-100 rounded-bl-none'
                    }`}
            >
                <div className="text-sm leading-relaxed">{content}</div>
            </div>
        </div>
    );
}
