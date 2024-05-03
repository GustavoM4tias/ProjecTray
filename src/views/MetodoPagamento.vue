<script setup></script>

<template>
  <div
    class="container d-flex justify-content-center align-items-center vh-100 flex-column"
  >
    <div class="highlight-container">
      <h2 class="text-center">Qual método de pagamento pretende utilizar?</h2>
      <div class="row">
        <div class="col-md-6">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="categoria1"
            />
            <label class="form-check-label" for="categoria1"> Vindi </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="categoria2"
            />
            <label class="form-check-label" for="categoria2"> Pix </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="categoria2"
            />
            <label class="form-check-label" for="categoria3">
              Cartao de Crédito/Débito
            </label>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="categoria3"
            />
            <label class="form-check-label" for="categoria4">
              Boleto Bancário
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="categoria4"
            />
            <label class="form-check-label" for="categoria5"> PayPal </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="categoria2"
            />
            <label class="form-check-label" for="categoria6">
              Mercado Pago
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="container text-center mt-3">
      <a class="setas" href="tela5.html"
        ><span style="font-size: 24px">◄</span></a
      >
      <a class="setas" href="tela7.html"
        ><span style="font-size: 24px">►</span></a
      >
    </div>
  </div>
</template>
