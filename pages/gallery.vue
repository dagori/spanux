<template>
  <div class="gallery-container">
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
      <img alt="image" src="../assets/gallery/img-18.jpg">
    </div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-7.jpg">
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
      <img alt="image" src="../assets/gallery/img-6.jpg">
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
  .gallery-container {
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-template-rows: repeat(auto, 120px);
  /*  align-items: flex-start;*/
  }

  .gallery__item {
    max-width: 100%;
    min-width: 100px;
    background: blue;
  }

  .gallery__item img {
    display: block;
    width: 100%;
    height: auto;
  }
</style>
