<script setup>

    


</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100 flex-column">
    <div class="card p-4 col-lg-6 col-md-8 col-sm-10">
      <div class="highlight-container">
        <h4 class="text-center">Qual seu objetivo como loja virtual?</h4>
        <select class="form-select form-control" aria-label="Default select example">
          <option value="" selected></option>
          <option value="1">Dropshipping</option>
          <option value="2">Marketplace</option>
          <option value="3">Expandir minha loja</option>
          <option value="4">Outro</option>
        </select> <!-- AJUSTAR OPTIONS PARA CELULAR -->
      </div>

      <div class="form-group">
        <label for="categoriaVenda">Categorias de Venda:</label>
        <select class="form-control" id="categoriaVenda">
          <option value>Selecionar Categoria</option>
          <option value="Eletrodomésticos">Eletrodomésticos</option>
          <option value="Nutrição">Nutrição</option>
          <option value="Eletrônicos">Eletrônicos</option>
          <option value="Moda">Moda</option>
          <option value="Beleza e Cuidados Pessoais">
            Cuidados Pessoais
          </option>
          <option value="Livros e Mídia">Livros e Mídia</option>
          <option value="Casa e Jardim">Casa e Jardim</option>
          <option value="Esportes e Lazer">Esportes</option>
          <option value="Automotivo">Automotivo</option>
          <option value="Brinquedos e Jogos">Brinquedos</option>
          <option value="Alimentos e Bebidas">Alimentos</option>
          <option value="Tecnologia">Tecnologia</option>
        </select>
      </div>

      <div class="selected-items">
        <div id="selectedItems" class="d-flex row px-3 py-1">
          <!-- Categorias aparecem aqui -->
        </div>
      </div>



      <label for="categoriaPagamento">Métodos de Pagamento:</label>
      <select class="form-control" id="categoriaPagamento" onchange="adicionarOpcaoCarteira()">
        <option value>Carteira</option>
        <option value="Vindi">Vindi</option>
        <option value="PayPal">PayPal</option>
        <option value="Mercado Pago">Mercado Pago</option>
        <option value="Pix">Pix</option>
        <option value="Cartao">Cartão</option>
        <option value="Boleto">Boleto</option>
      </select>

      <div id="opcoesSelecionadas"></div>


      <label class="mt-2" for="frete">Metodos de Entrega:</label>
      <div class="btn-group col-12" id="frete">
        <input type="checkbox" class="btn-check" id="option1" />
        <label class="btn btn-default" for="option1">Correios</label>
        <input type="checkbox" class="btn-check" id="option2" />
        <label class="btn btn-default" for="option2">FedEx</label>
        <input type="checkbox" class="btn-check" id="option3" />
        <label class="btn btn-default" for="option3">Jadlog</label>
        <input type="checkbox" class="btn-check" id="option4" />
        <label class="btn btn-default" for="option4">Privada</label>
        <input type="checkbox" class="btn-check" id="option5" />
        <label class="btn btn-default" for="option5">Retirada</label>
      </div>


    </div>
  </div>
</template>

<!-- Categorias de venda -->
<!-- Métodos de pagamento -->
<!-- Métodos de entrega -->