// ===== BLACK FRIDAY · REPRESENTANTES =====
// em construção: a estratégia das representantes ainda está sendo definida.
// a estrutura é a mesma de embaixadoras.js (use aquele arquivo como modelo):
// preencha cada bloco abaixo e ele aparece na página no lugar do "em breve".
// enquanto um bloco estiver null ou com a lista vazia, a página mostra o aviso.
//
// ATENÇÃO: a página é pública. nada de orçamento, projeção de receita ou
// venda individual aqui.

window.BLACK_FRIDAY = window.BLACK_FRIDAY || { frentes: {} };

BLACK_FRIDAY.frentes.representantes = {
  nome: "Representantes",
  cor: "var(--representantes-cor)",
  responsaveis: ["Bea", "Vitória"],
  emConstrucao: "Ainda estamos definindo a estratégia das representantes para a Black. A estrutura já está pronta e vai sendo preenchida aos poucos.",

  // 01 · REGRAS E PRÊMIOS · { intro, titulo, tabela: { colunas, linhas }, itens: [{ titulo, texto }], premios }
  regras: null,

  // 02 · NARRATIVA CENTRAL · { intro, teclas: [], porQue: {…}, cupom: {…} }
  narrativa: null,

  // 03 · LINHA DO TEMPO · fases e ofertas vêm de visao-geral.js
  linhaDoTempo: {
    marcos: [], // { data: "2026-11-11", titulo: "…" }
    nota: null,
  },

  // 04 · CHECKLIST DIA A DIA · { data, titulo, tema, itens: [{ id, resp: ["Vitória"], hora, texto }] }
  checklist: {
    intro: null,
    dias: [],
  },

  // 05 · KIT DE COMUNICAÇÃO · mensagens: [{ id: "M1", canal, quando, titulo, texto }]
  kit: {
    intro: null,
    mensagens: [],
    enquetes: [],
    reforco: null,
    live: null,
    teaser: null,
  },

  // 06 · ROTEIROS SEMANAIS · semanas: [{ rotulo, titulo, aberturas: [], fala, mostrar, porque }]
  roteiros: {
    intro: null,
    semanas: [],
  },

  // 07 · ACOMPANHAMENTO · { intro, metricas: { colunas, linhas }, pontosAbertos: [{ id, texto }] }
  acompanhamento: null,
};
