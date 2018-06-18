<template>
  <form class="subscribe__form" action="mailto:asffffffffffffdfgh@ya.ru" autocomplete="on" enctype="multipart/form-data" method="post" name="subscribe">
    <input type="email" class="subscribe__input" placeholder="Подписаться на рассылку" autofocus @mouseout="changePlaceholder" @mouseover="changePlaceholder">
    <button class="button subscribe__button" type="submit">
      <svg width="50" height="50">
        <image xlink:href="./../assets/send-icon.svg" src="./../assets/send-icon.png" width="50" height="50"/>
      </svg>
    </button>
  </form>
</template>

<script>
  export default {
    layout: 'title',
    methods: {
      changePlaceholder(evt) {
        if (evt.type === 'mouseover') {
          document.querySelector('.subscribe__input').placeholder = 'Введите  e-mail';
        } else if (evt.type === 'mouseout') {
          document.querySelector('.subscribe__input').placeholder = 'Подписаться на рассылку';
        }
      }
    }
  }
</script>

<style>
  .subscribe__form {
    width: 35%;
    min-width: 300px;
    height: 100px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    border-radius: 50px;
    overflow: hidden;
  }

  .subscribe__form > * {
    outline: none;
    border: none;
  }

  .subscribe__input {
    width: 80%;
    min-width: 200px;
    background: rgba(255, 255, 255, 0.5);
    transition: background-color 1s;
    padding-left: 25px;
    padding-right: 15px;
    font-size: 16px;
    word-wrap: break-word;
  }

  .subscribe__input::placeholder {
    font-size: 85%;
    text-transform: uppercase;
    transition: font-size 1s;
  }

  .subscribe__input:hover::placeholder {
    color: rgba(25, 25, 112, 1);
    font-size: 92%;
  }

  .subscribe__input:hover {
    background: rgba(255, 255, 255, 1);
  }

  .subscribe__input:active {
    background: rgba(255, 255, 255, 1);
  }

  .subscribe__button {
    width: 20%;
    min-width: 100px;
    background: rgba(255, 255, 255, 0.5);
    transition: background-color 1s;
    border-left: 2px solid transparent;
  }

  .subscribe__button:hover {
    background: rgba(255, 255, 255, 0.7);
  }

  .subscribe__button:active {
    background: rgba(255, 255, 255, 1);
  }

  svg {
    padding-right: 15px;
  }
</style>
