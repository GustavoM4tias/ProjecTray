<script setup>
import CardProdutos from "../components/CardProdutos.vue";
</script>

<template>
  <div class="lista-produtos container-fluid d-flex justify-content-center align-items-center flex-column">
    <div class="row col-lg-11 col-md-12">
      <h4 class="text-center mt-3">Lista de Produtos da sua loja</h4>
      <CardProdutos :exibirBotoes="true" /> 
      <CardProdutos :exibirBotoes="true" />  <!-- false = exclui botões -->
<!-- :exibirBotoes="true" faz com que os botões de edição e exclusão apareçam somente na lista de produtos. assim podendo reutilizar o mesmo componente diretamente na loja -->
    </div>
  </div>
</template>


<style scoped>
.lista-produtos {
  margin-top: 8vh;
}
</style>
