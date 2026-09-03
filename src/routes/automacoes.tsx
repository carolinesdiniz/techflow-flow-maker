import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  ClipboardList,
  FileSpreadsheet,
  MessageCircle,
  Mail,
  Users,
  Database,
  Webhook,
  Table2,
  Settings2,
  Trash2,
  Save,
  PlayCircle,
  Rocket,
  Plus,
  ArrowDown,
  X,
  Zap,
} from "lucide-react";
import { AppSidebar } from "@/components/app/AppSidebar";

const title = "Editor de automações — TechFlow";
const description =
  "Crie e gerencie automações no-code na TechFlow: conecte formulários, Google Sheets, WhatsApp, e-mail, CRMs e APIs em um editor visual de arrastar e soltar.";

export const Route = createFileRoute("/automacoes")({
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
  component: AutomationBuilder,
});

type Kind = "trigger" | "action";

type Palette = {
  app: string;
  kind: Kind;
  icon: typeof Mail;
  emoji: string;
  title: string;
  desc: string;
};

const palette: Palette[] = [
  {
    app: "form",
    kind: "trigger",
    icon: ClipboardList,
    emoji: "📋",
    title: "Formulário recebido",
    desc: "Dispara quando alguém envia o formulário de contato",
  },
  {
    app: "sheets",
    kind: "trigger",
    icon: Table2,
    emoji: "📈",
    title: "Nova linha na planilha",
    desc: "Dispara quando uma linha é adicionada no Google Sheets",
  },
  {
    app: "sheets",
    kind: "action",
    icon: FileSpreadsheet,
    emoji: "📊",
    title: "Criar linha no Google Sheets",
    desc: "Salva os dados recebidos na sua planilha de clientes",
  },
  {
    app: "whatsapp",
    kind: "action",
    icon: MessageCircle,
    emoji: "💬",
    title: "Enviar mensagem no WhatsApp",
    desc: "Avisa o time comercial ou o próprio cliente",
  },
  {
    app: "email",
    kind: "action",
    icon: Mail,
    emoji: "✉️",
    title: "Enviar e-mail",
    desc: "Dispara um e-mail de boas-vindas ou notificação interna",
  },
  {
    app: "crm",
    kind: "action",
    icon: Users,
    emoji: "👥",
    title: "Criar contato no CRM",
    desc: "Cadastra o lead no seu CRM com os campos mapeados",
  },
  {
    app: "erp",
    kind: "action",
    icon: Database,
    emoji: "🏢",
    title: "Cadastrar no ERP",
    desc: "Cria o cliente no seu ERP ou banco de dados",
  },
  {
    app: "api",
    kind: "action",
    icon: Webhook,
    emoji: "🔗",
    title: "Chamar API / Webhook",
    desc: "Envia os dados para qualquer sistema via requisição HTTP",
  },
];

type Block = Palette & { id: string };

const connections: Record<string, string[]> = {
  form: ["Formulário de contato — site", "Formulário de orçamento"],
  sheets: ["Minha planilha de clientes", "Planilha de vendas 2026"],
  whatsapp: ["WhatsApp Comercial (+55 31)", "WhatsApp Suporte"],
  email: ["contato@techflow.com.br", "comercial@techflow.com.br"],
  crm: ["CRM Pipedrive", "CRM RD Station"],
  erp: ["ERP Omie", "Banco de dados PostgreSQL"],
  api: ["API interna — produção"],
};

const actionOptions: Record<string, string[]> = {
  sheets: ["Criar linha", "Atualizar linha"],
  whatsapp: ["Enviar mensagem de texto", "Enviar template aprovado"],
  email: ["Enviar e-mail simples", "Enviar e-mail com template"],
  crm: ["Criar contato", "Atualizar contato"],
  erp: ["Criar cliente", "Atualizar cliente"],
  api: ["POST", "PUT"],
  form: ["Ao receber resposta"],
};

const sourceFields = [
  "Nome vindo do formulário",
  "Email vindo do formulário",
  "Telefone vindo do formulário",
  "Empresa vinda do formulário",
];

