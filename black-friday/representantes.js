// ===== BLACK FRIDAY · REPRESENTANTES =====
// conteúdo de Black Representantes, separado em desafios (um por fase).
// mesma estrutura de embaixadoras.js: edite aqui pra atualizar regras,
// checklist, mensagens e roteiros, sem mexer no HTML.
//
// - textos aceitam **negrito** e quebra de linha com \n.
// - datas em AAAA-MM-DD.
// - cada item do checklist precisa de um "id" único e fixo: é ele que guarda a
//   marcação no navegador. trocar o id desmarca o item.
// - ATENÇÃO: a página é pública. nada de orçamento, projeção de receita ou
//   venda individual de representante aqui.
// - o Destrave (ativação de quem não vendeu no Esquenta) é só no privado com as
//   representantes: nunca vai para o grupo. aqui ele fica documentado para o time.

window.BLACK_FRIDAY = window.BLACK_FRIDAY || { frentes: {} };

BLACK_FRIDAY.frentes.representantes = {
  nome: "Representantes",
  resumo: "Desafios 1, 2 e 3",
  cor: "var(--representantes-cor)",
  responsaveis: ["Bea", "Vitória"],

  // prêmios que valem para os 3 desafios: aparecem na página de Black Representantes,
  // embaixo dos cards dos desafios.
  premios: {
    titulo: "Prêmios finais",
    periodo: "Já anunciados · período de 16/10 a 27/11",
    itens: [
      { titulo: "Lemorita Black · R$ 1.500", texto: "Para quem mais vendeu no período." },
      { titulo: "Lemorita Prata · R$ 1.000", texto: "Para a segunda maior em vendas no período." },
      { titulo: "Lemorita Bronze · R$ 500", texto: "Para a terceira maior em vendas no período." },
    ],
    ativaIntro: "Concorre quem participou **ativamente das 3 fases**. Como as representantes vendem no 1x1 e não postam, ser ativa é vender:",
    ativa: [
      { fase: "Desafio 1 · Esquenta", texto: "Pelo menos 1 pedido no cupom entre 16 e 31/10." },
      { fase: "Desafio 2 · Mês Black", texto: "Bateu a Estreia (2 pedidos no cupom entre 01 e 19/11)." },
      { fase: "Desafio 3 · Semana Black", texto: "Critério a definir com o desenho do Desafio 3.", pendente: true },
    ],
  },

  // um desafio por fase da Black. "fase" é a posição da fase em visao-geral.js
  // (0 = Esquenta, 1 = Mês Black, 2 = Semana Black); as datas vêm de lá.
  desafios: [
    {
      id: "d1",
      nome: "Esquenta Black",
      fase: 0,
      resumo: "encerra 31/10",
      emConstrucao: "O Desafio 1 vai até 31/10: metas de cupons além da comissão (8 cupons = R$ 100 + 1 produto, 12 = R$ 250 + 2, 20 = R$ 400 + 3, 30 = R$ 700 + 4). O resultado sai no domingo, 01/11, junto com a abertura do Desafio 2.",
    },
    {
      id: "d2",
      nome: "Mês Black",
      fase: 1,

      // 01 · REGRAS E PRÊMIOS
      regras: {
        intro: "No Desafio 2 a escada começa **no alcance de todas**. No Esquenta a primeira meta era 8 cupons; agora são 2. Toda faixa continua pagando **dinheiro + produto**, além da comissão de sempre. O Mês Black (01 a 19/11) é quando a cliente compra: a melhor oferta do ano está no ar e o cupom ainda soma 10% em cima.",
        titulo: "Regras do Desafio 2 · Mês Black · 01 a 19/11",
        tabela: {
          colunas: ["Faixa", "Pedidos no cupom", "Prêmio (além da comissão)"],
          linhas: [
            ["Estreia", "2", "R$ 50 + 1 produto"],
            ["Bronze", "5", "R$ 150 + 1 produto"],
            ["Prata", "10", "R$ 350 + 2 produtos"],
            ["Ouro", "20", "R$ 750 + 3 produtos"],
            ["Black Diamond", "35", "R$ 1.300 + 4 produtos"],
          ],
        },
        itens: [
          { titulo: "Vale a maior faixa batida", texto: "Só contam pedidos aprovados no cupom entre 01 e 19/11, sem cancelamento ou reembolso." },
          { titulo: "Relâmpago 11.11 · R$ 150", texto: "As 5 representantes com mais pedidos no cupom no dia 11/11 ganham R$ 150 cada, além da faixa." },
          { titulo: "Pagamento", texto: "Via Pix em 10/12. Os produtos seguem por envio." },
          { titulo: "Destrave · só no privado", texto: "Bônus de ativação para quem **não vendeu no Esquenta** (16 a 31/10), mesmo que tenha vendido antes. A primeira venda no cupom **até 07/11** vale **1 produto garantido**. Ele soma com as faixas: quem destrava já fica a 1 pedido da Estreia. **Nunca é anunciado no grupo**, para quem já vende não se sentir injustiçada; tudo acontece no 1x1 pela ferramenta de disparo (mensagens **A1 a A5** no Kit)." },
          { titulo: "Como o Destrave conversa com cada uma", texto: "Dois grupos, duas conversas. **Parou, mas já vendeu antes** (A1a): “sua cliente vai querer saber da Black, avisa ela primeiro”. **Nunca vendeu** (A1b): “te ajudo a fazer a primeira venda”. Nos dois casos, a tarefa é pequena e concreta: a **lista de 5** (5 mulheres que cuidam da pele) e a mensagem da semana pronta para mandar." },
          { titulo: "Cadência do Destrave", texto: "**01/11** convite + lista de 5 (A1a ou A1b) · **05/11** “já mandou pras 5?” (A2) para quem não destravou e parabéns (A4) para quem destravou · **07/11** último dia do Destrave (A3) · **09/11** parabéns de quem destravou entre 05 e 07/11 (A4) · **18/11** quem não destravou recebe a A5, puxando para a Estreia." },
        ],
      },

      // 02 · NARRATIVA CENTRAL
      narrativa: {
        intro: "Toda comunicação do Desafio 2 bate em duas teclas:",
        teclas: ["A sua cliente vai comprar na Black: que seja com você", "O seu cupom soma com a Black"],
        porQue: {
          titulo: "1. Por que agora é a hora",
          subtitulo: "A lógica dos desafios, contada para elas.",
          fases: [
            { titulo: "Fase 1 · Esquenta (16 a 31/10) = avisar", texto: "Muita cliente segurou a compra esperando a Black. Quem falou da Le Moritz no Esquenta deixou o produto na cabeça dela." },
            { titulo: "Fase 2 · Mês Black (01 a 19/11) = vender", texto: "Agora tem a melhor oferta do ano no ar, e o cupom de vocês ainda soma mais 10%. É a hora de chamar cada cliente no privado e pedir a venda." },
            { titulo: "Fase 3 · Semana Black (20 a 27/11) = fechar", texto: "Quem ficou em cima do muro decide na Black Friday." },
          ],
          analogia: "**Pensa numa feira:** a cliente já passou pela sua barraca, já experimentou, já perguntou o preço. Na Black é o dia em que ela volta com a sacola. Se você não estiver lá chamando, ela compra na barraca do lado.",
        },
        cupom: {
          titulo: "2. O cupom soma com a Black",
          ancora: "A Black da Le Moritz já está no ar, e com o meu cupom você ainda ganha mais 10% em cima.",
          tabelaIntro: "Como aparece em cada oferta da Black November (30/10 a 22/11):",
          tabela: {
            colunas: ["Oferta do site", "O que a representante fala"],
            linhas: [
              ["Progressivo: 1 produto 10%, 2 produtos 20%, 3 produtos 30%, 4 produtos 40%, 5 produtos 50%", "“Quanto mais produtos no carrinho, maior o desconto, e o meu cupom ainda soma. Quer que eu monte o seu?”"],
              ["Kit Cliente Premium · R$ 297 (creme, rímel, mauve, lifting, sérum olhos)", "“A rotina completa por R$ 297, e com o meu cupom sai ainda mais barato.”"],
              ["Kit Transformação Instantânea · R$ 297 (hidratante, marrom, mauve, lifting, rímel)", "“O kit que muda o rosto na hora, e o meu cupom ainda tira mais 10%.”"],
              ["Flash sale 11.11 (mesmas ofertas, tema novo)", "“Só hoje é 11.11: a Black e o meu cupom juntos.”"],
            ],
          },
          regraDeOuro: "**Regra de ouro do 1x1:** toda mensagem para a cliente leva o cupom escrito e o link. Ela precisa sair da conversa sabendo qual é o cupom e que ele soma com a oferta, sem ter que perguntar.",
        },
      },

      // 03 · LINHA DO TEMPO
      linhaDoTempo: {
        marcos: [
          { data: "2026-10-31", titulo: "Teaser do Desafio 2" },
          { data: "2026-11-01", titulo: "Resultado do Esquenta e Desafio 2 liberado" },
          { data: "2026-11-10", titulo: "Pix do Esquenta" },
          { data: "2026-11-11", titulo: "Relâmpago 11.11" },
          { data: "2026-11-19", titulo: "Último dia do Desafio 2" },
          { data: "2026-11-27", titulo: "Black Friday" },
        ],
        nota: "O Desafio 2 começa um dia depois de as ofertas entrarem no ar e termina três dias antes de a Black November acabar, com o Relâmpago no meio, no 11.11. O pagamento do Esquenta, na véspera do 11.11, reforça a confiança no desafio.",
      },

      // 04 · CHECKLIST DIA A DIA
      // "resp": quem faz (Bea, Vitória). "hora" é opcional. "feito: true" deixa o item
      // marcado por padrão. "secao" abre um novo grupo na lista.
      // dias com "de"/"ate" são rotina: cada item tem "dow" (0 = domingo … 6 = sábado)
      // e ganha um checkbox por semana.
      checklist: {
        intro: "Toda mensagem no 1x1 sai pela ferramenta de disparo (Mensagens 1x1 · /representantes): a Bea organiza a lista e o texto, a Vitória envia. O Destrave (mensagens **A1 a A5**) é só no privado: nunca vai para o grupo.",
        dias: [
          {
            secao: "Virada do Esquenta para o Desafio 2",
            data: "2026-10-29", titulo: "Quinta, 29/10",
            itens: [
              { id: "r1029-listas", resp: ["Bea"], texto: "Puxar da Inbazz as três listas: quem vendeu no Esquenta, quem está parada mas já vendeu antes e quem nunca vendeu." },
              { id: "r1029-aprovar", resp: ["Bea"], texto: "Aprovar as mensagens **R1 a R11** e as mensagens da semana 1." },
            ],
          },
          {
            data: "2026-10-30", titulo: "Sexta, 30/10", tema: "ofertas no ar",
            itens: [
              { id: "r1030-r1", resp: ["Vitória"], hora: "10h", texto: "Mandar a **R1** no grupo das representantes: ofertas da Black no ar e últimos 2 dias do Esquenta." },
              { id: "r1030-ferramenta", resp: ["Bea"], hora: "manhã", texto: "Organizar a ferramenta de disparo com a **R2** para quem está até 4 pedidos da próxima meta do Esquenta, para a Vitória enviar." },
              { id: "r1030-r2", resp: ["Vitória"], hora: "tarde", texto: "Enviar a **R2** 1:1 pela ferramenta de disparo." },
              { id: "r1030-arte", resp: ["Bea"], texto: "Arte do Desafio 2 das representantes em imagem, para o anúncio de domingo, 01/11." },
              { id: "r1030-aula", resp: ["Bea"], texto: "Gravar a mini aula de 5 min explicando o Desafio 2 e mostrando como mandar a mensagem da semana para as clientes." },
              { id: "r1030-canva", resp: ["Bea"], texto: "Desbloquear a página do Desafio 2 na apresentação do Canva das representantes. Alterar a página do Desafio 1 para concluída." },
            ],
          },
          {
            data: "2026-10-31", titulo: "Sábado, 31/10", tema: "último dia do Esquenta",
            itens: [
              { id: "r1031-r3", resp: ["Vitória"], hora: "10h", texto: "**R3** no grupo (último dia)." },
              { id: "r1031-r4", resp: ["Vitória"], hora: "fim do dia", texto: "Teaser **R4** no grupo: só suspense, avisando o resultado e o novo desafio no dia seguinte." },
              { id: "r1031-ferramenta", resp: ["Bea"], texto: "Organizar a ferramenta de disparo com duas listas para domingo: a **R7** (boas-vindas) para quem vendeu no Esquenta e o convite do Destrave para quem não vendeu, separado em dois: **A1a** (parou, mas já vendeu antes) e **A1b** (nunca vendeu)." },
            ],
          },
          {
            data: "2026-11-01", titulo: "Domingo, 01/11", tema: "abre o Desafio 2",
            itens: [
              { id: "r1101-r5", resp: ["Vitória"], hora: "cedo", texto: "**R5** no grupo: resultado do Esquenta Black, com elogio nominal a quem bateu meta e sem números de venda." },
              { id: "r1101-r6", resp: ["Vitória"], hora: "11h", texto: "**R6** no grupo: FASE 2 DA BLACK | DESAFIO 2 LIBERADO, com a arte e a mini aula de 5 min." },
              { id: "r1101-r7", resp: ["Vitória"], hora: "depois das 11h", texto: "Enviar a **R7** (boas-vindas) 1:1 pela ferramenta de disparo para quem vendeu no Esquenta." },
              { id: "r1101-destrave", resp: ["Vitória"], hora: "depois das 11h", texto: "Enviar o convite do Destrave (**A1a** ou **A1b**) 1:1 pela ferramenta de disparo para quem não vendeu no Esquenta." },
            ],
          },
          {
            data: "2026-11-02", titulo: "Segunda, 02/11", tema: "feriado",
            itens: [
              { id: "r1102-feriado", resp: [], texto: "Sem ação. Só responder dúvidas que chegarem no privado." },
            ],
          },
          {
            data: "2026-11-03", titulo: "Terça, 03/11",
            itens: [
              { id: "r1103-e1", resp: ["Vitória"], texto: "Enquete **E1** no grupo." },
              { id: "r1103-plantao", resp: ["Vitória"], hora: "19h às 20h", texto: "Plantão tira-dúvidas no grupo: avisar de manhã e responder ao vivo no horário." },
            ],
          },
          {
            data: "2026-11-04", titulo: "Quarta, 04/11", tema: "Bea em evento",
            itens: [
              { id: "r1104-ferramenta", resp: ["Bea"], hora: "manhã", texto: "Conferir na Inbazz quem já destravou e organizar a ferramenta de disparo com duas listas: **A4** (parabéns) para quem destravou e **A2** (“já mandou pras 5?”) para quem ainda não vendeu, para a Vitória enviar na quinta." },
            ],
          },
          {
            data: "2026-11-05", titulo: "Quinta, 05/11",
            itens: [
              { id: "r1105-destrave2", resp: ["Vitória"], texto: "Enviar a **A4** e a **A2** 1:1 pela ferramenta de disparo." },
            ],
          },
          {
            data: "2026-11-07", titulo: "Sábado, 07/11",
            itens: [
              { id: "r1107-ferramenta", resp: ["Bea"], hora: "manhã", texto: "Organizar a ferramenta de disparo com a **A3** (último dia do Destrave) para quem ainda não vendeu." },
              { id: "r1107-destrave3", resp: ["Vitória"], hora: "tarde", texto: "Enviar a **A3** 1:1 pela ferramenta de disparo." },
            ],
          },
          {
            secao: "Rotina semanal do Desafio 2",
            de: "2026-11-05", ate: "2026-11-19", titulo: "Toda semana", tema: "de 05/11 a 19/11",
            itens: [
              { id: "rr-seg", dow: 1, dia: "Segunda", resp: ["Vitória"], texto: "Mensagem da semana para as clientes no grupo (seção Roteiros semanais), pronta para elas copiarem." },
              { id: "rr-qua", dow: 3, dia: "Quarta", resp: ["Vitória"], texto: "Enquete no grupo." },
              { id: "rr-qua-ferramenta", dow: 3, dia: "Quarta", resp: ["Bea"], texto: "Organizar a ferramenta de disparo com a **R10** para quem está até 3 pedidos da próxima faixa, para a Vitória enviar na quinta." },
              { id: "rr-qui", dow: 4, dia: "Quinta", resp: ["Vitória"], texto: "1:1 de proximidade (**R10**) pela ferramenta de disparo com quem está até 3 pedidos da próxima faixa." },
              { id: "rr-sex", dow: 5, dia: "Sexta", resp: ["Vitória"], texto: "Destaques da semana no grupo (**R11**), com elogio nominal e sem números de venda." },
            ],
          },
          {
            secao: "Datas especiais do Desafio 2",
            data: "2026-11-09", titulo: "Segunda, 09/11",
            itens: [
              { id: "r1109-r8", resp: ["Vitória"], texto: "Mensagem da semana 2 (11.11) e anúncio do Relâmpago (**R8**) no grupo." },
              { id: "r1109-destrave", resp: ["Bea"], hora: "manhã", texto: "Fechar a lista do Destrave: conferir na Inbazz quem fez a primeira venda entre 05 e 07/11 e organizar a ferramenta de disparo com a **A4**." },
              { id: "r1109-a4", resp: ["Vitória"], hora: "tarde", texto: "Enviar a **A4** (parabéns do Destrave) 1:1 pela ferramenta de disparo." },
            ],
          },
          {
            data: "2026-11-10", titulo: "Terça, 10/11", tema: "véspera do 11.11",
            itens: [
              { id: "r1110-pix", resp: ["Bea"], texto: "Pagar o Esquenta via Pix e organizar o envio dos produtos." },
              { id: "r1110-comemora", resp: ["Vitória"], texto: "Comemorar no grupo que os prêmios foram pagos. Isso dá credibilidade ao desafio na véspera do 11.11." },
            ],
          },
          {
            data: "2026-11-11", titulo: "Quarta, 11/11", tema: "Relâmpago 11.11",
            itens: [
              { id: "r1111-9h", resp: ["Vitória"], hora: "9h", texto: "**R9**: abertura do Relâmpago." },
              { id: "r1111-15h", resp: ["Vitória"], hora: "15h", texto: "**R9**: parcial do meio do dia." },
              { id: "r1111-20h", resp: ["Vitória"], hora: "20h", texto: "**R9**: “últimas horas”." },
            ],
          },
          {
            data: "2026-11-13", titulo: "Sexta, 13/11",
            itens: [
              { id: "r1113-apurar", resp: ["Bea", "Vitória"], texto: "Apurar o Relâmpago (o dado pode atrasar 1 dia) e anunciar as 5 vencedoras junto com os destaques da semana." },
            ],
          },
          {
            data: "2026-11-16", titulo: "Segunda, 16/11",
            itens: [
              { id: "r1116-semana3", resp: ["Vitória"], texto: "Mensagem da semana 3 (kits, presente, última semana da Black November)." },
            ],
          },
          {
            data: "2026-11-18", titulo: "Quarta, 18/11",
            itens: [
              { id: "r1118-ferramenta", resp: ["Bea"], hora: "manhã", texto: "Organizar a ferramenta de disparo com duas listas: o “faltam X pedidos” (**R10**) para todas até 30% da próxima faixa e a **A5** para quem ainda não vendeu no Mês Black." },
              { id: "r1118-envio", resp: ["Vitória"], texto: "Enviar as duas listas 1:1 pela ferramenta de disparo." },
            ],
          },
          {
            data: "2026-11-19", titulo: "Quinta, 19/11", tema: "último dia do Desafio 2",
            itens: [
              { id: "r1119-10h", resp: ["Vitória"], hora: "10h", texto: "Lembrete de último dia do Desafio 2 no grupo." },
              { id: "r1119-18h", resp: ["Vitória"], hora: "18h", texto: "Lembrete final do Desafio 2 no grupo." },
            ],
          },
          {
            data: "2026-11-20", titulo: "Sexta, 20/11", tema: "abre a Semana Black",
            itens: [
              { id: "r1120-d3", resp: ["Bea"], texto: "Abre o Desafio 3 (a desenhar) e sai a parcial do Desafio 2." },
            ],
          },
          {
            data: "2026-11-25", titulo: "Até quarta, 25/11",
            itens: [
              { id: "r1125-apuracao", resp: ["Bea", "Vitória"], texto: "Apuração do Desafio 2: descontar cancelamentos e reembolsos, fechar as faixas batidas, conferir a lista final do Destrave e comunicar." },
            ],
          },
          {
            data: "2026-12-10", titulo: "Quinta, 10/12", tema: "pagamento",
            itens: [
              { id: "r1210-pagamento", resp: ["Bea"], texto: "Pagamento do Desafio 2, do Desafio 3 e dos prêmios finais, e envio dos produtos (faixas + Destrave)." },
            ],
          },
        ],
      },

      // 05 · KIT DE COMUNICAÇÃO
      kit: {
        intro: "Mensagens prontas para copiar e ajustar. [NOME], [CUPOM], [X], [FAIXA] e [VALOR] são trocados no envio. Os emojis ficam a critério de quem envia. As mensagens **A1 a A5** são do Destrave: só no privado, nunca no grupo.",
        mensagens: [
          {
            id: "R1", canal: "Grupo das representantes", quando: "sexta, 30/10, 10h", titulo: "Ofertas no ar",
            texto: "Meninas, a Black da Le Moritz entrou no ar hoje! E o cupom de vocês soma mais 10% em cima de todas as ofertas. Ainda temos sábado pra fechar o Esquenta: quem tem cliente que estava esperando a Black, hoje é o dia de chamar no privado.",
          },
          {
            id: "R2", canal: "Privado", quando: "sexta, 30/10", titulo: "Perto da próxima meta do Esquenta",
            texto: "Oi, [NOME]! Você está a só [X] cupons da próxima meta do Esquenta, que vale R$ [VALOR] + produto. Com a Black no ar desde hoje e o seu cupom somando, dá pra fechar até sábado. Quer uma mensagem pronta pra mandar pras suas clientes?",
          },
          {
            id: "R3", canal: "Grupo das representantes", quando: "sábado, 31/10, 10h", titulo: "Último dia do Esquenta",
            texto: "Último dia do Esquenta Black! Hoje vale cada cupom. E fiquem de olho no grupo no fim do dia: tem novidade chegando.",
          },
          {
            id: "R4", canal: "Grupo das representantes", quando: "sábado, 31/10, fim do dia", titulo: "Teaser: preparem-se",
            texto: "Preparem-se! Amanhã, 01/11, bem cedinho, sai o resultado do Esquenta Black. E às 11h, abertura do novo desafio, com metas que começam bem pertinho. Tudo aqui no grupo. Fiquem de olho!",
          },
          {
            id: "R5", canal: "Grupo das representantes", quando: "domingo, 01/11, cedo", titulo: "Resultado do Esquenta Black",
            texto: "Ato 1 encerrado! Um aplauso especial pra [NOMES], que bateram meta no Esquenta Black. E um obrigada pra todas que levaram a Le Moritz pras clientes nesses 16 dias. Agora começa a fase em que a cliente compra. Às 11h tem novidade aqui no grupo!",
          },
          {
            id: "R6", canal: "Grupo das representantes", quando: "domingo, 01/11, 11h", titulo: "Fase 2 da Black | Desafio 2 liberado",
            texto: "FASE 2 DA BLACK | DESAFIO 2 LIBERADO\n\nComeça hoje o Mês Black (01 a 19/11), e agora a primeira meta está no alcance de todas: 2 pedidos no cupom = R$ 50 + 1 produto. Depois vêm 5 pedidos = R$ 150 + 1 produto, 10 = R$ 350 + 2 produtos, 20 = R$ 750 + 3 produtos e 35 pedidos = R$ 1.300 + 4 produtos. Tudo isso além da sua comissão. E no 11.11 tem Relâmpago: as 5 que mais venderem no dia ganham R$ 150 cada.\n\nO desafio completo está na imagem aqui embaixo, e gravei uma mini aula de 5 minutos mostrando como chamar as clientes. Bora?",
          },
          {
            id: "R7", canal: "Privado", quando: "domingo, 01/11", titulo: "Boas-vindas (quem vendeu no Esquenta)",
            texto: "[NOME], começou o Mês Black! Você já mostrou no Esquenta que sabe vender, então a primeira meta vai ser rapidinha: 2 pedidos com o seu cupom [CUPOM] = R$ 50 + 1 produto. Dica de ouro: chama primeiro quem já comprou com você, porque a Black é a hora de repor. Conta comigo pro que precisar!",
          },
          {
            id: "R8", canal: "Grupo das representantes", quando: "segunda, 09/11", titulo: "Relâmpago 11.11",
            texto: "Quarta é 11.11, o dia mais forte de compras online antes da Black Friday. E tem RELÂMPAGO: as 5 representantes com mais pedidos no cupom no dia 11/11 ganham R$ 150 cada, além da faixa do Mês Black. A mensagem da semana é toda pensada pro 11.11. Comecem a avisar as clientes desde já: quarta tem novidade.",
          },
          {
            id: "R9", canal: "Grupo das representantes", quando: "quarta, 11/11", titulo: "Dia do Relâmpago",
            partes: [
              { rotulo: "9h", texto: "É HOJE! 11.11 na Le Moritz: todas as ofertas da Black e o cupom de vocês somando. Manda a mensagem da semana pras clientes logo cedo e posta no status." },
              { rotulo: "15h", texto: "Metade do dia! Quem ainda não chamou as clientes, a mensagem está aqui em cima, é só copiar." },
              { rotulo: "20h", texto: "Últimas horas do 11.11! Uma última mensagem pra quem respondeu e ainda não fechou, agora." },
            ],
          },
          {
            id: "R10", canal: "Privado", quando: "quintas-feiras e 18/11", titulo: "Proximidade",
            texto: "[NOME], olha só: faltam só [X] pedidos pra você chegar na faixa [FAIXA] e garantir R$ [VALOR] + produto! Chama as clientes que responderam e ainda não fecharam, lembrando que o seu cupom soma com a Black. Quer que eu te mande a mensagem pronta?",
          },
          {
            id: "R11", canal: "Grupo das representantes", quando: "sextas-feiras", titulo: "Destaques da semana",
            texto: "Fechamento da semana! Um aplauso pra [NOMES], que [motivo concreto: chegaram na Estreia, subiram de faixa, chamaram cada cliente]. E pra quem fez a primeira venda da Black essa semana: bem-vinda ao jogo! Semana que vem é a vez de vocês.",
          },
          {
            id: "A1a", canal: "Privado · Destrave", quando: "domingo, 01/11, depois das 11h", titulo: "Convite: parou, mas já vendeu antes",
            texto: "Oi, [NOME]! Tenho um convite só pra você. A Black da Le Moritz começou, e as suas clientes vão comprar com desconto de qualquer jeito: melhor que seja com você. Fazendo 1 venda com o seu cupom [CUPOM] até 07/11, você destrava 1 produto Le Moritz de presente, além da comissão. E com 2 vendas você já entra na primeira faixa do desafio. Pensa em 5 clientes que já compraram com você e manda pra elas a mensagem que eu te envio aqui embaixo. Topa?",
          },
          {
            id: "A1b", canal: "Privado · Destrave", quando: "domingo, 01/11, depois das 11h", titulo: "Convite: nunca vendeu",
            texto: "Oi, [NOME]! Tenho um convite só pra você. Fazendo a sua primeira venda com o cupom [CUPOM] até 07/11, você ganha 1 produto Le Moritz de presente, além da comissão. E eu te ajudo: anota 5 mulheres que você conhece que cuidam da pele e manda pra cada uma a mensagem que eu te envio aqui embaixo. Com a Black no ar e o seu cupom somando 10%, é o momento mais fácil do ano pra começar. Me conta quando mandar?",
          },
          {
            id: "A2", canal: "Privado · Destrave", quando: "quinta, 05/11", titulo: "Já mandou pras 5?",
            texto: "[NOME], passando pra saber: conseguiu mandar a mensagem pras suas 5? Se alguém respondeu e ficou em dúvida, me chama que eu te ajudo a fechar. O seu produto de presente está te esperando até sábado, 07/11.",
          },
          {
            id: "A3", canal: "Privado · Destrave", quando: "sábado, 07/11", titulo: "Último dia do Destrave",
            texto: "[NOME], hoje é o último dia pra destravar o seu produto de presente: 1 venda com o cupom [CUPOM] e ele é seu. E quarta tem 11.11, o dia mais forte antes da Black Friday. Quer que eu te mande uma mensagem pronta pra mandar agora?",
          },
          {
            id: "A4", canal: "Privado · Destrave", quando: "quinta, 05/11 e segunda, 09/11", titulo: "Parabéns, você destravou",
            texto: "[NOME], você destravou! Seu produto de presente está garantido. E agora falta só 1 pedido pra você entrar na Estreia: R$ 50 + mais 1 produto. Quem comprou com você tem amiga, irmã, mãe: pede indicação!",
          },
          {
            id: "A5", canal: "Privado", quando: "quarta, 18/11", titulo: "Ainda dá pra entrar na Estreia",
            texto: "[NOME], amanhã é o último dia do Mês Black. Com 2 vendas no seu cupom [CUPOM] você entra na Estreia e ganha R$ 50 + 1 produto. Manda a mensagem da semana pra 5 clientes hoje, que eu torço daqui!",
          },
        ],
        enquetes: [
          { id: "E1", quando: "03/11", pergunta: "Qual oferta da Black as suas clientes mais pedem?", opcoes: ["Progressivo", "Kit Cliente Premium", "Kit Transformação Instantânea"] },
          { id: "E2", quando: "quartas", pergunta: "Qual faixa você vai buscar no Mês Black?", opcoes: ["Estreia", "Bronze", "Prata", "Ouro", "Black Diamond"] },
          { id: "E3", quando: "11/11", pergunta: "Em que horário suas clientes mais respondem?", opcoes: ["Manhã", "Almoço", "Noite"] },
          { id: "E4", quando: "18/11", pergunta: "O que mais convenceu suas clientes?", opcoes: ["O cupom somando", "O preço do kit", "Indicação de quem já usa", "A rotina completa"] },
        ],
        reforco: {
          titulo: "Como vender no 1x1 na Black",
          itens: [
            { titulo: "A lista de 5", texto: "Antes de mandar qualquer coisa, anota 5 mulheres que você conhece que cuidam da pele. É para elas que vai a mensagem da semana. Cinco nomes é concreto; “divulgar” é abstrato." },
            { titulo: "Quem já comprou vem primeiro", texto: "Cliente que já usa a Le Moritz confia no produto. A Black é a hora de repor e de levar o kit." },
            { titulo: "Status do WhatsApp", texto: "Um status por dia com a oferta, o produto na mão e o cupom escrito grande. Quem responder o status já é cliente quente." },
            { titulo: "Cupom e link sempre juntos", texto: "Toda mensagem leva o cupom escrito e o link, para a cliente não precisar perguntar nada." },
            { titulo: "Responder rápido", texto: "Quem pergunta na Black está pronta para comprar. Responder na hora vale mais que qualquer mensagem bonita." },
            { titulo: "Destrave: depois do convite, a mensagem pronta", texto: "Todo convite do Destrave (A1a, A1b) vai seguido da mensagem da semana 1 para as clientes, em outra bolha, pronta para ela encaminhar. Quem responder com dúvida ganha ajuda da Vitória para fechar a primeira venda." },
          ],
        },
        live: null,
        teaser: null,
      },

      // 06 · ROTEIROS SEMANAIS
      // para as representantes, o roteiro é a mensagem da semana que elas mandam
      // para as clientes no privado e no status.
      roteiros: {
        intro: "Uma mensagem base por semana para elas mandarem às clientes no privado e no status, cada uma com duas aberturas. É base, não texto para decorar: elas ajustam para o jeito delas. Todas terminam com o cupom e o link.",
        semanas: [
          {
            rotulo: "Semana 1 · 01 a 08/11",
            titulo: "Montei o seu carrinho da Black",
            aberturas: [
              "Oi, [nome da cliente]! Lembrei de você porque a Black da Le Moritz começou.",
              "Você me perguntou da Le Moritz um tempo atrás, e agora chegou a melhor hora de comprar.",
            ],
            fala: "A Black funciona assim: quanto mais produtos no carrinho, maior o desconto, chegando a 50% com 5 produtos. E com o meu cupom [CUPOM] ainda tem mais 10% em cima. Se quiser, eu monto um carrinho com o que faz sentido pra sua pele e te mando o valor final. Vai até dia 22! [link]",
            mostrar: "Uma foto dos produtos na mão ou um print do carrinho montado com o preço final.",
            porque: "A cliente recebe a conta pronta e uma oferta de ajuda pessoal. Isso pesa mais que uma lista de promoções.",
          },
          {
            rotulo: "Semana 2 · 09 a 15/11",
            titulo: "O que eu levaria no 11.11",
            aberturas: [
              "Amanhã é 11.11 e eu já separei o que eu levaria.",
              "Se você só fosse comprar uma coisa da Le Moritz esse ano, eu diria pra ser no 11.11.",
            ],
            fala: "Minhas três escolhas: o [produto], porque [resultado que você viu], o [produto], pra [uso], e o kit de R$ 297, que é a rotina completa numa caixa só. No 11.11 continuam todas as ofertas da Black, e o meu cupom [CUPOM] soma mais 10%. Quer que eu te ajude a escolher? [link]",
            mostrar: "Foto do produto em uso ou um áudio curto contando a escolha.",
            porque: "Escolha pessoal com motivo pessoal. A cliente confia na sua curadoria, não numa lista de ofertas.",
          },
          {
            rotulo: "Semana 3 · 16 a 19/11",
            titulo: "O presente que resolve",
            aberturas: [
              "Já pensou nos presentes de fim de ano? Tenho uma dica que resolve.",
              "Última semana da Black November e eu preciso te contar desse kit.",
            ],
            fala: "O Kit [Cliente Premium ou Transformação Instantânea] tem [lista os 5 itens]. Por R$ 297 é a rotina completa, e com o meu cupom [CUPOM] sai ainda mais barato. É presente pra mãe, pra amiga, e sinceramente pra você também. A Black November vai até domingo, dia 22. [link]",
            mostrar: "Foto do kit aberto ou de cada produto.",
            porque: "Antecipa a lógica de presente do fim de ano e cria um prazo concreto (dia 22).",
          },
        ],
      },

      // 07 · ACOMPANHAMENTO
      acompanhamento: {
        intro: "O acompanhamento fica num painel interno, só para o time. Aqui ficam o que a gente olha e o que ainda está em aberto.",
        metricas: {
          colunas: ["O que a gente acompanha", "Onde", "Quando"],
          linhas: [
            ["Pedidos no cupom e faixa de cada representante", "Inbazz (grupo representantes)", "Segunda, quarta e sexta"],
            ["Destrave: quem não vendeu no Esquenta e fez a 1ª venda até 07/11", "Inbazz (lista do Esquenta × vendas de novembro)", "04/11, 07/11 e 09/11"],
            ["Ativação: quantas das 144 paradas venderam no Mês Black", "Inbazz", "Toda sexta"],
            ["Quem está até 3 pedidos da próxima faixa", "Inbazz", "Quarta"],
            ["Ranking do dia 11/11", "Inbazz", "13/11"],
            ["Cancelamentos e reembolsos", "Inbazz + Yampi", "Na apuração (até 25/11)"],
          ],
        },
        pontosAbertos: [
          { id: "ra-d3", texto: "Desenhar o Desafio 3 (Semana Black) e o critério de “ativa” dele." },
          { id: "ra-produtos", texto: "Definir quais produtos entram nos prêmios e como é o envio." },
        ],
      },
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
