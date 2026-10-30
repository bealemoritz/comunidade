// ===== BLACK FRIDAY · render =====
// desenha a aba Black Friday a partir dos arquivos de dados desta pasta
// (visao-geral.js + um arquivo por frente). o conteúdo não mora aqui: pra
// atualizar checklist, mensagens ou roteiros, edite o arquivo da frente.

(function () {
  const BF = window.BLACK_FRIDAY;
  if (!BF || !BF.visaoGeral) return;

  const ORDEM = ["embaixadoras", "afiliadas", "representantes"];
  // [id, título, texto do botão]: com o 3º item o bloco começa fechado
  const BLOCOS = [
    ["regras", "Regras e prêmios"],
    ["narrativa", "Narrativa"],
    ["linha", "Linha do tempo"],
    ["checklist", "Checklist"],
    ["kit", "Kit de comunicação (mensagens)", "Ver mensagens"],
    ["roteiros", "Roteiros", "Ver roteiros"],
    ["acompanhamento", "Acompanhamento"],
  ];
  // esquenta (roxo clarinho), mês black (roxo do time), semana black (tinta)
  const FASE_CORES = ["#C9B6D3", "var(--time-cor)", "var(--ink)"];
  // cor de cada pessoa = cor da frente que ela cuida (mesmas classes do funil)
  const PESSOA_CLASSE = { Bea: "bea", Thau: "thau", Thauanna: "thau", Vitória: "vito", Letícia: "leti" };

  const COPY_ICON = `<svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="14" height="14">
    <rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="1.4"/>
    <path d="M13 7V4.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13H7" stroke="currentColor" stroke-width="1.4"/>
  </svg>`;
  const OBRA_ICON = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 20h18M5 20l3-12h8l3 12M9.5 8l1-4h3l1 4M7 14h10" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round"/>
  </svg>`;
  const LOOP_ICON = `<svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M15.5 8A6 6 0 0 0 4.6 6.5M4.5 12a6 6 0 0 0 10.9 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M4 3v3.7h3.7M16 17v-3.7h-3.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;

  // ===== utils =====

  const esc = s => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  // **negrito** e \n viram HTML; o resto é escapado
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\[([^\]]+)\]\((https:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>').replace(/\n/g, "<br>");
  const semMarcas = s => String(s ?? "").replace(/\*\*/g, "");

  const parseData = iso => { const [y, m, d] = iso.split("-").map(Number); return new Date(y, m - 1, d); };
  const isoDe = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const ddmm = iso => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;
  const diasEntre = (a, b) => Math.round((parseData(b) - parseData(a)) / 864e5);
  const periodo = (de, ate) => de === ate ? ddmm(de) : `${ddmm(de)} a ${ddmm(ate)}`;

  // "hoje" sempre no fuso de São Paulo, seja qual for o fuso do aparelho.
  // é recalculado quando a página volta a ficar visível e a cada minuto,
  // pra uma aba aberta de um dia pro outro não ficar no dia anterior.
  const hojeAgora = () => {
    try {
      return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Sao_Paulo", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
    } catch (err) {
      return isoDe(new Date());
    }
  };
  let HOJE = hojeAgora();

  // as marcações ficam só neste navegador. try/catch porque o storage pode
  // estar bloqueado (aba anônima, preview etc.); aí a página funciona sem salvar.
  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* sem storage */ } },
  };

  const vazio = txt => `<div class="empty-state">${txt}</div>`;
  const pessoas = lista => (lista || []).map(p => `<span class="who ${PESSOA_CLASSE[p] || "auto"}">${esc(p)}</span>`).join("");

  function tabela(t, larga) {
    return `
      <div class="bf-tabela-wrap">
        <table class="bf-tabela ${larga ? "larga" : ""}">
          <thead><tr>${t.colunas.map(c => `<th>${esc(c)}</th>`).join("")}</tr></thead>
          <tbody>${t.linhas.map(l => `<tr>${l.map(c => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>`;
  }

  const infoItem = (it, cor) => `
    <div class="info-item" style="border-left-color:${cor}">
      <div class="info-item-titulo">${fmt(it.titulo)}</div>
      ${it.texto ? `<p class="info-item-texto">${fmt(it.texto)}</p>` : ""}
    </div>`;

  // textos pros botões de copiar, indexados pelo data-copy
  let copias = [];
  function botaoCopiar(texto, label = "Copiar texto") {
    const i = copias.push(semMarcas(texto)) - 1;
    return `<button type="button" class="docs-btn bf-copiar" data-copy="${i}">${COPY_ICON}<span>${esc(label)}</span></button>`;
  }

  async function copiar(texto) {
    try {
      await navigator.clipboard.writeText(texto);
      return true;
    } catch (e) {
      // fallback pra navegadores sem clipboard API (ou sem permissão)
      const ta = document.createElement("textarea");
      ta.value = texto;
      ta.setAttribute("readonly", "");
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (err) { ok = false; }
      ta.remove();
      return ok;
    }
  }

  // ===== estado =====

  const frentesDisponiveis = ORDEM.filter(k => BF.frentes[k]);
  const estado = {
    frente: frentesDisponiveis[0],
    // o que está aberto: f = dados (frente ou desafio), k = chave de armazenamento,
    // el = onde foi renderizado (#bf-frente ou #bf-desafio)
    unidade: null,
    filtro: {}, // por chave: null = todas
  };
  const noConteudo = sel => (estado.unidade ? estado.unidade.el.querySelector(sel) : null);

  // ===== visão geral =====

  function renderVisaoGeral() {
    const v = BF.visaoGeral;
    document.getElementById("bf-visao-geral").innerHTML = `
      <div class="info-card bf-visao">
        <div class="info-card-title">${esc(v.titulo)}</div>
        ${v.intro ? `<p class="info-card-intro">${fmt(v.intro)}</p>` : ""}
        <div class="bf-fases">
          ${v.fases.map((f, i) => {
            const agora = HOJE >= f.de && HOJE <= f.ate;
            return `
              <div class="bf-fase ${agora ? "atual" : ""}" style="--fase:${FASE_CORES[i]}">
                <div class="bf-fase-top">
                  <span class="bf-mono">Fase ${i + 1}</span>
                  ${agora ? `<span class="bf-agora">agora</span>` : ""}
                </div>
                <div class="bf-fase-nome">${esc(f.nome)}</div>
                <div class="bf-fase-verbo">${esc(f.verbo)}</div>
                <div class="bf-mono bf-fase-data">${periodo(f.de, f.ate)}</div>
              </div>`;
          }).join("")}
        </div>
        <div class="docs-label bf-ofertas-label">Calendário de ofertas do site</div>
        <div class="bf-ofertas">
          ${v.ofertas.map(o => `
            <div class="bf-oferta">
              <span class="bf-mono">${periodo(o.de, o.ate)}</span>
              <span class="bf-oferta-nome">${esc(o.nome)}${HOJE >= o.de && HOJE <= o.ate ? `<span class="bf-agora">no ar</span>` : ""}</span>
            </div>`).join("")}
        </div>
      </div>`;
  }

  // um card por frente, no mesmo padrão das frentes da home (ícones de app.js)
  function renderCardsFrentes() {
    document.getElementById("bf-frentes").innerHTML = frentesDisponiveis.map(k => {
      const f = BF.frentes[k];
      const icone = typeof FRENTE_ICONS !== "undefined" && FRENTE_ICONS[k] ? FRENTE_ICONS[k](f.cor) : "";
      return `
        <button type="button" class="nav-card" data-frente="${k}">
          <span class="nav-icon">${icone}</span>
          <span class="nav-text">
            <span class="nav-title">Black ${esc(f.nome)}</span>
            ${f.resumo ? `<span class="nav-sub">${esc(f.resumo)}</span>` : ""}
          </span>
          <span class="nav-arrow">&rarr;</span>
        </button>`;
    }).join("");
  }

  function abrirFrente(k) {
    estado.frente = k;
    const f = BF.frentes[k];
    document.getElementById("bf-frente-label").textContent = `BLACK FRIDAY · ${f.nome.toUpperCase()}`;
    document.getElementById("bf-frente-titulo").textContent = `Black ${f.nome}`;
    const el = document.getElementById("bf-frente");
    if (f.desafios) renderCardsDesafios(el, f);
    else renderConteudo(el, f, k);
    openView("black-frente");
    document.getElementById("view-black-frente").scrollTop = 0;
  }

  // ===== desafios (frentes com "desafios", como embaixadoras) =====

  function renderCardsDesafios(el, f) {
    el.innerHTML = `
      <div class="rotina-section-title">Desafios</div>
      <div class="frentes-list">
        ${f.desafios.map((d, i) => {
          const fase = BF.visaoGeral.fases[d.fase];
          const agora = fase && HOJE >= fase.de && HOJE <= fase.ate;
          const sub = [fase ? periodo(fase.de, fase.ate) : null, d.resumo].filter(Boolean).join(" · ");
          return `
            <button type="button" class="nav-card" data-desafio="${esc(d.id)}">
              <span class="nav-icon bf-desafio-num">${i + 1}</span>
              <span class="nav-text">
                <span class="nav-title">Desafio ${i + 1} · ${esc(d.nome)}${agora ? `<span class="bf-agora">agora</span>` : ""}</span>
                ${sub ? `<span class="nav-sub">${esc(sub)}</span>` : ""}
              </span>
              <span class="nav-arrow">&rarr;</span>
            </button>`;
        }).join("")}
      </div>
      ${f.premios ? cardPremios(f.premios) : ""}`;
  }

  function abrirDesafio(id) {
    const k = estado.frente;
    const f = BF.frentes[k];
    const i = f.desafios.findIndex(d => d.id === id);
    if (i < 0) return;
    const d = f.desafios[i];
    // o desafio herda cor e responsáveis da frente
    const dados = { cor: f.cor, responsaveis: f.responsaveis, ...d, nome: `Desafio ${i + 1} · ${d.nome}` };
    document.getElementById("bf-desafio-label").textContent = `BLACK ${f.nome.toUpperCase()} · DESAFIO ${i + 1}`;
    document.getElementById("bf-desafio-titulo").textContent = d.nome;
    document.getElementById("bf-desafio-back").innerHTML = `&larr; black ${esc(f.nome.toLowerCase())}`;
    renderConteudo(document.getElementById("bf-desafio"), dados, d.chave || `${k}-${d.id}`);
    openView("black-desafio");
    document.getElementById("view-black-desafio").scrollTop = 0;
  }

  // ===== 01 · regras e prêmios =====

  function blocoRegras(f) {
    const r = f.regras;
    if (!r) return vazio("Em breve: as regras do desafio e os prêmios desta frente.");
    return `
      ${r.intro ? `<p class="rotina-intro">${fmt(r.intro)}</p>` : ""}
      <div class="info-card">
        <div class="info-card-title">${esc(r.titulo)}</div>
        ${r.tabela ? tabela(r.tabela) : ""}
        ${(r.itens || []).map(it => infoItem(it, f.cor)).join("")}
      </div>
      ${r.premios ? cardPremios(r.premios) : ""}`;
  }

  // prêmios finais: no desafio (regras.premios) ou na página da frente (f.premios)
  function cardPremios(p) {
    return `
        <div class="info-card">
          <div class="info-card-title">${esc(p.titulo)}</div>
          ${p.periodo ? `<p class="info-card-intro bf-mono">${esc(p.periodo)}</p>` : ""}
          ${(p.itens || []).map(it => infoItem(it, "var(--time-cor)")).join("")}
          ${p.ativa ? `
            <div class="bf-ativa">
              ${p.ativaIntro ? `<p class="info-card-intro">${fmt(p.ativaIntro)}</p>` : ""}
              <div class="bf-ativa-lista">
                ${p.ativa.map(a => `
                  <div class="bf-ativa-item ${a.pendente ? "pendente" : ""}">
                    <span class="bf-mono">${esc(a.fase)}</span>
                    <span class="bf-ativa-texto">${fmt(a.texto)}</span>
                  </div>`).join("")}
              </div>
            </div>` : ""}
        </div>`;
  }

  // ===== 02 · narrativa =====

  function blocoNarrativa(f) {
    const n = f.narrativa;
    if (!n) return vazio("Em breve: a narrativa central da comunicação desta frente.");
    const pq = n.porQue, cp = n.cupom;
    return `
      ${n.intro ? `<p class="rotina-intro">${fmt(n.intro)}</p>` : ""}
      ${n.teclas ? `
        <div class="bf-teclas">
          ${n.teclas.map((t, i) => `
            <div class="bf-tecla">
              <span class="bf-mono">Tecla ${i + 1}</span>
              <div class="bf-tecla-texto">${fmt(t)}</div>
            </div>`).join("")}
        </div>` : ""}
      ${pq ? `
        <div class="info-card">
          <div class="info-card-title">${esc(pq.titulo)}</div>
          ${pq.subtitulo ? `<p class="info-card-intro">${fmt(pq.subtitulo)}</p>` : ""}
          ${pq.fases.map((it, i) => infoItem(it, FASE_CORES[i] || f.cor)).join("")}
          ${pq.analogia ? `<div class="bf-destaque">${fmt(pq.analogia)}</div>` : ""}
        </div>` : ""}
      ${cp ? `
        <div class="info-card">
          <div class="info-card-title">${esc(cp.titulo)}</div>
          ${cp.ancora ? `
            <div class="bf-citacao">
              <span class="bf-mono">Frase-âncora</span>
              <p>“${fmt(cp.ancora)}”</p>
            </div>` : ""}
          ${cp.tabelaIntro ? `<p class="info-card-intro">${fmt(cp.tabelaIntro)}</p>` : ""}
          ${cp.tabela ? tabela(cp.tabela) : ""}
          ${cp.regraDeOuro ? `<div class="bf-destaque">${fmt(cp.regraDeOuro)}</div>` : ""}
        </div>` : ""}`;
  }

  // ===== 03 · linha do tempo =====

  function blocoLinha(f) {
    const v = BF.visaoGeral;
    const lt = f.linhaDoTempo || {};
    const marcos = (lt.marcos || []).slice().sort((a, b) => a.data.localeCompare(b.data));

    const ini = v.fases[0].de;
    const fim = v.fases[v.fases.length - 1].ate;
    const total = diasEntre(ini, fim) + 1;
    const clamp = n => Math.max(0, Math.min(100, n));
    const esq = iso => clamp(diasEntre(ini, iso) / total * 100);           // início do dia
    const meio = iso => clamp((diasEntre(ini, iso) + .5) / total * 100);   // meio do dia
    const larg = (de, ate) => clamp((diasEntre(de, ate) + 1) / total * 100);
    const hojeNaFaixa = HOJE >= ini && HOJE <= fim;
    const linhaHoje = hojeNaFaixa ? `<span class="bf-g-hoje" style="left:${meio(HOJE)}%"></span>` : "";

    const barrasOferta = v.ofertas.filter(o => o.de !== o.ate);
    const pontosOferta = v.ofertas.filter(o => o.de === o.ate);
    const ticks = [...v.fases.map(fa => fa.de), fim];

    const gantt = `
      <div class="bf-gantt" aria-hidden="true">
        <span class="bf-g-label">Fases</span>
        <div class="bf-g-track">
          ${v.fases.map((fa, i) => `<span class="bf-g-bar ${i === 0 ? "claro" : ""}" style="left:${esq(fa.de)}%;width:${larg(fa.de, fa.ate)}%;background:${FASE_CORES[i]}" title="${esc(fa.nome)}">${esc(fa.curto || fa.nome)}</span>`).join("")}
          ${linhaHoje}
        </div>
        <span class="bf-g-label">Site</span>
        <div class="bf-g-track duplo">
          ${barrasOferta.map(o => `<span class="bf-g-bar oferta" style="left:${esq(o.de)}%;width:${larg(o.de, o.ate)}%" title="${esc(o.nome)}">${esc(o.curto || o.nome)}</span>`).join("")}
          ${pontosOferta.map(o => `<span class="bf-g-ponto" style="left:${meio(o.de)}%" title="${esc(o.nome)}">${esc(o.curto || o.nome)}</span>`).join("")}
          ${linhaHoje}
        </div>
        ${marcos.length ? `
          <span class="bf-g-label">Marcos</span>
          <div class="bf-g-track duplo">
            ${marcos.map((m, i) => `<span class="bf-g-marco ${i % 2 ? "baixo" : ""} ${m.data < HOJE ? "passado" : ""}" style="left:${meio(m.data)}%" title="${esc(m.titulo)}">${i + 1}</span>`).join("")}
            ${linhaHoje}
          </div>` : ""}
        <span></span>
        <div class="bf-g-track bf-g-eixo">
          ${ticks.map((t, i) => `<span class="bf-g-tick ${i === 0 ? "ini" : i === ticks.length - 1 ? "fim" : ""}" style="left:${i === ticks.length - 1 ? 100 : esq(t)}%">${ddmm(t)}</span>`).join("")}
          ${hojeNaFaixa ? `<span class="bf-g-tick hoje" style="left:${meio(HOJE)}%">hoje</span>` : ""}
        </div>
      </div>`;

    // agenda: fases, ofertas e marcos agrupados por data
    const eventos = [];
    v.fases.forEach((fa, i) => eventos.push({ data: fa.de, tipo: "fase", cor: FASE_CORES[i], texto: `Começa a fase ${i + 1}: **${fa.nome}** · ${fa.verbo}` }));
    v.ofertas.forEach(o => {
      eventos.push({ data: o.de, tipo: "oferta", texto: o.de === o.ate ? `Site: **${o.nome}**` : `Site: entra no ar a **${o.nome}** (até ${ddmm(o.ate)})` });
      if (o.mostrarFim && o.de !== o.ate) eventos.push({ data: o.ate, tipo: "oferta", texto: `Site: último dia da **${o.nome}**` });
    });
    marcos.forEach((m, i) => eventos.push({ data: m.data, tipo: "marco", n: i + 1, texto: `**${m.titulo}**${m.texto ? ` · ${m.texto}` : ""}` }));

    const peso = { marco: 0, fase: 1, oferta: 2 };
    const porData = {};
    eventos.forEach(e => (porData[e.data] = porData[e.data] || []).push(e));
    const datas = Object.keys(porData).sort();
    if (hojeNaFaixa && !porData[HOJE]) { datas.push(HOJE); datas.sort(); porData[HOJE] = []; }

    const agenda = `
      <div class="bf-agenda">
        ${datas.map(d => {
          const evs = porData[d].sort((a, b) => peso[a.tipo] - peso[b.tipo]);
          const marco = evs.find(e => e.tipo === "marco");
          const fase = evs.find(e => e.tipo === "fase");
          const dot = marco
            ? `<span class="bf-ag-dot marco">${marco.n}</span>`
            : fase ? `<span class="bf-ag-dot" style="background:${fase.cor};border-color:${fase.cor}"></span>`
            : evs.length ? `<span class="bf-ag-dot"></span>` : `<span class="bf-ag-dot hoje"></span>`;
          return `
            <div class="bf-ag-linha ${d < HOJE ? "passado" : ""} ${d === HOJE ? "hoje" : ""}">
              <span class="bf-ag-data">${ddmm(d)}</span>
              <span class="bf-ag-rail">${dot}</span>
              <div class="bf-ag-evs">
                ${d === HOJE ? `<span class="bf-agora">hoje</span>` : ""}
                ${evs.map(e => `<div class="bf-ag-ev ${e.tipo}">${fmt(e.texto)}</div>`).join("")}
              </div>
            </div>`;
        }).join("")}
      </div>`;

    return `
      ${gantt}
      ${marcos.length ? "" : vazio("Em breve: os marcos desta frente na linha do tempo.")}
      ${agenda}
      ${lt.nota ? `<p class="rotina-intro bf-nota-linha">${fmt(lt.nota)}</p>` : ""}`;
  }

  // ===== 04 · checklist =====

  function blocoChecklist(f, k) {
    const c = f.checklist;
    if (!c || !c.dias || !c.dias.length) return vazio("Em breve: o checklist dia a dia desta frente.");
    const filtro = estado.filtro[k] || null;
    const chips = [{ nome: null, label: "Todas" }, ...(f.responsaveis || []).map(p => ({ nome: p, label: p }))];
    return `
      ${c.intro ? `<p class="rotina-intro">${fmt(c.intro)}</p>` : ""}
      <div class="bf-check-topo">
        <div class="filtro-chips">
          ${chips.map(ch => `<button type="button" class="filtro-chip ${filtro === ch.nome ? "active" : ""}" data-filtro="${esc(ch.nome ?? "")}">${esc(ch.label)}</button>`).join("")}
        </div>
        <button type="button" class="docs-btn" data-ir-hoje>Ir para hoje &darr;</button>
      </div>
      <p class="bf-nota"><span id="bf-check-total"></span> · As marcações ficam salvas só neste navegador: em outro celular ou computador a lista aparece desmarcada.</p>
      <div class="bf-dias" id="bf-checklist-lista" data-store="bf-check:${k}"></div>`;
  }

  function ocorrencias(d, dow) {
    const out = [];
    for (let t = parseData(d.de); isoDe(t) <= d.ate; t.setDate(t.getDate() + 1)) {
      if (t.getDay() === dow) out.push(isoDe(t));
    }
    return out;
  }

  function renderChecklistLista() {
    const lista = noConteudo("#bf-checklist-lista");
    if (!lista) return;
    const { f, k } = estado.unidade;
    const c = f.checklist;
    const marcas = store.get(lista.dataset.store) || {};
    const filtro = estado.filtro[k] || null;
    const marcado = (id, padrao) => (id in marcas ? !!marcas[id] : !!padrao);
    const ve = it => !filtro || (it.resp || []).includes(filtro);

    let secao = null, secaoMostrada = null;
    lista.innerHTML = c.dias.map(d => {
      secao = d.secao || secao;
      const itens = d.itens.filter(ve);
      if (!itens.length) return "";
      const rotina = !d.data;
      const ehHoje = rotina ? HOJE >= d.de && HOJE <= d.ate : d.data === HOJE;
      const passado = rotina ? d.ate < HOJE : d.data < HOJE;

      const linhas = itens.map(it => {
        const meta = `${it.dia ? `<span class="bf-mono">${esc(it.dia)}</span>` : ""}${pessoas(it.resp)}${it.hora ? `<span class="bf-hora">${esc(it.hora)}</span>` : ""}`;
        if (rotina) {
          const ocs = ocorrencias(d, it.dow);
          return `
            <div class="bf-check rotina ${ocs.includes(HOJE) ? "hoje" : ""}">
              <span class="bf-check-loop">${LOOP_ICON}</span>
              <span class="bf-check-corpo">
                <span class="bf-check-meta">${meta}</span>
                <span class="bf-check-texto">${fmt(it.texto)}</span>
                <span class="bf-ocorrencias">
                  ${ocs.map(o => {
                    const id = `${it.id}@${o}`;
                    const ok = marcado(id);
                    return `<label class="bf-oc ${o === HOJE ? "hoje" : ""} ${ok ? "feito" : ""}"><input type="checkbox" data-check="${esc(id)}" ${ok ? "checked" : ""}><span>${ddmm(o)}</span></label>`;
                  }).join("")}
                </span>
              </span>
            </div>`;
        }
        const ok = marcado(it.id, it.feito);
        return `
          <label class="bf-check ${ok ? "feito" : ""}">
            <input type="checkbox" data-check="${esc(it.id)}" ${ok ? "checked" : ""}>
            <span class="bf-check-corpo">
              ${meta ? `<span class="bf-check-meta">${meta}</span>` : ""}
              <span class="bf-check-texto">${fmt(it.texto)}</span>
            </span>
          </label>`;
      }).join("");

      const titSecao = secao && secao !== secaoMostrada ? `<div class="rotina-section-title bf-check-secao">${esc(secao)}</div>` : "";
      secaoMostrada = secao;
      return `
        ${titSecao}
        <div class="bf-dia ${ehHoje ? "hoje" : ""} ${passado ? "passado" : ""}">
          <div class="bf-dia-head">
            <div>
              <div class="bf-dia-titulo">${esc(d.titulo)}${ehHoje ? `<span class="bf-agora">hoje</span>` : ""}</div>
              ${d.tema ? `<div class="bf-dia-tema">${fmt(d.tema)}</div>` : ""}
            </div>
            <span class="freq-count bf-dia-count"></span>
          </div>
          ${linhas}
        </div>`;
    }).join("") || `<p class="empty-state">${esc(filtro)} não tem itens no checklist.</p>`;

    atualizarContagens();
  }

  function atualizarContagens() {
    const lista = noConteudo("#bf-checklist-lista");
    if (!lista) return;
    lista.querySelectorAll(".bf-dia").forEach(dia => {
      const caixas = dia.querySelectorAll("input[data-check]");
      const feitas = [...caixas].filter(c => c.checked).length;
      dia.querySelector(".bf-dia-count").textContent = `${feitas}/${caixas.length}`;
    });
    const todas = lista.querySelectorAll("input[data-check]");
    const feitas = [...todas].filter(c => c.checked).length;
    noConteudo("#bf-check-total").textContent = `${feitas} de ${todas.length} feitos`;
  }

  function irParaHoje() {
    const lista = noConteudo("#bf-checklist-lista");
    if (!lista) return;
    // o dia de hoje, ou o próximo que ainda vem
    const alvo = lista.querySelector(".bf-check.hoje") || lista.querySelector(".bf-dia.hoje") || lista.querySelector(".bf-dia:not(.passado)");
    if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  // ===== 05 · kit de comunicação =====

  function cardMensagem(m, cor) {
    const corpo = m.partes
      ? m.partes.map(p => `
          <div class="bf-msg-parte">
            <span class="bf-mono">${esc(p.rotulo)}</span>
            <div class="bf-msg-texto">${fmt(p.texto)}</div>
            ${botaoCopiar(p.texto, `Copiar ${p.rotulo}`)}
          </div>`).join("")
      : `<div class="bf-msg-texto">${fmt(m.texto)}</div>${botaoCopiar(m.texto)}`;
    return `
      <article class="bf-msg" style="--frente:${cor}">
        <div class="bf-msg-head">
          <span class="bf-msg-id">${esc(m.id)}</span>
          <div>
            <div class="bf-msg-titulo">${fmt(m.titulo)}</div>
            <div class="bf-msg-meta">${esc(m.canal)} · ${esc(m.quando)}</div>
          </div>
        </div>
        ${corpo}
      </article>`;
  }

  function blocoKit(f) {
    const kt = f.kit;
    if (!kt || !(kt.mensagens || []).length) return vazio("Em breve: as mensagens prontas, enquetes e materiais de apoio desta frente.");
    const en = kt.enquetes || [];
    return `
      ${kt.intro ? `<p class="rotina-intro">${fmt(kt.intro)}</p>` : ""}
      <div class="rotina-section-title">Mensagens</div>
      <div class="bf-msgs">${kt.mensagens.map(m => cardMensagem(m, f.cor)).join("")}</div>

      ${en.length ? `
        <div class="rotina-section-title">Enquetes para o grupo de bate-papo</div>
        <div class="bf-msgs">
          ${en.map(e => `
            <article class="bf-msg" style="--frente:${f.cor}">
              <div class="bf-msg-head">
                <span class="bf-msg-id">${esc(e.id)}</span>
                <div>
                  <div class="bf-msg-titulo">${fmt(e.pergunta)}</div>
                  <div class="bf-msg-meta">Grupo de bate-papo · ${esc(e.quando)}</div>
                </div>
              </div>
              <div class="kit-produtos">${e.opcoes.map(o => `<span>${esc(o)}</span>`).join("")}</div>
              ${botaoCopiar(`${e.pergunta}\n${e.opcoes.join("\n")}`, "Copiar enquete")}
            </article>`).join("")}
        </div>` : ""}

      ${kt.reforco ? `
        <div class="info-card">
          <div class="info-card-title">${esc(kt.reforco.titulo)}</div>
          ${kt.reforco.itens.map(it => infoItem(it, f.cor)).join("")}
        </div>` : ""}

      ${kt.live ? `
        <div class="info-card">
          <div class="info-card-title">${esc(kt.live.titulo)}</div>
          ${kt.live.quando ? `<p class="info-card-intro bf-mono">${esc(kt.live.quando)}</p>` : ""}
          <ol class="kit-steps">
            ${kt.live.itens.map(it => `<li><div>${fmt(it.texto)} ${it.min ? `<span class="bf-hora">${esc(it.min)}</span>` : ""}</div></li>`).join("")}
          </ol>
        </div>` : ""}

      ${kt.teaser ? `
        <div class="info-card">
          <div class="info-card-title">${esc(kt.teaser.titulo)}</div>
          ${kt.teaser.intro ? `<p class="info-card-intro">${fmt(kt.teaser.intro)}</p>` : ""}
          ${kt.teaser.formato ? `<p class="info-card-intro">${fmt(kt.teaser.formato)}</p>` : ""}
          ${kt.teaser.tabela ? tabela(kt.teaser.tabela, true) : ""}
          ${kt.teaser.notas ? `
            <div class="docs-label">Notas para quem produz</div>
            <ul class="bf-lista">${kt.teaser.notas.map(n => `<li>${fmt(n)}</li>`).join("")}</ul>` : ""}
        </div>` : ""}`;
  }

  // ===== 06 · roteiros =====

  function blocoRoteiros(f) {
    const r = f.roteiros;
    if (!r || !(r.semanas || []).length) return vazio("Em breve: os roteiros semanais desta frente.");
    return `
      ${r.intro ? `<p class="rotina-intro">${fmt(r.intro)}</p>` : ""}
      ${r.semanas.map(s => `
        <div class="info-card bf-roteiro" style="--frente:${f.cor}">
          <span class="bf-mono">${esc(s.rotulo)}</span>
          <div class="bf-roteiro-titulo">“${esc(s.titulo)}”</div>
          <div class="docs-label">Aberturas</div>
          <div class="bf-aberturas">
            ${s.aberturas.map((a, i) => `<div class="bf-abertura"><span class="bf-mono">${i + 1}</span>“${fmt(a)}”</div>`).join("")}
          </div>
          <div class="docs-label">Fala</div>
          <div class="bf-msg-parte">
            <div class="bf-msg-texto">${fmt(s.fala)}</div>
            ${botaoCopiar(s.fala, "Copiar fala")}
          </div>
          <div class="bf-roteiro-info">
            ${infoItem({ titulo: "O que mostrar", texto: s.mostrar }, f.cor)}
            ${infoItem({ titulo: "Por que funciona", texto: s.porque }, f.cor)}
          </div>
        </div>`).join("")}`;
  }

  // ===== 07 · acompanhamento =====

  function blocoAcompanhamento(f, k) {
    const a = f.acompanhamento;
    if (!a) return vazio("Em breve: como vamos acompanhar os resultados.");
    const marcas = store.get(`bf-abertos:${k}`) || {};
    return `
      ${a.intro ? `<p class="rotina-intro">${fmt(a.intro)}</p>` : ""}
      ${a.metricas ? `<div class="info-card"><div class="info-card-title">Métricas</div>${tabela(a.metricas)}</div>` : ""}
      ${(a.pontosAbertos || []).length ? `
        <div class="info-card">
          <div class="info-card-title">Pontos em aberto</div>
          <div data-store="bf-abertos:${k}">
            ${a.pontosAbertos.map(p => {
              const ok = !!marcas[p.id];
              return `
                <label class="bf-check ${ok ? "feito" : ""}">
                  <input type="checkbox" data-check="${esc(p.id)}" ${ok ? "checked" : ""}>
                  <span class="bf-check-corpo"><span class="bf-check-texto">${fmt(p.texto)}</span></span>
                </label>`;
            }).join("")}
          </div>
        </div>` : ""}`;
  }

  // ===== frente =====

  // renderiza os 7 blocos de uma frente ou de um desafio em "el".
  // só um conteúdo fica montado por vez, pra não repetir ids na página.
  function renderConteudo(el, f, k) {
    document.querySelectorAll("#bf-frente, #bf-desafio").forEach(c => {
      if (c !== el && c.querySelector(".bf-secao")) c.innerHTML = "";
    });
    estado.unidade = { f, k, el };
    copias = [];
    const conteudo = {
      regras: blocoRegras(f),
      narrativa: blocoNarrativa(f),
      linha: blocoLinha(f),
      checklist: blocoChecklist(f, k),
      kit: blocoKit(f),
      roteiros: blocoRoteiros(f),
      acompanhamento: blocoAcompanhamento(f, k),
    };
    el.innerHTML = `
      ${f.emConstrucao ? `
        <div class="bf-construcao" style="--frente:${f.cor}" role="note">
          ${OBRA_ICON}
          <p><b>Em construção</b>${fmt(f.emConstrucao)}</p>
        </div>` : ""}
      <nav class="bf-blocos" aria-label="Blocos de ${esc(f.nome)}">
        ${BLOCOS.map(([id, label]) => `<button type="button" class="filtro-chip" data-bloco="${id}">${label}</button>`).join("")}
      </nav>
      ${BLOCOS.map(([id, label, ver], i) => `
        <section class="bf-secao" id="bf-sec-${id}">
          <div class="bf-secao-head">
            <span class="bf-secao-num">${String(i + 1).padStart(2, "0")}</span>
            <h3 class="bf-secao-titulo">${label}</h3>
          </div>
          ${ver && !conteudo[id].startsWith('<div class="empty-state') ? `
            <details class="bf-recolher">
              <summary class="docs-btn"><span class="bf-ver">${ver}</span><span class="bf-esconder">Esconder</span></summary>
              ${conteudo[id]}
            </details>` : conteudo[id]}
        </section>`).join("")}`;
    renderChecklistLista();
  }

  // ===== eventos =====

  document.getElementById("bf-frentes").addEventListener("click", e => {
    const btn = e.target.closest("[data-frente]");
    if (btn) abrirFrente(btn.dataset.frente);
  });

  const conteudos = [document.getElementById("bf-frente"), document.getElementById("bf-desafio")];

  conteudos.forEach(el => el.addEventListener("click", async e => {
    const desafio = e.target.closest("[data-desafio]");
    if (desafio) { abrirDesafio(desafio.dataset.desafio); return; }
    const bloco = e.target.closest("[data-bloco]");
    if (bloco) {
      const secao = noConteudo(`#bf-sec-${bloco.dataset.bloco}`);
      const det = secao.querySelector("details.bf-recolher");
      if (det) det.open = true; // atalho de bloco fechado já abre
      secao.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const filtro = e.target.closest("[data-filtro]");
    if (filtro) {
      estado.filtro[estado.unidade.k] = filtro.dataset.filtro || null;
      filtro.parentElement.querySelectorAll("[data-filtro]").forEach(b => b.classList.toggle("active", b === filtro));
      renderChecklistLista();
      return;
    }
    if (e.target.closest("[data-ir-hoje]")) { irParaHoje(); return; }
    const botao = e.target.closest("[data-copy]");
    if (botao) {
      const label = botao.querySelector("span");
      const original = botao.dataset.label || label.textContent;
      botao.dataset.label = original;
      const ok = await copiar(copias[Number(botao.dataset.copy)]);
      botao.classList.toggle("copiado", ok);
      label.textContent = ok ? "Copiado ✓" : "Não deu pra copiar";
      clearTimeout(botao._t);
      botao._t = setTimeout(() => { botao.classList.remove("copiado"); label.textContent = original; }, 1800);
    }
  }));

  conteudos.forEach(el => el.addEventListener("change", e => {
    const caixa = e.target.closest("input[data-check]");
    if (!caixa) return;
    const chave = caixa.closest("[data-store]").dataset.store;
    const marcas = store.get(chave) || {};
    marcas[caixa.dataset.check] = caixa.checked;
    store.set(chave, marcas);
    caixa.closest("label").classList.toggle("feito", caixa.checked);
    atualizarContagens();
  }));

  // ===== init =====

  renderVisaoGeral();
  renderCardsFrentes();

  // virou o dia com a página aberta: redesenha o que mostra "hoje"
  function conferirDia() {
    const agora = hojeAgora();
    if (agora === HOJE) return;
    HOJE = agora;
    renderVisaoGeral();
    const f = BF.frentes[estado.frente];
    if (f && f.desafios) renderCardsDesafios(document.getElementById("bf-frente"), f);
    const u = estado.unidade;
    if (u) {
      const abertos = [...u.el.querySelectorAll("details.bf-recolher")].map(d => d.open);
      renderConteudo(u.el, u.f, u.k);
      u.el.querySelectorAll("details.bf-recolher").forEach((d, i) => { d.open = !!abertos[i]; });
    }
  }
  document.addEventListener("visibilitychange", () => { if (!document.hidden) conferirDia(); });
  setInterval(conferirDia, 60 * 1000);

  // link direto: .../comunidade/#black-embaixadoras abre a frente,
  // #black-embaixadoras-d2 abre o desafio 2
  const alvo = location.hash.match(/^#black-(embaixadoras|afiliadas|representantes)(?:-(d\d))?$/);
  if (alvo && BF.frentes[alvo[1]]) {
    openView("black-friday");
    abrirFrente(alvo[1]);
    if (alvo[2] && BF.frentes[alvo[1]].desafios) abrirDesafio(alvo[2]);
  }
})();
