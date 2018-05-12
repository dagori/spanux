<template>
  <ul class="link">
    <li class="link__section"><nuxt-link to="/solarsystem">Солнечная система</nuxt-link>
      <ul class="link__planet">
        <li><a href="#sun">Солнце</a></li>
        <li><a href="#mercury">Меркурий</a></li>
        <li><a href="#venus">Венера</a></li>
        <li><a href="#earth">Земля</a></li>
        <li><a href="#mars">Марс</a></li>
        <li><a href="#jupiter">Юпитер</a></li>
        <li><a href="#saturn">Сатурн</a></li>
        <li><a href="#uranus">Уран</a></li>
        <li><a href="#neptune">Нептун</a></li>
      </ul>
    </li>
    <li class="link__section"><nuxt-link to="/galactics">Галактики</nuxt-link>
      <ul class="link__galactics">
        <li><a href="#vertushka">Вертушка</a></li>
        <li><a href="#andromeda">Андромеда</a></li>
        <li><a href="#sunflower">Подсолнух</a></li>
      </ul>
    </li>
  </ul>
</template>

<script>
</script>

<style>
  .link {
    padding: 10px 20px 10px;
    overflow-y: auto;
  }

  .link__section {
    padding-top: 5px;
  }

  .link__section li {
    padding: 5px 0 0 15px;
    background: blue;
  }
</style>
