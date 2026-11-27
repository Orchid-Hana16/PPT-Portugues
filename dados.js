/* =====================================================================
   dados.js — TODO o conteúdo editável da Biblioteca Rubem Braga.
   Edite só este arquivo para trocar textos e imagens; a lógica e as
   animações ficam em index.html.

   • Campo vazio ("" ou []) => a página mostra um aviso "a preencher".
   • texto: lista de parágrafos  ->  ["Parágrafo 1", "Parágrafo 2"]
   • imagem: { src: "assets/img/arquivo.jpg", legenda: "..." }
       src vazio => mostra espaço reservado; imagem: null => sem imagem.
   • Pode ter quantas páginas quiser em "paginas" de cada tópico.
   • "cor" é a cor da lombada e da capa do livro na estante
     (transição verde → azul, da esquerda para a direita).
   • Sinopses: parágrafos separados por uma linha em branco.
   ===================================================================== */
   window.BIBLIOTECA = {
    site: {
      marca: "Biblioteca Rubem Braga",
      nome: "Rubem Braga",
      chamada: "Escolha um livro na estante.",
      dica: "passe o cursor sobre uma lombada · clique para abrir",
      dicaToque: "toque em uma lombada para abrir"
    },
  
    /* ---------- 1) Estante: nove livros = nove tópicos ---------- */
    topicos: [
      { titulo: "Contexto histórico", subtitulo: "", cor: "#34472f", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "Sobre o autor", subtitulo: "", cor: "#4c6141", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "Características do autor", subtitulo: "", cor: "#66765a", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "Resumo da crônica", subtitulo: "", cor: "#5a7566", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "A crônica", subtitulo: "", cor: "#4f7573", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "Da obra (P.e.n.t.e)", subtitulo: "", cor: "#3f6a73", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "Análise das características do autor na crônica", subtitulo: "", cor: "#3a5f7d", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "Tema narrado na crônica e relação com os temas que o autor retrata", subtitulo: "", cor: "#2f4a6d", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "Crítica da crônica", subtitulo: "", cor: "#26385a", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] }
    ],
  
    /* ---------- 2) Fresh ink — sete livros de Rubem Braga ---------- */
    freshInk: {
      titulo: "Fresh ink,",
      destaque: "sete livros de Rubem Braga.",
      intro: "",
      livros: [
        { titulo: "O Conde e o Passarinho", autor: "Rubem Braga", capa: "c01.jpg", cor: "#6b7a52", sinopse: `Em "O conde e o passarinho", livro de estreia de Rubem Braga, já se encontra presente um dos traços mais vivos da personalidade do cronista: sua firme inquietude.
  
  Faz-se necessário também destacar a variada procedência dos textos coligidos no volume: Rio de Janeiro, São Paulo, Recife e Bahia. Nos instantes de maturação de sua escrita, Rubem Braga indicia com sua trajetória nômade sua disposição a nunca se acomodar e, ao invés disso, a se lançar constantemente em novos postos para observar e narrar o que ocorre à sua volta.
  
  Um menino nascer com o coração fora do corpo em São Paulo, a revolta de uma mãe no Rio de Janeiro diante do fato de sua filha ter fugido com um homem negro, a viva alegria das ruas do Recife na véspera de um dia de São João são passagens da vida cotidiana que Rubem nos transmite com seu indelével lirismo.` },
        { titulo: "As Boas Coisas da Vida", autor: "Rubem Braga", capa: "c02.jpg", cor: "#8a8068", sinopse: `Em As boas coisas da vida, Rubem Braga novamente se concentra nos seus grandes temas. O mar é um deles, e dos mais fortes. Outro tema crucial em suas crônicas é a infância, ou melhor, os ambientes e humores da sua infância que fazem dele também um grande memorialista. Este livro do escritor demonstra de maneira inegável o motivo de suas crônicas terem sido um divisor de águas na nossa literatura, um verdadeiro sopro renovador na prosa brasileira. Além do mar, estão presentes aqui as contemplações de Braga sobre outros elementos da natureza como os rios, os passarinhos e sobre todo um universo de sensações e acontecimentos corriqueiros que ganham densidade incomum nas lentes do cronista.` },
        { titulo: "A Borboleta Amarela", autor: "Rubem Braga", capa: "c03.jpg", cor: "#a8742c", sinopse: `As crônicas deste livro foram publicadas em diversos jornais entre janeiro de 1950 e dezembro de 1952, época em que Rubem Braga já era considerado um expoente da crônica na imprensa brasileira. Graças ao seu lirismo e ao seu raro dom para captar e transmitir aquilo que parece sem importância, Rubem não se furta a destacar em suas crônicas o que pode haver de misteriosamente belo nas angústias e incertezas que a vida apresenta, como também sinaliza para a fugacidade da plenitude, sentimento desejado por muitos em nosso planeta.
  
  Neste jogo em que expectativa e realidade se digladiam, as visões e experiências mais prosaicas são cozidas pelo cronista de maneira a conceber textos os quais apontam que ao fim não deve ser dada tamanha importância, mas sim ao percurso, ao conjunto de experiências vividas. Os leitores têm aqui uma amostra vigorosa da potência narrativa do autor, qualidade que conduziu nosso cronista maior a despejar elementos latentes da alma humana em sua prosa marcada pela minúcia.
  
  É exatamente neste livro que Rubem Braga faz uma de suas mais conhecidas e características afirmações sobre a crônica, gênero que o consagrou: Há homens que são escritores e fazem livros que são como verdadeiras casas, e ficam. Mas o cronista de jornal é como o cigano que toda noite arma sua tenda e pela manhã a desmancha, e vai.
  
  A crônica que dá título ao livro comprova como Rubem estava sempre pronto a captar a simplicidade das coisas e a ser tocado de forma comovida por todas as manifestações de beleza que o cotidiano lhe reservava.` },
        { titulo: "Ai de Ti, Copacabana!", autor: "Rubem Braga", capa: "c04.jpg", cor: "#4b5a6b", sinopse: `Ai de ti, Copacabana! é o livro mais lembrado quando o nome do imbatível cronista Rubem Braga vem à tona. O livro traz crônicas do autor que se tornariam célebres como "História triste de tuim", "Os trovões de antigamente", "O padeiro", "Quem sabe Deus está ouvindo", "A minha glória literária", "História de pescaria", além da surpreendente crônica que dá nome ao livro - "Ai de ti, Copacabana!" -, na qual Rubem faz uma espécie de ode ao bairro carioca, destacando seus vícios e virtudes.
  
  A vista inebriante da Cordilheira dos Andes, a empolgação inocente de um taxista português no Rio acompanhando um navio cruzando a orla carioca, a notícia da separação de um casal amigo. Toda sorte de acontecimentos, grandiosos ou não, é ternamente transmutada por Rubem Braga nas crônicas de Ai de ti, Copacabana!.` },
        { titulo: "200 Crônicas Escolhidas", autor: "Rubem Braga", capa: "c05.jpg", cor: "#8a8a8a", sinopse: `Com uma linguagem sensível e poética, Rubem Braga capta, em 200 crônicas escolhidas, flagrantes da vida cotidiana que ele próprio viveu ou testemunhou. O livro traz seus melhores textos, produzidos entre 1935 e 1977, numa escolha feita pelo próprio autor, baseada na seleção original feita pelo amigo Fernando Sabino. São lembranças de cenas da Segunda Guerra, quando Braga foi repórter na frente de batalha. Recordações de momentos marcantes de sua infância e juventude com os amigos. Casos de amor e amizade com mulheres fantásticas que marcaram sua vida. Cenas que retratam o convívio diário com pessoas, choques de opiniões e interesses, o dia-a-dia do trabalho de um jornalista que precisava escrever sua crônica diária para sobreviver. Rubem Braga nunca deixou de escrever regularmente crônicas para jornais e revistas, constituindo um verdadeiro fenômeno: o de ser o único escritor a conquistar um lugar definitivo na nossa literatura exclusivamente como cronista. Abordando sempre assuntos do dia-a-dia, falando de si mesmo, de sua infância, mocidade, primeiros amores, impregnava tudo que escrevia de um grande amor à vida ― a vida simples, não sofisticada, dos humildes e sofredores. Tinha predileção especial pelas coisas da natureza, tomando frequentemente como tema o mar, os animais, as árvores. Não apenas as suas crônicas de amor e exaltação à mulher, mas também as que dedicou a passarinhos, borboletas, cajueiros, amendoeiras e pescarias são das mais belas páginas de nossa literatura.` },
        { titulo: "Coisas Simples do Cotidiano", autor: "Rubem Braga", capa: "c06.jpg", cor: "#9c4a26", sinopse: `Nas dezessete crônicas deste livro, que são acompanhadas pelas belas ilustrações de Soud, o mestre do gênero Rubem Braga pinta cenas e episódios comuns, incorporando neles sua percepção franca e singela do que realmente importa - ou deveria importar - na vida. Uma vez, entrando numa loja para comprar uma gravata, tive de repente um ataque de pudor, me surpreendendo assim, a escolher um pano para amarrar no pescoço. A vida bem que poderia ser mais simples. O escritor não deixa os sonhos de lado, pois sabe que são eles que movem o mundo. No entanto, não é a busca sem freio por conquistas grandiosas, um carro novo ou uma viagem exótica o caminho a ser trilhado. O cronista aponta, com sua peculiar sutileza, para as riquezas que podem trazer um sentido autêntico para o nosso dia a dia, como a satisfação por receber em casa um casal de amigos ou desfrutar a beleza de uma planta. Ainda que os novos tempos exijam respostas rápidas a todo instante, é sem pressa que Braga nos conduz com seu olhar magistralmente humano pela descoberta do que pode ser especialmente marcante em nossa existência.` },
        { titulo: "Um Pé de Milho", autor: "Rubem Braga", capa: "c07.jpg", cor: "#6b8f3a", sinopse: `Um Pé de Milho reúne crônicas publicadas em vários jornais e revistas entre 1933 e 1947. Algumas, como Passeio à Infância e Em Cachoeiro, retratam a infância de Rubem Braga, enquanto que outras, como História do Corrupião, Receita de Casa e a obra-prima Aula de Inglês, reverberam a ironia e o humor do autor com bastante intensidade. São crônicas que, apesar do tom realista, se abrem para o imaginário e revelam a grande marca de Braga: a abordagem do mundo em que vivemos através de seus dois lados, o incômodo e o belo.
  
  O escritor José Lins do Rego, ao ler Um Pé de Milho, identificou algo que veio da infância do cronista em Cachoeiro de Itapemirim, sua cidade natal, e que se enraizou, mantendo-se mesmo em sua agitada vida nas grandes cidades: “Tudo que ele viu, tudo o que ele amou, tudo o que debochou com seu sorriso mais falso que os olhos de Capitu, nada é para o Braga que eu conheço. Deem-lhe um pé de milho, ali no fundo do seu quintal da rua Júlio de Castilhos, e o Braga se desmancha na doce poesia da crônica mais terna que um sopro de brisa”.` }
      ]
    },
  
    /* ---------- 3) Written on a card, pinned to the book (última seção) ---------- */
    cartoes: {
      titulo: "Written on a card,",
      destaque: "pinned to the book.",
      intro: "",
      itens: [
        { livro: "Ai de ti, Copacabana!", nome: "", papel: "", texto: "“Mas no meio de tudo isso, fora isso, através disso, apesar disso tudo - há o amor. Ele é como a lua, resiste a todos os sonetos e abençoa todos os pântanos.”" },
        { livro: "Recado de Primavera", nome: "", papel: "", texto: "“É na verdade muito bom, saber que em um mundo de tanta tristeza nosso pequeno mundo conseguiu existir sem fazer triste ninguém.”" }
      ]
    }
  };
