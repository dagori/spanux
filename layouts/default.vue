<template>
  <div class="bottom-layer">
    <div class="container">
      <header><app-header/></header>
      <nav><app-nav/></nav>
      <main>
        <router-view>
          <nuxt/>
        </router-view>
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

  .container {
    display: grid;
    min-height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: [header-start] minmax(10vh, auto) [header-end nav-start] auto [nav-end main-start] 70vh [footer-start] 5vh;
    grid-row-gap: 5px;
    grid-column-gap: 2px;
    background: red;
  }

  header {
    grid-area: header;
    background: black;
  }

  nav {
    grid-area: nav;
    background: orange;
  }

  main {
    grid-area: main;
    background: white;
  }

  footer {
    grid-area: footer;
    background: lightgreen;
  }

  @media (min-width: 990px) {
    .container {
      grid-template-columns: [header-start nav-start footer-start] auto minmax(150px, 15vw) auto [nav-end main-start] minmax(300px, 85vw);
      grid-template-rows: [header-start] minmax(10vh, auto) [header-end nav-start main-start] minmax(83vh, auto) [nav-end main-end footer-start] 7vh [footer-end];
      grid-gap: 5px 5px;
      background: black;
    }
  }
</style>
