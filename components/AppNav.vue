<template>
  <ul class="link">
    <li class="link__section"><nuxt-link to="/solarsystem">Солнечная система</nuxt-link></li>
  </ul>
</template>

<script>
  import AppContent from "./../components/AppContent.vue";

  export default {
    components: {
      AppContent
    }
  }
</script>

<style>
  .link {
    padding: 10px 20px 10px;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .link__section {
    padding-top: 5px;
  }

  .link__section li {
    padding: 5px 0 0 15px;
  }
</style>
