import { Workflow, ShieldCheck, Lock, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";

const columns = [
  {
    title: "Produto",
    links: ["Automações visuais", "Integrações", "Webhooks e API", "Novidades"],
  },
  {
    title: "Templates",
    links: ["Contabilidade", "Imobiliárias", "Comércio e serviços", "Financeiro"],
  },
  {
    title: "Empresa",
    links: ["Sobre a TechFlow", "Comunidade", "Parceiros", "Trabalhe com a gente"],
  },
  {
    title: "Suporte",
    links: ["Central de ajuda", "Suporte no WhatsApp", "Status da plataforma", "Contato"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                <Workflow className="size-5" strokeWidth={2.4} />
              </span>
              <span className="text-lg font-bold tracking-tight text-foreground">
                Tech<span className="text-brand">Flow</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Plataforma brasileira de automação de processos sem código. Automatize em horas o
              que levaria semanas com desenvolvedores.
            </p>
            <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
              Sede em Belo Horizonte, MG · Brasil
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-muted-foreground">
                <ShieldCheck className="size-4 text-brand" />
                Conformidade LGPD
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-semibold text-muted-foreground">
                <Lock className="size-4 text-brand" />
                Dados criptografados
              </span>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
                <ul className="mt-4 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#topo"
                        className="text-sm text-muted-foreground transition-colors hover:text-brand"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border pt-7 sm:flex sm:justify-between">
          <p className="min-w-0 text-xs text-muted-foreground">
            © {new Date().getFullYear()} TechFlow Tecnologia LTDA · Todos os direitos reservados
          </p>
          <div className="flex shrink-0 items-center gap-2">
            {[Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#topo"
                aria-label="Rede social da TechFlow"
                className="grid size-9 place-items-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-brand"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
