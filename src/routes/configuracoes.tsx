import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/app/AppShell";
import { Copy, RefreshCw } from "lucide-react";

const title = "Configurações — AutoFlow";
const description =
  "Ajuste perfil, conta, preferências de notificação e chaves de API/webhooks da sua conta AutoFlow.";

export const Route = createFileRoute("/configuracoes")({
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
  component: SettingsPage,
});

const tabs = ["Perfil do usuário", "Conta", "Notificações", "Chaves de API / Webhooks"] as const;

const field =
  "mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand";
const labelCls = "text-xs font-semibold text-foreground";

function SettingsPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>(tabs[0]);
  const [notify, setNotify] = useState([true, true, false, true]);

  return (
    <AppShell title="Configurações" subtitle="Gerencie sua conta e suas preferências">
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`rounded-xl border px-3.5 py-2 text-sm font-semibold transition-colors ${
              tab === t
                ? "border-brand/30 bg-brand/10 text-brand"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-4 max-w-2xl animate-fade-up rounded-2xl border border-border bg-card p-6 shadow-soft" key={tab}>
        {tab === "Perfil do usuário" && (
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelCls}>Nome completo</label>
                <input defaultValue="Maria Isabely" className={field} />
              </div>
              <div>
                <label className={labelCls}>Cargo</label>
                <input defaultValue="Coordenadora de operações" className={field} />
              </div>
            </div>
            <div>
              <label className={labelCls}>E-mail</label>
              <input defaultValue="maria@empresa.com.br" className={field} />
            </div>
            <div>
              <label className={labelCls}>Telefone / WhatsApp</label>
              <input defaultValue="(31) 99999-0000" className={field} />
            </div>
            <button type="button" className="btn-primary px-4 py-2.5 text-sm">
              Salvar alterações
            </button>
          </div>
        )}

        {tab === "Conta" && (
          <div className="space-y-5">
            <div>
              <label className={labelCls}>Nome da empresa</label>
              <input defaultValue="Minha Empresa LTDA" className={field} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelCls}>CNPJ</label>
                <input defaultValue="12.345.678/0001-90" className={field} />
              </div>
              <div>
                <label className={labelCls}>Fuso horário</label>
                <select className={field} defaultValue="America/Sao_Paulo">
                  <option value="America/Sao_Paulo">Brasília (GMT-3)</option>
                  <option value="America/Manaus">Manaus (GMT-4)</option>
                </select>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-secondary/40 p-4">
              <p className="text-sm font-bold text-foreground">Plano Profissional</p>
              <p className="mt-1 text-sm text-muted-foreground">
                10.000 tarefas/mês · renova em 08/10/2026
              </p>
              <button type="button" className="btn-secondary mt-3 px-3.5 py-2 text-xs">
                Alterar plano
              </button>
            </div>
          </div>
        )}

        {tab === "Notificações" && (
          <div className="space-y-3">
            {[
              "Avisar por e-mail quando uma automação falhar",
              "Resumo semanal de execuções",
              "Novidades e lançamentos da AutoFlow",
              "Alerta no WhatsApp em erros críticos",
            ].map((item, i) => (
              <label
                key={item}
                className="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-brand/40"
              >
                {item}
                <input
                  type="checkbox"
                  checked={notify[i]}
                  onChange={() => setNotify((prev) => prev.map((v, j) => (j === i ? !v : v)))}
                  className="size-4 accent-brand"
                />
              </label>
            ))}
          </div>
        )}

        {tab === "Chaves de API / Webhooks" && (
          <div className="space-y-5">
            <div>
              <label className={labelCls}>Chave de API (produção)</label>
              <div className="mt-1.5 flex flex-wrap gap-2">
                <input
                  readOnly
                  value="af_live_9f3c8d21b4e7a5c60d8f"
                  className="min-w-0 flex-1 rounded-xl border border-border bg-secondary/40 px-3 py-2.5 font-mono text-sm text-foreground"
                />
                <button type="button" className="btn-secondary px-3.5 py-2 text-xs">
                  <Copy className="size-3.5" />
                  Copiar
                </button>
                <button type="button" className="btn-secondary px-3.5 py-2 text-xs">
                  <RefreshCw className="size-3.5" />
                  Gerar nova
                </button>
              </div>
            </div>
            <div>
              <label className={labelCls}>URL de webhook de entrada</label>
              <input
                readOnly
                value="https://api.autoflow.com.br/hooks/9f3c8d21"
                className="mt-1.5 w-full rounded-xl border border-border bg-secondary/40 px-3 py-2.5 font-mono text-sm text-foreground"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Use estas credenciais para integrar sistemas próprios à AutoFlow. Nunca compartilhe
              sua chave de produção.
            </p>
          </div>
        )}
      </div>
    </AppShell>
  );
}
