// ===== BLACK FRIDAY · EMBAIXADORAS =====
// conteúdo de Black Embaixadoras, separado em desafios (um por fase). edite
// aqui pra atualizar regras, checklist, mensagens e roteiros, sem mexer no HTML.
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
  resumo: "Desafios 1, 2 e 3",
  cor: "var(--embaixadoras-cor)",
  responsaveis: ["Bea", "Thau"],

  // prêmios que valem para os 3 desafios: aparecem na página de Black Embaixadoras,
  // embaixo dos cards dos desafios.
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
      { fase: "Desafio 1 · Esquenta", texto: "Pelo menos 5 dias com story **ou** pelo menos 1 reel entre 16 e 31/10." },
      { fase: "Desafio 2 · Mês Black", texto: "Bateu a meta de 3 pedidos ou postou os 2 reels." },
      { fase: "Desafio 3 · Semana Black", texto: "Pelo menos 1 reel **ou** story em pelo menos 3 dias entre 20 e 27/11, marcando @lemoritz_oficial." },
    ],
  },

  // um desafio por fase da Black. "fase" é a posição da fase em visao-geral.js
  // (0 = Esquenta, 1 = Mês Black, 2 = Semana Black); as datas vêm de lá.
  // cada desafio tem os mesmos 7 blocos; bloco ausente mostra o aviso "em breve".
  desafios: [
    {
      id: "d1",
      nome: "Esquenta Black",
      fase: 0,
      resumo: "encerrado",
      resultado: "Encerrado em 31/10: 36 embaixadoras concluíram (story nos 16 dias + 3 reels) e recebem R$ 300; Top 3 em vendas entre quem concluiu. Lista completa, validações manuais e vendas no [relatório do Desafio 1 · embaixadoras](https://bealemoritz.github.io/desafio1-black/).",
    },
    {
      id: "d2",
      nome: "Mês Black",
      fase: 1,
      resultadoTitulo: "Relatório parcial",
      resultado: "Parcial com dados da Inbazz até 19/11, último dia do desafio: quem já bateu cada meta, quem ainda precisa dos 2 reels, quem está perto da próxima meta e o Relâmpago 11.11 no [relatório parcial do Desafio 2 · embaixadoras](https://bealemoritz.github.io/desafio1-black/desafio2/).",
      // mantém a chave de antes da divisão em desafios, pra não perder o que já foi marcado.
      chave: "embaixadoras",

      // 01 · REGRAS E PRÊMIOS
      regras: {
        intro: "No Desafio 2 a gente para de pagar por postagem e passa a pagar por venda. O Esquenta aqueceu a audiência delas; o Mês Black (01 a 19/11) converte, com a melhor oferta do ano e o cupom somando mais 10% em cima.",
        titulo: "Regras do Desafio 2 · Mês Black · 01 a 19/11",
        tabela: {
          colunas: ["Pedidos aprovados no cupom", "Prêmio"],
          linhas: [
            ["3", "R$ 70"],
            ["6", "R$ 200"],
            ["12", "R$ 500"],
            ["25", "R$ 1.000"],
            ["50", "R$ 3.000"],
          ],
        },
        itens: [
          { titulo: "Vale a maior meta batida", texto: "Só contam pedidos aprovados, sem cancelamento ou reembolso." },
          { titulo: "Condição para receber", texto: "Pelo menos **2 reels** no período marcando @lemoritz_oficial, com o cupom na fala e na legenda. Cada reel com **mínimo de 1 min e máximo de 3 min**, e o **produto precisa aparecer**." },
          { titulo: "Relâmpago 11.11", texto: "As 5 embaixadoras com mais pedidos no dia 11/11 ganham R$ 200 cada. Em caso de empate, leva quem tiver mais pedidos no cupom desde o início do Desafio 1 (16/10) até o fim do dia 11/11." },
          { titulo: "Pagamento", texto: "Via Pix em 10/12." },
          { titulo: "Quem participa", texto: "As afiliadas que rodam em Meta Ads ficam só no desafio das afiliadas." },
        ],
      },

      // 02 · NARRATIVA CENTRAL
      narrativa: {
        intro: "Toda comunicação do Desafio 2 bate em duas teclas:",
        teclas: ["A sua seguidora está pronta para comprar", "O seu cupom soma com a Black"],
        porQue: {
          titulo: "1. Por que agora é a hora",
          subtitulo: "A lógica dos desafios, contada para elas.",
          fases: [
            { titulo: "Fase 1 · Esquenta (16 a 31/10) = aquecer", texto: "Vocês apareceram todo dia falando da Le Moritz. A seguidora viu, criou confiança e ficou com o produto na cabeça." },
            { titulo: "Fase 2 · Mês Black (01 a 19/11) = converter", texto: "Agora tem a melhor oferta do ano no ar, e o cupom de vocês ainda soma mais 10%. É o momento de pedir a venda." },
            { titulo: "Fase 3 · Semana Black (20 a 27/11) = fechar", texto: "Quem ficou em cima do muro decide na Black Friday." },
          ],
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
          { data: "2026-10-31", titulo: "Teaser do Desafio 2" },
          { data: "2026-11-01", titulo: "Resultado do Esquenta e Desafio 2 liberado" },
          { data: "2026-11-03", titulo: "Live tira-dúvidas" },
          { data: "2026-11-10", titulo: "Pix do Esquenta" },
          { data: "2026-11-11", titulo: "Relâmpago 11.11" },
          { data: "2026-11-27", titulo: "Black Friday" },
        ],
        nota: "O Desafio 2 começa um dia depois de as ofertas entrarem no ar e termina três dias antes de a Black November acabar, com o Relâmpago no meio, no 11.11. O pagamento do Esquenta, na véspera do 11.11, reforça a confiança no desafio.",
      },

      // 04 · CHECKLIST DIA A DIA
      // "resp": quem faz (Bea, Thau). "hora" é opcional. "feito: true" deixa o item
      // marcado por padrão. "secao" abre um novo grupo na lista.
      // dias com "de"/"ate" são rotina: cada item tem "dow" (0 = domingo … 6 = sábado)
      // e ganha um checkbox por semana.
      checklist: {
        dias: [
          {
            secao: "Virada do Esquenta para o Desafio 2",
            data: "2026-10-27", titulo: "Terça, 27/10", tema: "“ainda dá tempo de entrar na final”",
            itens: [
              { id: "1027-m1", resp: ["Thau"], hora: "11h", feito: true, texto: "Mandar a **M1** no grupo de avisos: quem for ativa no Desafio 1 (5 dias de story ou 1 reel) concorre aos prêmios finais. De 27 a 31/10 são exatamente 5 dias." },
              { id: "1027-disparo", resp: ["Bea"], hora: "tarde", texto: "Disparo 1:1 segmentado pelo painel do Desafio 1: grupo A, “em dia, faltam reels”, recebe a **M2**; grupos “sem stories nem reels” e “fora do prêmio” recebem a **M3**." },
            ],
          },
          {
            data: "2026-10-28", titulo: "Quarta, 28/10",
            itens: [
              { id: "1028-e1", resp: ["Thau"], texto: "Enquete **E1** no grupo de bate-papo." },
              { id: "1028-aprovar", resp: ["Bea"], texto: "Aprovar as mensagens **M4 a M9** e o roteiro da semana 1." },
              { id: "1028-teaser", resp: ["Bea"], texto: "Criar o teaser do Desafio 2 que vai junto com a **M6** no grupo de avisos no fim do dia 31/10." },
              { id: "1028-painel", resp: ["Bea"], texto: "Montar o painel interno do Desafio 2 (pedidos, meta atual, quanto falta para a próxima, reels), só para o time." },
            ],
          },
          {
            data: "2026-10-29", titulo: "Quinta, 29/10",
            itens: [
              { id: "1029-ferramenta", resp: ["Bea"], hora: "manhã", texto: "Organizar a ferramenta de disparo (Mensagens 1x1) com quem está a 1 ou 2 dias de story (ou 1 reel) de virar ativa, para a Thau enviar." },
              { id: "1029-1a1", resp: ["Thau"], texto: "1:1 rápido pela ferramenta de disparo com quem está a 1 ou 2 dias de story (ou 1 reel) de virar ativa, explicando que isso garante a concorrência pelo prêmio final." },
              { id: "1029-imagem", resp: ["Bea"], texto: "Arte do Desafio 2 em imagem, para o anúncio de domingo, 01/11." },
              { id: "1029-aula", resp: ["Bea"], texto: "Gravar a mini aula de 5 min explicando o Desafio 2." },
              { id: "1029-canva", resp: ["Bea"], texto: "Desbloquear a página do Desafio 2 na apresentação do Canva com metas, regras e Relâmpago 11.11. Alterar a página do Desafio 1 para concluída. Acrescentar página com os nomes de quem conseguiu concluir o Desafio 1." },
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
              { id: "1031-suspense", resp: ["Thau"], hora: "fim do dia", texto: "Teaser **M6** no grupo de avisos: só suspense, avisando o resultado e a abertura do novo desafio no dia seguinte. O vídeo do teaser está na [pasta no Drive](https://drive.google.com/drive/folders/1PKKW0jZR1ar6jAgA1hYhCcUpJrd7vpvb?hl=pt-br)." },
              { id: "1031-drive", resp: ["Thau"], texto: "Baixar da [pasta no Drive](https://drive.google.com/drive/folders/1PKKW0jZR1ar6jAgA1hYhCcUpJrd7vpvb?hl=pt-br) a arte do Desafio 2 e a mini aula, para deixar prontas para domingo às 13h." },
              { id: "1031-m7", resp: ["Bea"], texto: "Organizar a ferramenta de disparo com a **M9** (boas-vindas) para a Thau enviar no domingo, depois das 13h." },
            ],
          },
          {
            data: "2026-11-01", titulo: "Domingo, 01/11", tema: "abre o Desafio 2",
            itens: [
              { id: "1101-resultado", resp: ["Thau"], hora: "9h", texto: "**M7** no grupo de avisos: resultado do Esquenta Black." },
              { id: "1101-liberado", resp: ["Thau"], hora: "13h", texto: "Sai o Desafio 2: **arte do desafio + mensagem M8 + mini treinamento** explicando o Desafio 2, no grupo de avisos (FASE 2 DA BLACK | DESAFIO 2 LIBERADO). Arte e aula na [pasta no Drive](https://drive.google.com/drive/folders/1PKKW0jZR1ar6jAgA1hYhCcUpJrd7vpvb?hl=pt-br)." },
              { id: "1101-m7", resp: ["Thau"], hora: "depois das 13h", texto: "Enviar a **M9** (boas-vindas) 1:1 pela ferramenta de disparo." },
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
            secao: "Rotina semanal do Desafio 2",
            de: "2026-11-05", ate: "2026-11-19", titulo: "Toda semana", tema: "de 05/11 a 19/11",
            itens: [
              { id: "rot-seg", dow: 1, dia: "Segunda", resp: ["Thau"], texto: "Roteiro pronto da semana no grupo de avisos." },
              { id: "rot-qua", dow: 3, dia: "Quarta", resp: ["Thau"], texto: "Enquete no grupo de bate-papo." },
              { id: "rot-qua-ferramenta", dow: 3, dia: "Quarta", resp: ["Bea"], texto: "Organizar a ferramenta de disparo com a **M12** para quem está até 3 pedidos da próxima meta, para a Thau enviar na quinta." },
              { id: "rot-qui", dow: 4, dia: "Quinta", resp: ["Thau"], texto: "1:1 de proximidade (**M12**) pela ferramenta de disparo com quem está até 3 pedidos da próxima meta." },
              { id: "rot-sex", dow: 5, dia: "Sexta", resp: ["Thau"], texto: "Destaques da semana e “Indicada da Semana” no grupo (**M13**), com elogio nominal e sem números de venda." },
            ],
          },
          {
            secao: "Datas especiais do Desafio 2",
            data: "2026-11-09", titulo: "Segunda, 09/11",
            itens: [
              { id: "1109-m8", resp: ["Thau"], texto: "Roteiro da semana 2 (11.11) e anúncio do Relâmpago (**M10**)." },
              { id: "1109-lapis", resp: ["Bea", "Thau"], texto: "Organizar o envio dos novos lápis batom para as embaixadoras, que precisam gravar antes do lançamento em 23/11." },
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
              { id: "1111-9h", resp: ["Thau"], hora: "9h", texto: "**M11**: abertura do Relâmpago." },
              { id: "1111-15h", resp: ["Thau"], hora: "15h", texto: "**M11**: parcial do meio do dia." },
              { id: "1111-20h", resp: ["Thau"], hora: "20h", texto: "**M11**: “últimas horas”." },
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
              { id: "1118-ferramenta", resp: ["Bea"], hora: "manhã", texto: "Organizar a ferramenta de disparo com o “faltam X pedidos” para a Thau enviar." },
              { id: "1118-faltam", resp: ["Thau"], texto: "1:1 “faltam X pedidos” pela ferramenta de disparo para todas que estão até 30% da próxima meta." },
            ],
          },
          {
            data: "2026-11-19", titulo: "Quinta, 19/11", tema: "último dia do Desafio 2",
            itens: [
              { id: "1119-10h", resp: ["Thau"], hora: "10h", texto: "Lembrete de último dia do Desafio 2." },
              { id: "1119-18h", resp: ["Thau"], hora: "18h", texto: "Lembrete final do Desafio 2." },
            ],
          },
          {
            data: "2026-11-20", titulo: "Sexta, 20/11", tema: "abre a Semana Black",
            itens: [
              { id: "1120-d3", resp: ["Bea"], texto: "9h: resultado do Mês Black. 13h: abre o Desafio 3 com o vídeo de mini treinamento (checklist completo na aba do Desafio 3)." },
            ],
          },
          {
            data: "2026-11-25", titulo: "Até quarta, 25/11",
            itens: [
              { id: "1125-apuracao", resp: ["Bea", "Thau"], texto: "Apuração do Desafio 2: descontar cancelamentos e reembolsos, conferir os 2 reels, fechar as metas batidas e comunicar." },
            ],
          },
          {
            data: "2026-12-10", titulo: "Quinta, 10/12", tema: "pagamento",
            itens: [
              { id: "1210-pagamento", resp: ["Bea"], texto: "Pagamento do Desafio 2, do Desafio 3 e dos prêmios finais." },
            ],
          },
        ],
      },

      // 05 · KIT DE COMUNICAÇÃO
      kit: {
        intro: "Mensagens prontas para copiar e ajustar. [NOME], [CUPOM], [X], [META] e [VALOR] são trocados no envio. Os emojis ficam a critério de quem envia.",
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
            texto: "Último dia do Esquenta Black! Hoje é o dia de garantir o story que falta, o reel que ficou pra depois. E fiquem de olho no grupo no fim do dia: tem novidade chegando.",
          },
          {
            id: "M6", canal: "Grupo de avisos", quando: "sábado, 31/10, fim do dia", titulo: "Teaser: preparem-se",
            texto: "Preparem-se! Amanhã, 01/11, bem cedinho ([X]h), sai o resultado do Esquenta Black. E às 13h, abertura do novo desafio. Tudo aqui no nosso grupo. Fiquem de olho!",
          },
          {
            id: "M7", canal: "Grupo de avisos", quando: "domingo, 01/11, 9h", titulo: "Resultado do Esquenta Black",
            texto: "Ato 1 encerrado, e que ato! Em 16 dias vocês fizeram 1.504 stories e 233 reels falando da Le Moritz.\n\nUm aplauso especial pras 36 que não faltaram um dia sequer e postaram os 3 reels. Concluíram o Desafio 1 e garantiram os R$ 300:\n\n• Cátia Costa (@catiafly)\n• Cláudia Vertuan (@claudiacasemiroorganiza)\n• Daiana Santana (@dyf.daiana)\n• Deborah Camargo (@dra.deborahcamargo)\n• Edna Lins (@ednalins100_)\n• Elaine Alberico (@elainealberico)\n• Elianay Barbosa (@elianaypereira1)\n• Gabriela Almeida (@casadagabematos)\n• Gabriela Issa (@gabriela.dermatologista)\n• Gisela Salles (@giselasalles)\n• Gisele Pelógia (@giroporaii)\n• Irenete Freire (@irenete.oliveira)\n• Isabella Vargas (@isabellavargas_73)\n• Kelly Martins (@soukellymartins)\n• Kelly Ribeiro (@eukekecris)\n• Luci Gomes (@luqueyrozz)\n• Lucia Albers (@luciaalbersd)\n• Marcia Bruno (@almanaquedamulher)\n• Maria Ardigó (@fafaardigo)\n• Marilza Lopes (@cinquentaenfrente)\n• Marla Oliveira (@marlaariani)\n• Miriam Coelho (@miriamomesquita)\n• Munyck Carneiro (@munyckcarneiro)\n• Patrícia Campos (@patricialcampos)\n• Regina Gonçales (@reginahlg)\n• Ruth Rocha (@ruth_efamilia)\n• Simone Alves (@simoneproenza2)\n• Suzana Agibert (@suzanarosner)\n• Taís Leme (@taispaesleme)\n• Thais Abbês (@thaisneder)\n• Thais Mathias (@thaismathiass)\n• Thaisa Lima (@thaisalimagb)\n• Thelma Miranda (@thelmaflorencecomestilo)\n• Vanderlene Moraes (@belleimagebiju)\n• Vivian Maciel (@vivianmaciel_)\n• Viviane Carmo (@vivi_grisalha_)\n\nE o Top 3 em vendas do Esquenta, entre quem concluiu o desafio:\n1º Marcia Bruno (R$ 1.000)\n2º Taís Leme (R$ 700)\n3º Thelma Miranda (R$ 500)\n\nOs prêmios são pagos no dia 10/11. E quem foi ativa no Esquenta (pelo menos 5 dias de story ou 1 reel) segue na disputa pelos prêmios finais.\n\nAs seguidoras de vocês viram a marca todos os dias, criaram confiança, e agora estão prontas pra comprar. Às 13h a gente divulga aqui no grupo o Desafio 2, o Mês Black. Fiquem de olho!",
          },
          {
            id: "M8", canal: "Grupo de avisos", quando: "domingo, 01/11, 13h", titulo: "Fase 2 da Black | Desafio 2 liberado",
            texto: "FASE 2 DA BLACK | DESAFIO 2 LIBERADO\n\nComeça hoje o Mês Black (01 a 19/11), e agora o prêmio é por venda: 3 pedidos no cupom = R$ 70, 6 = R$ 200, 12 = R$ 500, 25 = R$ 1.000 e 50 pedidos = R$ 3.000. Pra receber, basta ter 2 reels no período marcando a @lemoritz_oficial, com o cupom na fala e na legenda. E no 11.11 tem Relâmpago: as 5 que mais venderem no dia ganham R$ 200 cada.\n\nO desafio completo está na imagem aqui embaixo, e gravei uma mini aula de 5 minutos explicando tudo. Terça, 03/11, tem live tira-dúvidas comigo, e o horário eu aviso aqui no grupo no próprio dia. Bora?",
          },
          {
            id: "M9", canal: "Privado", quando: "domingo, 01/11", titulo: "Boas-vindas ao Desafio 2",
            texto: "[NOME], começou o Mês Black! Sua primeira meta: 3 pedidos com o seu cupom [CUPOM] = R$ 70. Dica de ouro: em todo story, fala que o seu cupom soma mais 10% com a Black e deixa ele escrito grande na tela. Na live de terça, 03/11, a gente mostra tudo isso na prática. Conta comigo pro que precisar!",
          },
          {
            id: "M10", canal: "Grupo de avisos", quando: "segunda, 09/11", titulo: "Relâmpago 11.11",
            texto: "Quarta é 11.11, o dia mais forte de compras online antes da Black Friday. E tem RELÂMPAGO: as 5 embaixadoras com mais pedidos no cupom no dia 11/11 ganham R$ 200 cada, além do prêmio por meta do Mês Black. Empatou? Leva quem vendeu mais desde o Desafio 1 até o fim do dia 11/11. O roteiro da semana é todo pensado pro 11.11. Comecem a avisar as seguidoras desde já: quarta tem novidade.",
          },
          {
            id: "M11", canal: "Grupo de avisos", quando: "quarta, 11/11", titulo: "Dia do Relâmpago",
            partes: [
              { rotulo: "9h", texto: "É HOJE! 11.11 na Le Moritz: todas as ofertas da Black e o cupom de vocês somando. Story logo cedo, de novo na hora do almoço e de noite, que é quando elas compram." },
              { rotulo: "15h", texto: "Metade do dia! Quem ainda não postou, o roteiro está aqui em cima." },
              { rotulo: "20h", texto: "Últimas horas do 11.11! Último story com a oferta e o cupom, agora." },
            ],
          },
          {
            id: "M12", canal: "Privado", quando: "quintas-feiras", titulo: "Proximidade",
            texto: "[NOME], olha só: faltam só [X] pedidos pra você bater a meta de [META] pedidos e garantir R$ [VALOR]! Uma sequência de stories lembrando que o seu cupom soma com a Black costuma resolver. Quer que eu te mande um roteiro?",
          },
          {
            id: "M13", canal: "Grupo de avisos", quando: "sextas-feiras", titulo: "Destaques e Indicada da Semana",
            texto: "Fechamento da semana! A Indicada da Semana é a [NOME], que [motivo concreto: bateu a meta de 12 pedidos, fez o reel que mais vendeu, respondeu cada seguidora]. Um aplauso também pra [NOMES], que mandaram muito bem essa semana. Semana que vem é a vez de vocês.",
          },
        ],
        enquetes: [
          { id: "E1", quando: "28/10", pergunta: "Qual oferta da Black você mais quer mostrar?", opcoes: ["Progressivo", "Kit Cliente Premium", "Kit Transformação Instantânea"] },
          { id: "E2", quando: "04/11", pergunta: "Qual prêmio em Pix você vai buscar no Mês Black?", opcoes: ["R$ 70", "R$ 200", "R$ 500", "R$ 1.000", "R$ 3.000"] },
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
            { texto: "Regras do Mês Black, metas, os 2 reels e o Relâmpago 11.11", min: "10 min" },
            { texto: "Ao vivo: gravando uma sequência de stories com a oferta e o cupom", min: "10 min" },
            { texto: "Dúvidas da caixinha e do chat", min: "10 min" },
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

      // 07 · ACOMPANHAMENTO · a definir
      acompanhamento: null,
    },
    {
      id: "d3",
      nome: "Semana Black",
      fase: 2,

      // 01 · REGRAS E PRÊMIOS
      regras: {
        intro: "No Desafio 3 a criação de conteúdo volta para o centro: quem cumpre a missão de conteúdo já garante prêmio, e a venda entra como bônus em cima. É só 1 semana (20 a 27/11), com a Black Week e a Black Friday no meio, então quem chegar nas faixas de venda merece muito.",
        titulo: "Regras do Desafio 3 · Semana Black · 20 a 27/11",
        tabela: {
          colunas: ["O que fazer", "Prêmio"],
          linhas: [
            ["**Missão de conteúdo:** 1 reel + story em pelo menos 5 dos 8 dias", "R$ 100"],
            ["Missão + 3 pedidos aprovados no cupom", "+ R$ 100"],
            ["Missão + 6 pedidos", "+ R$ 300"],
            ["Missão + 10 pedidos", "+ R$ 500"],
            ["Missão + 20 pedidos", "+ R$ 1.000"],
          ],
        },
        itens: [
          { titulo: "Missão de conteúdo · reel", texto: "**1 reel** entre 20 e 27/11, **com você aparecendo e falando** do produto, o cupom na fala e na legenda, **mínimo de 1 min e máximo de 3 min**, e o **produto precisa aparecer**." },
          { titulo: "Missão de conteúdo · stories", texto: "Story em **pelo menos 5 dos 8 dias** (não precisa ser todo dia), marcando @lemoritz_oficial. Para o dia contar, o story precisa ter **você aparecendo e falando** do produto ou da oferta, com o cupom. Só foto do produto, foto isolada ou repost não contam." },
          { titulo: "Conteúdo de verdade", texto: "A missão premia criação de conteúdo. O time confere os reels e os stories, e conteúdo que não segue as regras acima não conta para a missão." },
          { titulo: "Marcação: sem ela, não conta", texto: "**No story:** marcar @lemoritz_oficial no próprio story. **No reel:** usar o **Marcar pessoas** na hora de publicar e marcar @lemoritz_oficial. Escrever @lemoritz_oficial só na legenda é menção, não marcação, e a Inbazz não registra. Vale o que a Inbazz registrar." },
          { titulo: "Bônus de venda", texto: "Só para quem cumpriu a missão de conteúdo. Vale a **maior faixa batida**, sem somar as faixas. Contam pedidos aprovados no cupom de 20 a 27/11, sem cancelamento ou reembolso. Quem bate 20 pedidos recebe R$ 1.100 no total (R$ 100 da missão + R$ 1.000)." },
          { titulo: "Pagamento", texto: "Via Pix em 10/12, junto com o Desafio 2 e os prêmios finais." },
          { titulo: "Quem participa", texto: "As embaixadoras da lista do Esquenta (relatório do Desafio 1). Afiliadas do TikTok Shop participam só do desafio das afiliadas, para não duplicar." },
        ],
      },

      // 02 · NARRATIVA CENTRAL
      narrativa: {
        intro: "Toda comunicação do Desafio 3 bate em duas teclas:",
        teclas: ["É a melhor época do ano: tá todo mundo esperando pela Semana Black e pronto pra comprar", "É a reta final: quem estava em cima do muro decide agora"],
        porQue: {
          titulo: "Por que agora é a hora",
          subtitulo: "A lógica dos desafios, contada para elas.",
          fases: [
            { titulo: "Fase 1 · Esquenta (16 a 31/10) = aquecer", texto: "Vocês apareceram todo dia e a seguidora criou confiança." },
            { titulo: "Fase 2 · Mês Black (01 a 19/11) = converter", texto: "A melhor oferta do ano no ar e o cupom somando mais 10%." },
            { titulo: "Fase 3 · Semana Black (20 a 27/11) = fechar", texto: "Quem ficou em cima do muro decide na Black Friday. O conteúdo de vocês é o empurrão que falta." },
          ],
        },
      },

      // 03 · LINHA DO TEMPO
      linhaDoTempo: {
        marcos: [
          { data: "2026-11-19", titulo: "Teaser: resultado e novo desafio" },
          { data: "2026-11-20", titulo: "Resultado do Mês Black (9h) e Desafio 3 liberado (13h)" },
          { data: "2026-11-23", titulo: "Começa a Black Week" },
          { data: "2026-11-27", titulo: "Black Friday e último dia do Desafio 3" },
          { data: "2026-12-10", titulo: "Pix do Desafio 2, do Desafio 3 e dos prêmios finais" },
        ],
        nota: "O Desafio 3 começa no dia seguinte ao fim do Mês Black e cobre o último fim de semana da Black November (até 22/11), a Black Week (23 a 27/11) e a Black Friday.",
      },

      // 04 · CHECKLIST DIA A DIA
      checklist: {
        dias: [
          {
            secao: "Preparação",
            data: "2026-11-19", titulo: "Quinta, 19/11", tema: "véspera do Desafio 3",
            itens: [
              { id: "d3-1119-arte", resp: ["Bea"], texto: "Arte do Desafio 3 com as regras, as faixas e o reforço da marcação (story marcando, reel com **Marcar pessoas**) e a exigência de aparecer falando." },
              { id: "d3-1119-video", resp: ["Bea"], texto: "Gravar o vídeo de mini treinamento do Desafio 3 (missão, aparecer falando, marcação e bônus de venda)." },
              { id: "d3-1119-canva", resp: ["Thau"], texto: "Organizar a apresentação no Canva do Desafio 3 com a missão de conteúdo, as metas de bônus e as regras." },
              { id: "d3-1119-aprovar", resp: ["Bea"], texto: "Aprovar as mensagens **M14 a M22** e o roteiro do reel da semana." },
              { id: "d3-1119-teaser", resp: ["Thau"], hora: "fim do dia", texto: "**M14** no grupo de avisos: teaser com o horário do resultado e da abertura do novo desafio." },
              { id: "d3-1119-final", resp: ["Bea"], hora: "00h01", texto: "Puxar o relatório final do Mês Black e montar a **M15** com os nomes." },
            ],
          },
          {
            secao: "Semana do Desafio 3",
            data: "2026-11-20", titulo: "Sexta, 20/11", tema: "resultado do Mês Black e abre o Desafio 3",
            itens: [
              { id: "d3-1120-m15", resp: ["Thau"], hora: "9h", texto: "**M15** no grupo de avisos: resultado do Mês Black." },
              { id: "d3-1120-m14", resp: ["Thau"], hora: "13h", texto: "Sai o Desafio 3: **arte do desafio + mensagem M16 + vídeo de mini treinamento**, no grupo de avisos (FASE 3 DA BLACK | DESAFIO 3 LIBERADO)." },
              { id: "d3-1120-ferramenta", resp: ["Bea"], texto: "Organizar a ferramenta de disparo com a **M17** (boas-vindas), para todas da lista." },
              { id: "d3-1120-m15b", resp: ["Thau"], hora: "depois das 13h", texto: "Enviar a **M17** 1:1 pela ferramenta de disparo." },
            ],
          },
          {
            data: "2026-11-23", titulo: "Segunda, 23/11", tema: "começa a Black Week",
            itens: [
              { id: "d3-1120-roteiro", resp: ["Thau"], hora: "10h", texto: "Mandar o roteiro do reel da semana no grupo de avisos, logo antes da **M19**." },
              { id: "d3-1123-m17", resp: ["Thau"], hora: "10h", texto: "**M19** no grupo de avisos: começou a Black Week." },
              { id: "d3-1123-e5", resp: ["Thau"], texto: "Enquete **E5**." },
              { id: "d3-1123-parcial", resp: ["Bea"], texto: "Parcial na Inbazz: quem já tem reel, quantos dias de story e quantos pedidos. Conferir se tem reel com menção na legenda em vez de marcação, e avisar no privado." },
            ],
          },
          {
            data: "2026-11-24", titulo: "Terça, 24/11",
            itens: [
              { id: "d3-1124-ferramenta", resp: ["Bea"], texto: "Organizar a ferramenta de disparo com a **M20**: versão “missão” para quem ainda não tem o reel ou está com poucos dias de story, versão “bônus” para quem cumpriu ou vai cumprir a missão e está perto de uma faixa." },
            ],
          },
          {
            data: "2026-11-25", titulo: "Quarta, 25/11",
            itens: [
              { id: "d3-1125-m18", resp: ["Thau"], texto: "Enviar a **M20** 1:1 pela ferramenta de disparo. Quarta é o último dia para quem tem só 2 dias de story ainda chegar a 5." },
            ],
          },
          {
            data: "2026-11-26", titulo: "Quinta, 26/11", tema: "véspera da Black Friday",
            itens: [
              { id: "d3-1126-m19", resp: ["Thau"], hora: "10h", texto: "**M21** no grupo de avisos: amanhã é Black Friday." },
              { id: "d3-1126-destaques", resp: ["Thau"], hora: "tarde", texto: "Destaques da semana no grupo (mesmo formato da **M13**): elogio nominal a quem já cumpriu a missão, sem números de venda." },
            ],
          },
          {
            data: "2026-11-27", titulo: "Sexta, 27/11", tema: "Black Friday · último dia",
            itens: [
              { id: "d3-1127-9h", resp: ["Thau"], hora: "9h", texto: "**M22**: é hoje." },
              { id: "d3-1127-15h", resp: ["Thau"], hora: "15h", texto: "**M22**: metade do dia." },
              { id: "d3-1127-20h", resp: ["Thau"], hora: "20h", texto: "**M22**: últimas horas e conferir a marcação." },
            ],
          },
          {
            secao: "Fechamento",
            data: "2026-12-02", titulo: "Até quarta, 02/12",
            itens: [
              { id: "d3-1202-apuracao", resp: ["Bea", "Thau"], texto: "Apuração do Desafio 3: missão (reel + 5 dias de story, conferindo se ela aparece falando), pedidos sem cancelamento ou reembolso, faixa de cada uma." },
              { id: "d3-1202-ativas", resp: ["Bea"], texto: "Fechar quem foi ativa nas 3 fases e apurar os prêmios finais (Lemorita Black, Presença Black e Alcance Black)." },
              { id: "d3-1202-resultado", resp: ["Thau"], texto: "Mensagem de resultado do Desafio 3 e dos prêmios finais no grupo de avisos, com nomes e sem números de venda." },
            ],
          },
          {
            data: "2026-12-10", titulo: "Quinta, 10/12", tema: "pagamento",
            itens: [
              { id: "d3-1210-pix", resp: ["Bea"], texto: "Pix do Desafio 3 (junto com o Desafio 2 e os prêmios finais)." },
            ],
          },
        ],
      },

      // 05 · KIT DE COMUNICAÇÃO
      kit: {
        intro: "Mensagens prontas para copiar e ajustar. [NOME], [CUPOM], [X] e [VALOR] são trocados no envio. Os emojis ficam a critério de quem envia. Toda mensagem reforça a marcação.",
        mensagens: [
          {
            id: "M14", canal: "Grupo de avisos", quando: "quinta, 19/11, fim do dia", titulo: "Teaser: preparem-se",
            texto: "Acabou o Mês Black, e amanhã tem dois momentos aqui no grupo! Às 9h sai o resultado do Desafio 2. E às 13h abre o Desafio 3, a reta final do Black November Awards. Não vou contar nada ainda, mas dessa vez vai ser diferente. Fiquem de olho!",
          },
          {
            id: "M15", canal: "Grupo de avisos", quando: "sexta, 20/11, 9h", titulo: "Resultado do Mês Black",
            texto: "Ato 2 encerrado! No Mês Black vocês fizeram [X] reels e [X] stories falando da Le Moritz, e [X] embaixadoras bateram meta.\n\nUm aplauso pra quem bateu meta e postou os 2 reels:\n\n[NOMES, com @, por ordem alfabética]\n\nE pras 5 do Relâmpago 11.11, que ganharam R$ 200 cada:\n\n[NOMES]\n\nA lista final é confirmada depois da conferência de cancelamentos e reembolsos, e os prêmios são pagos no dia 10/12.\n\nÀs 13h abre aqui no grupo o Desafio 3, a Semana Black. É a última fase, e vale muito a pena. Fiquem de olho!",
          },
          {
            id: "M16", canal: "Grupo de avisos", quando: "sexta, 20/11, 13h", titulo: "Fase 3 da Black | Desafio 3 liberado",
            texto: "FASE 3 DA BLACK | DESAFIO 3 LIBERADO\n\nComeça hoje a Semana Black (20 a 27/11), a reta final do Black November Awards. E dessa vez o desafio é criar e vender.\n\n1. Missão de conteúdo = R$ 100: 1 reel na semana + story em pelo menos 5 dos 8 dias, marcando a @lemoritz_oficial. No reel e nos stories, vale você aparecendo e falando: só foto do produto não conta.\n2. Bônus de venda, pra quem cumprir a missão: 3 pedidos no cupom = + R$ 100, 6 = + R$ 300, 10 = + R$ 500 e 20 = + R$ 1.000.\n\nAtenção à marcação, porque sem ela não conta: no story, marquem a @lemoritz_oficial. No reel, usem o “Marcar pessoas” na hora de publicar. Escrever @lemoritz_oficial só na legenda não vale, o sistema não registra.\n\nE quem postar pelo menos 1 reel ou story em 3 dias segue na disputa pelos prêmios finais. O desafio completo está na imagem aqui embaixo, e gravei um vídeo curtinho explicando tudo. Bora fechar a Black?",
          },
          {
            id: "M17", canal: "Privado", quando: "sexta, 20/11, depois das 13h", titulo: "Boas-vindas ao Desafio 3",
            texto: "[NOME], começou a Semana Black! São 8 dias e a missão é: 1 reel + story em 5 dias, marcando a @lemoritz_oficial e com você aparecendo e falando = R$ 100. E se vender 3 pedidos no seu cupom [CUPOM], ganha mais R$ 100 em cima. Uma dica importante: no reel, marca a gente pelo “Marcar pessoas”, não só na legenda, senão não conta. Quer um roteiro pra gravar o seu?",
          },
          {
            id: "M18", canal: "Grupo de avisos", quando: "domingo, 22/11, 10h", titulo: "Último dia da Black November",
            texto: "Hoje é o último dia da Black November! Ótimo dia pra um story com as ofertas e o cupom de vocês. Lembrando que cada dia com story marcando a @lemoritz_oficial, com você aparecendo e falando, conta pra missão: são 5 dias de 8, e a semana já está andando.",
          },
          {
            id: "M19", canal: "Grupo de avisos", quando: "segunda, 23/11, 10h", titulo: "Começou a Black Week",
            texto: "Começou a Black Week! Até sexta, a seguidora que ficou em cima do muro vai decidir, e o conteúdo de vocês é o empurrão que falta. Quem ainda não postou o reel da semana, o roteiro está aqui em cima. E confiram a marcação: reel com “Marcar pessoas”, story marcando a @lemoritz_oficial.",
          },
          {
            id: "M20", canal: "Privado", quando: "quarta, 25/11", titulo: "Proximidade",
            partes: [
              { rotulo: "Missão", texto: "[NOME], passando pra te lembrar: falta [o reel / X dias de story] pra você garantir os R$ 100 da missão do Desafio 3. Dá tempo até sexta, 27/11, dia da Black Friday! Quer que eu te mande o roteiro do reel?" },
              { rotulo: "Bônus", texto: "[NOME], olha só: faltam só [X] pedidos pra você ganhar mais R$ [VALOR] no Desafio 3! A Black Friday é sexta, e um story lembrando que o seu cupom [CUPOM] vale até lá costuma resolver. Bora?" },
            ],
          },
          {
            id: "M21", canal: "Grupo de avisos", quando: "quinta, 26/11, 10h", titulo: "Véspera da Black Friday",
            texto: "Amanhã é Black Friday e o último dia do Desafio 3! Hoje é dia de avisar as seguidoras: amanhã é a última chance da Black, e o cupom de vocês vale. Quem ainda não fechou os 5 dias de story, hoje e amanhã contam. E quem ainda não postou o reel, dá tempo!",
          },
          {
            id: "M22", canal: "Grupo de avisos", quando: "sexta, 27/11", titulo: "Black Friday · último dia",
            partes: [
              { rotulo: "9h", texto: "É HOJE! Black Friday e último dia do Desafio 3. Story logo cedo, de novo na hora do almoço e de noite, que é quando elas compram. Cupom falado, escrito na tela e a @lemoritz_oficial marcada." },
              { rotulo: "15h", texto: "Metade do dia! Quem ainda precisa de story ou do reel pra fechar a missão, é agora." },
              { rotulo: "20h", texto: "Últimas horas do Desafio 3! Último story com a oferta e o cupom. E confiram: o reel está com a gente marcada pelo “Marcar pessoas”? Menção só na legenda não conta." },
            ],
          },
        ],
        enquetes: [
          { id: "E5", quando: "23/11", pergunta: "Qual vai ser o assunto do seu reel da Semana Black?", opcoes: ["Kit da Black", "Antes e depois", "Minha rotina", "Presente de fim de ano"] },
        ],
        reforco: {
          titulo: "Como marcar para contar",
          itens: [
            { titulo: "Story", texto: "Marcar @lemoritz_oficial no próprio story, com você aparecendo e falando do produto ou da oferta. Cupom falado e escrito na tela. Só foto do produto não conta." },
            { titulo: "Reel", texto: "Na hora de publicar, tocar em **Marcar pessoas** e marcar @lemoritz_oficial. Cupom falado e repetido na legenda. Escrever @lemoritz_oficial só na legenda é menção, e a Inbazz não registra." },
            { titulo: "Identificação de publicidade", texto: "Seguir a orientação dos treinamentos em todos os posts." },
          ],
        },
      },

      // 06 · ROTEIROS
      roteiros: {
        intro: "Um roteiro base para o reel da semana, com duas aberturas. É base, não texto para decorar. Termina com o cupom falado e escrito na tela.",
        semanas: [
          {
            rotulo: "Semana Black · 20 a 27/11",
            titulo: "O que eu não deixaria passar nessa Black",
            aberturas: [
              "Se você ficou na dúvida o mês inteiro, esse é o sinal.",
              "Última chance da Black, e eu vou te falar o que eu levaria.",
            ],
            fala: "Eu uso a Le Moritz há [tempo] e, se eu fosse escolher só uma coisa nessa Black, seria o [produto], porque [resultado que você viu em você]. [Mostra o produto em uso.] A Black vai até sexta, dia 27, e com o meu cupom [CUPOM] você ainda ganha mais 10%. Depois disso, só ano que vem.",
            mostrar: "O produto na mão e em uso, e o cupom escrito na tela a partir do momento em que fala dele.",
            porque: "Fala com quem ficou em cima do muro e dá um prazo concreto (27/11).",
          },
        ],
      },

      // 07 · ACOMPANHAMENTO · a definir
      acompanhamento: null,
    },
  ],
};
