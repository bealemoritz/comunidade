// ===== BLACK FRIDAY · EMBAIXADORAS =====
// conteúdo da sub-aba Embaixadoras. edite aqui pra atualizar regras, checklist,
// mensagens e roteiros, sem mexer no HTML.
//
// - textos aceitam **negrito** e quebra de linha com \n.
// - datas em AAAA-MM-DD.
// - cada item do checklist precisa de um "id" único e fixo: é ele que guarda a
//   marcação no navegador. trocar o id desmarca o item.
// - ATENÇÃO: a página é pública. nada de orçamento, projeção de receita ou
//   venda individual de embaixadora aqui.

window.BLACK_FRIDAY = window.BLACK_FRIDAY || { frentes: {} };

BLACK_FRIDAY.frentes.embaixadoras = {
  nome: "Embaixadoras",
  cor: "var(--embaixadoras-cor)",
  responsaveis: ["Bea", "Thau"],

  // 01 · REGRAS E PRÊMIOS
  regras: {
    intro: "No D2 a gente para de pagar por postagem e passa a pagar por venda. O Esquenta aqueceu a audiência delas; o Mês Black (01 a 19/11) converte, com a melhor oferta do ano e o cupom somando mais 10% em cima.",
    titulo: "Regras do D2 · Mês Black · 01 a 19/11",
    tabela: {
      colunas: ["Faixa", "Pedidos aprovados no cupom", "Prêmio"],
      linhas: [
        ["Estreia", "3", "R$ 60"],
        ["Bronze", "6", "R$ 130"],
        ["Prata", "12", "R$ 300"],
        ["Ouro", "25", "R$ 700"],
        ["Black Diamond", "50", "R$ 1.800"],
      ],
    },
    itens: [
      { titulo: "Vale a maior faixa atingida", texto: "Só contam pedidos aprovados, sem cancelamento ou reembolso." },
      { titulo: "Condição para receber", texto: "Pelo menos **2 reels** no período marcando @lemoritz_oficial, com o cupom na fala e na legenda." },
      { titulo: "Relâmpago 11.11", texto: "As 5 embaixadoras com mais pedidos no dia 11/11 ganham R$ 200 cada." },
      { titulo: "Pagamento", texto: "Via Pix em 10/12." },
      { titulo: "Quem participa", texto: "As afiliadas que rodam em Meta Ads ficam só no desafio das afiliadas." },
    ],
    premios: {
      titulo: "Prêmios finais",
      periodo: "Já anunciados · período de 16/10 a 27/11",
      itens: [
        { titulo: "Lemorita Black · R$ 3.000", texto: "Para quem mais vendeu. Quem leva não concorre às outras." },
        { titulo: "Presença Black · R$ 1.500", texto: "Para quem esteve em cena em mais dias. Empate desempata por venda." },
        { titulo: "Alcance Black · R$ 500", texto: "Para o vídeo de maior alcance." },
      ],
      ativaIntro: "Concorre quem foi **ativa nas 3 fases**. O que conta como ativa em cada uma:",
      ativa: [
        { fase: "D1 · Esquenta", texto: "Pelo menos 5 dias com story **ou** pelo menos 1 reel entre 16 e 31/10." },
        { fase: "D2 · Mês Black", texto: "Bateu a faixa Estreia ou postou os 2 reels." },
        { fase: "D3 · Semana Black", texto: "Critério a definir com o desenho do D3.", pendente: true },
      ],
    },
  },

  // 02 · NARRATIVA CENTRAL
  narrativa: {
    intro: "Toda comunicação do D2 bate em duas teclas:",
    teclas: ["A sua seguidora está pronta para comprar", "O seu cupom soma com a Black"],
    porQue: {
      titulo: "1. Por que agora é a hora",
      subtitulo: "A lógica dos desafios, contada para elas.",
      fases: [
        { titulo: "Fase 1 · Esquenta (16 a 31/10) = aquecer", texto: "Vocês apareceram todo dia falando da Le Moritz. A seguidora viu, criou confiança e ficou com o produto na cabeça." },
        { titulo: "Fase 2 · Mês Black (01 a 19/11) = converter", texto: "Agora tem a melhor oferta do ano no ar, e o cupom de vocês ainda soma mais 10%. É o momento de pedir a venda." },
        { titulo: "Fase 3 · Semana Black (20 a 27/11) = fechar", texto: "Quem ficou em cima do muro decide na Black Friday." },
      ],
      analogia: "**Analogia para usar na live e no teaser:** ninguém coloca o bife na frigideira fria. Vocês passaram duas semanas esquentando a frigideira; agora é hora de colocar o bife.",
    },
    cupom: {
      titulo: "2. O cupom soma com a Black",
      ancora: "A Black da Le Moritz já está no ar, e com o meu cupom você ainda ganha mais 10% em cima.",
      tabelaIntro: "Como aparece em cada oferta da Black November (30/10 a 22/11):",
      tabela: {
        colunas: ["Oferta do site", "O que a embaixadora fala"],
        linhas: [
          ["Progressivo: 1 produto 10%, 2 produtos 20%, 3 produtos 30%, 4 produtos 40%, 5 produtos 50%", "“Monta o seu carrinho, quanto mais produtos maior o desconto, e o meu cupom ainda soma.”"],
          ["Kit Cliente Premium · R$ 297 (creme, rímel, mauve, lifting, sérum olhos)", "“A rotina completa por R$ 297, e com o meu cupom sai ainda mais barato.”"],
          ["Kit Transformação Instantânea · R$ 297 (hidratante, marrom, mauve, lifting, rímel)", "“O kit que muda o rosto na hora, e o meu cupom ainda tira mais 10%.”"],
          ["Flash sale 11.11 (mesmas ofertas, tema novo)", "“Só hoje é 11.11: a Black e o meu cupom juntos.”"],
        ],
      },
      regraDeOuro: "**Regra de ouro do conteúdo:** o cupom aparece sempre, falado, escrito na tela e na legenda. A seguidora precisa sair do conteúdo sabendo qual é o cupom e que ele soma com a oferta.",
    },
  },

  // 03 · LINHA DO TEMPO
  // fases e ofertas vêm de visao-geral.js; aqui entram só os marcos da frente.
  linhaDoTempo: {
    marcos: [
      { data: "2026-10-27", titulo: "Comunicado da final" },
      { data: "2026-10-31", titulo: "Teaser + regras do D2" },
      { data: "2026-11-03", titulo: "Live tira-dúvidas" },
      { data: "2026-11-10", titulo: "Pix do Esquenta" },
      { data: "2026-11-11", titulo: "Relâmpago 11.11" },
      { data: "2026-11-27", titulo: "Black Friday" },
    ],
    nota: "O D2 começa um dia depois de as ofertas entrarem no ar e termina três dias antes de a Black November acabar, com o Relâmpago no meio, no 11.11. O pagamento do Esquenta, na véspera do 11.11, reforça a confiança no desafio.",
  },

  // 04 · CHECKLIST DIA A DIA
  // "resp": quem faz (Bea, Thau). "hora" é opcional. "feito: true" deixa o item
  // marcado por padrão. "secao" abre um novo grupo na lista.
  // dias com "de"/"ate" são rotina: cada item tem "dow" (0 = domingo … 6 = sábado)
  // e ganha um checkbox por semana.
  checklist: {
    intro: "Thau toca a operação com as embaixadoras; Bea cuida de estratégia, aprovações, live, teaser, painel e de todos os disparos 1:1, pela ferramenta de disparos no privado. Cada mensagem citada (M1, M2…) está pronta no Kit de comunicação.",
    dias: [
      {
        secao: "Virada do Esquenta para o D2",
        data: "2026-10-27", titulo: "Terça, 27/10", tema: "“ainda dá tempo de entrar na final”",
        itens: [
          { id: "1027-m1", resp: ["Thau"], hora: "11h", feito: true, texto: "Mandar a **M1** no grupo de avisos: quem for ativa no D1 (5 dias de story ou 1 reel) concorre aos prêmios finais. De 27 a 31/10 são exatamente 5 dias." },
          { id: "1027-disparo", resp: ["Bea"], hora: "tarde", texto: "Disparo 1:1 segmentado pelo painel do D1: grupo A, “em dia, faltam reels”, recebe a **M2**; grupos “sem stories nem reels” e “fora do prêmio” recebem a **M3**." },
          { id: "1027-teaser", resp: ["Bea"], texto: "Script do teaser do tapete roxo para produção." },
        ],
      },
      {
        data: "2026-10-28", titulo: "Quarta, 28/10",
        itens: [
          { id: "1028-e1", resp: ["Thau"], texto: "Enquete **E1** no grupo de bate-papo." },
          { id: "1028-aprovar", resp: ["Bea"], texto: "Aprovar as mensagens **M4 a M7** e o roteiro da semana 1." },
          { id: "1028-painel", resp: ["Bea"], texto: "Montar o painel interno do D2 (pedidos, faixa atual, quanto falta para a próxima, reels), só para o time." },
        ],
      },
      {
        data: "2026-10-29", titulo: "Quinta, 29/10",
        itens: [
          { id: "1029-1a1", resp: ["Bea"], texto: "1:1 rápido com quem está a 1 ou 2 dias de story (ou 1 reel) de virar ativa, explicando que isso garante a concorrência pelo prêmio final." },
          { id: "1029-teaser", resp: ["Bea"], texto: "Fechar o teaser." },
          { id: "1029-canva", resp: ["Bea"], texto: "Desbloquear a página do Desafio 2 na apresentação do Canva com faixas, regras e Relâmpago 11.11. Alterar a página do Desafio 1 para concluída. Acrescentar página com os nomes de quem conseguiu concluir o Desafio 1." },
        ],
      },
      {
        data: "2026-10-30", titulo: "Sexta, 30/10", tema: "ofertas no ar",
        itens: [
          { id: "1030-m4", resp: ["Thau"], texto: "Mandar a **M4** no grupo de avisos sobre os últimos dias da fase 1 da nossa Black, sempre reforçando o conceito geral da Black em 3 fases." },
        ],
      },
      {
        data: "2026-10-31", titulo: "Sábado, 31/10", tema: "último dia do Esquenta",
        itens: [
          { id: "1031-m5", resp: ["Thau"], hora: "10h", texto: "**M5** no grupo de avisos (último dia)." },
          { id: "1031-teaser", resp: ["Thau"], hora: "19h", texto: "Teaser do tapete roxo no grupo de avisos." },
          { id: "1031-m6", resp: ["Thau"], hora: "20h", texto: "**M6** com as regras do D2, a apresentação e o convite da live de terça." },
          { id: "1031-m7", resp: ["Bea"], texto: "Agendar a **M7** (boas-vindas 1:1) para domingo de manhã." },
        ],
      },
      {
        data: "2026-11-01", titulo: "Domingo, 01/11", tema: "abre o D2",
        itens: [
          { id: "1101-m7", resp: ["Bea"], texto: "Conferir se a **M7** saiu para todas." },
        ],
      },
      {
        data: "2026-11-02", titulo: "Segunda, 02/11", tema: "feriado",
        itens: [
          { id: "1102-feriado", resp: [], texto: "Sem ação. Só responder dúvidas que chegarem no privado." },
        ],
      },
      {
        data: "2026-11-03", titulo: "Terça, 03/11", tema: "live tira-dúvidas às 20h",
        itens: [
          { id: "1103-lembrete", resp: ["Thau"], hora: "10h", texto: "Lembrete da live no grupo de avisos, com caixinha para mandarem dúvidas antes." },
          { id: "1103-1hora", resp: ["Thau"], hora: "19h", texto: "Lembrete “começa em 1 hora” com o link." },
          { id: "1103-live", resp: ["Bea"], hora: "20h", texto: "Conduzir a live (pauta no Kit de comunicação)." },
          { id: "1103-chat", resp: ["Thau"], texto: "Moderar o chat da live e anotar as dúvidas que se repetem." },
        ],
      },
      {
        data: "2026-11-04", titulo: "Quarta, 04/11", tema: "Bea em evento",
        itens: [
          { id: "1104-gravacao", resp: ["Thau"], texto: "Mandar a gravação da live, material e um resumo de 5 linhas no grupo de avisos." },
          { id: "1104-e2", resp: ["Thau"], texto: "Enquete da semana (**E2**) no grupo de bate-papo." },
        ],
      },
      {
        secao: "Rotina semanal do D2",
        de: "2026-11-05", ate: "2026-11-19", titulo: "Toda semana", tema: "de 05/11 a 19/11",
        itens: [
          { id: "rot-seg", dow: 1, dia: "Segunda", resp: ["Thau"], texto: "Roteiro pronto da semana no grupo de avisos." },
          { id: "rot-qua", dow: 3, dia: "Quarta", resp: ["Thau"], texto: "Enquete no grupo de bate-papo." },
          { id: "rot-qui", dow: 4, dia: "Quinta", resp: ["Bea"], texto: "1:1 de proximidade (**M10**) com quem está até 3 pedidos da próxima faixa." },
          { id: "rot-sex", dow: 5, dia: "Sexta", resp: ["Thau"], texto: "Destaques da semana e “Indicada da Semana” no grupo (**M11**), com elogio nominal e sem números de venda." },
        ],
      },
      {
        secao: "Datas especiais do D2",
        data: "2026-11-09", titulo: "Segunda, 09/11",
        itens: [
          { id: "1109-m8", resp: ["Thau"], texto: "Roteiro da semana 2 (11.11) e anúncio do Relâmpago (**M8**)." },
        ],
      },
      {
        data: "2026-11-10", titulo: "Terça, 10/11", tema: "véspera do 11.11",
        itens: [
          { id: "1110-pix", resp: ["Bea"], texto: "Pagar o Esquenta via Pix." },
          { id: "1110-comemora", resp: ["Thau"], texto: "Comemorar no grupo que os prêmios foram pagos. Isso dá credibilidade ao desafio na véspera do 11.11." },
        ],
      },
      {
        data: "2026-11-11", titulo: "Quarta, 11/11", tema: "Relâmpago 11.11",
        itens: [
          { id: "1111-9h", resp: ["Thau"], hora: "9h", texto: "**M9**: abertura do Relâmpago." },
          { id: "1111-15h", resp: ["Thau"], hora: "15h", texto: "**M9**: parcial do meio do dia." },
          { id: "1111-20h", resp: ["Thau"], hora: "20h", texto: "**M9**: “últimas horas”." },
        ],
      },
      {
        data: "2026-11-13", titulo: "Sexta, 13/11",
        itens: [
          { id: "1113-apurar", resp: ["Bea", "Thau"], texto: "Apurar o Relâmpago (o dado pode atrasar 1 dia) e anunciar as 5 vencedoras junto com os destaques da semana." },
        ],
      },
      {
        data: "2026-11-16", titulo: "Segunda, 16/11",
        itens: [
          { id: "1116-roteiro", resp: ["Thau"], texto: "Roteiro da semana 3 (kits, presente, última semana da Black November)." },
        ],
      },
      {
        data: "2026-11-18", titulo: "Quarta, 18/11",
        itens: [
          { id: "1118-faltam", resp: ["Bea"], texto: "1:1 “faltam X pedidos” para todas que estão até 30% da próxima faixa." },
        ],
      },
      {
        data: "2026-11-19", titulo: "Quinta, 19/11", tema: "último dia do D2",
        itens: [
          { id: "1119-10h", resp: ["Thau"], hora: "10h", texto: "Lembrete de último dia do D2." },
          { id: "1119-18h", resp: ["Thau"], hora: "18h", texto: "Lembrete final do D2." },
        ],
      },
      {
        data: "2026-11-20", titulo: "Sexta, 20/11", tema: "abre a Semana Black",
        itens: [
          { id: "1120-d3", resp: ["Bea"], texto: "Abre o D3 (a desenhar) e sai a parcial do D2." },
        ],
      },
      {
        data: "2026-11-25", titulo: "Até quarta, 25/11",
        itens: [
          { id: "1125-apuracao", resp: ["Bea", "Thau"], texto: "Apuração do D2: descontar cancelamentos e reembolsos, conferir os 2 reels, fechar faixas e comunicar." },
        ],
      },
      {
        data: "2026-12-10", titulo: "Quinta, 10/12", tema: "pagamento",
        itens: [
          { id: "1210-pagamento", resp: ["Bea"], texto: "Pagamento do D2, do D3 e dos prêmios finais." },
        ],
      },
    ],
  },

  // 05 · KIT DE COMUNICAÇÃO
  kit: {
    intro: "Mensagens prontas para copiar e ajustar. [NOME], [CUPOM], [X] e [FAIXA] são trocados no envio. Os emojis ficam a critério de quem envia.",
    mensagens: [
      {
        id: "M1", canal: "Grupo de avisos", quando: "terça, 27/10, 11h", titulo: "Ainda dá tempo",
        texto: "Meninas, recado importante sobre os prêmios finais do Black November Awards! Concorre à Lemorita Black (R$ 3.000), à Presença Black (R$ 1.500) e ao Alcance Black (R$ 500) quem estiver ativa nas 3 fases. E no Esquenta, ser ativa é simples: pelo menos 5 dias com story marcando a @lemoritz_oficial OU pelo menos 1 reel até 31/10. De hoje até sábado são exatamente 5 dias. Então mesmo quem ainda não postou nada está no jogo. Bora entrar em cena?",
      },
      {
        id: "M2", canal: "Privado", quando: "terça, 27/10", titulo: "Grupo A (em dia, faltam reels)",
        texto: "Oi, [NOME]! Passando pra te dar os parabéns: você está em dia com os stories do Esquenta, isso é constância de verdade. Faltam só [X] reels até sábado, 31/10, pra garantir os R$ 300. Quer um roteiro pronto pra gravar hoje? Te mando agora.",
      },
      {
        id: "M3", canal: "Privado", quando: "terça, 27/10", titulo: "Sem postagem ou fora do prêmio",
        texto: "Oi, [NOME]! Tudo bem? Queria te contar uma coisa: você ainda pode concorrer aos prêmios finais do Black November, que chegam a R$ 3.000. Pra contar como ativa nessa primeira fase, basta postar story marcando a @lemoritz_oficial em 5 dias até sábado, ou 1 reel. Começando hoje, dá certinho. Posso te mandar uma ideia de story pra começar?",
      },
      {
        id: "M4", canal: "Grupo de avisos", quando: "sexta, 30/10", titulo: "Últimos dias da fase 1",
        texto: "Meninas, estamos nos últimos dias da Fase 1 da nossa Black! Só pra relembrar como funciona o Black November Awards: são 3 fases, e cada uma tem um papel. A Fase 1, o Esquenta (até amanhã, 31/10), é pra aquecer: vocês aparecem todo dia e a seguidora cria confiança. A Fase 2, o Mês Black (01 a 19/11), é pra converter: é quando ela compra. A Fase 3, a Semana Black (20 a 27/11), fecha com a Black Friday. Cada story de hoje e de amanhã prepara as vendas da próxima fase. Ainda dá tempo de garantir os stories e o reel que faltam!",
      },
      {
        id: "M5", canal: "Grupo de avisos", quando: "sábado, 31/10, 10h", titulo: "Último dia",
        texto: "Último dia do Esquenta Black! Hoje é o dia de garantir o story que falta, o reel que ficou pra depois. E fiquem de olho no grupo: hoje às 19h tem surpresa.",
      },
      {
        id: "M6", canal: "Grupo de avisos", quando: "sábado, 31/10, 20h", titulo: "Fase 1 concluída e regras do D2",
        texto: "Ato 1 encerrado, e que ato! Em 16 dias vocês fizeram [X] stories e [X] reels falando da Le Moritz. Um aplauso especial pra [NOMES], que não faltaram um dia sequer. Sabe o que isso significa? As seguidoras de vocês viram a marca todos os dias, criaram confiança, e agora estão prontas pra comprar. É como esquentar a frigideira antes de colocar o bife: a frigideira está quente. Começa amanhã o Ato 2, o Mês Black (01 a 19/11), e agora o prêmio é por venda: 3 pedidos no cupom = R$ 60, 6 = R$ 130, 12 = R$ 300, 25 = R$ 700 e 50 pedidos = R$ 1.800. Pra receber, basta ter 2 reels no período marcando a Le Moritz com o cupom. E no 11.11 tem Relâmpago: as 5 que mais venderem no dia ganham R$ 200 cada. Todos os detalhes na apresentação aqui embaixo, e terça, 03/11, às 20h tem live tira-dúvidas comigo. Vem?",
      },
      {
        id: "M7", canal: "Privado", quando: "domingo, 01/11", titulo: "Boas-vindas ao D2",
        texto: "[NOME], começou o Mês Black! Sua primeira meta é a faixa Estreia: 3 pedidos com o seu cupom [CUPOM] = R$ 60. Dica de ouro: em todo story, fala que o seu cupom soma mais 10% com a Black e deixa ele escrito grande na tela. Na live de terça, 03/11, às 20h, a gente mostra tudo isso na prática. Conta comigo pro que precisar!",
      },
      {
        id: "M8", canal: "Grupo de avisos", quando: "segunda, 09/11", titulo: "Relâmpago 11.11",
        texto: "Quarta é 11.11, o dia mais forte de compras online antes da Black Friday. E tem RELÂMPAGO: as 5 embaixadoras com mais pedidos no cupom no dia 11/11 ganham R$ 200 cada, além da faixa do Mês Black. O roteiro da semana é todo pensado pro 11.11. Comecem a avisar as seguidoras desde já: quarta tem novidade.",
      },
      {
        id: "M9", canal: "Grupo de avisos", quando: "quarta, 11/11", titulo: "Dia do Relâmpago",
        partes: [
          { rotulo: "9h", texto: "É HOJE! 11.11 na Le Moritz: todas as ofertas da Black e o cupom de vocês somando. Story logo cedo, de novo na hora do almoço e de noite, que é quando elas compram." },
          { rotulo: "15h", texto: "Metade do dia! Quem ainda não postou, o roteiro está aqui em cima." },
          { rotulo: "20h", texto: "Últimas horas do 11.11! Último story com a oferta e o cupom, agora." },
        ],
      },
      {
        id: "M10", canal: "Privado", quando: "quintas-feiras", titulo: "Proximidade",
        texto: "[NOME], olha só: faltam só [X] pedidos pra você chegar na [FAIXA] e garantir R$ [VALOR]! Uma sequência de stories lembrando que o seu cupom soma com a Black costuma resolver. Quer que eu te mande um roteiro?",
      },
      {
        id: "M11", canal: "Grupo de avisos", quando: "sextas-feiras", titulo: "Destaques e Indicada da Semana",
        texto: "Fechamento da semana! A Indicada da Semana é a [NOME], que [motivo concreto: bateu a Prata, fez o reel que mais vendeu, respondeu cada seguidora]. Um aplauso também pra [NOMES], que mandaram muito bem essa semana. Semana que vem é a vez de vocês.",
      },
    ],
    enquetes: [
      { id: "E1", quando: "28/10", pergunta: "Qual oferta da Black você mais quer mostrar?", opcoes: ["Progressivo", "Kit Cliente Premium", "Kit Transformação Instantânea"] },
      { id: "E2", quando: "04/11", pergunta: "Qual faixa você vai buscar no Mês Black?", opcoes: ["Estreia", "Bronze", "Prata", "Ouro", "Black Diamond"] },
      { id: "E3", quando: "11/11", pergunta: "Em que horário suas seguidoras mais compram?", opcoes: ["Manhã", "Almoço", "Noite"] },
      { id: "E4", quando: "18/11", pergunta: "O que mais convenceu suas seguidoras?", opcoes: ["O cupom somando", "Antes e depois", "Rotina completa", "Preço do kit"] },
    ],
    reforco: {
      titulo: "Como reforçar o cupom em cada formato",
      itens: [
        { titulo: "Stories (sequência de 4)", texto: "1) gancho (“a Black da Le Moritz chegou e eu tenho um segredo”); 2) a oferta e o produto na mão; 3) o cupom somando com a oferta, falado e escrito na tela; 4) cupom escrito grande, link e caixinha de perguntas." },
        { titulo: "Reels", texto: "Cupom falado no fim, junto com o CTA, escrito na tela desde que o produto aparece e repetido na legenda." },
        { titulo: "Feed (carrossel)", texto: "“Quanto você economiza na Black com o meu cupom”: oferta, preço do site, preço com o cupom, último card com o cupom." },
        { titulo: "Destaque", texto: "Criar o destaque “Black” com os stories das ofertas, para a seguidora achar o cupom a qualquer hora." },
        { titulo: "Identificação de publicidade", texto: "Seguir a orientação dos treinamentos em todos os posts." },
      ],
    },
    live: {
      titulo: "Pauta da live tira-dúvidas",
      quando: "Terça, 03/11, 20h · 40 minutos",
      itens: [
        { texto: "Abertura e elogios nominais do Esquenta", min: "5 min" },
        { texto: "A lógica das 3 fases: aquecer, converter, fechar", min: "5 min" },
        { texto: "Regras do Mês Black, faixas, os 2 reels e o Relâmpago 11.11", min: "10 min" },
        { texto: "Ao vivo: gravando uma sequência de stories com a oferta e o cupom", min: "10 min" },
        { texto: "Dúvidas da caixinha e do chat", min: "10 min" },
      ],
    },
    teaser: {
      titulo: "Teaser do tapete roxo",
      intro: "Vídeo vertical de 25 a 30 segundos, na estética da apresentação Black November Awards, que vai no grupo de avisos no sábado 31/10 às 19h. A ideia: fecha a cortina do primeiro ato e abre o ato principal.",
      formato: "**Formato:** 9:16 para WhatsApp e stories, com uma versão em carrossel de 5 telas para quem não abre vídeo. Trilha de cerimônia, sem fala. Paleta, fontes e o tapete roxo da apresentação.",
      tabela: {
        colunas: ["Cena", "Tempo", "Imagem", "Texto na tela"],
        linhas: [
          ["1", "0 a 4s", "Tapete roxo, luzes acendendo, cortina fechando", "Ato 1 · Esquenta Black · concluído"],
          ["2", "4 a 10s", "Números entrando um a um, como placar de premiação", "[X] stories · [X] reels · [X] embaixadoras em cena (preencher com o fechamento de 30/10)"],
          ["3", "10 a 16s", "Plateia cheia, refletores virando para o palco", "Vocês aqueceram a plateia. Agora ela está pronta para comprar."],
          ["4", "16 a 22s", "Cortina abrindo, cupom dourado aparecendo", "Ato 2 · Mês Black · 01 a 19/11 · A Black e o seu cupom, juntos."],
          ["5", "22 a 28s", "Estatueta e as faixas de prêmio subindo até o Black Diamond", "Até R$ 1.800 · Regras hoje às 20h · Live terça, 03/11, às 20h"],
        ],
      },
      notas: [
        "Os números da cena 2 saem do painel do D1 na manhã de 31/10. Vale arredondar para baixo (“mais de 1.000 stories”).",
        "Nada de nome de embaixadora no teaser. O elogio nominal vem na M6, logo depois.",
        "Fechar a versão final até quinta, 29/10, deixando só os números para trocar no sábado de manhã.",
      ],
    },
  },

  // 06 · ROTEIROS SEMANAIS
  roteiros: {
    intro: "Um roteiro base por semana, cada um com duas aberturas, no mesmo formato do PDF do Stick Pés: o roteiro é base, não texto para decorar. Os três terminam com o cupom falado e escrito na tela. A diagramação final segue o padrão “Roteiros Validados”.",
    semanas: [
      {
        rotulo: "Semana 1 · 01 a 08/11",
        titulo: "Montei meu carrinho da Black",
        aberturas: [
          "Vou te mostrar como eu economizei [X]% na Black da Le Moritz.",
          "Esse é o carrinho que eu montaria se fosse você.",
        ],
        fala: "A Black da Le Moritz começou e funciona assim: quanto mais produtos você coloca, maior o desconto, chegando a 50% com 5 produtos. Eu escolhi esses três aqui [mostra cada um e diz em uma frase pra que usa]. Com três produtos já são 30%. E olha o que acontece quando eu coloco o meu cupom [CUPOM]: mais 10% em cima. Esse é o preço final. Corre que a Black November vai até dia 22.",
        mostrar: "Os produtos na mão, um por um, e o cupom escrito na tela a partir do momento em que fala dele.",
        porque: "A conta é simples de entender (mais produtos, mais desconto, mais o cupom), e a seguidora sai sabendo exatamente o que ganha.",
      },
      {
        rotulo: "Semana 2 · 09 a 15/11",
        titulo: "O que eu levaria no 11.11",
        aberturas: [
          "Se eu só pudesse comprar uma coisa no 11.11, seria isso.",
          "Amanhã é 11.11 e eu já sei o que vou colocar no carrinho.",
        ],
        fala: "Três escolhas, três motivos. A primeira é o [produto], porque [resultado que você viu em você]. A segunda é o [produto], pra [uso]. E a terceira, se eu fosse levar um presente, é o kit de R$ 297, porque é a rotina completa numa caixa só. No 11.11 continuam todas as ofertas da Black, e o meu cupom [CUPOM] soma mais 10%. É só hoje esse clima, então não deixa pra amanhã.",
        mostrar: "Cada produto em uso por 2 segundos, depois o cupom escrito na tela.",
        porque: "Escolha pessoal com motivo pessoal. Ela confia na sua curadoria, não numa lista de ofertas.",
      },
      {
        rotulo: "Semana 3 · 16 a 19/11",
        titulo: "A rotina que eu daria de presente",
        aberturas: [
          "Tô pensando em quem eu vou presentear esse fim de ano, e já resolvi.",
          "Última semana da Black November e eu preciso te contar desse kit.",
        ],
        fala: "Esse é o Kit [Cliente Premium ou Transformação Instantânea]: [lista os 5 itens mostrando cada um]. Por R$ 297 é a rotina completa, e com o meu cupom [CUPOM] ainda sai mais barato. Eu daria pra minha mãe, pra uma amiga, e sinceramente eu daria pra mim também. A Black November vai até domingo, dia 22. Depois disso, só na Black Friday.",
        mostrar: "O kit aberto, cada produto passando pela mão, e o cupom escrito na tela no fim.",
        porque: "Antecipa a lógica de presente do fim de ano e cria um prazo concreto (dia 22).",
      },
    ],
  },

  // 07 · ACOMPANHAMENTO
  // só métrica e fonte: metas de receita e custo ficam fora da página pública.
  acompanhamento: {
    intro: "O painel do D2 é de uso interno do time e não é compartilhado com as embaixadoras: cada uma só recebe os próprios números, no privado. Ele alimenta os disparos de proximidade, os destaques de sexta e o fechamento semanal no ClickUp.",
    metricas: {
      colunas: ["Métrica", "Fonte"],
      linhas: [
        ["Receita no cupom das embaixadoras do desafio", "Yampi (vendas por cupom)"],
        ["Pedidos aprovados", "Yampi"],
        ["Vendedoras ativas (pelo menos 1 pedido)", "Yampi"],
        ["Embaixadoras em alguma faixa", "Painel D2"],
        ["Reels no período", "Inbazz"],
        ["Custo de prêmio sobre a receita", "Painel D2"],
      ],
    },
    pontosAbertos: [
      { id: "aberto-cupom", texto: "Como o cupom soma no carrinho (10% sobre o preço já com desconto, ou soma de percentuais)? Muda as contas das mensagens e dos roteiros." },
      { id: "aberto-teaser", texto: "Quem produz o teaser e as telas do roteiro no padrão “Roteiros Validados”?" },
      { id: "aberto-d3", texto: "Regras e critério de ativa do D3 (Semana Black, 20 a 27/11), com o lançamento do lápis batom em 23/11 e a Black Friday em 27/11." },
      { id: "aberto-lapis", texto: "Embaixadoras recebem os novos lápis batom para gravar antes de 23/11?" },
    ],
  },
};
