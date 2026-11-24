/* =====================================================================
   dados.js — TODO o conteúdo editável da Biblioteca Rubem Braga.
   Edite só este arquivo para trocar textos e imagens; a lógica e as
   animações ficam em index.html.

   Regras rápidas:
   • Campo vazio ("" ou []) => a página mostra um aviso "a preencher".
   • texto: lista de parágrafos  ->  ["Parágrafo 1", "Parágrafo 2"]
   • imagem: { src: "assets/img/arquivo.jpg", legenda: "..." }
       src vazio => mostra espaço reservado; imagem: null => sem imagem.
   • Pode ter quantas páginas quiser em "paginas" de cada tópico.
   • "cor" é a cor da lombada e da capa do livro na estante.
   ===================================================================== */
   window.BIBLIOTECA = {
    site: {
      marca: "Biblioteca Rubem Braga",
      nome: "Rubem Braga",
      chamada: "Escolha um livro na estante.",
      dica: "passe o cursor sobre uma lombada · clique para abrir",
      dicaToque: "toque em uma lombada para abrir"
    },
  
    /* ---------- 1) Livros da estante = tópicos da apresentação ---------- */
    topicos: [
      { titulo: "", subtitulo: "", cor: "#7a2726", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "", subtitulo: "", cor: "#223c2f", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "", subtitulo: "", cor: "#222d43", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "", subtitulo: "", cor: "#a8742c", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "", subtitulo: "", cor: "#366c6d", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "", subtitulo: "", cor: "#9c4a26", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "", subtitulo: "", cor: "#6e354f", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] },
      { titulo: "", subtitulo: "", cor: "#4b5a6b", paginas: [
        { titulo: "", texto: [], imagem: { src: "", legenda: "" } },
        { titulo: "", texto: [], imagem: null },
        { titulo: "", texto: [], imagem: null } ] }
    ],
  
    /* ---------- 2) Fresh ink — exatamente sete livros ---------- */
    freshInk: {
      titulo: "Fresh ink,",
      destaque: "sete livros de Rubem Braga.",
      intro: "", // texto opcional ao lado do título
      livros: [
        { titulo: "", autor: "Rubem Braga", capa: "", sinopse: "", cor: "#7a2726" },
        { titulo: "", autor: "Rubem Braga", capa: "", sinopse: "", cor: "#223c2f" },
        { titulo: "", autor: "Rubem Braga", capa: "", sinopse: "", cor: "#222d43" },
        { titulo: "", autor: "Rubem Braga", capa: "", sinopse: "", cor: "#a8742c" },
        { titulo: "", autor: "Rubem Braga", capa: "", sinopse: "", cor: "#366c6d" },
        { titulo: "", autor: "Rubem Braga", capa: "", sinopse: "", cor: "#9c4a26" },
        { titulo: "", autor: "Rubem Braga", capa: "", sinopse: "", cor: "#6e354f" }
      ]
    },
  
    /* ---------- 3) Written on a card, pinned to the book (última seção) ---------- */
    cartoes: {
      titulo: "Written on a card,",
      destaque: "pinned to the book.",
      intro: "",
      itens: [
        { nome: "", papel: "", livro: "", texto: "" },
        { nome: "", papel: "", livro: "", texto: "" },
        { nome: "", papel: "", livro: "", texto: "" }
      ]
    }
  };