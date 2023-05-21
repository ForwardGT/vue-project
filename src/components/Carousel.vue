<script setup></script>

<template>
  <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="/indomix.png" class="d-block w-100 imgCarousel" alt="imageCarousel" />
      </div>
      <div class="carousel-item">
        <img src="/indocoat.png" class="d-block w-100 imgCarousel" alt="imageCarousel" />
      </div>
      <div class="carousel-item">
        <img src="/reoflex.png" class="d-block w-100 imgCarousel" alt="imageCarousel" />
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
</template>

<style scoped>

.imgCarousel {
  height: 300px;
}

.carousel {
  margin-top: 10px;
}

.carousel-control-next-icon {
  background-color: rgb(52, 231, 16);
  color: rgb(12, 15, 37);
}

.carousel-control-prev-icon {
  background-color: rgb(52, 231, 16);
  color: rgb(12, 15, 37);
}
</style>
