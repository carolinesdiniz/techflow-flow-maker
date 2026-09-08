import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/app/AppShell";
import { Sparkles } from "lucide-react";

const title = "Templates de automação — AutoFlow";
const description =
  "Galeria de fluxos prontos: lead de formulário para WhatsApp, notificação de vendas por e-mail e muito mais.";

export const Route = createFileRoute("/templates")({
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
  component: TemplatesPage,
});

const templates = [
  { name: "Lead de formulário para WhatsApp", area: "Comercial", steps: "Formulário → WhatsApp → Sheets", emoji: "💬" },
  { name: "Notificação de vendas no e-mail", area: "Vendas", steps: "CRM → E-mail → Sheets", emoji: "✉️" },
  { name: "Cadastro de cliente no ERP", area: "Financeiro", steps: "Formulário → ERP", emoji: "🏢" },
  { name: "Cobrança de boleto vencido", area: "Financeiro", steps: "ERP → WhatsApp → E-mail", emoji: "💸" },
  { name: "Onboarding de novo cliente", area: "Atendimento", steps: "CRM → E-mail → Sheets", emoji: "🤝" },
  { name: "Relatório semanal automático", area: "Gestão", steps: "Sheets → E-mail", emoji: "📊" },
  { name: "Agendamento de visita imobiliária", area: "Imobiliárias", steps: "Formulário → WhatsApp → Agenda", emoji: "🏠" },
  { name: "Envio de nota fiscal ao cliente", area: "Contabilidade", steps: "ERP → E-mail", emoji: "🧾" },
];

function TemplatesPage() {
  return (
    <AppShell
      title="Templates"
      subtitle="Modelos prontos por setor — comece em minutos e ajuste depois"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {templates.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-elevated"
          >
            <span className="text-2xl leading-none">{t.emoji}</span>
            <span className="mt-3 text-[11px] font-bold uppercase tracking-wide text-brand">
              {t.area}
            </span>
            <p className="mt-1 font-bold text-foreground">{t.name}</p>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{t.steps}</p>
            <Link to="/automacoes" className="btn-primary mt-4 justify-center py-2.5 text-sm">
              <Sparkles className="size-4" />
              Usar template
            </Link>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
