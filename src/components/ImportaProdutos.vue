<template>
  <div class="container d-flex align-items-center flex-column">
      <div class="card col-md-6 col-sm-12 align-items-center">
          <h3 class="m-3">Importar Produtos</h3>
          <div class="row">
              <div class="col">
                  <input class="form-control m-3" type="file">
              </div>
              <div class="col-auto">
                  <button class="btn btn-success m-3">Enviar</button>
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col-12 bg-primary d-flex flex-row m-5">
              <div v-for="(produto, index) in produtos" :key="index" class="card col-lg-3 col-md-12 p-3 m-3">
                  <h3>{{ produto.nome }}</h3>
                  <p>Valor: R$ {{ produto.valor }}</p>
                  <p>Apelido: {{ produto.apelido }}</p>
                  <p>Descrição:</p>
                  <ul>
                      <li v-for="(descricao, i) in produto.descricao" :key="i">{{ descricao }}</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
const produtos = [
  {
      "nome": "Molecule Man",
      "valor": 29,
      "apelido": "Dan Jukes",
      "descricao": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
      "nome": "Madame Uppercut",
      "valor": 39,
      "apelido": "Jane Wilson",
      "descricao": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"
      ]
  },
  {
      "nome": "Madame Uppercut",
      "valor": 39,
      "apelido": "Jane Wilson",
      "descricao": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"
      ]
  },
  {
      "nome": "Madame Uppercut",
      "valor": 39,
      "apelido": "Jane Wilson",
      "descricao": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"
      ]
  },
  {
      "nome": "Madame Uppercut",
      "valor": 39,
      "apelido": "Jane Wilson",
      "descricao": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"
      ]
  },
  {
      "nome": "Madame Uppercut",
      "valor": 39,
      "apelido": "Jane Wilson",
      "descricao": ["Million tonne punch", "Damage resistance", "Superhuman reflexes"
      ]
  },
];
</script>