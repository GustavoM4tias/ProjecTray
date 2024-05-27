<template>
    <div class="col-lg-3 col-md-6 col-sm-12 p-3">
      <div class="card p-2 card-personagens">
        <img class="p-2" src="../assets/img/tray.jpeg" alt="Personagem" style="border-radius: 15px;">
        <!-- :src="imageUrl" -->
        <div class="col-12">
          <p class="text-start small" style="margin-top: 15px;"><strong>Referência: </strong> 1020 </p>
          <p class="text-start small" style="margin-top: 15px;"><strong>Descrição</strong> Vestido Vermelho </p>
          <p class="text-start small"><strong>Categoria: </strong> Roupas e acessorios </p>
          <p class="text-start small"><strong>Preço: </strong> 19,99 </p>
          <p class="text-start small status"><strong>Status: </strong> Ativo </p>
        </div>
        <div class="row botões justify-content-center" v-if="exibirBotoes">
          <button class="btn col-auto btn-danger m-1">Excluir</button>
          <button class="btn col-auto btn-primary m-1">Editar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      exibirBotoes: {
        type: Boolean,
        default: false
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  