const pick = (i: number): Palette => palette[i]!;

const initial: Block[] = [
  { ...pick(0), id: "b1" },
  { ...pick(2), id: "b2" },
  { ...pick(3), id: "b3" },
];

let counter = 100;

function AutomationBuilder() {
  const [name, setName] = useState("Novo cliente cadastrado");
  const [active, setActive] = useState(true);
  const [blocks, setBlocks] = useState<Block[]>(initial);
  const [selectedId, setSelectedId] = useState<string | null>("b2");
  const [dragOver, setDragOver] = useState(false);

  const selected = blocks.find((b) => b.id === selectedId) ?? null;

  const addBlock = (item: Palette) => {
    const block = { ...item, id: `b${++counter}` };
    setBlocks((prev) =>
      item.kind === "trigger" && prev.some((b) => b.kind === "trigger")
        ? prev.map((b) => (b.kind === "trigger" ? block : b))
        : [...prev, block],
    );
    setSelectedId(block.id);
  };

  const removeBlock = (id: string) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
    setSelectedId((cur) => (cur === id ? null : cur));
  };

  return (
    <div className="flex min-h-screen bg-secondary/30 font-sans antialiased">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex flex-col gap-4 border-b border-border bg-background px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Nome da automação"
                className="min-w-0 max-w-full rounded-lg border border-transparent bg-transparent px-1 text-xl font-bold tracking-tight text-foreground outline-none transition-colors hover:border-border focus:border-brand sm:text-2xl"
              />
              <button
                type="button"
                onClick={() => setActive((v) => !v)}
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                  active
                    ? "border-brand/25 bg-brand/10 text-brand"
                    : "border-border bg-muted text-muted-foreground"
                }`}
              >
                <span
                  className={`size-2 rounded-full ${active ? "bg-brand" : "bg-muted-foreground"}`}
                />
                {active ? "Ativa" : "Pausada"}
              </button>
            </div>
            <p className="mt-1 px-1 text-sm text-muted-foreground">
              {blocks.length} blocos · última edição há poucos segundos
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <ThemeToggle />
            <button type="button" className="btn-secondary px-4 py-2.5 text-sm">
              <Save className="size-4" />
              Salvar
            </button>
            <button type="button" className="btn-secondary px-4 py-2.5 text-sm">
              <PlayCircle className="size-4" />
              Testar automação
            </button>
            <button type="button" className="btn-primary px-4 py-2.5 text-sm">
              <Rocket className="size-4" />
              Publicar
            </button>
            <button
              type="button"
              onClick={() => setBlocks([])}
              className="inline-flex items-center gap-2 rounded-xl border border-destructive/30 px-4 py-2.5 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/10"
            >
              <Trash2 className="size-4" />
              Deletar
            </button>
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-col xl:flex-row">
          {/* Paleta de blocos */}
          <div className="border-b border-border bg-background px-5 py-4 xl:w-64 xl:shrink-0 xl:border-b-0 xl:border-r xl:px-4">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Blocos disponíveis
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Arraste para o canvas ou clique para adicionar.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-1">
              {palette.map((item, i) => (
                <button
                  key={`${item.app}-${i}`}
                  type="button"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("text/plain", String(i))}
                  onClick={() => addBlock(item)}
                  className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-3 text-left transition-all hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-soft"
                >
                  <span className="text-base leading-none">{item.emoji}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground">
                      {item.title}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wide text-brand">
                      {item.kind === "trigger" ? "Gatilho" : "Ação"}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Canvas */}
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setDragOver(false);
              const idx = Number(e.dataTransfer.getData("text/plain"));
              if (palette[idx]) addBlock(palette[idx]);
            }}
            className={`relative min-h-[60vh] flex-1 overflow-y-auto px-5 py-8 transition-colors lg:px-10 ${
              dragOver ? "bg-brand/5" : ""
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-25" />

            <div className="relative mx-auto max-w-xl">
              {blocks.length === 0 && (
                <div className="rounded-2xl border-2 border-dashed border-border bg-card/60 p-10 text-center">
                  <Zap className="mx-auto size-6 text-brand" />
                  <p className="mt-3 text-sm font-semibold text-foreground">
                    Comece escolhendo um gatilho
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Arraste um bloco da lista para montar seu fluxo.
                  </p>
                </div>
              )}

              {blocks.map((block, i) => (
                <div key={block.id}>
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {block.kind === "trigger" ? "Quando isso acontecer" : "Faça isso"}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedId(block.id)}
                    className={`w-full rounded-2xl border bg-card p-4 text-left shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated ${
                      selectedId === block.id ? "border-brand ring-2 ring-brand/20" : "border-border"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                          block.kind === "trigger"
                            ? "bg-gradient-brand text-primary-foreground"
                            : "bg-brand/10 text-brand"
                        }`}
                      >
                        <block.icon className="size-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-foreground">
                          {block.emoji} {block.title}
                        </p>
                        <p className="mt-0.5 text-sm text-muted-foreground">{block.desc}</p>
                        <p className="mt-2 text-xs font-medium text-muted-foreground">
                          Conexão: {connections[block.app]?.[0]}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-end gap-2">
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedId(block.id);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 hover:text-brand"
                      >
                        <Settings2 className="size-3.5" />
                        Editar configurações
                      </span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          removeBlock(block.id);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-destructive/30 px-2.5 py-1.5 text-xs font-semibold text-destructive transition-colors hover:bg-destructive/10"
                      >
                        <Trash2 className="size-3.5" />
                        Remover
                      </span>
                    </div>
                  </button>

                  {i < blocks.length - 1 && (
                    <div className="flex flex-col items-center py-3">
                      <span className="h-6 w-px bg-brand/40" />
                      <ArrowDown className="size-4 text-brand" />
                      <span className="h-6 w-px bg-brand/40" />
                    </div>
                  )}
                </div>
              ))}

              {blocks.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <button
                    type="button"
                    onClick={() => addBlock(pick(4))}
                    className="inline-flex items-center gap-2 rounded-xl border border-dashed border-brand/40 bg-card px-4 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
                  >
                    <Plus className="size-4" />
                    Adicionar próxima ação
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Painel de configuração */}
          {selected && (
            <div className="border-t border-border bg-background px-5 py-6 xl:w-80 xl:shrink-0 xl:border-t-0 xl:border-l">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Configurações do bloco
                  </p>
                  <p className="mt-1 text-base font-bold text-foreground">
                    {selected.emoji} {selected.title}
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Fechar painel"
                  onClick={() => setSelectedId(null)}
                  className="grid size-8 place-items-center rounded-lg border border-border text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-foreground">Escolha a conexão</label>
                  <select className="mt-1.5 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand">
                    {(connections[selected.app] ?? ["Conectar novo aplicativo"]).map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <span className="text-xs font-semibold text-foreground">Ação</span>
                  <div className="mt-1.5 space-y-2">
                    {(actionOptions[selected.app] ?? ["Executar"]).map((opt, i) => (
                      <label
                        key={opt}
                        className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground transition-colors hover:border-brand/40"
                      >
                        <input
                          type="radio"
                          name={`action-${selected.id}`}
                          defaultChecked={i === 0}
                          className="accent-brand"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                {selected.kind === "action" && (
                  <div>
                    <span className="text-xs font-semibold text-foreground">
                      Mapeamento de campos
                    </span>
                    <div className="mt-1.5 space-y-3">
                      {["Nome", "Email", "Telefone"].map((field, i) => (
                        <div key={field}>
                          <span className="text-xs text-muted-foreground">{field}</span>
                          <select
                            defaultValue={sourceFields[i]}
                            className="mt-1 w-full rounded-xl border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none focus:border-brand"
                          >
                            {sourceFields.map((f) => (
                              <option key={f}>{f}</option>
                            ))}
                          </select>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <button type="button" className="btn-primary w-full justify-center text-sm">
                  Salvar bloco
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
