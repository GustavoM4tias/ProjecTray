<template>
  <div class="col-lg-3 col-md-6 col-sm-12 p-3">
    <div class="card p-2 card-produto">
      <img class="p-2" :src="imagemProduto" alt="Produto" style="border-radius: 15px; height: 18rem;">
      <div class="col-12">
        <p class="text-start small" style="margin-top: 15px;"><strong>Referência: </strong>{{ produto.referencia }}</p>
        <p class="text-start small" style="margin-top: 15px;"><strong>Descrição:</strong> {{ produto.descricao }}</p>
        <p class="text-start small"><strong>Categoria:</strong> {{ produto.categoria }}</p>
        <p class="text-start small"><strong>Preço:</strong> R$ {{ formatPrice(produto.preco) }}</p>
        <p class="text-start small status"><strong>Status:</strong> {{ produto.status ? 'Ativo' : 'Inativo' }}</p>
      </div>
      <div class="row botões justify-content-center" v-if="exibirBotoes && !editando">
        <button class="btn col-auto btn-primary m-1" @click="editarProduto">Editar</button>
        <button class="btn col-auto btn-danger m-1" @click="excluirProduto">Excluir</button>
      </div>
      <div class="row botões justify-content-center" v-if="editando">
        <form class="col-12" @submit.prevent="salvarEdicao">
          <div class="mb-3">
            <label for="referenciaEdit" class="form-label">Referência</label>
            <input type="text" class="form-control" id="referenciaEdit" v-model="produtoEditado.referencia" placeholder="Referência do Produto">
          </div>
          <div class="mb-3">
            <label for="descricaoEdit" class="form-label">Descrição</label>
            <input type="text" class="form-control" id="descricaoEdit" v-model="produtoEditado.descricao" placeholder="Descrição do Produto">
          </div>
          <label for="Categoria">Categorias</label>
          <select class="form-select" id="categoria" v-model="produtoEditado.categoria">
            <option selected disabled>Selecione uma categoria</option>
            <option v-for="(categoria, index) in categorias" :key="index">{{ categoria.nome }}</option>
          </select>
          <div class="mb-3">
            <label for="precoEdit" class="form-label">Preço</label>
            <input type="number" class="form-control" id="precoEdit" v-model="produtoEditado.preco" placeholder="Preço do produto" step="0.01">
          </div>
          <div class="mb-3">
            <label for="statusEdit" class="form-label">Status do Produto</label>
            <select class="form-select" id="statusEdit" v-model="produtoEditado.status">
              <option :value="true">Ativo</option>
              <option :value="false">Inativo</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="UrlEdit" class="form-label">URL da Imagem</label>
            <input type="text" class="form-control" id="UrlEdit" v-model="produtoEditado.image" placeholder="URL da Imagem do Produto">
          </div>
          <button type="submit" class="btn btn-primary">Salvar</button>
          <button type="button" class="btn btn-secondary mx-2" @click="cancelarEdicao">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ProdutoService from '../services/ProdutoService';
import CategoriaProdutoService from '../services/CategoriaProdutoService';

export default {
  props: {
    produto: {
      type: Object,
      required: true
    },
    exibirBotoes: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      produtoEditado: { ...this.produto },
      editando: false,
      categorias: []
    };
  },
  computed: {
    imagemProduto() {
      return this.produto.image || '../src/assets/img/tray.jpeg';
    }
  },
  methods: {
    formatPrice(value) {
      let number = parseFloat(value);
      let formattedNumber = number.toFixed(2);
      return formattedNumber.replace('.', ',');
    },
    retrieveCategoria() {
      CategoriaProdutoService.getAll()
        .then(response => {
          this.categorias = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    async excluirProduto() {
      const confirmacao = confirm(`Tem certeza que deseja excluir o produto "${this.produto.referencia}"?`);
      if (!confirmacao) return;

      try {
        await ProdutoService.delete(this.produto.id);
        alert(`Produto "${this.produto.referencia}" excluído com sucesso!`);
        this.$emit('produtoExcluido', this.produto.id); // Emitir evento com o ID do produto excluído
      } catch (error) {
        console.error('Erro ao excluir produto:', error);
      }
    },
    editarProduto() {
      this.editando = true;
    },
    cancelarEdicao() {
      this.editando = false;
      this.produtoEditado = { ...this.produto }; // Resetar as alterações
    },
    async salvarEdicao() {
      try {
        await ProdutoService.update(this.produto.id, this.produtoEditado);
        alert(`Produto "${this.produto.referencia}" atualizado com sucesso!`);
        this.editando = false;
        this.$emit('produtoEditado', this.produto.id); // Emitir evento com o ID do produto editado
      } catch (error) {
        console.error('Erro ao atualizar produto:', error);
      }
    }
  },
  mounted() {
    this.retrieveCategoria();
  }
}
</script>

<style scoped>
</style>
