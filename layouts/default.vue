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
  .container {
    display: grid;
    min-height: 100vh;
    grid-template-columns: [header-start nav-start main-start footer-start] 1fr;
    grid-template-rows: [header-start] minmax(10vh, auto) [header-end nav-start] auto [nav-end main-start] auto [main-end footer-start] 5vh [footer-end];
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
