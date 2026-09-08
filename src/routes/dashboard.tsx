import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { Workflow, CheckCircle2, Gauge, Clock, PlusCircle } from "lucide-react";

const title = "Dashboard — AutoFlow";
const description =
  "Acompanhe automações ativas, tarefas executadas, taxa de sucesso e horas economizadas na AutoFlow.";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DashboardPage,
});

const metrics = [
  { label: "Automações ativas", value: "12", hint: "+2 nesta semana", icon: Workflow },
  { label: "Tarefas executadas no mês", value: "8.427", hint: "+18% vs. agosto", icon: CheckCircle2 },
  { label: "Taxa de sucesso", value: "99,2%", hint: "64 erros em 8.427", icon: Gauge },
  { label: "Horas economizadas", value: "186 h", hint: "≈ R$ 9.300 no mês", icon: Clock },
];

const chart = [
  { day: "Seg", value: 320 },
  { day: "Ter", value: 480 },
  { day: "Qua", value: 410 },
  { day: "Qui", value: 620 },
  { day: "Sex", value: 720 },
  { day: "Sáb", value: 240 },
  { day: "Dom", value: 160 },
];

const max = Math.max(...chart.map((c) => c.value));

function DashboardPage() {
  return (
    <AppShell
      title="Dashboard"
      subtitle="Visão geral das suas automações nos últimos 7 dias"
      actions={
        <Link to="/automacoes" className="btn-primary px-4 py-2.5 text-sm">
          <PlusCircle className="size-4" />
          Criar automação
        </Link>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">{m.label}</span>
              <span className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand">
                <m.icon className="size-4.5" />
              </span>
            </div>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-foreground">{m.value}</p>
            <p className="mt-1 text-xs font-medium text-brand">{m.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <p className="text-sm font-bold text-foreground">Volume de execuções recentes</p>
          <p className="mt-1 text-xs text-muted-foreground">Tarefas processadas por dia</p>

          <div className="mt-6 flex h-56 items-end gap-3">
            {chart.map((c) => (
              <div key={c.day} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-xs font-semibold text-muted-foreground">{c.value}</span>
                <div
                  className="w-full rounded-t-lg bg-gradient-brand transition-all"
                  style={{ height: `${(c.value / max) * 100}%` }}
                />
                <span className="text-xs font-medium text-muted-foreground">{c.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <p className="text-sm font-bold text-foreground">Automações com mais execuções</p>
          <ul className="mt-4 space-y-3">
            {[
              ["Novo cliente cadastrado", "2.140"],
              ["Lead do site para WhatsApp", "1.860"],
              ["Notificação de venda", "1.204"],
              ["Backup diário na planilha", "912"],
            ].map(([name, count]) => (
              <li key={name} className="flex items-center justify-between gap-3 text-sm">
                <span className="min-w-0 truncate text-foreground">{name}</span>
                <span className="font-semibold text-muted-foreground">{count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AppShell>
  );
}
