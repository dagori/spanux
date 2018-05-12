<template>
  <div>
  <nuxt-view></nuxt-view>
  </div>
</template>

<script>
  import AppHeader from "./../components/AppHeader.vue";
  import AppNav from "./../components/AppNav.vue";

  export default {
    components: {
      AppHeader,
      AppNav
    }
  }
</script>
