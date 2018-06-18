<template>
  <ul class="link">
    <li class="link__item link__item--section"><nuxt-link to="/blog">К записям блога</nuxt-link></li>
    <li class="link__item link__item--contacts"><nuxt-link to="/contacts">Контакты</nuxt-link></li>
  </ul>
</template>


<style>
  .link {
    display: flex;
    width: 100%;
  }

  .link__item {
    flex-grow: 1;
  }
</style>
