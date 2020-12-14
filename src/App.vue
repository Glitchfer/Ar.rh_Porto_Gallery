<template>
  <div id="app" @mousemove="pointerAxis">
    <div class="aye">
      <router-view />
      <div
        v-if="customCursor === true"
        id="pointer"
        :style="{ left: `${x}px`, top: `${y}px` }"
      ></div>
      <button class="cstm" @click="cursorFunc()" style="zIndex: 99;">
        Customized cursor: <span>{{ btn }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      customCursor: false,
      btn: 'Off'
    }
  },
  computed: {},
  methods: {
    pointerAxis(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    cursorFunc() {
      if (this.customCursor === true) {
        document.getElementById('app').style.setProperty('cursor', 'auto')
        this.btn = 'Off'
        this.customCursor = false
      } else {
        this.customCursor = true
        this.btn = 'On'
        document.getElementById('app').style.setProperty('cursor', 'none')
      }
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
  cursor: auto;
  min-height: 100vh;
  overflow: hidden;
}
#app .aye button.cstm {
  border: 2px solid rgba(3, 172, 163, 0.527);
  position: absolute;
  top: 5px;
  right: 0;
  border-radius: 5px;
  outline: none;
  width: 100px;
  text-align: left;
  background: rgba(255, 255, 255, 0.26);
  line-height: 15px;
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
}
</style>
