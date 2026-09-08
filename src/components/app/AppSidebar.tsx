import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/app/Logo";

import {
  LayoutDashboard,
  Workflow,
  PlusCircle,
  Plug,
  LayoutTemplate,
  History,
  Settings,
  ArrowLeft,
} from "lucide-react";

export const appNav = [
  { label: "Dashboard", short: "Painel", icon: LayoutDashboard, to: "/dashboard" },
  { label: "Minhas automações", short: "Fluxos", icon: Workflow, to: "/minhas-automacoes" },
  { label: "Criar automação", short: "Criar", icon: PlusCircle, to: "/automacoes" },
  { label: "Aplicativos conectados", short: "Apps", icon: Plug, to: "/aplicativos" },
  { label: "Templates", short: "Templates", icon: LayoutTemplate, to: "/templates" },
  { label: "Histórico", short: "Histórico", icon: History, to: "/historico" },
  { label: "Configurações", short: "Ajustes", icon: Settings, to: "/configuracoes" },
] as const;

export function AppSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar lg:flex">
      <Link to="/" className="flex items-center px-5 py-5" aria-label="AutoFlow">
        <Logo />
      </Link>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
        {appNav.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeProps={{ className: "bg-brand/10 text-brand" }}
            inactiveProps={{
              className:
                "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            }}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors"
          >
            <item.icon className="size-4.5" />
            {item.label}
          </Link>
        ))}
      </nav>

      <Link
        to="/"
        className="m-3 flex items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Voltar ao site
      </Link>
    </aside>
  );
}

export function AppTabBar() {
  return (
    <nav className="sticky bottom-0 z-30 flex overflow-x-auto border-t border-border bg-background/95 backdrop-blur lg:hidden">
      {appNav.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          activeProps={{ className: "text-brand" }}
          inactiveProps={{ className: "text-muted-foreground" }}
          className="flex min-w-[4.5rem] flex-1 flex-col items-center gap-1 px-2 py-2.5 text-[11px] font-semibold transition-colors"
        >
          <item.icon className="size-5" />
          {item.short}
        </Link>
      ))}
    </nav>
  );
}
