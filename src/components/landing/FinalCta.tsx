import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section id="teste" className="bg-secondary/40 px-5 pb-20 lg:px-8 lg:pb-28">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand px-7 py-14 text-center shadow-elevated sm:px-12">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
              Comece hoje e veja o primeiro fluxo rodando em poucas horas
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              14 dias gratuitos, sem cartão de crédito. Escolha um template da sua indústria,
              ajuste os blocos e devolva horas de trabalho para a sua equipe.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#topo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-background px-6 py-3.5 text-base font-bold text-foreground shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-elevated active:translate-y-0 active:scale-[0.98]"
              >
                Criar Fluxo Grátis
                <ArrowRight className="size-4.5" />
              </a>
              <a
                href="#topo"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary-foreground/35 px-6 py-3.5 text-base font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary-foreground/10 active:scale-[0.98]"
              >
                <MessageCircle className="size-5" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
