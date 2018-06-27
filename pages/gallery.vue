<template>
  <div class="gallery" @click="openImg">
    <div class="overlay"></div>
    <div class="gallery__item">
      <img alt="image" src="../assets/gallery/img-16.jpg" tabindex="0">
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
      var imgContainer = document.querySelectorAll('.gallery__item');
      var target = evt.target;
      var overlay = document.querySelector('.overlay');
      imgContainer.forEach(function(item) {
        if(target.tagName === 'IMG' && target.parentElement === item) {
          item.classList.add('active');
          overlay.style.display = 'block';
        }
        if(target === overlay) {
          target.style.display = 'none';
          item.classList.remove('active');
        }
      });
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
}

.gallery__item img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: grayscale(0.7);
  transition: filter .8s;
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

  .gallery__item:hover > img{
    filter: grayscale(0);
  }

  .active > img {
    width: auto;
    max-width: 90vw;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    filter: grayscale(0);
  }

  .overlay {
    display: none;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

</style>
