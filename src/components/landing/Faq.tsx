import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Preciso saber programar?",
    a: "Não. A TechFlow foi criada justamente para quem não programa: você monta o fluxo arrastando blocos de gatilhos, condições e ações. Quem conhece o processo da empresa consegue automatizar sem depender do time técnico.",
  },
  {
    q: "Como funciona o suporte via WhatsApp?",
    a: "Você fala com um time brasileiro no mesmo número, em horário comercial, em português. Ajudamos a desenhar o primeiro fluxo, revisamos automações e resolvemos dúvidas sem abrir ticket em inglês.",
  },
  {
    q: "Quais integrações estão disponíveis?",
    a: "Planilhas (Google Sheets e Excel), e-mail, WhatsApp, formulários, ERPs e CRMs populares no Brasil, bancos de dados e qualquer serviço com API via bloco de requisição HTTP e webhooks.",
  },
  {
    q: "Quanto custa e existe teste grátis?",
    a: "São 14 dias gratuitos, sem cartão de crédito. Depois, os planos são em real e ficam até 70% abaixo do que empresas do mesmo porte pagam em ferramentas globais.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Todo tráfego é criptografado, os acessos são controlados por permissões por usuário e o tratamento de dados segue a LGPD, com histórico completo de execuções para auditoria.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">FAQ</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-secondary/50"
                  >
                    <span className="min-w-0 flex-1 text-sm font-bold text-foreground sm:text-base">
                      {f.q}
                    </span>
                    <span
                      className={`grid size-8 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="size-4" strokeWidth={2.6} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
