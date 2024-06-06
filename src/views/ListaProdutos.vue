<template>
  <div class="lista-produtos container-fluid d-flex justify-content-center align-items-center flex-column">
    <div class="row col-lg-11 col-md-12">
      <h4 class="text-center mt-3">Lista de Produtos da sua loja</h4>
      <CardProdutos v-for="produto in produtos" :key="produto.id" :produto="produto" :exibirBotoes="true" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProdutoService from "../services/ProdutoService";
import CardProdutos from "../components/CardProdutos.vue";

const produtos = ref([]);

onMounted(async () => {
  try {
    const response = await ProdutoService.getAll();
    produtos.value = response.data;
  } catch (error) {
    console.error("Erro ao recuperar produtos:", error);
  }
});
</script>

<style scoped>
.lista-produtos {
  margin-top: 8vh;
}

/* Adicionando estilo para os cards aparecerem lado a lado */
.card-personagens {
  flex-basis: 25%; /* Define o tamanho do card em relação à largura da tela */
}
</style>
