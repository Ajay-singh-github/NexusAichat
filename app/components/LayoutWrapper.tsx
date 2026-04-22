'use client';

import { SidebarProvider } from '@/context/SidebarContext';
import { Sidebar } from './Sidebar';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <Sidebar />
            {children}
        </SidebarProvider>
    );
}
