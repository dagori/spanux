<template>
  <div class="container__header">
    <div class="logo">
      <picture>
        <source media="(min-width: 990px)" srcset="../assets/images/tree-desktop.svg">
        <source media="(min-width: 600px)" srcset="../assets/images/tree-tablet.svg">
        <img class="logo__image" src="../assets/images/tree-mobile.svg" alt="logo">
      </picture>
    </div>
    <div class="title"><nuxt-link to="/">Single Page Application & Grid Gallery</nuxt-link></div>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .container__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title {
    text-align: center;
  }

  .title a {
    color: white;
    font-size: 20px;
  }

  @media (min-width: $tablet) {
    .container__header {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }

    .logo {
      margin-left: 30%;
    }

    .title {
      margin: 0 20px;
    }

    .title a {
      font-size: 30px;
    }
  }
</style>
