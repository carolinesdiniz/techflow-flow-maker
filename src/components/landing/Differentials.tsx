import { MousePointerClick, LayoutTemplate, PiggyBank, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const cards = [
  {
    icon: MousePointerClick,
    title: "Interface visual intuitiva",
    text: "Blocos de arrastar e soltar desenhados para quem não programa. Se você sabe desenhar o processo em um papel, sabe automatizar na TechFlow.",
  },
  {
    icon: LayoutTemplate,
    title: "Templates por indústria",
    text: "Modelos prontos para contabilidades, imobiliárias e comércio/serviços. Comece de um fluxo testado e ajuste ao seu jeito de trabalhar.",
  },
  {
    icon: PiggyBank,
    title: "Custo-benefício real",
    text: "Até 70% mais econômico que as soluções globais, com preço em real e sem surpresa de câmbio na fatura.",
  },
  {
    icon: MessageCircle,
    title: "Suporte humanizado no WhatsApp",
    text: "Atendimento rápido, em português e com gente que entende a realidade da pequena e média empresa brasileira.",
  },
];

export function Differentials() {
  return (
    <section id="templates" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">Diferenciais</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Feita para a operação brasileira, não traduzida para ela
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-elevated">
                <span className="grid size-11 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                  <c.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-foreground">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
