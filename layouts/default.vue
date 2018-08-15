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
  import AppHeader from "./../components/AppHeader.vue"
  import AppNav from "./../components/AppNav.vue"
  import AppFooter from "./../components/AppFooter.vue"

  export default {
    components: {
      AppHeader,
      AppNav,
      AppFooter
    }
  }
</script>

<style lang="scss">
  .container {
    display: grid;
    min-height: 100vh;
    grid-template-columns: [header-start nav-start main-start footer-start] 1fr;
    grid-template-rows: [header-start] minmax(auto, 150px) [header-end nav-start] 150px [nav-end main-start] minmax(calc(70vh-9em), auto) [main-end footer-start] 5vh [footer-end];
    grid-row-gap: 5px;
    grid-column-gap: 2px;
  }

  header {
    grid-area: header;
    background: black;
  }

  nav {
    grid-area: nav;
    background: black;
  }

  main {
    grid-area: main;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  footer {
    grid-area: footer;
    background: black;
  }

  @media (min-width: $desktop) {
    .container {
      grid-template-columns: [header-start nav-start footer-start] auto minmax(150px, 15vw) auto [nav-end main-start] minmax(300px, 85vw);
      grid-template-rows: [header-start] minmax(auto, 200px) [header-end nav-start main-start] minmax(calc(83vh-9em), auto) [nav-end main-end footer-start] 7vh [footer-end];
      grid-gap: 5px 5px;
    }
  }
</style>
