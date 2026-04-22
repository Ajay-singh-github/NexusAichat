import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f0f1a',
                foreground: '#e4e4e7',
                primary: '#3b82f6',
                'primary-dark': '#1e40af',
                secondary: '#8b5cf6',
                accent: '#06b6d4',
                sidebar: '#1a1a2e',
                card: '#16213e',
                border: '#2d2d44',
            },
        },
    },
    plugins: [],
};
export default config;
