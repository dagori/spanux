<template>
  <ul class="link">
    <li class="link__item link__item--blog"><nuxt-link to="/">Блог</nuxt-link>
      <ul class="blog">
        <li class="blog__item"></li>
      </ul>
    </li>
    <li class="link__item link__item--gallery"><nuxt-link to="/gallery">Галерея</nuxt-link></li>
    <li class="link__item link__item--contacts"><nuxt-link to="/contacts">Контакты</nuxt-link></li>
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
  }

  .link__section {
    padding-top: 5px;
  }

  .link__section li {
    padding: 5px 0 0 15px;
  }
</style>
