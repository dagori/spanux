<template>
  <div class="container">
    <header><app-header/></header>
    <nav><app-nav/></nav>
    <main>
      <router-view>
        <div><nuxt/></div>
      </router-view>
    </main>
    <footer><app-footer/></footer>
  </div>
</template>

<script>
  import AppHeader from "./../components/AppHeader.vue";
  import AppNav from "./../components/AppNav.vue";
  import AppFooter from "./../components/AppFooter.vue";

  export default {
    components: {
      AppHeader,
      AppNav,
      AppFooter
    }
  }
</script>

<style>
  html {
    font-family:  "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  ul, li {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .container {
    display: grid;
    min-height: 100vh;
    /*grid-template-rows: 10vh 85vh 5vh;*/
    grid-template-columns: [header-start nav-start footer-start] auto minmax(150px, 15vw) auto [nav-end main-start] minmax(300px, 85vw);
    grid-template-rows: [header-start] 10vh [header-end nav-start main-start] minmax(83vh, auto) [nav-end main-end footer-start] 7vh [footer-end];
    background: rebeccapurple;
    grid-gap: 5px;
  }

  .container > * {
    background: white;
  }

  header {
    grid-area: header;
  }

  nav {
    grid-area: nav;
  }

  main {
    grid-area: main;
  }

  footer {
    grid-area: footer;
  }

</style>
