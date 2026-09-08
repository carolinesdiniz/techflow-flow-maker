import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app/AppShell";
import { Pencil, Pause, Play, Trash2, PlusCircle, Search } from "lucide-react";

const title = "Minhas automações — AutoFlow";
const description =
  "Gerencie todos os seus fluxos de automação: status, última execução, edição, pausa e exclusão.";

export const Route = createFileRoute("/minhas-automacoes")({
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
  component: FlowsPage,
});

type Flow = { id: string; name: string; active: boolean; last: string; apps: string };

const initial: Flow[] = [
  { id: "1", name: "Novo cliente cadastrado", active: true, last: "Hoje, 20:14", apps: "Formulário → Sheets → WhatsApp" },
  { id: "2", name: "Lead do site para WhatsApp", active: true, last: "Hoje, 19:48", apps: "Formulário → WhatsApp" },
  { id: "3", name: "Notificação de venda no e-mail", active: false, last: "Ontem, 17:02", apps: "CRM → E-mail" },
  { id: "4", name: "Backup diário na planilha", active: true, last: "Hoje, 06:00", apps: "ERP → Sheets" },
  { id: "5", name: "Cobrança de boleto vencido", active: false, last: "05/09, 09:30", apps: "ERP → WhatsApp" },
];

function FlowsPage() {
  const [flows, setFlows] = useState(initial);
  const [query, setQuery] = useState("");

  const visible = flows.filter((f) => f.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <AppShell
      title="Minhas automações"
      subtitle={`${flows.filter((f) => f.active).length} ativas de ${flows.length} fluxos`}
      actions={
        <Link to="/automacoes" className="btn-primary px-4 py-2.5 text-sm">
          <PlusCircle className="size-4" />
          Nova automação
        </Link>
      }
    >
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar automação..."
          aria-label="Buscar automação"
          className="w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-sm text-foreground outline-none focus:border-brand"
        />
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
        <table className="w-full min-w-[46rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <th className="px-5 py-3.5">Nome do fluxo</th>
              <th className="px-5 py-3.5">Status</th>
              <th className="px-5 py-3.5">Última execução</th>
              <th className="px-5 py-3.5 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((f) => (
              <tr key={f.id} className="border-b border-border/70 last:border-0">
                <td className="px-5 py-4">
                  <p className="font-semibold text-foreground">{f.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{f.apps}</p>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
                      f.active
                        ? "border-brand/25 bg-brand/10 text-brand"
                        : "border-border bg-muted text-muted-foreground"
                    }`}
                  >
                    <span className={`size-2 rounded-full ${f.active ? "bg-brand" : "bg-muted-foreground"}`} />
                    {f.active ? "Ativa" : "Pausada"}
                  </span>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{f.last}</td>
                <td className="px-5 py-4">
                  <div className="flex flex-wrap justify-end gap-2">
                    <Link
                      to="/automacoes"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      <Pencil className="size-3.5" />
                      Editar
                    </Link>
                    <button
                      type="button"
                      onClick={() =>
                        setFlows((prev) =>
                          prev.map((x) => (x.id === f.id ? { ...x, active: !x.active } : x)),
                        )
                      }
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                    >
                      {f.active ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                      {f.active ? "Pausar" : "Ativar"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFlows((prev) => prev.filter((x) => x.id !== f.id))}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-destructive/30 px-2.5 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10"
                    >
                      <Trash2 className="size-3.5" />
                      Excluir
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-muted-foreground">
                  Nenhuma automação encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
