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
        <!-- Deixar botão sempre a mostra, se os dados forem enviados com sucesso ou não, mostrar um alert ou popup -->
      </div>
    </div>
  </div>

  <!-- Tabela de produtos -->
  <div class="row m-3" v-if="showCsvTable">
    <div class="col-12">
      <div class="table-container">
        <table class="table">
          <thead>
            <tr>
              <th v-for="header in csvDataHeaders" :key="header">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in csvData" :key="index">
              <td v-for="(value, key) in row" :key="key">
                <input class="form-control" v-model="row[key]">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const csvData = ref([]);
const csvDataHeaders = ref([]);
const showCsvTable = ref(false);

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (event) {
    const csv = event.target.result;
    const parsedData = parseCSV(csv);
    csvDataHeaders.value = Object.keys(parsedData[0]);
    csvData.value = parsedData;
  };

  reader.readAsText(file);
}

function parseCSV(csv) {
  const lines = csv.split('\n');
  const headers = lines[0].split(',');
  const data = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const values = line.split(',');
    const obj = {};

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j].trim()] = values[j] ? values[j].trim() : null;
    }

    data.push(obj);
  }

  return data;
}

function showTable() {
  showCsvTable.value = true;
}

function saveImportedProducts() {
  // Lógica para salvar os produtos importados
  console.log('Produtos importados salvos:', csvData.value);
}
</script>

<style scoped>
.card-header {
  background-color: #bbb;
}

th{
  background-color: #bbb;
  border: 1px black solid;
}

tbody{
  border:1px black solid;
}

td{
  border-left:1px black solid ;
  border-bottom: transparent;
}


.table-container {
  max-height: 450px; /* Defina a altura máxima que deseja que a tabela tenha antes do scroll */
  width: 70rem;
  overflow-y: auto; /* Adiciona scroll vertical à tabela quando o conteúdo ultrapassar a altura máxima */
}
</style>
