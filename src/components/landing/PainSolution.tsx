import { Check, X } from "lucide-react";
import { Reveal } from "./Reveal";

const pains = [
  "Até 60% do expediente da equipe gasto em entrada de dados, e-mails e relatórios manuais",
  "Erros humanos que custam retrabalho, clientes e credibilidade",
  "Ferramentas globais cobrando mais de R$ 5 mil por mês e em inglês",
  "Orçamentos de agência de dezenas de milhares de reais para um bot simples",
];

const gains = [
  "Fluxos montados arrastando blocos: quem conhece o processo automatiza sozinho",
  "Execução automática 24/7, com histórico e alertas quando algo falha",
  "Planos em real, até 70% mais econômicos que Zapier e Make",
  "No ar em poucas horas, sem contratar desenvolvedor nem agência",
];

export function PainSolution() {
  return (
    <section id="solucoes" className="border-y border-border bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            O problema não é a sua equipe. É o processo manual.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Veja o antes e o depois de quem coloca a operação para rodar sozinha com a TechFlow.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
              <span className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-destructive">
                Hoje
              </span>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                Horas perdidas e custo alto
              </h3>
              <ul className="mt-6 space-y-4">
                {pains.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                      <X className="size-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-brand/25 bg-card p-7 shadow-elevated sm:p-9">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
              <span className="inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand">
                Com a TechFlow
              </span>
              <h3 className="mt-5 text-xl font-bold text-foreground">
                Automação visual que roda sozinha
              </h3>
              <ul className="mt-6 space-y-4">
                {gains.map((g) => (
                  <li key={g} className="flex gap-3 text-sm leading-relaxed text-foreground">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/12 text-brand">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
