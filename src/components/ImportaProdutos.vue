<template>
  <div class="card col-auto align-items-center p-3">
    <h3 class="m-3">Importar Produtos</h3>
    <div class="row">
      <div class="col">
        <input class="form-control m-2" type="file" id="csvFileInput" accept=".csv" @change="handleFileSelect">
      </div>
      <div class="col-auto">
        <button class="btn btn-success m-2" @click="showTable" v-if="csvData.length">Mostrar Produtos</button>
        <button class="btn btn-primary m-2" @click="saveImportedProducts" v-if="csvData.length">Salvar Produtos</button>
      </div>
    </div>
  </div>

  <!-- Alertas -->
  <div v-if="alertMessage" class="alert" :class="alertClass">
    {{ alertMessage }}
  </div>

  <!-- Tabela de produtos -->
  <div class="row m-3" v-if="showCsvTable">
    <div class="col-12">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th v-for="header in csvDataHeaders" :key="header">{{ header }}</th>
              <th>Arquivo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in csvData" :key="index">
              <td v-for="(value, key) in row" :key="key">
                <input class="form-control" v-model="row[key]">
              </td>
              <td>
                <button class="btn btn-secondary" @click="triggerFileInput(index)">+</button>
                <input type="file" :id="'fileInput' + index" @change="handleImageSelect($event, index)" accept="image/*" style="display: none;">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProdutoService from '@/services/ProdutoService';

const csvData = ref([]);
const csvDataHeaders = ref(["referencia", "descricao", "categoria", "preco", "status", "image"]);
const showCsvTable = ref(false);
const alertMessage = ref(null);

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (event) {
    const csv = event.target.result;
    const parsedData = parseCSV(csv);
    csvData.value = parsedData;

    // Log de depuração para verificar os dados lidos do CSV
    console.log('Dados lidos do CSV:', csvData.value);
  };

  reader.readAsText(file);
}

function parseCSV(csv) {
  const lines = csv.split('\n');
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = line.split(',');
    const obj = {
      referencia: values[0] ? values[0].trim() : '',
      descricao: values[1] ? values[1].trim() : '',
      categoria: values[2] ? values[2].trim() : '',
      preco: values[3] ? parseFloat(values[3].trim()) : 0,
      status: values[4] ? values[4].trim().toLowerCase() === 'true' : false,
      image: values[5] ? values[5].trim() : ''
    };

    data.push(obj);
  }

  return data;
}

function triggerFileInput(index) {
  document.getElementById('fileInput' + index).click();
}

function handleImageSelect(event, index) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    csvData.value[index].image = event.target.result;

    // Log de depuração para verificar a imagem lida
    console.log('Imagem lida para o produto:', index, csvData.value[index].image);
  };
  reader.readAsDataURL(file);
}

function showTable() {
  showCsvTable.value = true;
}

async function saveImportedProducts() {
  alertMessage.value = null;

  for (let produto of csvData.value) {
    // Log de depuração para verificar os dados do produto antes de enviar
    console.log('Produto a ser enviado:', produto);

    // Verifique se todos os campos obrigatórios estão presentes
    if (!produto.referencia || !produto.descricao || !produto.categoria) {
      alertMessage.value = 'Dados incompletos em um ou mais produtos. Verifique e tente novamente.';
      return;
    }

    try {
      const response = await ProdutoService.create(produto);

      // Log de depuração para verificar a resposta da API
      console.log('Resposta da API:', response);
    } catch (error) {
      console.error('Erro ao salvar produto:', produto, error);
      alertMessage.value = `Erro ao salvar alguns produtos. Verifique os dados e tente novamente.`;
      return;
    }
  }

  alertMessage.value = "Produtos importados salvos com sucesso!";
  showCsvTable.value = false;
}

const alertClass = computed(() => {
  return alertMessage.value && alertMessage.value.includes('sucesso') ? 'alert success' : 'alert error';
});
</script>

<style scoped>
.card-header {
  background-color: #bbb;
}

th {
  text-align: center;
  background-color: #bbb;
  border: 1px black solid;
}

tbody {
  text-align: center;
  border: 1px black solid;
}

td {
  border-left: 1px black solid;
  border-bottom: transparent;
}

.table-container {
  max-height: 450px;
  width: 70rem;
  overflow-y: auto;
}

.alert {
  padding: 1rem;
  margin: 1rem 0;
}

.alert.success {
  color: green;
}

.alert.error {
  color: red;
}
</style>
