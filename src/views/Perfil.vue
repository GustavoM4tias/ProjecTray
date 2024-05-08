<script setup></script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100 flex-column">
    <h3>Perfil Pessoal</h3>
    <div class="card p-4 col-md-8 col-sm-10">
      <div class="input-group mb-4">
        <span class="input-group-text">@</span>
        <input type="text" class="form-control" placeholder="Username" />
      </div>

      <div class="input-group mb-4">
        <input type="text" class="form-control" placeholder="Email Comercial" />
        <span class="input-group-text">@tray.com</span>
      </div>

      <label for="basic-url" class="form-label">Adicionar URL Personalizada</label>
      <div class="input-group mb-4">
        <span class="input-group-text">https://{NomeLoja}.tray.com/</span>
        <input type="text" class="form-control" />
      </div>

      <div class="input-group mb-4">
        <span class="input-group-text">$</span>
        <input type="text" class="form-control" placeholder="Saldo em conta" />
      </div>
    </div>
  </div>
</template>
