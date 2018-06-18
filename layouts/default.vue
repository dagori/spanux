<template>
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
    /*grid-template-rows: 10vh 85vh 5vh;*/
    grid-template-columns: [header-start nav-start footer-start] auto minmax(150px, 15vw) auto [nav-end main-start] minmax(300px, 85vw);
    grid-template-rows: [header-start] 10vh [header-end nav-start main-start] minmax(83vh, auto) [nav-end main-end footer-start] 7vh [footer-end];
    grid-gap: 5px;
  }

  header {
    grid-area: header;
    background: yellow;
  }

  nav {
    grid-area: nav;
    background: orange;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
    background: lightgreen;
  }

</style>
