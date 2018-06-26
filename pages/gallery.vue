<template>
  <div class="gallery">
    <div class="gallery__item">
      <img @click="openImg" alt="image" src="../assets/gallery/img-16.jpg">
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
  },
  methods: {
    openImg: function(evt) {
      var img = document.querySelectorAll('.gallery__item img');
      if((evt.type === 'click' || evt.type === 'keydown') && (evt.target.tagName === 'IMG' || evt.keycode === '23')) {
        for(var i = 0; i < img.length; i++) {

        }
      }

    }
  }
}
</script>

<style>
.gallery {
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(object-fill, 1fr);
}

.gallery__item {
  min-width: 100px;
  position: relative;
}

.gallery__item img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition-property: transform, z-index;
  transition-duration: 0.5s, 0.3s;
  transition-timing-function: linear, linear;
  transition-delay: 0.2s, 0.5s;
}

@media (min-width: 600px) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery__item {
    min-width: 200px;
  }

  .gallery__item img {
    height: 300px;
  }
}

@media (min-width: 990px) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}

  .gallery__item:hover img {
    position: absolute;
    transform: scale(1.2);
    z-index: 3;
  }

  .active > img {
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
