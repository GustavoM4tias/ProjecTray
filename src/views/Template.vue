<script setup></script>

<template>
  <div class="container-fluid d-flex justify-content-center align-items-center flex-column">
    <div class="highlight-container">
      <h2 class="text-center">Selecione um template para seu site!</h2>
      <div id="carouselExample" class="carousel slide"
        data-ride="carousel" data-interval="false">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/img/template.png" class="d-block w-100"
              alt="Image 1">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/template.png" class="d-block w-100"
              alt="Image 2">
          </div>
          <div class="carousel-item">
            <img src="../assets/img/template.png" class="d-block w-100"
              alt="Image 3">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExample"
          role="button" data-slide="prev">
          <span class="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span class="sr-only"><p class="text-dark">Anterior</p></span>
        </a>
        <a class="carousel-control-next" href="#carouselExample"
          role="button" data-slide="next">
          <span class="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span class="sr-only"><p class="text-dark">Proximo</p></span>
        </a>
      </div>
    </div>
  </div>
</template>
