<script setup></script>

<template>
  <div class="container-fluid d-flex justify-content-center align-items-center flex-column">
    <div class="card p-4">
      <div class="form-group">
        <div class="mb-3">
          <label for="nome" class="form-label">Nome</label>
          <input type="text" class="form-control" id="nome" placeholder="Nome do produto">
        </div>
        <div class="mb-3">
          <label for="descricao" class="form-label">Descrição</label>
          <textarea class="form-control" id="descricao" rows="3" placeholder="Descrição do produto"></textarea>
        </div>
        <div class="mb-3">
          <label for="categoria" class="form-label">Categoria</label>
          <select class="form-select" id="categoria">
            <option selected>Selecione uma categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            <option value="categoria3">Categoria 3</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="preco" class="form-label">Preço</label>
          <input type="text" class="form-control" id="preco" placeholder="Preço do produto">
        </div>
        <div class="mb-3">
          <label for="imagem" class="form-label">Imagem</label>
          <input class="form-control" type="file" id="imagem">
          <!-- Ou, se preferir, pode usar uma entrada de texto para a URL da imagem:
        <input type="text" class="form-control" id="imagem" placeholder="URL da imagem do produto"> -->
        </div>
        <button type="submit" class="btn btn-primary">Enviar</button>

      </div>
    </div>
  </div>
</template>
