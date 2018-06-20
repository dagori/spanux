<template>
  <div class="gallery">
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-16.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-2.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-3.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-4.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-5.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-6.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-7.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-8.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-9.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-10.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-11.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-12.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-13.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-14.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-15.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-1.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-17.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-18.jpg">
    </div>
  </div>
</template>

<script>
import AppNav from './../components/AppNav.vue';
import AppContent from './../components/AppContent.vue';
import AppFooter from './../components/AppFooter.vue';
import AppHeader from './../components/AppHeader.vue';

export default {
  components: {
    AppNav,
    AppContent,
    AppFooter,
    AppHeader
  }
}
</script>

<style>
  .gallery {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(4, 1fr);
  }

  .gallery__item {
    min-width: 200px;
    position: relative;
    background: yellow;
  }

  .gallery__item:hover img {
    position: absolute;
    transform: scale(1.2);
    z-index: 3;
  }

  .gallery__item img {
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition-property: transform, z-index;
    transition-duration: 0.5s, 0s;
    transition-timing-function: linear;
    transition-delay: 0.2s, 0.5s;
  }

  .gallery__item--active img {
    width: auto;
    max-width: 70vw;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
  }
</style>
