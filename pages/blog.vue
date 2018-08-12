<template>
  <div class="container__blog">
    <div class="button-list">
      <button type="button" v-for="post in posts" v-bind:key="post.id" v-bind:class="['button-list__button', {active: post == currentPost}]" v-on:click="currentPost = post">
        {{ post.title }}
      </button>
    </div>
    <div class="post" v-if="currentPost" v-bind:class="['post__item']">
      <h2 class="post__title">{{ currentPost.title }}</h2>
      <div class="post__content">{{currentPost.content}}</div>
      <img v-bind:src="currentPost.photo[0]" class="post__image">
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        posts: null,
        currentPost: null
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      async fetchData() {
        const data = await this.$axios.$get('https://www.mocky.io/v2/5b6f4b17310000ab14781ad1')
        this.posts = data,
        this.currentPost = data[0]
      }
    }
  }
</script>

<style lang="scss">
  .container__blog {
    height: 100%;
  }

  .button-list {
    display: flex;
  }

  .button-list__button {
    background-color: blue;
    color: white;
    font-size: 80%;
    border: none;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    height: minmax(2em, auto);
    width: auto;
    padding: 3px;
    transition: transform, box-shadow;
    transition-delay: 0s, -0.5s;
    word-wrap: break-word;

    @for $i from 0 through 6 {
      &:nth-of-type(#{$i}n) {
        filter: hue-rotate(#{$i*15}deg);
      }
    }
    &.active {
      transform: translateY(-10px);
      box-shadow: 0 10px 0 0 blue;
    }
  }

  .post {
    width: 100%;
    text-align: center;
    padding: 0 10px;
    margin: 0 auto;
    display: grid;
    grid-column-gap: 10px;
    text-align: justify;
    background: LightGray;
  }

  .post__image {
    width: 100%;
    height: auto;
    align-self: stretch;
    object-fit: cover;
    margin-top: 5px;
  }

  @media (min-width: 660px) {
    .button-list__button {
      font-size: 100%;
    }

    .post {
      grid-template-columns: 1fr 300px;
      grid-template-rows: 30px 1fr;
    }

    .post__image {
      grid-row: 1/3;
      grid-column: 2/3;
    }
  }

  @media (min-width: 990px) {
    .post {
      grid-template-columns: 1fr 500px;
      border-bottom-left-radius: 10px;
    }
  }
</style>
