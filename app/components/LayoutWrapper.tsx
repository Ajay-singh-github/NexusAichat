'use client';

import { usePathname } from 'next/navigation';
import { SidebarProvider } from '@/context/SidebarContext';
import { Sidebar } from './Sidebar';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const showSidebar = pathname !== '/';

    return (
        <SidebarProvider>
            {showSidebar && <Sidebar />}
            {children}
        </SidebarProvider>
    );
}
