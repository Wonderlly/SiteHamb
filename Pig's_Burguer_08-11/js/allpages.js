//Login
class Log extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div id="login-box">
          <div id="login"><a href="login.html">Entre ou Registre-se</a></div>

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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
      <p class="textofooter">Quer saber como falar conosco ou onde estamos localizados?</p>
      <a  href="contato.html">Clique Aqui</a>
    <h2>Siga-nos também nas nossas redes sociais:</h2>
    <ul>
      <!-- Cada ícone é um link para uma rede social -->
      <li><a href="https://web.facebook.com/" class="fa fa-facebook"></a></li>
      <li><a href="https://twitter.com/" class="fa fa-twitter"></a></li>
      <li><a href="https://instagram.com/" class="fa fa-instagram"></a></li>
    </ul>
  </footer>
    `;
  }
}
customElements.define('footer-component', Footer);
//Fim Footer