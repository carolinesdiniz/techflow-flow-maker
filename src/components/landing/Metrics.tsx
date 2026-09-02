import { useEffect, useState } from "react";
import { Reveal, useInView } from "./Reveal";

function useCountUp(target: number, active: boolean, duration = 1400) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);

  return value;
}

function Metric({
  value,
  format,
  label,
  sub,
  active,
}: {
  value: number;
  format: (v: number) => string;
  label: string;
  sub: string;
  active: boolean;
}) {
  const current = useCountUp(value, active);
  return (
    <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft sm:p-7">
      <p className="text-3xl font-extrabold tracking-tight text-gradient-brand sm:text-4xl">
        {format(current)}
      </p>
      <p className="mt-3 text-sm font-bold text-foreground">{label}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{sub}</p>
    </div>
  );
}

export function Metrics() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="comunidade"
      className="border-y border-border bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Tração</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Crescimento construído com clientes reais
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Desde 2021, empresas de contabilidade, imóveis, comércio e serviços rodam suas
            operações na TechFlow e compartilham fluxos na nossa comunidade.
          </p>
        </Reveal>

        <div ref={ref} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Metric
            active={inView}
            value={80}
            format={(v) => `+${Math.round(v)}`}
            label="Clientes ativos no 1º ano"
            sub="PMEs brasileiras automatizando processos do dia a dia"
          />
          <Metric
            active={inView}
            value={2.1}
            format={(v) => `R$ ${v.toFixed(1)}M`}
            label="Faturamento em 2023"
            sub="De R$ 250 mil em 2021 para R$ 2,1 milhões em três anos"
          />
          <Metric
            active={inView}
            value={169}
            format={(v) => `+${Math.round(v)}%`}
            label="Crescimento em 2023"
            sub="Depois de +212% em 2022, no melhor ritmo da história"
          />
          <Metric
            active={inView}
            value={100}
            format={(v) => `${Math.round(v)}%`}
            label="Suporte em português"
            sub="Comunidade colaborativa e atendimento direto no WhatsApp"
          />
        </div>
      </div>
    </section>
  );
}
