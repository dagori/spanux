<template>
  <video class="cover-video" preload="auto" autoplay>
    <source src="./../assets/flowersMP4.mp4" type="video/mp4">
    <source src="./../assets/flowersWEBM.webm" type="video/webm">
  </video>
</template>

<style>
  .cover-video {
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
