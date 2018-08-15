<template>
  <div class="nav-container">
    <h3 class="nav-menu">Menu</h3>
    <ul class="link">
      <nuxt-link class="link__item link__item--gallery" tag="li" to="/" exact>Gallery</nuxt-link>
      <nuxt-link class="link__item link__item--blog" tag="li" to="/blog">Blog</nuxt-link>
      <nuxt-link class="link__item link__item--contacts" tag="li" to="/contacts">Contacts</nuxt-link>
    </ul>
  </div>
</template>

<style lang="scss">
  .nav-menu {
    margin-top: 5px;
    text-align: center;
    color: white;
  }

  li {
    color: white;
    transition: letter-spacing 1s;
    cursor: pointer;
    font-size: 18px;
  }

  .link__item:hover,
  .link__item.nuxt-link-active,
  .blog__link:hover,
  .blog__link.nuxt-link-active {
    letter-spacing: 5px;
  }

  .link {
    padding: 0px 20px 10px;
  }

  .link__item {
    margin-top: 7px;
  }

  .link__item--blog .blog {
    padding-left: 10px;
    display: none;
  }

  .link__item--blog.nuxt-link-active .blog {
    display: block;
  }

  .blog__item.nuxt-link-active {
    color: red;
  }

  @media (min-width: $desktop) {
    .link {
      padding: 10px 20px 10px;
    }

    .nav-menu {
      display: none;
    }
  }
</style>
