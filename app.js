// ===== CONFIG: edite aqui pra atualizar o conteúdo do site =====

const CONFIG = {

  // time: ordem da esquerda pra direita. o primeiro da lista aparece por completo
  // (na frente), os seguintes vêm "por trás". "foto" é opcional (path pra imagem
  // em assets/avatars/); sem foto, mostra as iniciais.
  team: [
    { nome: "Bea", foto: "assets/avatars/bea.jpg" },
    { nome: "Vitória", foto: "assets/avatars/vitoria.jpg" },
    { nome: "Letícia", foto: "assets/avatars/leticia.jpg" },
    { nome: "Maria", foto: "assets/avatars/maria.jpg" },
    { nome: "Sofia", foto: "assets/avatars/sofia.jpg" },
  ],

  // esquema de cores por frente (usado na rotina). precisa bater com as
  // variáveis definidas em styles.css (--representantes-cor, --embaixadoras-cor,
  // --afiliadas-cor, --time-cor).
  frenteCores: {
    embaixadoras: { label: "Embaixadoras", cor: "var(--embaixadoras-cor)" },
    afiliadas: { label: "Afiliadas do TikTok", cor: "var(--afiliadas-cor)" },
    representantes: { label: "Representantes", cor: "var(--representantes-cor)" },
    time: { label: "Time", cor: "var(--time-cor)" },
  },

  // cadência semanal, em formato calendário. a daily é fixa (mostrada à parte,
  // acontece todo dia útil); "dias" traz só a call específica de cada dia.
  semana: {
    daily: { nome: "Daily", hora: "09h15", frente: "time", desc: "Le Moritz", pessoas: ["Time"] },
    dias: {
      "Segunda": [
        { nome: "Weekly", hora: "10h", frente: "time", desc: "(uma frente por vez)", pessoas: ["Time"] },
      ],
      "Terça": [
        { nome: "Treinamento embaixadoras", hora: "17h", frente: "embaixadoras", pessoas: ["Bea", "Sofia", "Maria"] },
      ],
      "Quarta": [
        { nome: "Refs e feedbacks", hora: "14h", frente: "time", pessoas: ["Bea", "Letícia", "Vitória"] },
      ],
      "Quinta": [],
      "Sexta": [
        { nome: "Fechamento", hora: "11h", frente: "time", desc: "(todas juntas)", pessoas: ["Time"] },
      ],
    },
  },

  // foco do mês por frente — destaque curto mostrado na página de rotina.
  focoDoMes: {
    mes: "Julho",
    itens: [
      { frente: "embaixadoras", texto: "Estabelecer rotina e conexão com as embaixadoras + buscar formas de analisar os dados delas pra novas implementações." },
      { frente: "afiliadas", texto: "Estruturar nossa comunidade interna + desafio com MVM e internas." },
      { frente: "representantes", texto: "Estruturar prospecção + estabelecer rotina com o grupo + criação do nosso catálogo." },
    ],
  },

  // tarefas por frequência.
  tarefas: [
    // --- Diário ---
    { freq: "Diário", nome: "Aprovação de embaixadoras", frente: "embaixadoras", pessoas: ["Sofia", "Maria"] },
    { freq: "Diário", nome: "Chat e suporte de embaixadoras", frente: "embaixadoras", pessoas: ["Sofia", "Maria"] },
    { freq: "Diário", nome: "Checar métricas e conteúdos postados embaixadoras", frente: "embaixadoras", pessoas: ["Bea", "Sofia", "Maria"] },
    { freq: "Diário", nome: "Mensagem 1x1 aniversariantes embaixadoras + voucher", frente: "embaixadoras", pessoas: ["Sofia"] },
    { freq: "Diário", nome: "Aprovação de afiliadas que solicitaram amostra", frente: "afiliadas", pessoas: ["Letícia"] },
    { freq: "Diário", nome: "Engajar comunidade das afiliadas", frente: "afiliadas", pessoas: ["Letícia"] },
    { freq: "Diário", nome: "Responder chat TikTok e WhatsApp privado afiliadas", frente: "afiliadas", pessoas: ["Letícia"] },
    { freq: "Diário", nome: "Prospecção ativa de afiliadas", frente: "afiliadas", pessoas: ["Letícia"] },
    { freq: "Diário", nome: "Responder grupo e chat afiliadas", frente: "afiliadas", pessoas: ["Bea", "Letícia"] },
    { freq: "Diário", nome: "Checar métricas e conteúdos postados afiliadas", frente: "afiliadas", pessoas: ["Bea"] },
    { freq: "Diário", nome: "Conversão de leads representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Diário", nome: "Engajar grupo de representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Diário", nome: "Chat suporte representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Diário", nome: "Acompanhamento dos desafios das representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Diário", nome: "Checar métricas representantes", frente: "representantes", pessoas: ["Bea"] },

    // --- Semanal ---
    { freq: "Semanal", nome: "Treinamento embaixadoras", frente: "embaixadoras", pessoas: ["Bea", "Maria", "Sofia"] },
    { freq: "Semanal", nome: "Envio de kit boas vindas para embaixadoras", frente: "embaixadoras", pessoas: ["Maria", "Sofia"] },
    { freq: "Semanal", nome: "Time to think: embaixadoras", frente: "embaixadoras", pessoas: ["Bea"] },
    { freq: "Semanal", nome: "Atualizar banco de refs afiliadas", frente: "afiliadas", pessoas: ["Bea"] },
    { freq: "Semanal", nome: "Posts no TikTok feed", frente: "afiliadas", pessoas: ["Letícia"] },
    { freq: "Semanal", nome: "Referências de conteúdo para banco de refs", frente: "afiliadas", pessoas: ["Letícia"] },
    { freq: "Semanal", nome: "Time to think: afiliadas", frente: "afiliadas", pessoas: ["Bea"] },
    { freq: "Semanal", nome: "Produção de materiais para representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Semanal", nome: "Aplicação dos desafios semanais das representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Semanal", nome: "Fechamento número de leads contatados e convertidos", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Semanal", nome: "Acompanhar rotina semanal representantes", frente: "representantes", pessoas: ["Bea"] },
    { freq: "Semanal", nome: "Time to think: representantes", frente: "representantes", pessoas: ["Bea"] },
    { freq: "Semanal", nome: "Fechamento semanal das 3 frentes", frente: "time", pessoas: ["Bea"] },

    // --- Quinzenal ---
    { freq: "Quinzenal", nome: "1x1", hora: "10h ou 11h", desc: "(individual, intercalado)", frente: "time", pessoas: ["Bea", "Vitória", "Letícia", "Maria", "Sofia"] },
    { freq: "Quinzenal", nome: "Treinamento afiliadas", frente: "afiliadas", pessoas: ["Bea", "Letícia"] },

    // --- Mensal ---
    { freq: "Mensal", nome: "Desafio embaixadoras", frente: "embaixadoras", pessoas: ["Bea", "Sofia"] },
    { freq: "Mensal", nome: "Definir os press kits trimestrais para embaixadoras", frente: "embaixadoras", pessoas: ["Maria"] },
    { freq: "Mensal", nome: "Contato 1x1 com embaixadoras inativas", frente: "embaixadoras", pessoas: ["Maria", "Sofia"] },
    { freq: "Mensal", nome: "Escolha de embaixadora destaque do mês", frente: "embaixadoras", pessoas: ["Sofia"] },
    { freq: "Mensal", nome: "Calendário de aniversários do mês embaixadoras", frente: "embaixadoras", pessoas: ["Sofia"] },
    { freq: "Mensal", nome: "Desafio afiliadas (MVM e internas)", frente: "afiliadas", pessoas: ["Bea", "Letícia"] },
    { freq: "Mensal", nome: "Calendário de desafios das representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Mensal", nome: "Calendário de qualificação das representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Mensal", nome: "Desenvolvimento do catálogo representantes", frente: "representantes", pessoas: ["Vitória"] },
    { freq: "Mensal", nome: "Pagamento de comissões", frente: "time", pessoas: ["Bea"] },
    { freq: "Mensal", nome: "Report mensal", frente: "time", pessoas: ["Bea"] },
    { freq: "Mensal", nome: "Review de OKRs do trimestre", frente: "time", pessoas: ["Time"] },
  ],

  // documentos: lista opcional de links por frente (planilhas, docs, etc.)
  frentes: [
    {
      chave: "embaixadoras",
      nome: "Embaixadoras",
      meta: "260 embaixadoras &nbsp;·&nbsp; 45+ &nbsp;·&nbsp; Instagram",
      descricao: "São criadoras de conteúdo, hoje mais de 260 mulheres, com mais de 45 anos. O foco da criação hoje é o Instagram.",
      link: null,
      documentos: [
        { titulo: "PLANILHA EMBAIXADORAS", url: "https://docs.google.com/spreadsheets/d/1tsYSeFviASGWHm30XAGjChOe5kOvg-7T0rE2jQcYsJM/edit?gid=1323823578#gid=1323823578" },
      ],
      whatsapp: "https://chat.whatsapp.com/IC4RoP6130W1rJ4lHm6cCC",
      faturamento: {
        titulo: "Forma de faturamento",
        itens: [
          { titulo: "Comissionamento de 10% via cupom de desconto", texto: "Cada embaixadora tem seu próprio cupom: ele dá desconto pras seguidoras/clientes dela e gera 10% de comissão pra ela em cada venda." },
          { titulo: "Desafios mensais", texto: "Dá pra faturar extra completando as missões dos desafios de cada mês." },
          { titulo: "Pagamento", texto: "A comissão é recebida por transferência até o dia 10 do mês seguinte." },
        ],
      },
      rotinaPrograma: {
        titulo: "Rotina do programa",
        itens: [
          { titulo: "Treinamentos semanais", texto: "Às 17h, toda terça-feira." },
          { titulo: "Desafios mensais", texto: "Todo mês tem um desafio novo pra elas." },
        ],
        links: [
          { label: "Resultados dos desafios anteriores", url: "https://bealemoritz.github.io/desafios-embaixadoras/" },
          { label: "Registro dos treinamentos já realizados", url: "https://app.clickup.com/3109207/v/dc/2ywaq-77153/2ywaq-389713" },
        ],
      },
    },
    {
      chave: "afiliadas",
      nome: "Afiliadas do TikTok",
      meta: "internas + MVM &nbsp;·&nbsp; perfil mais jovem &nbsp;·&nbsp; TikTok",
      descricao: "Criadoras de conteúdo que recebem comissão por venda dentro do próprio TikTok. Temos as afiliadas internas e as afiliadas da MVM. Em maioria, são mais jovens, com foco total em produção pro TikTok.",
      link: "https://www.lemoritz.com/afiliadas",
      linkLabel: "Ver página das afiliadas",
      documentos: [
        { titulo: "PLANILHA AFILIADAS", url: "https://docs.google.com/spreadsheets/d/1oIkuAawgRyK2ZPOU7tEcAVTCYAXVEikgXRKc0V-OZY0/edit?gid=1832247659#gid=1832247659" },
      ],
      whatsapp: "https://chat.whatsapp.com/FyZgzhBV5OEHzeU23LbeDE",
      faturamento: {
        titulo: "Forma de faturamento",
        intro: "Comissionam por venda de produto com link em vídeo ou live no TikTok. O TikTok repassa a comissão delas automaticamente.",
        itens: [
          { titulo: "Afiliadas internas", texto: "12% caso tenham nos procurado pedindo amostra grátis · 15% caso a gente tenha feito prospecção ativa · 20% caso sejam nossas top afiliadas." },
          { titulo: "Afiliadas MVM", texto: "Orgânico (total 25%): Top Afiliado 20% (MVM 4% + Gerente 1%) · Afiliado Qualificado 19% (MVM 4% + Gerente 2%) · Afiliado Normal 18% (MVM 5% + Gerente 2%) · Aberto 12%. Ads: 5%, total de 7,5%." },
        ],
      },
      rotinaPrograma: {
        titulo: "Rotina do programa",
        itens: [
          { titulo: "Treinamentos quinzenais", texto: null },
          { titulo: "Desafios mensais", texto: null },
        ],
      },
    },
    {
      chave: "representantes",
      nome: "Representantes",
      meta: "não criam conteúdo &nbsp;·&nbsp; WhatsApp + offline",
      descricao: "Não são criadoras de conteúdo: vendem tanto no online quanto no offline. O foco de venda online é o WhatsApp, com um grupo que parte de uma lista de clientes.",
      link: "https://vick-one.github.io/Cliente-Embaixadora/",
      linkLabel: "Ver página das representantes",
      documentos: [
        { titulo: "PLANILHA REPRESENTANTES", url: "https://docs.google.com/spreadsheets/d/1meS79ak-P-aAG9NBOTDbEdgL03LyGmANMpeRxnqNXIs/edit?gid=927081837#gid=927081837" },
      ],
    },
  ],

  artigos: [
    {
      titulo: "Como construir uma comunidade que as pessoas nunca superam",
      subtitulo: "O principal motivo pelo qual as pessoas abandonam comunidades (e como resolver isso com um framework de quatro letras).",
      data: "09 de jul de 2026 · 6 min de leitura",
      arquivo: "leitura/artigo-1-comunidade-que-ninguem-supera.html",
    },
  ],

};

// ===== Render =====

const avatarColors = ["var(--embaixadoras-cor)", "var(--afiliadas-cor)", "var(--time-cor)", "var(--representantes-cor)", "#8a6d3b"];

function renderTeam() {
  const el = document.getElementById("avatars");
  const max = 6;
  const shown = CONFIG.team.slice(0, max);
  el.innerHTML = shown.map((p, i) => {
    const z = shown.length - i; // primeiro da lista fica por cima
    if (p.foto) {
      return `<div class="avatar" style="z-index:${z}" title="${p.nome}"><img src="${p.foto}" alt="${p.nome}"></div>`;
    }
    const iniciais = p.nome.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
    const cor = avatarColors[i % avatarColors.length];
    return `<div class="avatar" style="background:${cor};z-index:${z}" title="${p.nome}">${iniciais}</div>`;
  }).join("");

  const extra = CONFIG.team.length - shown.length;
  if (extra > 0) {
    el.innerHTML += `<div class="avatar more">+${extra}</div>`;
  }

  document.getElementById("team-caption").textContent =
    CONFIG.team.map(p => p.nome.toLowerCase()).join(" · ");
}

// ícones das frentes: mesmo traço fino em tinta dos ícones de rotina/leitura,
// com um ponto de destaque na cor da própria frente.
const FRENTE_ICONS = {
  embaixadoras: (cor) => `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="32" height="32" rx="8" stroke="#1C1A15" stroke-width="1.6"/>
      <circle cx="24" cy="25" r="8" stroke="#1C1A15" stroke-width="1.6"/>
      <circle cx="24" cy="25" r="2.6" fill="${cor}"/>
      <circle cx="32" cy="17" r="1.6" fill="#1C1A15"/>
    </svg>
  `,
  afiliadas: (cor) => `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 8v20.5a6.5 6.5 0 1 1-5-6.32" stroke="#1C1A15" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M27 8c0 5.2 3.8 9 9 9.4" stroke="#1C1A15" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="22" cy="28.5" r="2.6" fill="${cor}"/>
    </svg>
  `,
  representantes: (cor) => `
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 20l4-9h24l4 9" stroke="#1C1A15" stroke-width="1.6" stroke-linejoin="round"/>
      <path d="M8 20v13a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V20" stroke="#1C1A15" stroke-width="1.6" stroke-linejoin="round"/>
      <line x1="8" y1="20" x2="40" y2="20" stroke="#1C1A15" stroke-width="1.6"/>
      <circle cx="24" cy="28" r="2.6" fill="${cor}"/>
    </svg>
  `,
};

// ícones pequenos usados nos botões de docs/whatsapp (herdam a cor do texto)
const SHEET_ICON = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
  <rect x="3" y="3" width="14" height="14" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
  <line x1="3" y1="8" x2="17" y2="8" stroke="currentColor" stroke-width="1.4"/>
  <line x1="3" y1="13" x2="17" y2="13" stroke="currentColor" stroke-width="1.4"/>
  <line x1="9" y1="3" x2="9" y2="17" stroke="currentColor" stroke-width="1.4"/>
</svg>`;
const CHAT_ICON = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
  <path d="M10 3a7 7 0 0 0-6 10.5L3 17l3.7-1A7 7 0 1 0 10 3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>
</svg>`;
const CURSOR_ICON = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
  <path d="M4 2.5l4.8 13 1.7-5 5-1.7L4 2.5z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
</svg>`;

function renderFrentes() {
  const el = document.getElementById("frentes-list");
  el.innerHTML = CONFIG.frentes.map((f, i) => {
    const cor = CONFIG.frenteCores[f.chave].cor;
    return `
    <button class="nav-card" data-frente="${i}">
      <span class="nav-icon">${FRENTE_ICONS[f.chave](cor)}</span>
      <span class="nav-text">
        <span class="nav-title">${f.nome}</span>
        <span class="nav-sub">${f.meta}</span>
      </span>
      <span class="nav-arrow">&rarr;</span>
    </button>
  `;
  }).join("");

  el.querySelectorAll("[data-frente]").forEach(btn => {
    btn.addEventListener("click", () => openFrenteDetail(Number(btn.dataset.frente)));
  });
}

function openFrenteDetail(i) {
  const f = CONFIG.frentes[i];
  const cor = CONFIG.frenteCores[f.chave].cor;

  document.getElementById("frente-detail-meta").innerHTML = f.meta;
  document.getElementById("frente-detail-nome").textContent = f.nome;
  document.getElementById("frente-detail-desc").textContent = f.descricao;
  document.getElementById("frente-detail-link").innerHTML = f.link
    ? `<a class="docs-btn pagina-principal-btn" href="${f.link}" target="_blank" rel="noopener">${CURSOR_ICON}${f.linkLabel || "Ver página principal"}</a>`
    : `<span class="docs-btn pagina-principal-btn disabled">${CURSOR_ICON}Página principal em breve</span>`;

  document.getElementById("frente-detail-docs").innerHTML = (f.documentos && f.documentos.length) ? `
    <div class="docs-box">
      <div class="docs-label">Docs importantes</div>
      <div class="docs-btns">
        ${f.documentos.map(d => `<a class="docs-btn" href="${d.url}" target="_blank" rel="noopener">${SHEET_ICON}${d.titulo}</a>`).join("")}
      </div>
    </div>` : "";

  document.getElementById("frente-detail-whatsapp").innerHTML = f.whatsapp ? `
    <div class="whatsapp-section">
      <a class="docs-btn" href="${f.whatsapp}" target="_blank" rel="noopener">${CHAT_ICON}Grupo no WhatsApp</a>
    </div>` : "";

  const infoCard = (bloco) => bloco ? `
    <div class="info-card">
      <div class="info-card-title">${bloco.titulo}</div>
      ${bloco.intro ? `<p class="info-card-intro">${bloco.intro}</p>` : ""}
      ${bloco.itens.map(it => `
        <div class="info-item" style="border-left-color:${cor}">
          <div class="info-item-titulo">${it.titulo}</div>
          ${it.texto ? `<p class="info-item-texto">${it.texto}</p>` : ""}
        </div>
      `).join("")}
      ${bloco.links && bloco.links.length ? `
        <div class="info-card-links">
          ${bloco.links.map(l => `<a class="btn-secundario" href="${l.url}" target="_blank" rel="noopener">${l.label} &rarr;</a>`).join("")}
        </div>` : ""}
    </div>` : "";

  document.getElementById("frente-detail-faturamento").innerHTML = infoCard(f.faturamento);
  document.getElementById("frente-detail-rotina-programa").innerHTML = infoCard(f.rotinaPrograma);

  openView("frente");
}

// miniatura genérica (3 círculos sobrepostos, ecoando os avatares do time)
// usada ao lado de cada artigo pra chamar mais atenção na lista.
const ARTICLE_THUMB_SVG = `
  <svg viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
    <rect width="56" height="56" fill="#F1ECE1"/>
    <circle cx="19" cy="31" r="13" fill="none" stroke="#1C1A15" stroke-opacity="0.5" stroke-width="1.3"/>
    <circle cx="31" cy="21" r="13" fill="none" stroke="#1C1A15" stroke-opacity="0.5" stroke-width="1.3"/>
    <circle cx="34" cy="37" r="13" fill="none" stroke="#1C1A15" stroke-opacity="0.5" stroke-width="1.3"/>
    <circle cx="31" cy="21" r="2" fill="#C9A227"/>
  </svg>
`;

function renderArtigos() {
  const el = document.getElementById("article-list");
  if (CONFIG.artigos.length === 0) {
    el.innerHTML = `<div class="article-placeholder">Nenhum artigo ainda.</div>`;
    return;
  }
  el.innerHTML = CONFIG.artigos.map(a => `
    <a class="article-card" href="${a.arquivo}" target="_blank" rel="noopener">
      <div class="article-thumb">${a.thumb ? `<img src="${a.thumb}" alt="">` : ARTICLE_THUMB_SVG}</div>
      <div class="article-content">
        <div class="article-date">${a.data}</div>
        <div class="article-title">${a.titulo}</div>
        <div class="article-sub">${a.subtitulo}</div>
      </div>
    </a>
  `).join("");
}

// ===== Rotina =====

// null = vendo o time todo. quando setado, filtra a agenda e as tarefas pra
// mostrar só o que envolve essa pessoa (itens marcados "Time" aparecem sempre,
// já que valem pra todo mundo).
let rotinaFiltro = null;

function envolve(pessoas, filtro) {
  return !filtro || pessoas.includes(filtro) || pessoas.includes("Time");
}

function pessoasHTML(pessoas) {
  return pessoas.map(p => {
    const destaque = rotinaFiltro && p === rotinaFiltro;
    return `<span class="pessoa-pill ${destaque ? "match" : ""}">${p.toUpperCase()}</span>`;
  }).join("");
}

function renderFocoMes() {
  const el = document.getElementById("foco-mes");
  const f = CONFIG.focoDoMes;
  el.innerHTML = `
    <div class="foco-mes-title">Foco de ${f.mes}</div>
    <div class="foco-mes-list">
      ${f.itens.map(it => {
        const cor = CONFIG.frenteCores[it.frente].cor;
        const label = CONFIG.frenteCores[it.frente].label;
        return `
          <div class="foco-item" style="border-left-color:${cor}">
            <div class="foco-item-label"><span class="legend-dot" style="background:${cor}"></span>${label}</div>
            <p class="foco-item-texto">${it.texto}</p>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function renderLegenda() {
  const legendEl = document.getElementById("rotina-legend");
  legendEl.innerHTML = Object.values(CONFIG.frenteCores).map(f => `
    <div class="legend-item">
      <span class="legend-dot" style="background:${f.cor}"></span>
      ${f.label}
    </div>
  `).join("");
}

function renderFiltro() {
  const el = document.getElementById("rotina-filtro");
  const chips = [{ nome: null, label: "Todo o time" }, ...CONFIG.team.map(p => ({ nome: p.nome, label: p.nome }))];
  el.innerHTML = chips.map(c => `
    <button class="filtro-chip ${rotinaFiltro === c.nome ? "active" : ""}" data-pessoa="${c.nome ?? ""}">${c.label}</button>
  `).join("");

  el.querySelectorAll("[data-pessoa]").forEach(btn => {
    btn.addEventListener("click", () => {
      rotinaFiltro = btn.dataset.pessoa || null;
      renderFiltro();
      renderSemana();
      renderTarefas();
    });
  });
}

function renderSemana() {
  // faixa fixa da daily, à parte, acontece todo dia útil
  const daily = CONFIG.semana.daily;
  const dailyDimmed = !envolve(daily.pessoas, rotinaFiltro);
  document.getElementById("week-daily").innerHTML = `
    <span class="week-daily-tag">${daily.hora}</span>
    <strong>${daily.nome}</strong> · ${daily.desc}
    <span class="week-event-pessoas week-daily-pessoas">${pessoasHTML(daily.pessoas)}</span>
  `;
  document.getElementById("week-daily").classList.toggle("dimmed", dailyDimmed);

  const diasOrdem = Object.keys(CONFIG.semana.dias);
  const weekEl = document.getElementById("week-grid");
  weekEl.innerHTML = diasOrdem.map(dia => {
    const eventos = CONFIG.semana.dias[dia];
    if (!eventos.length) {
      return `
        <div class="week-day">
          <div class="week-day-label">${dia}</div>
          <div class="week-event empty">—</div>
        </div>
      `;
    }
    return `
      <div class="week-day">
        <div class="week-day-label">${dia}</div>
        <div class="week-events">
          ${eventos.map(ev => {
            const cor = CONFIG.frenteCores[ev.frente].cor;
            const dimmed = !envolve(ev.pessoas, rotinaFiltro);
            return `
              <div class="week-event ${dimmed ? "dimmed" : ""}" style="border-left-color:${cor}">
                ${ev.hora ? `<div class="week-event-hora">${ev.hora}</div>` : ""}
                <div class="week-event-nome">${ev.nome}</div>
                ${ev.desc ? `<div class="week-event-desc">${ev.desc}</div>` : ""}
                <div class="week-event-pessoas">${pessoasHTML(ev.pessoas)}</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }).join("");
}

function renderTarefas() {
  const freqOrder = ["Diário", "Semanal", "Quinzenal", "Mensal"];
  const tarefasEl = document.getElementById("tarefas-list");
  const secoes = freqOrder.map(freq => {
    const itens = CONFIG.tarefas.filter(t => t.freq === freq && envolve(t.pessoas, rotinaFiltro));
    if (!itens.length) return "";
    return `
      <div class="freq-card">
        <div class="freq-header">
          <span class="freq-title">${freq}</span>
          <span class="freq-count">${itens.length}</span>
        </div>
        ${itens.map(t => {
          const cor = CONFIG.frenteCores[t.frente].cor;
          return `
            <div class="tarefa-row">
              <span class="tarefa-dot" style="background:${cor}"></span>
              <span class="tarefa-nome">
                ${t.nome}
                ${t.hora ? `<span class="tarefa-hora">${t.hora}</span>` : ""}
                ${t.desc ? `<span class="tarefa-desc">${t.desc}</span>` : ""}
              </span>
              <span class="tarefa-pessoas">${pessoasHTML(t.pessoas)}</span>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }).join("");

  tarefasEl.innerHTML = secoes.trim()
    ? secoes
    : `<p class="empty-state">${rotinaFiltro} não tem tarefas mapeadas ainda.</p>`;
}

function renderRotina() {
  renderLegenda();
  renderFocoMes();
  renderFiltro();
  renderSemana();
  renderTarefas();
}

// ===== View switching =====

function openView(name) {
  document.getElementById(`view-${name}`).classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeViews() {
  document.querySelectorAll(".view-overlay").forEach(v => v.classList.remove("active"));
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-view]").forEach(btn => {
  btn.addEventListener("click", () => openView(btn.dataset.view));
});
document.querySelectorAll("[data-close]").forEach(btn => {
  btn.addEventListener("click", closeViews);
});

// ===== Init =====

renderTeam();
renderFrentes();
renderArtigos();
renderRotina();
