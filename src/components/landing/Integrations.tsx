import { FileSpreadsheet, Mail, MessageCircle, FileText, Table2, Presentation } from "lucide-react";
import { Reveal } from "./Reveal";

const integrations = [
  { icon: FileSpreadsheet, name: "Google Sheets", note: "Planilhas e relatórios" },
  { icon: Mail, name: "Gmail", note: "E-mails automáticos" },
  { icon: MessageCircle, name: "WhatsApp", note: "Mensagens ao cliente" },
  { icon: Table2, name: "Excel", note: "Pacote Office" },
  { icon: FileText, name: "Word", note: "Documentos e propostas" },
  { icon: Presentation, name: "PowerPoint", note: "Apresentações" },
];

export function Integrations() {
  const loop = [...integrations, ...integrations];

  return (
    <section id="integracoes" className="overflow-hidden border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Integrações</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Conecte ferramentas que sua equipe já usa
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Sem trocar de sistema e sem retrabalho: a AutoFlow conversa com as ferramentas que já
            fazem parte da rotina do seu time.
          </p>
        </Reveal>
      </div>

      <div className="relative mt-14 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max gap-5 animate-marquee hover:[animation-play-state:paused]">
          {loop.map((item, i) => (
            <article
              key={`${item.name}-${i}`}
              className="flex w-60 shrink-0 items-center gap-3.5 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                <item.icon className="size-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-bold text-foreground">{item.name}</span>
                <span className="block truncate text-xs text-muted-foreground">{item.note}</span>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
