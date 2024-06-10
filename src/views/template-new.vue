<script setup>
import { ref, computed, watch } from 'vue';

const corSelecionada = ref('vermelho');

const colors = {
    vermelho: 'rgb(255, 100, 100)',
    'vermelho-header': 'rgb(255, 30, 30)',
    laranja: 'rgb(255, 165, 0)',
    'laranja-header': 'rgb(255, 100, 0)',
    amarelo: 'rgb(255, 255, 50)',
    'amarelo-header': 'rgb(230, 230, 0)',
    verde: 'rgb(0, 235, 0)',
    'verde-header': 'rgb(0, 180, 0)',
    azul: 'rgb(80, 120, 216)',
    'azul-header': 'rgb(90, 91, 255)',
    indigo: 'rgb(100, 50, 200)',
    'indigo-header': 'rgb(75, 0, 130)',
    violeta: 'rgb(200, 100, 255)',
    'violeta-header': 'rgb(148, 0, 211)',
    rosa: 'rgb(255, 170, 255)',
    'rosa-header': 'rgb(255, 100, 255)',
    branco: 'rgb(245, 245, 245)',
    'branco-header': 'rgb(210, 210, 210)',
};

const corHeader = computed(() => ({
    backgroundColor: colors[`${corSelecionada.value}-header`],
}));

const corTemplate = computed(() => ({
    backgroundColor: colors[corSelecionada.value],
}));

watch(corSelecionada, (newColor) => {
    alert(`Cor alterada para ${newColor} com sucesso!`);
});
</script>

<template>
    <div class="container-fluid d-flex justify-content-center align-items-center flex-column bg-secondary vh-100 pt-5">
        <div class="highlight-container">
            <div class="card p-5 bg-light d-flex align-items-center">
                <h4>Selecionar Template</h4>
                <div id="template" class="rounded-4" :style="corTemplate">
                    <nav id="header" class="navbar navbar-expand-lg header rounded-top-4 p-2 px-4" :style="corHeader">
                        <div class="container-fluid">
                            <a class="navbar-brand nome-loja" href="#">Sua Loja</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="#" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search"
                                        aria-label="Search">
                                    <button class="btn btn-outline-light" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>

                    <div id="container-central"
                        class="container-central d-flex align-items-center justify-content-center">
                        <img class="" src="../assets/img/tray.jpeg" alt="Background Image">
                    </div>

                    <div class="container-cards w-100 d-flex justify-content-evenly pt-4">
                        <div class="cards rounded-4 p-0 d-flex align-items-center justify-content-center"><img
                                class="rounded-4" src="../assets/img/tray.jpeg" alt=""></div>
                        <div class="cards rounded-4 p-0 d-flex align-items-center justify-content-center"><img
                                class="rounded-4" src="../assets/img/tray.jpeg" alt=""></div>
                        <div class="cards rounded-4 p-0 d-flex align-items-center justify-content-center"><img
                                class="rounded-4" src="../assets/img/tray.jpeg" alt=""></div>
                        <div class="cards rounded-4 p-0 d-flex align-items-center justify-content-center"><img
                                class="rounded-4" src="../assets/img/tray.jpeg" alt=""></div>
                    </div>
                </div>

                <div class="btn-group pt-5">
                    <input type="radio" class="btn-check select-color" name="options" id="option1" value="vermelho"
                        v-model="corSelecionada" />
                    <label class="btn btn-vermelho" for="option1">vermelho</label>

                    <input type="radio" class="btn-check select-color" name="options" id="option2" value="laranja"
                        v-model="corSelecionada" />
                    <label class="btn btn-laranja" for="option2">laranja</label>

                    <input type="radio" class="btn-check select-color" name="options" id="option3" value="amarelo"
                        v-model="corSelecionada" />
                    <label class="btn btn-amarelo" for="option3">amarelo</label>

                    <input type="radio" class="btn-check select-color" name="options" id="option4" value="verde"
                        v-model="corSelecionada" />
                    <label class="btn btn-verde" for="option4">verde</label>

                    <input type="radio" class="btn-check select-color" name="options" id="option5" value="azul"
                        v-model="corSelecionada" />
                    <label class="btn btn-azul" for="option5">azul</label>

                    <input type="radio" class="btn-check select-color" name="options" id="option6" value="violeta"
                        v-model="corSelecionada" />
                    <label class="btn btn-indigo" for="option6">violeta</label>

                    <input type="radio" class="btn-check select-color" name="options" id="option7" value="rosa"
                        v-model="corSelecionada" />
                    <label class="btn btn-violeta" for="option7">rosa</label>

                    <input type="radio" class="btn-check select-color" name="options" id="option10" value="branco"
                        v-model="corSelecionada" />
                    <label class="btn btn-branco" for="option10">branco</label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
:root {
    --vermelho: rgb(255, 100, 100);
    --vermelho-header: rgb(255, 30, 30);

    --laranja: rgb(255, 165, 0);
    --laranja-header: rgb(255, 100, 0);

    --amarelo: rgb(255, 255, 50);
    --amarelo-header: rgb(230, 230, 0);

    --verde: rgb(0, 235, 0);
    --verde-header: rgb(0, 180, 0);

    --azul: rgb(80, 120, 216);
    --azul-header: rgb(90, 91, 255);

    --indigo: rgb(100, 50, 200);
    --indigo-header: rgb(75, 0, 130);

    --violeta: rgb(200, 100, 255);
    --violeta-header: rgb(148, 0, 211);

    --rosa: rgb(255, 170, 255);
    --rosa-header: rgb(255, 100, 255);

    --branco: rgb(245, 245, 245);
    --branco-header: rgb(210, 210, 210);

    --text-branco: rgb(255, 255, 255);
    --text-black: rgb(0, 0, 0);
}

* {
    color: var(--text-black);
}

#template {
    width: 1200px;
    height: 650px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
}

.header {
    background-color: var(--branco-header);
}

.container-central {
    width: 100%;
    height: 350px;
}

.container-central img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cards {
    background-color: rgb(230, 230, 230);
    box-shadow: 0 0 15px rgba(0, 0, 0, .1);
    width: 250px;
    height: 200px;
    transition: .3s;
}

.cards:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, .2);
    transform: scale(1.02);
    transition: .3s;
}

.cards img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}


.btn-vermelho {
    background-color: red;
    color: white;
}

.btn-laranja {
    background-color: orange;
    color: white;
}

.btn-amarelo {
    background-color: yellow;
    color: black;
}

.btn-verde {
    background-color: green;
    color: white;
}

.btn-azul {
    background-color: blue;
    color: white;
}

.btn-indigo {
    background-color: indigo;
    color: white;
}

.btn-violeta {
    background-color: violet;
    color: white;
}

.btn-branco {
    background-color: white;
    color: black;
    border: 1px solid black;
}

.btn {
    transition: all 0.3s ease;
}

.btn-check:checked+.btn {
    background-color: lightblue;
    color: black;
    transform: scale(1.06);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
</style>
