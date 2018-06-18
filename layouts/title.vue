<template>
  <div class="m" @mousemove="setGradient">
    <div class="title-grid-container">
      <header><app-header/></header>
      <nav><app-nav/></nav>
      <main>
        <nuxt/>
      </main>
      <footer><app-footer/></footer>
    </div>
  </div>
</template>

<script>
  import AppHeader from "./../components/AppHeader.vue";
  import AppNav from "./../components/AppNav.vue";
  import AppContent from "./../components/AppContent.vue";
  import AppFooter from "./../components/AppFooter.vue";

  export default {
    components: {
      AppHeader,
      AppNav,
      AppContent,
      AppFooter
    },
    methods: {
      setGradient(e) {
        let x = e.clientX;
        let y = e.clientY;
        document.getElementById('title-overlay').style.background = `repeating-radial-gradient(circle at ${x}px ${y}px, transparent, rgba(238, 130, 238, 0.3), rgba(102, 205, 170, 0.4), rgba(124, 252, 0, 0.5))`;
        document.getElementById('title-overlay').style.animation = 'visual 2s';
      }
    }
  }
</script>

<style>
  .m {
    background-image: url('../assets/plant-bg.jpg');
    background-size: cover;
    background-position: center;
  }

  #index-overlay img {
    width: 100%;
    height: auto;
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
    grid-template-columns: [header-start nav-start footer-start] auto 0vw auto [nav-end main-start] 100vw;
    grid-template-rows: [header-start] 10vh [header-end nav-start main-start] minmax(83vh, auto) [nav-end main-end footer-start] 5vh [footer-end];
    grid-gap: 5px;
    overflow: hidden;
  }

  .title-grid-container >* {
    border: 1px solid red;
  }

  header {
    grid-area: header;
    background-color: rgba(255, 255, 255, 0.7);
  }

  nav {
    grid-area: nav;
    overflow-y: auto;
    z-index: -5;
  }

  main {
    grid-area: main;
    position: relative;
  }

  footer {
    grid-area: footer;
    background-color: rgba(255, 255, 255, 0.7);
  }
</style>
