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
    <router-view />
    <!-- <h1>Dragging around</h1>
    <div id="dragAround">
      <ul>
        <li
          :id="index"
          @mousemove="draging(index)"
          @mousedown="drag(index)"
          @mouseup="drop(index)"
          v-for="(item, index) in itemList"
          :key="index"
        >
          {{ item }}
        </li>
      </ul> -->
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      curs: document.getElementById('cursor'),
      x: 0,
      y: 0,
      itemList: ['apple', 'banana', 'mango'],
      pickedUp: false
    }
  },
  mounted() {},
  methods: {
    updateCoordinates: function(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    drag(index) {
      const doc = document.getElementById(index)
      doc.style.position = 'absolute'
      this.pickedUp = true
    },
    draging(index) {
      console.log(this.pickedUp)
      const doc = document.getElementById(index)
      if (this.pickedUp) {
        doc.style.left = event.clientX - 260 + 'px'
        doc.style.top = event.clientY - 20 + 'px'
      }
    },
    drop(index) {
      this.pickedUp = false
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
  /* height: 100vh;
  border: 1px solid blueviolet;
  background-color: bisque;
  position: relative; */
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

  background-image: linear-gradient(
    45deg,
    rgba(2, 2, 2, 0.966),
    rgba(31, 238, 203, 0.61),
    rgba(202, 82, 250, 0.856)
  );
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
/* --------------------drag around ---------------- */

/* li {
  list-style: none;
  background-color: #313131;
  color: white;
  width: 500px;
  text-align: center;
  padding: 10px;
}
li:hover {
  cursor: pointer;
  background-color: rgb(35, 77, 107);
} */
</style>
