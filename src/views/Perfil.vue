<script setup>
import { ref } from 'vue'

const bloqueado = ref(false)
const username = ref('Username')
const email = ref('Email Comercial')
const receita = ref('1.000,00') 
const url = ref('')

const editar = () => {
  bloqueado.value = true
}

const salvar = () => {
  if (confirm('Tem certeza que deseja salvar?')) {
    bloqueado.value = false
  }
}

const cancelar = () => {
  if (confirm('Tem certeza que deseja cancelar?')) {
    bloqueado.value = false
  }
}
</script>

<template>
  <div class="container d-flex justify-content-center align-items-center vh-100 flex-column">
    <h3>Perfil Pessoal</h3>
    <div class="card p-4 col-lg-6 col-md-8 col-sm-10">
      <div class="input-group mb-4">
        <span class="input-group-text">@</span>
        <input :disabled="!bloqueado" v-model="username" type="text" class="form-control" placeholder="Username" />
      </div>

      <div class="input-group mb-4">
        <input :disabled="!bloqueado" v-model="email" type="text" class="form-control" placeholder="Email Comercial" />
        <span class="input-group-text">@tray.com</span>
      </div>

      <label for="basic-url" class="form-label">Adicionar URL Personalizada</label>
      <div class="input-group mb-4">
        <span class="input-group-text">https:</span>
        <input :disabled="!bloqueado" v-model="url" type="text" class="form-control" />
        <div class="col-auto">
          <label class="visually-hidden">Preference</label>
          <select :disabled="!bloqueado" class="form-select">
            <option selected>.com</option>
            <option value="1">.com.br</option>
            <option value="2">.tray</option>
            <option value="3">.store</option>
          </select>
        </div>
      </div>

      <div class="input-group mb-4">
        <span class="input-group-text">BRL</span>
        <span class="form-control">{{ receita }}</span>
        <div class="col-auto">
          <button class="btn btn-light shadow-sm border">Transferir</button>
        </div>
      </div>

      <div class="col-auto">
        <button v-if="!bloqueado" @click="editar" class="btn btn-primary">Editar</button>
        <div v-else>
          <button @click="cancelar" class="btn btn-danger">Cancelar</button>
          <button @click="salvar" class="btn btn-success mx-2">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>
