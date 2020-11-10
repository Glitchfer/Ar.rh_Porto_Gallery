<template>
  <div id="exp" v-on:mousemove="updateCoordinates">
    <nav class="navv">
      <router-link
        to="/"
        class="rl"
        style="marginRight: 20px; color:  rgb(0, 0, 0); fontWeight: bold; textDecoration: none; "
        >Home</router-link
      >
      <router-link
        to="/customizer"
        class="rl"
        style="marginRight: 20px; color:  rgb(0, 0, 0); fontWeight: bold; textDecoration: none; "
        >Customizer</router-link
      >
      <router-link
        to="/draggable"
        class="rl"
        style="marginRight: 20px; color:  rgb(0, 0, 0); fontWeight: bold; textDecoration: none; "
        >Draggable</router-link
      >
      <router-link
        to="/canvas"
        class="rl"
        style="marginRight: 0px; color:  rgb(0, 0, 0); fontWeight: bold; textDecoration: none; "
        >Canvas</router-link
      >
    </nav>
    <div id="crsr" :style="{ left: `${x}px`, top: `${y}px` }"></div>
  </div>
</template>

<script>
export default {
  name: 'experiment',
  data() {
    return {
      curs: document.getElementById('crsr'),
      x: 0,
      y: 0,
      itemList: ['apple', 'banana', 'mango'],
      pickedUp: false
    }
  },
  compenents: {},
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
#exp {
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #bd3b3b;
  cursor: none;
}

.navv {
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
#crsr {
  opacity: 0;
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
.navv:hover ~ #crsr {
  opacity: 1;
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

.navv:hover ~ #crsr {
  border: 1px dashed rgb(247, 243, 243);
  filter: invert(100%);
  mix-blend-mode: difference;
}
</style>
