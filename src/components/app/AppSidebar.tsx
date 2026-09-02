import { Link } from "@tanstack/react-router";
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

const items = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Minhas automações", icon: Workflow },
  { label: "Criar automação", icon: PlusCircle, active: true },
  { label: "Aplicativos conectados", icon: Plug },
  { label: "Templates", icon: LayoutTemplate },
  { label: "Histórico", icon: History },
  { label: "Configurações", icon: Settings },
];

export function AppSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-sidebar lg:flex">
      <Link to="/" className="flex items-center gap-2.5 px-5 py-5">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
          <Workflow className="size-5" strokeWidth={2.4} />
        </span>
        <span className="text-lg font-bold tracking-tight text-sidebar-foreground">
          Tech<span className="text-brand">Flow</span>
        </span>
      </Link>

      <nav className="flex flex-1 flex-col gap-1 px-3 py-2">
        {items.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              item.active
                ? "bg-brand/10 text-brand"
                : "text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon className="size-4.5" />
            {item.label}
          </button>
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
