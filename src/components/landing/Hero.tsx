import { ArrowRight, PlayCircle, FileSpreadsheet, Filter, Mail, Database, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const blocks = [
  { icon: FileSpreadsheet, title: "Planilha de vendas", meta: "Gatilho · nova linha" },
  { icon: Filter, title: "Filtrar pedidos", meta: "Condição · valor > R$ 500" },
  { icon: Mail, title: "Enviar e-mail", meta: "Ação · time comercial" },
  { icon: Database, title: "Atualizar CRM", meta: "Ação · registro criado" },
];

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/25 bg-brand/8 px-3.5 py-1.5 text-xs font-semibold text-brand">
            <Sparkles className="size-3.5" />
            Automação no-code feita no Brasil
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Sua equipe não nasceu para{" "}
            <span className="text-gradient-brand">copiar e colar dados</span> todos os dias
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            A TechFlow devolve horas ao seu time automatizando tarefas repetitivas em uma
            plataforma visual de arrastar e soltar. Sem código, sem agência: você conecta
            planilhas, e-mails e sistemas e coloca o fluxo no ar em poucas horas.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#teste" className="btn-primary justify-center text-base">
              Criar Fluxo Grátis
              <ArrowRight className="size-4.5" />
            </a>
            <a href="#solucoes" className="btn-secondary justify-center text-base">
              <PlayCircle className="size-5" />
              Ver Demonstração em Vídeo
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="flex -space-x-2">
                {["A", "M", "R", "J"].map((i) => (
                  <span
                    key={i}
                    className="grid size-7 place-items-center rounded-full border-2 border-background bg-secondary text-[11px] font-bold text-secondary-foreground"
                  >
                    {i}
                  </span>
                ))}
              </span>
              <span>
                <strong className="font-semibold text-foreground">+80 empresas</strong>{" "}
                brasileiras automatizando
              </span>
            </div>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>14 dias grátis · sem cartão</span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="rounded-3xl border border-border bg-card p-5 shadow-elevated sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-2">
                  <span className="size-2.5 rounded-full bg-destructive/60" />
                  <span className="size-2.5 rounded-full bg-chart-4/70" />
                  <span className="size-2.5 rounded-full bg-accent-cyan/70" />
                  <span className="ml-2 truncate text-xs font-medium text-muted-foreground">
                    Fluxo · Pedidos do e-commerce
                  </span>
                </div>
                <span className="shrink-0 rounded-full bg-accent-cyan/12 px-2.5 py-1 text-[11px] font-semibold text-accent-cyan">
                  Ativo
                </span>
              </div>

              <div className="mt-5 space-y-0">
                {blocks.map((b, i) => (
                  <div key={b.title}>
                    <div className="flex items-center gap-3 rounded-2xl border border-border bg-background px-3.5 py-3 transition-transform duration-300 hover:-translate-y-0.5">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                        <b.icon className="size-4.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-semibold text-foreground">
                          {b.title}
                        </span>
                        <span className="block truncate text-xs text-muted-foreground">
                          {b.meta}
                        </span>
                      </span>
                    </div>
                    {i < blocks.length - 1 && (
                      <div className="relative mx-auto h-6 w-px bg-border">
                        <span
                          className="absolute -left-[3px] size-[7px] animate-flow rounded-full bg-accent-cyan"
                          style={{ animationDelay: `${i * 0.35}s` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-2xl bg-secondary px-3.5 py-3">
                <span className="text-xs font-medium text-muted-foreground">
                  Executado 1.248 vezes este mês
                </span>
                <span className="text-xs font-bold text-brand">32h economizadas</span>
              </div>
            </div>

            <div className="absolute -bottom-9 -left-4 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft lg:block">
              <p className="text-[11px] font-medium text-muted-foreground">Tempo de implantação</p>
              <p className="text-lg font-bold text-foreground">2 horas</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
