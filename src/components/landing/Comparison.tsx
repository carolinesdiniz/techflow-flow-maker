import { Reveal } from "./Reveal";

const criteria = [
  {
    label: "Complexidade",
    techflow: "Blocos visuais de arrastar e soltar, prontos para não programadores",
    global: "Curva de aprendizado longa, lógica técnica e documentação em inglês",
    custom: "Depende 100% de desenvolvedores para criar e manter",
  },
  {
    label: "Preço",
    techflow: "Planos em real, até 70% mais baratos que as ferramentas globais",
    global: "Pode passar de R$ 5 mil/mês, com cobrança em dólar",
    custom: "Projetos de R$ 20 mil a R$ 50 mil, mais manutenção",
  },
  {
    label: "Suporte local",
    techflow: "WhatsApp com time brasileiro e resposta rápida",
    global: "Tickets em inglês, com fuso e prazos diferentes",
    custom: "Refém da agenda da agência ou do freelancer",
  },
  {
    label: "Templates prontos",
    techflow: "Modelos por indústria: contabilidade, imobiliária, comércio e serviços",
    global: "Templates genéricos, pensados no mercado americano",
    custom: "Tudo começa do zero, em cada novo processo",
  },
];

const columns = [
  { key: "techflow" as const, title: "TechFlow", highlight: true },
  { key: "global" as const, title: "Zapier / Make", highlight: false },
  { key: "custom" as const, title: "Dev customizado", highlight: false },
];

export function Comparison() {
  return (
    <section id="precos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Comparativo</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            TechFlow x soluções tradicionais
          </h2>
        </Reveal>

        <Reveal delay={100}>
          {/* Desktop table */}
          <div className="mt-14 hidden overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:block">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-border bg-secondary/50">
                  <th className="w-44 px-6 py-5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Critério
                  </th>
                  {columns.map((c) => (
                    <th
                      key={c.key}
                      className={`px-6 py-5 text-sm font-bold ${
                        c.highlight ? "text-brand" : "text-foreground"
                      }`}
                    >
                      {c.title}
                      {c.highlight && (
                        <span className="ml-2 rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-bold uppercase">
                          Recomendado
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {criteria.map((row) => (
                  <tr key={row.label} className="border-b border-border last:border-0">
                    <th className="px-6 py-5 align-top text-sm font-bold text-foreground">
                      {row.label}
                    </th>
                    {columns.map((c) => (
                      <td
                        key={c.key}
                        className={`px-6 py-5 align-top text-sm leading-relaxed ${
                          c.highlight
                            ? "bg-brand/[0.04] font-medium text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {row[c.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="mt-12 grid gap-5 lg:hidden">
            {criteria.map((row) => (
              <div
                key={row.label}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                  {row.label}
                </h3>
                <div className="mt-4 space-y-4">
                  {columns.map((c) => (
                    <div
                      key={c.key}
                      className={`rounded-2xl p-4 ${
                        c.highlight ? "bg-brand/[0.06]" : "bg-secondary/60"
                      }`}
                    >
                      <p
                        className={`text-xs font-bold ${
                          c.highlight ? "text-brand" : "text-foreground"
                        }`}
                      >
                        {c.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {row[c.key]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
