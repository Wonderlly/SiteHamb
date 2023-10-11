//Cabeçalho
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
    <link rel="stylesheet" href="css/estilogeral.css">
    <header class="cabecalho">
          <a class="texto" href="">CARDÁPIO</a>
          <a class="image" href=""><img src="imagens/logotexto.png" alt="Logo" class="logo"></a>
          <a class="texto" href="">CONTATO</a>
    </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);
//Fim Cabeçalho
//Footer
class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
    <h1>Footer Teste</h1>
    </footer>
    `;
  }
}
customElements.define('footer-component', Footer);
//Fim Footer