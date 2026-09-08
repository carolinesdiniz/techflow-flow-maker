import type { ReactNode } from "react";
import { AppSidebar, AppTabBar } from "@/components/app/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";

type AppShellProps = {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export function AppShell({ title, subtitle, actions, children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-secondary/30 font-sans antialiased">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-col gap-4 border-b border-border bg-background px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="min-w-0">
            <h1 className="truncate text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {title}
            </h1>
            {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {actions}
            <ThemeToggle />
          </div>
        </header>

        <main key={title} className="flex-1 animate-fade-up px-5 py-6 lg:px-8">
          {children}
        </main>

        <AppTabBar />
      </div>
    </div>
  );
}
