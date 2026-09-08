import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app/AppShell";
import {
  FileSpreadsheet,
  Mail,
  MessageCircle,
  FileText,
  Webhook,
  Users,
  Database,
  Settings2,
  Plug,
} from "lucide-react";

const title = "Aplicativos conectados — AutoFlow";
const description =
  "Conecte Google Sheets, Gmail, WhatsApp, Pacote Office, Webhooks, CRMs e bancos de dados à AutoFlow.";

export const Route = createFileRoute("/aplicativos")({
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
  component: AppsPage,
});

const apps = [
  { name: "Google Sheets", desc: "Planilhas de clientes, vendas e estoque", icon: FileSpreadsheet, connected: true },
  { name: "Gmail", desc: "Envio de e-mails automáticos", icon: Mail, connected: true },
  { name: "WhatsApp Business", desc: "Mensagens e templates aprovados", icon: MessageCircle, connected: true },
  { name: "Pacote Office", desc: "Excel, Word e Outlook 365", icon: FileText, connected: false },
  { name: "Webhooks / API", desc: "Integre qualquer sistema via HTTP", icon: Webhook, connected: true },
  { name: "CRM", desc: "Pipedrive, RD Station e HubSpot", icon: Users, connected: false },
  { name: "ERP / Banco de dados", desc: "Omie, Bling e PostgreSQL", icon: Database, connected: false },
];

function AppsPage() {
  const [state, setState] = useState(() => apps.map((a) => a.connected));

  return (
    <AppShell
      title="Aplicativos conectados"
      subtitle={`${state.filter(Boolean).length} de ${apps.length} integrações ativas`}
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {apps.map((app, i) => {
          const connected = state[i];
          return (
            <div key={app.name} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <div className="flex items-start gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                  <app.icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-foreground">{app.name}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{app.desc}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${
                    connected
                      ? "border-brand/25 bg-brand/10 text-brand"
                      : "border-border bg-muted text-muted-foreground"
                  }`}
                >
                  <span className={`size-2 rounded-full ${connected ? "bg-brand" : "bg-muted-foreground"}`} />
                  {connected ? "Conectado" : "Desconectado"}
                </span>

                <button
                  type="button"
                  onClick={() => setState((prev) => prev.map((v, j) => (j === i ? !v : v)))}
                  className={
                    connected
                      ? "btn-secondary px-3.5 py-2 text-xs"
                      : "btn-primary px-3.5 py-2 text-xs"
                  }
                >
                  {connected ? <Settings2 className="size-3.5" /> : <Plug className="size-3.5" />}
                  {connected ? "Configurar" : "Conectar"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
