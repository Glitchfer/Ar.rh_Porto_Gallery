<template>
  <div id="app" @mousemove="pointerAxis">
    <div class="oye">
      <h1>
        Responsive feature is still under development
      </h1>
    </div>
    <div class="aye">
      <router-view />
      <div id="pointer" :style="{ left: `${x}px`, top: `${y}px` }"></div>
    </div>
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
  computed: {},
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
html {
  scroll-behavior: smooth;
}
body {
  overflow-y: scroll;
}
body::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  cursor: none;
  min-height: 100vh;
  overflow: hidden;
}
#pointer {
  background-color: rgb(255, 255, 255);
  position: fixed;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  /* transition: 0.1s; */
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99;
  mix-blend-mode: difference;
}
.oye {
  display: none;
}
@media (max-width: 980px) {
  /* .aye {
    display: none;
  } */
  .oye {
    position: fixed;
    top: 35%;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 88;
  }
  .oye h1 {
    position: relative;
    font-size: 24px;
    background: white;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid black;
  }
}
</style>
