# Landing page TechFlow (SaaS de automação no-code)

Página única de alta conversão em português, construída na rota inicial `/`, com paleta tech (índigo/ciano com ardósia e toques de roxo), tipografia Inter, cantos arredondados e modo claro limpo. Dados de negócio vindos do briefing enviado (80+ clientes, R$ 2,1M em 2023, sede em Belo Horizonte, suporte via WhatsApp).

## Seções (nesta ordem)

1. **Navbar fixa** — logo TechFlow (marca em texto + ícone de fluxo), links Soluções, Templates, Preços, Comunidade (scroll suave com âncoras), botões "Entrar" (ghost) e "Testar Gratuitamente" (primário). Menu hambúrguer no mobile.
2. **Hero** — título sobre o fim das tarefas manuais repetitivas e ganho de horas da equipe; subtítulo sobre a plataforma visual de arrastar e soltar implantada em horas; CTAs "Criar Fluxo Grátis" (primário) e "Ver Demonstração em Vídeo" (secundário com ícone play); prova social curta ("+80 empresas brasileiras automatizando"). Mockup à direita: cartão de canvas de automação com blocos (Planilha → Filtro → E-mail → CRM) ligados por linhas SVG, com pulso animado percorrendo as conexões.
3. **Problema vs. Solução** — duas colunas contrastantes: dor (até 60% do expediente em tarefas manuais, erros, ferramentas de R$ 5 mil+/mês, orçamento de agência) versus virada TechFlow (automação visual, sem agência, sem código, no ar em poucas horas).
4. **Diferenciais** — 4 cards: Interface Visual Intuitiva, Templates por Indústria (contabilidades, imobiliárias, comércio/serviços), Custo-Benefício Real (70% mais econômico), Suporte Humanizado via WhatsApp.
5. **Tração e confiança** — faixa com métricas: 80+ clientes ativos no 1º ano, R$ 2,1M de faturamento em 2023 (+169%), crescimento 2021→2023, comunidade colaborativa de fluxos. Números com contagem animada ao entrar na viewport.
6. **Tabela comparativa** — TechFlow vs. Zapier/Make vs. Desenvolvimento customizado nos critérios Complexidade, Preço, Suporte local, Templates prontos. Tabela no desktop, cards empilhados no mobile.
7. **FAQ** — accordion funcional (abre/fecha, um aberto por vez) com "Preciso saber programar?", "Como funciona o suporte via WhatsApp?", "Quais integrações estão disponíveis?" e mais 2 perguntas de objeção (preço/teste grátis, segurança dos dados).
8. **CTA final + Footer** — bloco de conversão e rodapé institucional: colunas de links (Produto, Templates, Empresa, Suporte), selos de segurança/LGPD, menção à sede em Belo Horizonte, MG, redes e copyright.

## Interatividade

- Microinterações nos CTAs: leve elevação, sombra e brilho no hover, `active` com escala reduzida.
- Reveal suave por seção ao rolar (IntersectionObserver, sem exageros).
- Accordion de FAQ com transição de altura e ícone rotativo.
- Scroll suave dos links da navbar; navbar ganha borda/blur ao rolar.
- 100% responsivo: grids que colapsam em 1 coluna, tabela virando cards, header em grid seguro para mobile.

## Detalhes técnicos

- Substituir o placeholder de `src/routes/index.tsx` pela landing page; seções em componentes dentro de `src/components/landing/`.
- Tokens de cor (índigo, ciano, roxo, ardósia, gradientes e sombras) definidos em `src/styles.css` com oklch em `:root` e registrados em `@theme inline` — nenhuma cor fixa nos componentes.
- Inter carregada via `<link>` no head da rota raiz (`src/routes/__root.tsx`) e exposta como token `--font-sans`.
- Mockup do hero e ilustrações feitos em HTML/CSS/SVG (sem imagens geradas), mantendo a página leve.
- SEO: `head()` próprio em `src/routes/index.tsx` com title, description, og:title, og:description, og:type e twitter:card específicos da TechFlow; H1 único e HTML semântico.
- Sem backend: formulários/CTAs apenas ancoram para a seção de teste grátis.
