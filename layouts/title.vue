<template>
  <div class="bottom-layer">
    <h1 class="title"><nuxt-link to="/">TITLE</nuxt-link></h1>
    <div class="title-grid-container">
      <header><app-header/></header>
      <main>
        <nuxt/>
      </main>
      <footer><app-footer/></footer>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./../components/AppHeader.vue";
  import AppContent from "./../components/AppContent.vue";
  import AppFooter from "./../components/AppFooter.vue";

  export default {
    components: {
      AppHeader,
      AppContent,
      AppFooter
    },
    methods: {
      setGradient(e) {
        let x = e.pageX;
        let y = e.pageY;
        document.querySelector('.bottom-layer').style.backgroundImage = `repeating-radial-gradient(circle at ${x}px ${y}px, transparent, rgba(238, 130, 238, 0.3), rgba(102, 205, 170, 0.4)`;
        document.querySelector('.bottom-layer').style.animation = 'visual 2s';
      }
    }
  }
</script>

<style>
  .bottom-layer {
    background-image: url('../assets/images/plant-bg.jpg');
    background-size: cover;
    background-position: center;
  }

  @keyframes visual {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .title-grid-container {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 100vw;
    grid-template-rows: 10vh minmax(83vh, auto) 5vh;
    overflow: hidden;
  }

  header {
    background-color: rgba(255, 255, 255, 0.6);
  }

  main {
    position: relative;
  }

  footer {
    background-color: rgba(255, 255, 255, 0.6);
  }
</style>
