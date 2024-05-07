<template>
  <main class="container">
    <input type="file" id="csvFileInput" accept=".csv" @change="handleFileSelect">
    <button @click="showTable" v-if="csvData.length">Mostrar Cartões</button>
    <div class="row" v-if="showCsvTable">
      <div class="col-md-3" v-for="(row, index) in csvData" :key="index">
        <div class="card mb-3">
          <img :src="row.img" alt="">
          <div class="card-header">
            <h5 class="card-title">Dados</h5>
          </div>
          <div class="card-body">
            <div v-for="(value, key) in row" :key="key">
              <p><strong>{{ key }}:</strong> {{ value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card-header{
  background-color:#bbb;
}
</style>

<script setup>
import { ref } from 'vue';

const csvData = ref([]);
const csvDataHeaders = ref([]);
const showCsvTable = ref(false);

function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(event) {
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
</script>
