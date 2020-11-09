<template>
  <div id="app" @mousemove="pointerAxis">
    <router-view />
    <div id="pointer" :style="{ left: `${x}px`, top: `${y}px` }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0
    }
  },
  mounted() {},
  methods: {
    pointerAxis(event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  cursor: none;
  min-height: 100vh;
}
#pointer {
  background-color: rgb(2, 2, 2);
  position: fixed;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  /* transition: 0.1s; */
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99;
}
</style>
