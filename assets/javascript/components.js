const nav = document.querySelector(".nav-placeholder");
const footer = document.querySelector(".footer-placeholder");

if (nav) {
  nav.innerHTML = `
    <div class="nav-brand">
        <a href="index.html" class="brand-link">
            <div class="logo nav-logo"></div>

            <span class="brand-name">Bird Machine</span>
            Records
        </a>
    </div>
    <div class="nav-links">
        <div class="dropdown">
            <a href="produtos.html" class="dropdown-elem">Musicas ▾</a>
            <ul class="dropdown-content">
                <li>
                    <a href="">
                        <div class="background-icon">
                            <div class="disc-icon icon-size"></div>
                        </div>
                        Discos
                    </a>
                </li>

                <li>
                    <a href="">
                        <div class="background-icon">
                            <div class="cassete-icon icon-size"></div>
                        </div>
                        Cassetes
                    </a>
                </li>
            </ul>
        </div>
        <div class="dropdown">
            <a href="produtos.html" class="dropdown-elem">Produtos ▾</a>
            <ul class="dropdown-content">
                <li>
                    <a href="">
                        <div class="background-icon">
                            <div class="shirt-icon icon-size"></div>
                        </div>
                        Camisas
                    </a>
                </li>

                <li>
                    <a href="">
                        <div class="background-icon">
                            <div class="sweatshirt-icon icon-size"></div>
                        </div>
                        Blusas
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="background-icon">
                            <div class="pants-icon icon-size"></div>
                        </div>
                        Calças
                    </a>
                </li>
                <li>
                    <a href="">
                        <div class="background-icon">
                            <div class="cap-icon icon-size"></div>
                        </div>
                        Bonés
                    </a>
                </li>
            </ul>
        </div>
        <a href="sobre.html">Sobre</a>
        <a href="contato.html">Contato</a>
    </div>
    <div class="nav-actions">
        <form class="search-box" action="busca.html">
            <input
                type="search"
                class="search-input"
                placeholder="Buscar artista, álbum..."
                required
            />
            <button class="search-btn"></button>
        </form>
        <a href="cadastro.html" class="text-btn">Entrar</a>
        <a href="carrinho.html">
            <img
                src="./assets/svg/cart-shopping.svg"
                alt="Carrinho"
                style="width: 32px; height: 32px"
            />
        </a>
    </div>
    `;
}

if (footer) {
  footer.innerHTML = `
    <div class="nav-brand">
        <a href="index.html" class="brand-link">
            <div class="logo nav-logo"></div>

            <span class="brand-name">Bird Machine</span>
            Records
        </a>
    </div>
    <div>
        © 2025 — Todos os direitos reservados
    </div>
    <div>
        <a href="">Sobre</a>
        <a href="">Contatos</a>
        <a href="">Pedidos</a>
    </div>
    `;
}
