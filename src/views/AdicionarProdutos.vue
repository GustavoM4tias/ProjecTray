<template>
  <div class="container-fluid d-flex justify-content-center align-items-center flex-column vh-100">
    <div class="card col-lg-4 col-md-6 col-sm-11 p-4 mt-5">
      <div class="mb-3">
        <label for="referencia" class="form-label">Referência</label>
        <input type="text" class="form-control" id="referencia" v-model="produto.referencia" placeholder="Referência do Produto" maxlength="30">
      </div>
      <div class="mb-3">
        <label for="descricao" class="form-label">Descrição</label>
        <input type="text" class="form-control" id="descricao" v-model="produto.descricao" placeholder="Descrição do Produto" maxlength="70">
      </div>
      <div class="mb-3">
        <label for="categoria" class="form-label">Categoria do Produto</label>
        <select class="form-select" id="categoria" v-model="produto.categoria">
          <option selected disabled>Selecione uma categoria</option>
          <option v-for="(categoria, index) in categorias" :key="index">{{ categoria.nome }}</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="preco" class="form-label">Preço</label>
        <input v-mask="'#*.##0,00'" type="number" class="form-control" id="preco" v-model="produto.preco" placeholder="Preço do produto">
      </div>
      <div class="mb-3">
        <label for="status" class="form-label">Status do Produto</label>
        <select class="form-select" id="status" v-model="produto.status">
          <option :value="true">Ativo</option>
          <option :value="false">Inativo</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="imagem" class="form-label">Caminho da Imagem</label>
        <input type="text" class="form-control" id="imagem" v-model="produto.image" placeholder="URL da imagem do produto">
      </div>
      <button type="submit" class="btn btn-primary" @click="enviarProduto">Enviar</button>
    </div>
  </div>
</template>

<script>
import CategoriaProdutoService from '../services/CategoriaProdutoService';
import ProdutoService from '../services/ProdutoService';

export default {
  name: "AdicionarProduto",
  data() {
    return {
      produto: {
        referencia: '',
        descricao: '',
        categoria: '',
        preco: 0,
        status: true,
        image: ''
      },
      categorias: []
    };
  },
  methods: {
    retrieveCategoria() {
      CategoriaProdutoService.getAll()
        .then(response => {
          this.categorias = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    enviarProduto() {
      ProdutoService.create(this.produto)
        .then(response => {
          console.log(response.data);
          alert('Produto adicionado com sucesso!');
          this.produto = {
            referencia: '',
            descricao: '',
            categoria: '',
            preco: 0,
            status: true,
            image: ''
          }; // Limpar os campos depois de adicionar com sucesso
        })
        .catch(e => {
          console.log(e);
          alert('Ocorreu um erro ao adicionar o produto.');
        });
    }
  },
  mounted() {
    this.retrieveCategoria();
  }
}
</script>
