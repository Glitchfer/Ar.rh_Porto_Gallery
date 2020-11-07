<template>
  <div id="app" v-on:mousemove="updateCoordinates">
    <nav>
      <router-link
        to="/"
        class="rl"
        style="marginRight: 20px; color:  rgb(0, 0, 0); fontWeight: bold; textDecoration: none; "
        >Home</router-link
      >
      <router-link
        to="/about"
        class="rl"
        style="marginRight: 20px; color:  rgb(0, 0, 0); fontWeight: bold; textDecoration: none; "
        >About me</router-link
      >
      <router-link
        to="/canvas"
        class="rl"
        style="marginRight: 0px; color:  rgb(0, 0, 0); fontWeight: bold; textDecoration: none; "
        >Canvas</router-link
      >
    </nav>
    <div id="cursor" :style="{ left: `${x}px`, top: `${y}px` }"></div>
    <!-- <div class="nav">
      <router-link
        to="/"
        style="marginRight: 20px; color:  rgb(141, 141, 141); fontWeight: bold; textDecoration: none;"
        >Home</router-link
      >
      <router-link
        to="/about"
        style="marginRight: 20px; color:  rgb(141, 141, 141); fontWeight: bold; textDecoration: none;"
        >About me</router-link
      >
      <router-link
        to="/canvas"
        style="marginRight: 20px; color:  rgb(141, 141, 141); fontWeight: bold; textDecoration: none;"
        >Canvas</router-link
      >
    </div> -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      curs: document.getElementById('cursor'),
      x: 0,
      y: 0
    }
  },
  mounted() {},
  methods: {
    updateCoordinates: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #bd3b3b;
  cursor: none;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  position: fixed;
  top: 20px;
  right: 50px;
  background-color: white;
  border-radius: 5px;
  z-index: 2;
}
#cursor {
  background-color: rgb(2, 2, 2);
  position: fixed;
  width: 10px;
  height: 10px;
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99;
}
nav:hover ~ #cursor {
  width: 50px;
  height: 50px;
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

nav:hover ~ #cursor {
  border: 1px dashed rgb(247, 243, 243);
  filter: invert(100%);
  mix-blend-mode: difference;
}
</style>
