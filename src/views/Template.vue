<script setup></script>

<template>
  <div
    class="container-fluid d-flex justify-content-center align-items-center flex-column"
  >
    <div class="highlight-container">
      <h2 class="text-center">Selecione um template para seu site!</h2>
      <div class="row">
        <div
          id="carouselExample"
          class="carousel slide container-fluid overflow-hidden"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://smarteyeapps.com/storage/products/free-business-consultant-weebsite-template.webp"
                class="d-block w-100 img-fluid selectable-img"
                alt="Cirilo"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://bootstrapmade.com/content/templatefiles/Moderna/Moderna-bootstrap-website-template-md.webp"
                class="d-block w-100 img-fluid selectable-img"
                alt="Cirilo"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://bootstrapmade.com/content/templatefiles/Arsha/Arsha-bootstrap-website-template-md.webp"
                class="d-block w-100 img-fluid selectable-img"
                alt="Cirilo."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

    <div class="container text-center mt-3">
      <a class="setas" href="tela6.html"
        ><span style="font-size: 24px">◄</span></a
      >
      <a class="setas" href="tela8.html"
        ><span style="font-size: 24px">►</span></a
      >
    </div>
  </div>
</template>
