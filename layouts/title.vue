<template>
  <div class="container" @mousemove="setGradient">
    <div id="index-overlay"></div>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    methods: {
      setGradient(e) {
        let x = e.clientX;
        let y = e.clientY;
        document.getElementById('index-overlay').style.background = `repeating-radial-gradient(circle at ${x}px ${y}px, transparent, rgba(238, 130, 238, 0.3), rgba(102, 205, 170, 0.4), rgba(124, 252, 0, 0.5))`;
        document.getElementById('index-overlay').style.animation = 'visual 2s';
      }
    }
  }
</script>

<style>
  .container {
    min-width: 100vh;
    min-height: 100vh;
    position: relative;
    background-image: url('../assets/plant-bg.jpg');
    background-size: cover;
    background-position: center;
  }

  #index-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  @keyframes visual {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
