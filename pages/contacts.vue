<template>
  <div class="container__contacts">
    <app-email/>
  </div>
</template>

<script>
  import AppNav from './../components/AppNav.vue';
  import AppEmail from './../components/AppEmail.vue';

  export default {
    components: {
      AppNav,
      AppEmail
    }
  }
</script>

<style style="css">
  .container__contacts {
    display: flex;
    justify-content: center;
  }
</style>
