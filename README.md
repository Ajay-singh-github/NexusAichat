# NexusAI - Advanced AI Chat Application

A modern, feature-rich AI chat application built with Next.js 14, React 19, TypeScript, and Tailwind CSS.

## 🚀 Quick Start


```bash
# Install dependencies
npm install

# Run development server
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) to explore NexusAI.

## ✨ Features

- **Chat Interface** - ChatGPT-style interface with collapsible sidebar and conversation history
- **Model Selection** - Dropdown with 8 AI models grouped by category (Chat/Image/Code)
- **Settings Page** - Profile editor, API key management, appearance customization with 3 tabs
- **Dashboard** - Analytics with token usage charts, model distribution pie chart, recent activity
- **Fully Responsive** - Tested on mobile (375px) to desktop (1440px)
- **Dark Theme** - Blue/purple gradient aesthetic with smooth transitions
- **Reusable Components** - Proper React patterns with hooks and state management
- **Landing Page** - Hero section, features grid, pricing tiers, footer

## 🛠 Tech Stack

- **Frontend:** Next.js 14 (App Router) • React 19 • TypeScript
- **Styling:** Tailwind CSS 4 • Lucide Icons
- **Charts:** Recharts for analytics visualization
- **Linting:** ESLint

## 📁 Project Structure

```
app/
├── page.tsx                 # Landing page (no sidebar)
├── layout.tsx              # Root layout with LayoutWrapper
├── globals.css             # Global styles
├── chat/                   # Chat page
│   ├── page.tsx
│   └── layout.tsx
├── dashboard/              # Dashboard page
│   ├── page.tsx
│   └── layout.tsx
├── settings/               # Settings page
│   ├── page.tsx
│   └── layout.tsx
├── components/             # Reusable components
│   ├── LayoutWrapper.tsx   # Sidebar wrapper (hides on home)
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── MessageBubble.tsx   # Chat message display
│   ├── MessageInput.tsx    # Chat input field
│   ├── ModelSelector.tsx   # AI model dropdown
│   └── MessageBubble.tsx
├── context/                # React context
│   └── SidebarContext.tsx  # Sidebar state management
└── public/                 # Static assets
```

## 📄 Pages

| Page          | Route        | Features                                                   |
| ------------- | ------------ | ---------------------------------------------------------- |
| **Landing**   | `/`          | Hero section, features grid, pricing, footer, no sidebar   |
| **Chat**      | `/chat`      | Message interface, model selector, conversation history    |
| **Dashboard** | `/dashboard` | Token usage chart, model distribution pie chart, analytics |
| **Settings**  | `/settings`  | Profile editor, API key management, appearance options     |

## 🎨 Design Highlights

- Sidebar auto-hides on landing page (`/`)
- Sidebar collapses on mobile with overlay
- Pre-filled conversation showing realistic AI interaction
- API keys display with visibility toggle
- Recharts integration for dashboard analytics
- Smooth animations and hover effects
- Gradient text and backgrounds
- Dark theme with blue/purple accents

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Start production build
npm start

# Lint
npm run lint
```

## 📦 Dependencies

- `next`: ^15.1.6
- `react`: ^19.0.0-rc
- `typescript`: ^5.7.2
- `tailwindcss`: ^4.0.0
- `lucide-react`: AI/chat icons
- `recharts`: Dashboard charts
- `postcss`: CSS processing

## 🚀 Deployment

This project is optimized for deployment on Vercel:

```bash
npm run build
npm start
```

## 📝 Notes

- Sidebar automatically hides on the home page (`/`)
- All pages use the same dark theme styling
- Components are client-side rendered for interactivity
- Context API is used for global sidebar state management

## 📄 License

MIT
