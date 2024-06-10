<template>
  <div class="lista-produtos container-fluid d-flex justify-content-center align-items-center flex-column">
    <div class="row col-lg-11 col-md-12">
      <h4 class="text-center mt-3">Lista de Produtos da sua loja</h4>
      <CardProdutos
        v-for="produto in produtos"
        :key="produto.id"
        :produto="produto"
        :exibirBotoes="true"
        @produtoEditado="handleProductChange"
        @produtoExcluido="handleProductChange"
      />
    </div>
    <div class="pagination-controls">
      <button class="btn btn-dark" @click="prevPage" :disabled="page === 1">Anterior</button>
      <span>Página {{ page }} de {{ totalPages }}</span>
      <button class="btn btn-dark" @click="nextPage" :disabled="page === totalPages">Próxima</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ProdutoPaginacaoService from '../services/ProdutoPaginacaoService';
import CardProdutos from '../components/CardProdutos.vue';

const produtos = ref([]);
const page = ref(1);
const limit = ref(12); // Limite de itens por página
const totalPages = ref(1);

const fetchProdutos = async () => {
  try {
    const response = await ProdutoPaginacaoService.getAll(page.value, limit.value);
    produtos.value = response.data.produtos;
    totalPages.value = Math.ceil(response.data.total / limit.value);
  } catch (error) {
    console.error("Erro ao recuperar produtos:", error);
  }
};

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    fetchProdutos();
  }
};

const nextPage = () => {
  if (page.value < totalPages.value) {
    page.value++;
    fetchProdutos();
  }
};

// Manipulador para os eventos edit e delete
const handleProductChange = () => {
  fetchProdutos(); // Recarrega a lista de produtos
};

onMounted(fetchProdutos);
</script>

<style scoped>
.lista-produtos {
  margin-top: 8vh;
}

.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination-controls button {
  margin: 0 10px;
}
</style>
