<script setup>
import { ref, onMounted } from 'vue';
import MetodosEntregaService from '../services/MetodosEntregaService';
import MetodoPagamentoService from '../services/MetodoPagamentoService';
import CategoriaProdutoService from '../services/CategoriaProdutoService';
import ObjetivoLojaService from '../services/ObjetivoLojaService';

const bloqueado = ref(false);
const metodosEntrega = ref([]);
const categoriasProduto = ref([]);
const objetivosLoja = ref([]);
const metodosPagamento = ref([]);

const editar = () => {
  bloqueado.value = true;
};

const salvar = () => {
  if (confirm('Tem certeza que deseja salvar?')) {
    bloqueado.value = false;
  }
};

const cancelar = () => {
  if (confirm('Tem certeza que deseja cancelar?')) {
    bloqueado.value = false;
  }
};

onMounted(async () => {
  try {
    objetivosLoja.value = (await ObjetivoLojaService.getAll()).data;
    categoriasProduto.value = (await CategoriaProdutoService.getAll()).data;
    metodosPagamento.value = (await MetodoPagamentoService.getAll()).data;
    metodosEntrega.value = (await MetodosEntregaService.getAll()).data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
});
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100 flex-column">
    <div class="card p-4 col-lg-6 col-md-8 col-sm-10">
      <h3 class="text-center">Configurações da loja</h3>
      <div class="highlight-container">
        <label for="objetivo">Qual seu objetivo como loja virtual?</label>
        <select :disabled="!bloqueado" class="form-select form-control" id="objetivo">
          <option value=""></option>
          <option v-for="objetivo in objetivosLoja" :key="objetivo.id" :value="objetivo.id">{{ objetivo.nome }}</option>
        </select>
      </div>

      <div class="form-group mt-3">
        <label for="categoriaVenda">Categorias de Venda:</label>
        <select :disabled="!bloqueado" class="form-control" id="categoriaVenda">
          <option value>Selecionar Categoria</option>
          <option v-for="categoria in categoriasProduto" :key="categoria.id" :value="categoria.id">{{ categoria.nome }}</option>
        </select>
      </div>

      <div class="selected-items">
        <div :disabled="!bloqueado" id="selectedItems" class="d-flex row px-3 py-1">
          <!-- Categorias aparecem aqui -->
        </div>
      </div>

      <label class="mt-2" for="categoriaPagamento">Métodos de Pagamento:</label>
      <select :disabled="!bloqueado" class="form-control" id="categoriaPagamento">
        <option value="">Selecionar Método de Pagamento</option>
        <option v-for="metodo in metodosPagamento" :key="metodo.id" :value="metodo.id">{{ metodo.nome }}</option>
      </select>

      <div :disabled="!bloqueado" id="opcoesSelecionadas"></div>

      <label class="mt-2" for="frete">Metodos de Entrega:</label>
      <div class="btn-group col-12" id="frete">
        <input :disabled="!bloqueado" type="checkbox" class="btn-check" id="option1" />
        <label class="btn btn-default" for="option1">Correios</label>
        <input :disabled="!bloqueado" type="checkbox" class="btn-check" id="option2" />
        <label class="btn btn-default" for="option2">FedEx</label>
        <input :disabled="!bloqueado" type="checkbox" class="btn-check" id="option3" />
        <label class="btn btn-default" for="option3">Jadlog</label>
        <input :disabled="!bloqueado" type="checkbox" class="btn-check" id="option4" />
        <label class="btn btn-default" for="option4">Privada</label>
        <input :disabled="!bloqueado" type="checkbox" class="btn-check" id="option5" />
        <label class="btn btn-default" for="option5">Retirada</label>
      </div>

      <div class="col-auto mt-4">
        <button v-if="!bloqueado" @click="editar" class="btn btn-primary">Editar</button>
        <div v-else>
          <button @click="cancelar" class="btn btn-danger">Cancelar</button>
          <button @click="salvar" class="btn btn-success mx-2">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style botoes frete */
.btn-check:hover+.btn {
  background-color: rgb(225, 225, 225);
}

.btn-check+.btn {
  border-color: rgba(0, 33, 67, 0.3);
  background-color: rgb(245, 245, 245);
}

.btn-check:checked+.btn {
  background-color: rgb(0, 123, 255);
  border-color: rgb(0, 103, 212);
  color: white;
}
</style>
