// ===== BLACK FRIDAY · AFILIADAS =====
// conteúdo de Black Afiliadas (TikTok Shop), separado em desafios (um por fase).
// mesma estrutura de embaixadoras.js: edite aqui pra atualizar regras,
// checklist, mensagens e roteiros, sem mexer no HTML.
//
// - textos aceitam **negrito** e quebra de linha com \n.
// - datas em AAAA-MM-DD.
// - cada item do checklist precisa de um "id" único e fixo: é ele que guarda a
//   marcação no navegador. trocar o id desmarca o item.
// - ATENÇÃO: a página é pública. nada de orçamento, projeção de receita ou
//   venda individual de afiliada aqui.

window.BLACK_FRIDAY = window.BLACK_FRIDAY || { frentes: {} };

BLACK_FRIDAY.frentes.afiliadas = {
  nome: "Afiliadas",
  resumo: "Desafios 1, 2 e 3",
  cor: "var(--afiliadas-cor)",
  responsaveis: ["Bea", "Letícia"],

  // um desafio por fase da Black. "fase" é a posição da fase em visao-geral.js
  // (0 = Esquenta, 1 = Mês Black, 2 = Semana Black); as datas vêm de lá.
  desafios: [
    {
      id: "d1",
      nome: "Esquenta Black",
      fase: 0,
      resumo: "em curso",
      emConstrucao: "O Desafio 1 (foco em volume: vídeos de Stick Pés e de Sérum Lifting) está em curso até 31/10. O acompanhamento dele fica no relatório do Desafio 1.",
    },
    {
      id: "d2",
      nome: "Mês Black",
      fase: 1,

      // 01 · REGRAS E PRÊMIOS
      regras: {
        intro: "No Desafio 2 a gente para de pagar por vídeo e passa a pagar por **venda**. O Esquenta encheu o TikTok de vídeos da Le Moritz; o Mês Black (01 a 19/11) é quando a cliente compra. Quanto mais itens saem pelos seus vídeos e lives, maior o prêmio, e cada vídeo que vende ainda ganha impulso pago da Le Moritz.",
        titulo: "Regras do Desafio 2 · Mês Black · 01 a 19/11",
        tabela: {
          colunas: ["Itens vendidos pelos seus vídeos e lives", "Prêmio"],
          linhas: [
            ["3", "R$ 70"],
            ["8", "R$ 200"],
            ["15", "R$ 400"],
            ["30", "R$ 800"],
            ["60", "R$ 1.200"],
            ["100", "R$ 1.500"],
          ],
        },
        itens: [
          { titulo: "Vale a maior meta batida", texto: "Contam os itens vendidos de qualquer produto Le Moritz entre 01 e 19/11 pelos seus vídeos e lives do período, pelo relatório de afiliados do TikTok Shop. Só contam pedidos aprovados, sem cancelamento ou reembolso." },
          { titulo: "Só vale vídeo do período", texto: "Contam as vendas feitas entre 01 e 19/11 de **vídeos postados entre 01 e 19/11**. Venda de vídeo postado antes de 01/11 não conta. **Live feita nesse período também vale.**" },
          { titulo: "Stick Pés vale em dobro", texto: "Cada **Stick Hidratante para os Pés** vendido conta como **2 itens** na sua meta." },
          { titulo: "Condição para receber", texto: "Pelo menos **6 vídeos** no período, um produto marcado por vídeo, aparecendo aplicando o produto, e a **autorização de anúncio ligada** nos seus vídeos (a gente ensina na live)." },
          { titulo: "Vídeo de Ouro da semana", texto: "Toda semana, o vídeo que mais vendeu vira o exemplo do grupo: destaque com o nome da criadora, uma análise de por que ele vendeu e prioridade no anúncio pago da Le Moritz, que leva o vídeo para mais gente. São 3 semanas: 01 a 08/11, 09 a 15/11 e 16 a 19/11." },
          { titulo: "Relâmpago 11.11 · R$ 200", texto: "As 5 afiliadas com mais itens vendidos no dia 11/11 ganham R$ 200 cada, além da meta." },
          { titulo: "Fale do jeito que o anúncio fala", texto: "Use o nome e as promessas que estão no anúncio do produto. Vídeo que promete o que o anúncio não diz pode levar violação, perder o carrinho e deixa de contar." },
          { titulo: "Uma conta por afiliada", texto: "Quem tem mais de uma conta participa com a de melhor resultado, sem somar contas." },
          { titulo: "Pagamento", texto: "Via Pix em 10/12. O time pode pedir print dos insights para conferir." },
        ],
      },

      // 02 · NARRATIVA CENTRAL
      narrativa: {
        intro: "Toda comunicação do Desafio 2 bate em duas teclas:",
        teclas: ["Agora é hora de vender: quem viu o seu vídeo no Esquenta está pronta pra comprar na Black", "O seu vídeo que vende vira anúncio, e a Le Moritz paga o alcance"],
        porQue: {
          titulo: "1. Por que agora é a hora",
          subtitulo: "A lógica dos desafios, contada para elas.",
          fases: [
            { titulo: "Fase 1 · Esquenta (16 a 31/10) = aparecer", texto: "Vocês gravaram muito e o TikTok aprendeu quem se interessa por Le Moritz. Essas pessoas viram o sérum, viram o stick e ficaram com o produto na cabeça." },
            { titulo: "Fase 2 · Mês Black (01 a 19/11) = vender", texto: "Agora vem o desconto de Black e o 11.11, o dia mais forte de compras antes da Black Friday. É o momento de pedir a venda, com o carrinho laranja em todo vídeo." },
            { titulo: "Fase 3 · Semana Black (20 a 27/11) = fechar", texto: "Quem ficou na dúvida decide na Black Friday." },
          ],
        },
        cupom: {
          titulo: "2. O vídeo que vende ganha alcance pago",
          ancora: "Faz o vídeo que vende, liga a autorização de anúncio, e a Le Moritz coloca dinheiro pra ele chegar em mais gente. Mais gente vendo, mais venda, mais comissão pra você.",
          tabelaIntro: "O que mais vende no TikTok Shop, e como entra no vídeo:",
          tabela: {
            colunas: ["O que funciona", "Como fazer"],
            linhas: [
              ["Prova na hora", "Aplica o sérum em metade do rosto de outra pessoa (mãe, amiga, vizinha) e mostra o com e o sem. É o formato que mais vendeu na Le Moritz."],
              ["Desconto de Black falado", "Fala o desconto do dia e que é de Black: “[X]% off, nunca vi esse sérum tão barato”. Quem está em dúvida decide pelo desconto."],
              ["Carrinho laranja", "Termina sempre apontando pro carrinho laranja: “tá aqui embaixo, no carrinho”."],
              ["Gancho nos 3 primeiros segundos", "Começa pelo resultado, não pela apresentação. Ninguém espera 10 segundos pra ver o que acontece."],
            ],
          },
          regraDeOuro: "**Regra de ouro do vídeo:** resultado nos 3 primeiros segundos, produto aplicado de verdade, desconto de Black falado e carrinho laranja no fim. Um produto por vídeo, com o nome e as promessas do anúncio.",
        },
      },

      // 03 · LINHA DO TEMPO
      // fases e ofertas vêm de visao-geral.js; aqui entram só os marcos da frente.
      linhaDoTempo: {
        marcos: [
          { data: "2026-10-31", titulo: "Teaser do Desafio 2" },
          { data: "2026-11-01", titulo: "Resultado do Esquenta e Desafio 2 liberado" },
          { data: "2026-11-03", titulo: "Live tira-dúvidas" },
          { data: "2026-11-09", titulo: "Vídeo de Ouro · semana 1" },
          { data: "2026-11-10", titulo: "Pix do Esquenta" },
          { data: "2026-11-11", titulo: "Relâmpago 11.11" },
          { data: "2026-11-16", titulo: "Vídeo de Ouro · semana 2" },
          { data: "2026-11-20", titulo: "Vídeo de Ouro · semana 3 e abre o Desafio 3" },
          { data: "2026-11-27", titulo: "Black Friday" },
        ],
        nota: "O Desafio 2 cobre o 11.11, o maior dia de compras do TikTok antes da Black Friday, com o Relâmpago no meio. O Pix do Esquenta, na véspera do 11.11, mostra que o prêmio chega. O Vídeo de Ouro de cada semana sai na segunda seguinte, porque o dado de venda do TikTok atrasa até 2 dias.",
      },

      // 04 · CHECKLIST DIA A DIA
      // "resp": quem faz (Bea, Letícia). "hora" é opcional. "secao" abre um novo grupo.
      // dias com "de"/"ate" são rotina: cada item tem "dow" (0 = domingo … 6 = sábado).
      checklist: {
        dias: [
          {
            secao: "Preparação do Desafio 2",
            data: "2026-10-28", titulo: "Quarta, 28/10", tema: "fechar a base",
            itens: [
              { id: "a1028-aprovar", resp: ["Bea"], texto: "Aprovar regras, mensagens **M1 a M9** e o roteiro da semana 1." },
              { id: "a1028-preco", resp: ["Bea"], texto: "Confirmar com o marketplace o % de desconto da Black no TikTok Shop em novembro e a inscrição na megacampanha 11.11 + Black Friday." },
              { id: "a1028-ads", resp: ["Bea"], texto: "Combinar com quem cuida de ads como os vídeos autorizados que mais vendem entram no GMV Max toda semana, a partir de 01/11." },
            ],
          },
          {
            data: "2026-10-29", titulo: "Quinta, 29/10", tema: "reta final do Esquenta",
            itens: [
              { id: "a1029-m1", resp: ["Letícia"], hora: "11h", texto: "**M1** no grupo de avisos: reta final do Esquenta." },
              { id: "a1029-ferramenta", resp: ["Bea"], hora: "manhã", texto: "Organizar a ferramenta de disparo (Mensagens 1x1) com a **M2** e a **M3**, pelo relatório do Desafio 1, para a Letícia enviar à tarde." },
              { id: "a1029-disparo", resp: ["Letícia"], hora: "tarde", texto: "Disparo 1:1 pela ferramenta: quem está **perto da meta** recebe a **M2**; quem está **na meta** e pode subir recebe a **M3**." },
              { id: "a1029-arte", resp: ["Bea"], texto: "Arte do Desafio 2 em imagem, no padrão do Black November Awards." },
              { id: "a1029-painel", resp: ["Bea"], texto: "Montar o painel interno do Desafio 2 (itens vendidos, meta atual, quanto falta, vídeos e autorização de anúncio), só para o time." },
            ],
          },
          {
            data: "2026-10-30", titulo: "Sexta, 30/10",
            itens: [
              { id: "a1030-tutorial", resp: ["Bea"], texto: "Gravar o tutorial de 1 minuto: como ligar a autorização de anúncio no vídeo." },
              { id: "a1030-aula", resp: ["Bea"], texto: "Gravar a mini aula de 5 minutos explicando o Desafio 2." },
              { id: "a1030-e1", resp: ["Letícia"], texto: "Enquete **E1** no grupo de bate-papo." },
            ],
          },
          {
            data: "2026-10-31", titulo: "Sábado, 31/10", tema: "último dia do Esquenta",
            itens: [
              { id: "a1031-m4", resp: ["Letícia"], hora: "10h", texto: "**M4** no grupo de avisos (último dia)." },
              { id: "a1031-m5", resp: ["Letícia"], hora: "fim do dia", texto: "Teaser **M5**: só suspense, avisando o resultado e o novo desafio no dia seguinte. O vídeo do teaser está na [pasta no Drive](https://drive.google.com/drive/folders/1PKKW0jZR1ar6jAgA1hYhCcUpJrd7vpvb?hl=pt-br)." },
              { id: "a1031-drive", resp: ["Letícia"], texto: "Baixar da [pasta no Drive](https://drive.google.com/drive/folders/1PKKW0jZR1ar6jAgA1hYhCcUpJrd7vpvb?hl=pt-br) a arte do Desafio 2 e a mini aula, para deixar prontas para domingo às 13h." },
              { id: "a1031-agendar", resp: ["Bea"], texto: "Organizar a ferramenta de disparo com a **M8** (boas-vindas) para a Letícia enviar no domingo, depois das 13h." },
            ],
          },
          {
            data: "2026-11-01", titulo: "Domingo, 01/11", tema: "abre o Desafio 2",
            itens: [
              { id: "a1101-m6", resp: ["Letícia"], hora: "cedo", texto: "**M6** no grupo de avisos: resultado do Esquenta Black." },
              { id: "a1101-m7", resp: ["Letícia"], hora: "13h", texto: "Sai o Desafio 2: **arte do desafio + mensagem M7 + mini treinamento** explicando o Desafio 2, no grupo de avisos (FASE 2 DA BLACK | DESAFIO 2 LIBERADO), junto com o tutorial de autorização de anúncio. Arte e aula na [pasta no Drive](https://drive.google.com/drive/folders/1PKKW0jZR1ar6jAgA1hYhCcUpJrd7vpvb?hl=pt-br)." },
              { id: "a1101-m8", resp: ["Letícia"], hora: "depois das 13h", texto: "Enviar a **M8** (boas-vindas) 1:1 pela ferramenta de disparo." },
            ],
          },
          {
            data: "2026-11-02", titulo: "Segunda, 02/11", tema: "feriado",
            itens: [
              { id: "a1102-feriado", resp: [], texto: "Sem ação. Só responder dúvidas que chegarem no privado." },
            ],
          },
          {
            data: "2026-11-03", titulo: "Terça, 03/11", tema: "live tira-dúvidas às 21h",
            itens: [
              { id: "a1103-roteiro", resp: ["Letícia"], hora: "10h", texto: "Roteiro da semana 1 no grupo de avisos e lembrete da live de hoje, com caixinha para mandarem dúvidas antes." },
              { id: "a1103-1hora", resp: ["Letícia"], hora: "20h", texto: "Lembrete “começa em 1 hora” com o link." },
              { id: "a1103-live", resp: ["Bea"], hora: "21h", texto: "Conduzir a live (pauta no Kit de comunicação)." },
              { id: "a1103-chat", resp: ["Letícia"], texto: "Moderar o chat e anotar as dúvidas que se repetem." },
            ],
          },
          {
            data: "2026-11-04", titulo: "Quarta, 04/11", tema: "Bea em evento",
            itens: [
              { id: "a1104-gravacao", resp: ["Letícia"], texto: "Gravação da live e resumo de 5 linhas no grupo de avisos." },
              { id: "a1104-e2", resp: ["Letícia"], texto: "Enquete **E2** no grupo de bate-papo." },
            ],
          },
          {
            secao: "Rotina semanal do Desafio 2",
            de: "2026-11-09", ate: "2026-11-19", titulo: "Toda semana", tema: "de 09/11 a 19/11",
            itens: [
              { id: "arot-seg", dow: 1, dia: "Segunda", resp: ["Letícia"], texto: "Roteiro da semana no grupo de avisos e anúncio do **Vídeo de Ouro** da semana anterior (**M12**)." },
              { id: "arot-ter", dow: 2, dia: "Terça", resp: ["Bea"], texto: "Separar os vídeos autorizados que mais venderam e mandar para o GMV Max." },
              { id: "arot-qua", dow: 3, dia: "Quarta", resp: ["Letícia"], texto: "Enquete no grupo de bate-papo." },
              { id: "arot-qua-ferramenta", dow: 3, dia: "Quarta", resp: ["Bea"], texto: "Organizar a ferramenta de disparo com a **M11** para quem está até 30% da próxima meta, para a Letícia enviar na quinta." },
              { id: "arot-qui", dow: 4, dia: "Quinta", resp: ["Letícia"], texto: "1:1 de proximidade (**M11**) pela ferramenta de disparo com quem está até 30% da próxima meta." },
              { id: "arot-sex", dow: 5, dia: "Sexta", resp: ["Letícia"], texto: "Destaques da semana no grupo (**M13**), com elogio nominal e sem números de venda." },
            ],
          },
          {
            secao: "Datas especiais do Desafio 2",
            data: "2026-11-09", titulo: "Segunda, 09/11",
            itens: [
              { id: "a1109-m9", resp: ["Letícia"], texto: "Roteiro da semana 2 (11.11) e anúncio do Relâmpago (**M9**)." },
            ],
          },
          {
            data: "2026-11-10", titulo: "Terça, 10/11", tema: "véspera do 11.11",
            itens: [
              { id: "a1110-pix", resp: ["Bea"], texto: "Pagar o Esquenta via Pix." },
              { id: "a1110-comemora", resp: ["Letícia"], texto: "Comemorar no grupo que os prêmios foram pagos. Dá credibilidade ao desafio na véspera do 11.11." },
            ],
          },
          {
            data: "2026-11-11", titulo: "Quarta, 11/11", tema: "Relâmpago 11.11",
            itens: [
              { id: "a1111-9h", resp: ["Letícia"], hora: "9h", texto: "**M10**: abertura do Relâmpago." },
              { id: "a1111-15h", resp: ["Letícia"], hora: "15h", texto: "**M10**: parcial do meio do dia." },
              { id: "a1111-20h", resp: ["Letícia"], hora: "20h", texto: "**M10**: “últimas horas”." },
            ],
          },
          {
            data: "2026-11-13", titulo: "Sexta, 13/11",
            itens: [
              { id: "a1113-apurar", resp: ["Bea", "Letícia"], texto: "Apurar o Relâmpago (o dado atrasa até 2 dias) e anunciar as 5 vencedoras junto com os destaques da semana." },
            ],
          },
          {
            data: "2026-11-16", titulo: "Segunda, 16/11",
            itens: [
              { id: "a1116-roteiro", resp: ["Letícia"], texto: "Roteiro da semana 3 (presente de fim de ano, última semana do Mês Black)." },
            ],
          },
          {
            data: "2026-11-18", titulo: "Quarta, 18/11",
            itens: [
              { id: "a1118-ferramenta", resp: ["Bea"], hora: "manhã", texto: "Organizar a ferramenta de disparo com o “faltam X itens” para a Letícia enviar." },
              { id: "a1118-faltam", resp: ["Letícia"], texto: "1:1 “faltam X itens” pela ferramenta de disparo para todas que estão até 30% da próxima meta." },
            ],
          },
          {
            data: "2026-11-19", titulo: "Quinta, 19/11", tema: "último dia do Desafio 2",
            itens: [
              { id: "a1119-10h", resp: ["Letícia"], hora: "10h", texto: "Lembrete de último dia do Desafio 2." },
              { id: "a1119-18h", resp: ["Letícia"], hora: "18h", texto: "Lembrete final." },
            ],
          },
          {
            data: "2026-11-20", titulo: "Sexta, 20/11", tema: "abre a Semana Black",
            itens: [
              { id: "a1120-d3", resp: ["Bea"], texto: "Abre o Desafio 3 (a desenhar), sai o Vídeo de Ouro da semana 3 e a parcial do Desafio 2." },
            ],
          },
          {
            data: "2026-11-25", titulo: "Até quarta, 25/11",
            itens: [
              { id: "a1125-apuracao", resp: ["Bea", "Letícia"], texto: "Apuração do Desafio 2: descontar cancelamentos e reembolsos, conferir os 6 vídeos e a autorização de anúncio, fechar as metas e comunicar." },
            ],
          },
          {
            data: "2026-12-10", titulo: "Quinta, 10/12", tema: "pagamento",
            itens: [
              { id: "a1210-pagamento", resp: ["Bea"], texto: "Pagamento do Desafio 2 e do Desafio 3." },
            ],
          },
        ],
      },

      // 05 · KIT DE COMUNICAÇÃO
      kit: {
        intro: "Mensagens prontas para copiar e ajustar. [NOME], [X], [META], [VALOR] e [LINK] são trocados no envio. Nos roteiros, [X]% é o desconto da Black. Os emojis ficam a critério de quem envia.",
        mensagens: [
          {
            id: "M1", canal: "Grupo de avisos", quando: "quinta, 29/10, 11h", titulo: "Reta final do Esquenta",
            texto: "Meninas, faltam 3 dias para fechar o Esquenta Black! Quem já bateu uma meta ainda pode subir para a próxima, e quem está perto ainda dá tempo de entrar. Lembrando: precisa bater as duas metas, de Stick Pés e de Sérum. E fiquem de olho no grupo, porque domingo começa a Fase 2, e ela vai ser diferente.",
          },
          {
            id: "M2", canal: "Privado", quando: "quinta, 29/10", titulo: "Perto da meta",
            texto: "Oi, [NOME]! Passando pra te contar que você está pertinho da meta de R$ [VALOR] no Esquenta: faltam só [X] vídeos de [Stick Pés ou Sérum] até sábado, 31/10. Quer um roteiro pronto pra gravar hoje? Te mando agora.",
          },
          {
            id: "M3", canal: "Privado", quando: "quinta, 29/10", titulo: "Na meta, pode subir",
            texto: "[NOME], você já garantiu a sua meta no Esquenta, parabéns! E dá pra subir: com mais [X] vídeos até sábado você vai para R$ [VALOR]. Bora fechar o Esquenta com tudo?",
          },
          {
            id: "M4", canal: "Grupo de avisos", quando: "sábado, 31/10, 10h", titulo: "Último dia",
            texto: "Último dia do Esquenta Black! Hoje é o dia de gravar o vídeo que ficou pra depois. E fiquem de olho no grupo no fim do dia: tem novidade chegando.",
          },
          {
            id: "M5", canal: "Grupo de avisos", quando: "sábado, 31/10, fim do dia", titulo: "Teaser: preparem-se",
            texto: "Preparem-se! Amanhã, 01/11, bem cedinho, sai o resultado do Esquenta Black. Às 13h abre o Desafio 2, e ele muda o jogo: agora quem vende ganha. Fiquem de olho aqui no grupo!",
          },
          {
            id: "M6", canal: "Grupo de avisos", quando: "domingo, 01/11, cedo", titulo: "Resultado do Esquenta Black",
            texto: "Ato 1 encerrado! Em 16 dias vocês fizeram [X] vídeos de Le Moritz no TikTok. Um aplauso para quem fechou o Esquenta numa meta: [NOMES]. Todo esse conteúdo ensinou o TikTok a mostrar a Le Moritz pra quem tem interesse. Agora essas pessoas estão prontas pra comprar. Às 13h tem novidade aqui no grupo!",
          },
          {
            id: "M7", canal: "Grupo de avisos", quando: "domingo, 01/11, 13h", titulo: "Fase 2 da Black | Desafio 2 liberado",
            texto: "FASE 2 DA BLACK | DESAFIO 2 LIBERADO\n\nComeça hoje o Mês Black (01 a 19/11), e agora o prêmio é por VENDA. Contam os itens vendidos entre 01 e 19/11 pelos vídeos que você postar a partir de hoje e pelas suas lives nesse período (venda de vídeo antigo não conta): 3 itens = R$ 70, 8 = R$ 200, 15 = R$ 400, 30 = R$ 800, 60 = R$ 1.200 e 100 = R$ 1.500. Cada Stick Pés vendido vale 2 itens!\n\nE tem mais: no 11.11, as 5 que mais venderem no dia ganham R$ 200 cada. E toda semana o vídeo que mais vender vira o Vídeo de Ouro: destaque aqui no grupo e prioridade no anúncio pago da Le Moritz.\n\nPra receber: pelo menos 6 vídeos no período, aplicando o produto, e a autorização de anúncio ligada. Por quê? Porque o seu vídeo que vende vira anúncio, e a Le Moritz paga pra ele chegar em mais gente.\n\nA arte do desafio, a mini aula de 5 minutos e o tutorial da autorização estão aqui embaixo. Terça, 03/11, às 21h, tem live tira-dúvidas. Bora vender?",
          },
          {
            id: "M8", canal: "Privado", quando: "domingo, 01/11", titulo: "Boas-vindas ao Desafio 2",
            texto: "[NOME], começou o Mês Black! Sua primeira meta: 3 itens vendidos = R$ 70. Valem os vídeos postados a partir de hoje e as suas lives. Dica de ouro: o vídeo que mais vende na Le Moritz é o de aplicar o sérum em metade do rosto de outra pessoa e mostrar a diferença. E não esquece de ligar a autorização de anúncio, o tutorial está no grupo. Conta comigo!",
          },
          {
            id: "M9", canal: "Grupo de avisos", quando: "segunda, 09/11", titulo: "Relâmpago 11.11",
            texto: "Quarta é 11.11, o maior dia de compras do TikTok antes da Black Friday. E tem RELÂMPAGO: as 5 afiliadas com mais itens vendidos no dia 11/11 ganham R$ 200 cada, além do prêmio por meta. O roteiro da semana é todo pensado pro 11.11. Dica: deixem vídeos prontos pra postar logo cedo, e façam live à noite, que é quando elas compram.",
          },
          {
            id: "M10", canal: "Grupo de avisos", quando: "quarta, 11/11", titulo: "Dia do Relâmpago",
            partes: [
              { rotulo: "9h", texto: "É HOJE! 11.11 no TikTok Shop. Vídeo logo cedo, com o desconto do dia falado e o carrinho laranja no fim. Quem consegue, faz live à noite." },
              { rotulo: "15h", texto: "Metade do dia! Quem ainda não postou, o roteiro está aqui em cima. Um vídeo agora ainda pega o pico da noite." },
              { rotulo: "20h", texto: "Últimas horas do 11.11! Hora da live e do último vídeo com o desconto do dia." },
            ],
          },
          {
            id: "M11", canal: "Privado", quando: "quintas-feiras", titulo: "Proximidade",
            texto: "[NOME], olha só: faltam só [X] itens pra você bater a meta de [META] e garantir R$ [VALOR]! O seu vídeo que mais vendeu foi o [descrever o vídeo]. Que tal gravar mais dois nesse formato hoje? Lembra que cada Stick Pés vale 2 itens.",
          },
          {
            id: "M12", canal: "Grupo de avisos", quando: "segundas-feiras", titulo: "Vídeo de Ouro da semana",
            texto: "VÍDEO DE OURO DA SEMANA: [NOME]! Olha esse vídeo: [LINK]. Repara no começo, [o que o vídeo faz bem nos primeiros segundos]. É esse tipo de vídeo que vende, e ele agora roda como anúncio pago da Le Moritz. Pode se inspirar à vontade! Essa semana, quem leva?",
          },
          {
            id: "M13", canal: "Grupo de avisos", quando: "sextas-feiras", titulo: "Destaques da semana",
            texto: "Fechamento da semana! Destaque pra [NOMES], que [motivo concreto: bateram a primeira meta, testaram um formato novo, fizeram live todo dia]. Semana que vem é a vez de vocês. O roteiro novo sai segunda.",
          },
        ],
        enquetes: [
          { id: "E1", quando: "30/10", pergunta: "Qual produto você mais quer vender na Black?", opcoes: ["Sérum Lifting", "Stick Pés", "Os dois"] },
          { id: "E2", quando: "04/11", pergunta: "Qual prêmio em Pix você vai buscar no Mês Black?", opcoes: ["R$ 70", "R$ 200", "R$ 400", "R$ 800", "R$ 1.200", "R$ 1.500"] },
          { id: "E3", quando: "11/11", pergunta: "Em que horário seus vídeos mais vendem?", opcoes: ["Manhã", "Almoço", "Noite"] },
          { id: "E4", quando: "18/11", pergunta: "O que mais convenceu quem comprou?", opcoes: ["Antes e depois", "Desconto de Black", "Live", "Vídeo com outra pessoa"] },
        ],
        reforco: {
          titulo: "Como fazer o vídeo vender",
          itens: [
            { titulo: "Os 3 primeiros segundos", texto: "Começa pelo resultado: o lado com e o lado sem, o rosto mudando. Apresentação fica para depois." },
            { titulo: "Prova de verdade", texto: "Aplica o produto em você ou em outra pessoa, sem corte no meio da aplicação. Só segurar o produto não conta." },
            { titulo: "Preço e carrinho", texto: "Fala o desconto de Black do dia e termina apontando o carrinho laranja." },
            { titulo: "Live", texto: "Live à noite, com o produto na mão, aplicando ao vivo. Live também conta para a meta." },
            { titulo: "Autorização de anúncio", texto: "Liga a autorização no vídeo assim que postar (tutorial no grupo). Sem ela, o vídeo não pode virar anúncio e não conta para o desafio." },
            { titulo: "Sem violação", texto: "Fala do produto com o nome e as promessas do anúncio. Nada de “botox”, “milagre” ou “cirurgia”, e sem desconto ou promoção que não estejam na loja." },
          ],
        },
        live: {
          titulo: "Pauta da live tira-dúvidas",
          quando: "Terça, 03/11, 21h · 40 minutos",
          itens: [
            { texto: "Abertura e elogios nominais do Esquenta", min: "5 min" },
            { texto: "A virada: do vídeo para a venda, e as metas do Mês Black", min: "10 min" },
            { texto: "Ao vivo: ligando a autorização de anúncio no celular", min: "5 min" },
            { texto: "Os 3 vídeos que mais venderam na Le Moritz, segundo a segundo", min: "10 min" },
            { texto: "Dúvidas da caixinha e do chat", min: "10 min" },
          ],
        },
      },

      // 06 · ROTEIROS SEMANAIS
      roteiros: {
        intro: "Um roteiro base por semana, cada um com duas aberturas. É base, não texto para decorar. Todos terminam com o desconto de Black falado e o carrinho laranja. A diagramação final segue o padrão “Roteiros Validados”.",
        semanas: [
          {
            rotulo: "Semana 1 · 01 a 08/11",
            titulo: "Metade do rosto",
            aberturas: [
              "Olha a diferença entre o lado esquerdo e o direito do rosto da minha mãe.",
              "Passei só de um lado. Adivinha qual?",
            ],
            fala: "Esse é o Sérum Redutor de Linhas da Le Moritz, com efeito lifting temporário. Eu passei só nesse lado [aponta], uma camada fina, e esperei secar. Olha as linhas aqui e aqui [compara os dois lados]. O efeito dura até 8 horas. Na Black ele está com [X]% de desconto, aqui no carrinho laranja.",
            mostrar: "Os dois lados lado a lado, com luz de frente, e a aplicação sem corte.",
            porque: "É o formato que mais vendeu na Le Moritz: a prova aparece nos primeiros segundos, e quem assiste vê o resultado em outra pessoa.",
          },
          {
            rotulo: "Semana 2 · 09 a 15/11",
            titulo: "O que eu compraria no 11.11",
            aberturas: [
              "Se eu só pudesse comprar uma coisa no 11.11, seria isso.",
              "Esse foi o maior desconto que eu já vi desse sérum.",
            ],
            fala: "Eu uso esse sérum há [tempo] e é o que eu levaria no 11.11. Olha o efeito [aplica e mostra]. E hoje, no 11.11, ele está com [X]% de desconto. Se você quer cuidar dos pés também, o Stick Pés está aqui no carrinho. Esse desconto é de Black, então não deixa pra depois.",
            mostrar: "Aplicação rápida, o resultado e o desconto escrito na tela.",
            porque: "Escolha pessoal com prazo concreto. Ela confia na sua indicação, e o 11.11 dá o motivo para comprar hoje.",
          },
          {
            rotulo: "Semana 3 · 16 a 19/11",
            titulo: "O presente que eu daria para a minha mãe",
            aberturas: [
              "Já resolvi o presente de Natal da minha mãe.",
              "Se você não sabe o que dar de presente pra uma mulher de 50 anos, olha isso.",
            ],
            fala: "Eu dei o Sérum Redutor de Linhas pra minha mãe [mostra ela usando] e ela não larga mais. E pra completar, o Stick Pés, porque pé ressecado ninguém merece [mostra a passada]. Os dois juntos são um presente de cuidado de verdade. Na Black estão com [X]% de desconto, aqui no carrinho laranja.",
            mostrar: "Outra pessoa usando os produtos, a reação dela e os dois produtos juntos no fim.",
            porque: "Antecipa o presente de fim de ano e dá ao Stick Pés um motivo de compra junto com o sérum, que já vende.",
          },
        ],
      },

      // 07 · ACOMPANHAMENTO · painel interno, fica fora da página pública.
      acompanhamento: null,
    },
    {
      id: "d3",
      nome: "Semana Black",
      fase: 2,
      resumo: "em construção",
      emConstrucao: "O Desafio 3 ainda está sendo desenhado. A estrutura já está pronta e vai sendo preenchida aos poucos.",
    },
  ],
};
