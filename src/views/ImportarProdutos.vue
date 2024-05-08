<template>
    <div class="container d-flex justify-content-center align-items-center vh-100 flex-column">
        <div class="card col-auto align-items-center p-3">
            <h3 class="m-3">Importar Produtos</h3>
            <div class="row">
                <div class="col">
                    <input class="form-control m-2" type="file" id="csvFileInput" accept=".csv"
                        @change="handleFileSelect">
                </div>
                <div class="col-auto">
                    <button class="btn btn-success m-2" @click="showTable" v-if="csvData.length">Mostrar
                        Cartões</button>
                    <!-- Deixar botão sempre a mostra, se os dados forem enviados com sucesso ou não, mostrar um alert ou popup -->
                </div>
            </div>
        </div>

        <!-- Enviar cards de produtos para o BD, e não mostrar aqui, importar todos os produtos via API para view 'ListaProdutos' e component 'CardProdutos' -->
        <div class="row m-3" v-if="showCsvTable">
            <div class="col-md-3" v-for="(row, index) in csvData" :key="index">
                <div class="card mb-3">
                    <img :src="row.img" alt="">
                    <div class="card-header text-center">
                        <h5 class="card-title">Produtos</h5>
                    </div>
                    <div class="card-body">
                        <div v-for="(value, key) in row" :key="key">
                            <p><strong>{{ key }}:</strong> {{ value }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card-header {
    background-color: #bbb;
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
</script>