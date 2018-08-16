<template>
  <form class="subscribe" v-bind:action="location"
  autocomplete="off" enctype="multipart/form-data" method="post" name="subscribe">
    <input type="email" class="subscribe__input" placeholder="Newsletter email" autofocus required @mouseout="changePlaceholder" @mouseover="changePlaceholder">
    <button class="button subscribe__button" type="submit"></button>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        location: ''
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.location = document.location.href
      })
    },
    methods: {
      changePlaceholder(evt) {
        if (evt.type === 'mouseover') {
          document.querySelector('.subscribe__input').placeholder = 'Введите email';
        } else if (evt.type === 'mouseout') {
          document.querySelector('.subscribe__input').placeholder = 'Newsletter email';
        }
      }
    }
  }
</script>

<style lang="scss">
  .subscribe {
    width: 45%;
    min-width: 300px;
    height: 100px;
    display: flex;
    justify-content: center;
    border-radius: 50px;
    overflow: hidden;
  }

  .subscribe > * {
    outline: none;
    border: none;
  }

  .subscribe__input {
    width: 80%;
    min-width: 200px;
    background: rgba(0, 191, 255, 0.5);
    transition: background-color 1s;
    padding-left: 25px;
    padding-right: 15px;
    font-size: 16px;
    word-wrap: break-word;
  }

  .subscribe__input::placeholder {
    font-size: 65%;
    font-weight: bold;
    text-transform: uppercase;
    transition: font-size 1s;
  }

  @media (min-width: $tablet) {
    .subscribe__input::placeholder {
      font-size: 70%;
    }
  }

  @media (min-width: $desktop) {
    .subscribe__input::placeholder {
      font-size: 85%;
    }
  }

  .subscribe__input:hover::placeholder {
    color: rgba(25, 25, 112, 1);
    font-size: 92%;
  }

  .subscribe__input:hover {
    background: rgba(0, 191, 255, 1);
  }

  .subscribe__input:active {
    background: rgba(0, 191, 255, 1);
  }

  .subscribe__button {
    width: 20%;
    min-width: 100px;
    background: rgba(0, 191, 255, .5);
    transition: background-color 1s;
    border-left: 2px solid transparent;
    position: relative;

    &::before {
      position: absolute;
      content: " ";
      top: 40px;
      left: 35%;
      width: 0;
      height: 0;
      border-left: 19px solid red;
      border-right: 19px solid red;
      border-bottom: 10px solid red;
      border-top: 10px solid lightpink;
    }

    &::after {
      position: absolute;
      content: " ";
      top: 30px;
      left: 35%;
      width: 0;
      height: 0;
      border-left: 19px solid transparent;
      border-right: 19px solid transparent;
      border-bottom: 10px solid salmon;
      border-top: none;
    }
  }

  .subscribe__button:hover {
    background: rgba(0, 191, 255, .7);
    &::after {
      transform: rotateX(-180deg);
      transform-origin: bottom;
      transition: transform 0.5s;
    }
  }
</style>
