<template>
  <div class="container__header">
    <div class="logo">
      <img class="logo__image" src="../static/images/tree-desktop.svg" alt="logo">
    </div>
    <div class="title">
      <nuxt-link to="/">Single Page Application & Grid Gallery</nuxt-link>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .container__header {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    align-items: center;
  }

  .title {
    text-align: center;
    order: -1;
    padding-top: 5px;
    a {
      color: white;
      font-size: 20px;
    }
  }

  .logo {
    width: 100px;
    &__image {
      display: block;
      height: 100%;
    }
  }

  @media (min-width: $tablet) {
    .container__header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0 auto;
      width: 70%;
    }

    .logo {
      height: 150px;
      width: 150px;
    }

    .title {
      order: 1;
      margin: 0 5px 0 10px;
      a {
        font-size: 30px;
      }
    }
  }
  
  @media (min-width: $desktop) {
    .logo {
      height: 200px;
      width: 200px;
    }
  }
</style>
