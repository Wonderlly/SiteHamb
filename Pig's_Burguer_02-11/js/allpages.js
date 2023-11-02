//Login
class Log extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="login-box">
          <div id="login"><a href="login.html">ENTRAR</a></div>

    </div>
    `;
  }
}

customElements.define('log-component', Log);
//Fim Login
//Cabeçalho
class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

    <link rel="stylesheet" href="css/estilogeral.css">
    <header class="cabecalho-mobile cabecalho">
          <a class="texto cardapio" href="cardapio.html">CARDÁPIO</a>
          <a href="home.html"><img src="imagens/logotexto.png" alt="Logo" class="logo"></a>
          <a class="texto contato" href="contato.html">CONTATO</a>
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
    <h1>Pig's Burguer™</h1>
    </footer>
    `;
  }
}
customElements.define('footer-component', Footer);
//Fim Footer