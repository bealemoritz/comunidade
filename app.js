// ===== CONFIG: edite aqui pra atualizar o conteúdo do site =====

const CONFIG = {

  // time: ordem da esquerda pra direita. o primeiro da lista aparece por completo
  // (na frente), os seguintes vêm "por trás". "foto" é opcional (path pra imagem
  // em assets/avatars/); sem foto, mostra as iniciais.
  team: [
    { nome: "Bea", foto: null },
    { nome: "Vitória", foto: "assets/avatars/vitoria.jpg" },
    { nome: "Letícia", foto: "assets/avatars/leticia.jpg" },
    { nome: "Maria", foto: "assets/avatars/maria.jpg" },
    { nome: "Sofia", foto: null },
  ],

  // documentos: lista opcional de links por frente (planilhas, docs, etc.)
  frentes: [
    {
      nome: "Embaixadoras",
      meta: "+300 criadoras · 45+ · Instagram",
      descricao: "Criadoras de conteúdo, hoje mais de 300 mulheres, em sua maioria 45+. O foco da criação delas é o Instagram.",
      link: null,
      documentos: [
        { titulo: "PLANILHA EMBAIXADORAS", url: "https://docs.google.com/spreadsheets/d/1tsYSeFviASGWHm30XAGjChOe5kOvg-7T0rE2jQcYsJM/edit?gid=1323823578#gid=1323823578" },
      ],
    },
    {
      nome: "Afiliadas do TikTok",
      meta: "internas + MVM · perfil mais jovem · TikTok",
      descricao: "Criadoras de conteúdo que recebem comissão por venda dentro do próprio TikTok. Temos as afiliadas internas e as afiliadas da MVM. Em maioria, são mais jovens, com foco total em produção pro TikTok.",
      link: "https://www.lemoritz.com/afiliadas",
      documentos: [
        { titulo: "PLANILHA AFILIADAS", url: "https://docs.google.com/spreadsheets/d/1oIkuAawgRyK2ZPOU7tEcAVTCYAXVEikgXRKc0V-OZY0/edit?gid=1832247659#gid=1832247659" },
      ],
    },
    {
      nome: "Representantes",
      meta: "online (WhatsApp) + offline",
      descricao: "Não são criadoras de conteúdo: vendem tanto no online quanto no offline. O foco de venda online é o WhatsApp, com um grupo que parte de uma lista de clientes.",
      link: null,
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

const avatarColors = ["var(--gold)", "var(--terracotta)", "var(--blue)", "var(--green)", "#8a6d3b"];

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
    `${CONFIG.team.length} ${CONFIG.team.length === 1 ? "pessoa" : "pessoas"} no time`;
}

function renderFrentes() {
  const el = document.getElementById("frentes-list");
  el.innerHTML = CONFIG.frentes.map((f, i) => `
    <div class="frente" id="frente-${i}">
      <button class="frente-head" data-toggle="${i}">
        <span>
          <div class="frente-name">${f.nome}</div>
          <div class="frente-meta">${f.meta}</div>
        </span>
        <span class="frente-toggle">+</span>
      </button>
      <div class="frente-body">
        <div class="frente-body-inner">
          <p class="frente-desc">${f.descricao}</p>
          ${f.link
            ? `<a class="frente-link" href="${f.link}" target="_blank" rel="noopener">ver página principal &rarr;</a>`
            : `<span class="frente-link disabled">página principal em breve</span>`
          }
          ${f.documentos && f.documentos.length ? `
          <div class="docs-box">
            <div class="docs-label">Docs importantes</div>
            ${f.documentos.map(d => `<a class="docs-link" href="${d.url}" target="_blank" rel="noopener">${d.titulo} &rarr;</a>`).join("")}
          </div>` : ""}
        </div>
      </div>
    </div>
  `).join("");

  el.querySelectorAll("[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      document.getElementById(`frente-${btn.dataset.toggle}`).classList.toggle("open");
    });
  });
}

function renderArtigos() {
  const el = document.getElementById("article-list");
  if (CONFIG.artigos.length === 0) {
    el.innerHTML = `<div class="article-placeholder">Nenhum artigo ainda.</div>`;
    return;
  }
  el.innerHTML = CONFIG.artigos.map(a => `
    <a class="article-card" href="${a.arquivo}" target="_blank" rel="noopener">
      <div class="article-date">${a.data}</div>
      <div class="article-title">${a.titulo}</div>
      <div class="article-sub">${a.subtitulo}</div>
    </a>
  `).join("");
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
