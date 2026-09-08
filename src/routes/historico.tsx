import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app/AppShell";
import { Search, CheckCircle2, XCircle } from "lucide-react";

const title = "Histórico de execuções — AutoFlow";
const description =
  "Logs de execução das suas automações com data, status, tempo de processamento, busca e filtros.";

export const Route = createFileRoute("/historico")({
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
  component: HistoryPage,
});

type Log = { when: string; flow: string; ok: boolean; ms: string; detail: string };

const logs: Log[] = [
  { when: "08/09/2026 20:14", flow: "Novo cliente cadastrado", ok: true, ms: "1,2 s", detail: "3 blocos executados" },
  { when: "08/09/2026 19:48", flow: "Lead do site para WhatsApp", ok: true, ms: "0,8 s", detail: "Mensagem entregue" },
  { when: "08/09/2026 18:30", flow: "Notificação de venda no e-mail", ok: false, ms: "2,4 s", detail: "Erro: credencial do CRM expirada" },
  { when: "08/09/2026 14:05", flow: "Backup diário na planilha", ok: true, ms: "3,1 s", detail: "412 linhas gravadas" },
  { when: "08/09/2026 09:22", flow: "Cobrança de boleto vencido", ok: false, ms: "1,9 s", detail: "Erro: número de WhatsApp inválido" },
  { when: "07/09/2026 17:02", flow: "Novo cliente cadastrado", ok: true, ms: "1,1 s", detail: "3 blocos executados" },
];

const filters = ["Todos", "Sucesso", "Erro"] as const;

function HistoryPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");

  const visible = logs.filter(
    (l) =>
      l.flow.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "Todos" || (filter === "Sucesso" ? l.ok : !l.ok)),
  );

  return (
    <AppShell title="Histórico" subtitle="Últimas execuções das suas automações">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por automação..."
            aria-label="Buscar por automação"
            className="w-full rounded-xl border border-border bg-card py-2.5 pl-9 pr-3 text-sm text-foreground outline-none focus:border-brand"
          />
        </div>

        <div className="flex gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
                filter === f
                  ? "border-brand/30 bg-brand/10 text-brand"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-x-auto rounded-2xl border border-border bg-card shadow-soft">
        <table className="w-full min-w-[44rem] text-left text-sm">
          <thead>
            <tr className="border-b border-border text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <th className="px-5 py-3.5">Data / hora</th>
              <th className="px-5 py-3.5">Automação</th>
              <th className="px-5 py-3.5">Status</th>
              <th className="px-5 py-3.5">Tempo</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((l, i) => (
              <tr key={`${l.when}-${i}`} className="border-b border-border/70 last:border-0">
                <td className="px-5 py-4 text-muted-foreground">{l.when}</td>
                <td className="px-5 py-4">
                  <p className="font-semibold text-foreground">{l.flow}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{l.detail}</p>
                </td>
                <td className="px-5 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
                      l.ok
                        ? "border-brand/25 bg-brand/10 text-brand"
                        : "border-destructive/30 bg-destructive/10 text-destructive"
                    }`}
                  >
                    {l.ok ? <CheckCircle2 className="size-3.5" /> : <XCircle className="size-3.5" />}
                    {l.ok ? "Sucesso" : "Erro"}
                  </span>
                </td>
                <td className="px-5 py-4 text-muted-foreground">{l.ms}</td>
              </tr>
            ))}
            {visible.length === 0 && (
              <tr>
                <td colSpan={4} className="px-5 py-10 text-center text-muted-foreground">
                  Nenhuma execução encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
