// ===== BLACK FRIDAY · visão geral =====
// fases da Black November Awards e calendário de ofertas do site, mostrados no
// topo da aba e usados na linha do tempo de cada frente. datas em AAAA-MM-DD.

window.BLACK_FRIDAY = window.BLACK_FRIDAY || { frentes: {} };

BLACK_FRIDAY.visaoGeral = {
  titulo: "Black November Awards",
  intro: "A Black da Le Moritz em três fases, cada uma com um papel: primeiro a gente aquece a audiência, depois converte, e fecha na Black Friday.",

  // "curto" é o nome que cabe na barra da linha do tempo.
  fases: [
    { nome: "Esquenta Black", curto: "Esquenta", de: "2026-10-16", ate: "2026-10-31", verbo: "aquecer" },
    { nome: "Mês Black", curto: "Mês Black", de: "2026-11-01", ate: "2026-11-19", verbo: "converter" },
    { nome: "Semana Black", curto: "Semana", de: "2026-11-20", ate: "2026-11-27", verbo: "fechar" },
  ],

  // ofertas de um dia só (de = ate) aparecem como ponto na linha do tempo.
  // "mostrarFim" adiciona o último dia da oferta na agenda.
  ofertas: [
    { nome: "Black November", de: "2026-10-30", ate: "2026-11-22", mostrarFim: true },
    { nome: "Flash sale 11.11", curto: "11.11", de: "2026-11-11", ate: "2026-11-11" },
    { nome: "Black Week", curto: "Week", de: "2026-11-23", ate: "2026-11-27" },
    { nome: "Black Friday", curto: "BF", de: "2026-11-27", ate: "2026-11-27" },
  ],
};
