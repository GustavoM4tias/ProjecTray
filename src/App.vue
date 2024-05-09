<script setup></script>

<template>
  <nav class="navbar navbar-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><i class="logo-header bi bi-cart-fill"></i>MEGEV
        <i class="bi bi-arrow-left-right"></i> TRAY</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark menu-oculto"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            Bem Vindo {{ nome }} "nome"!
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link links-menu" href="#">
                <router-link class="links-menu" to="/perfil"
                  ><i class="bi bi-person-circle"></i> Perfil</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link class="links-menu" to="/"
                  ><i class="bi bi-window-fullscreen"></i> Menu
                  Inicial</router-link
                >
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link links-menu" href="#">
                <router-link class="links-menu" to="/objetivo"
                  ><i class="bi bi-graph-up-arrow"></i> Objetivo da
                  Loja</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link links-menu" href="#">
                <router-link class="links-menu" to="/lista"
                  ><i class="bi bi-bag-check"></i> Lista Produtos</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link links-menu" href="#"
                ><router-link class="links-menu" to="/adicionar"
                  ><i class="bi bi-bag-plus"></i> Adicionar
                  Produtos</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link links-menu" href="#">
                <router-link class="links-menu" to="/importar"
                  ><i class="bi bi-arrow-up-circle"></i> Importar
                  Produtos</router-link
                >
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link links-menu" href="#"
                ><router-link class="links-menu" to="/categoria"
                  ><i class="bi bi-bookmark-check"></i> Categorias de
                  Venda</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link links-menu" href="#"
                ><router-link class="links-menu" to="/metodo-pagamento"
                  ><i class="bi bi-wallet"></i> Método de Pagamento</router-link
                ></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link links-menu" href="#"
                ><router-link class="links-menu" to="/metodo-entrega"
                  ><i class="bi bi-truck"></i> Método de Entrega</router-link
                >
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link links-menu" href="#">
                <router-link class="links-menu"   to="/template"
                  ><i class="bi bi-back"></i> Templates</router-link
                >
              </a>
            </li>
          </ul>
          <div class="d-flex align-items-center justify-content-center">
            <footer class="footer">
              MEGEV {{ new Date().getFullYear() }} All Rights Reserved
            </footer>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style>

.navbar {
  background-color: rgb(4, 42, 98);
  background: linear-gradient(
    90deg,
    rgba(4, 42, 98, 1) 25%,
    rgba(21, 11, 135, 1) 100%
  );
  font-weight: bold;
}

.logo-header {
  height: 36px;
  margin: 0 10px 0 0;
  filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.3));
  font-size: 25px;
}

.offcanvas-title,
.btn-close {
  font-size: 25px;
  margin: 5px 0 0 5px;
}

.menu-oculto {
  background-color: rgb(4, 42, 98);
  background: linear-gradient(
    90deg,
    rgba(4, 32, 108, 1) 25%,
    rgba(21, 11, 105, 1) 100%
  );
}

.bi {
  font-size: 25px;
  margin: 0 15px 0 10px;
}

.links-menu {
  font-size: 16px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
}

router-link {
  text-decoration: none;
}

.nav-item {
  transition: 0.3s;
}

.nav-item:hover {
  transform: scale(1.03);
  transition: 0.3s;
  & .links-menu {
    color: white;
  }
}

.footer {
  position: fixed;
  bottom: 0;
  padding: 15px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
