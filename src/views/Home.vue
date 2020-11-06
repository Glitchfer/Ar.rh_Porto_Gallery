<template>
  <div id="home" v-on:mousemove="updateCoordinates">
    <h1>mouse cordinates</h1>
    <div class="row">
      <div id="coordinates">
        <p>Coordinates: {{ x }} / {{ y }} <br /></p>
      </div>
    </div>
    <kinesis-container class="container" :duration="Number(15000)">
      <kinesis-element
        :strength="x < 129 || x > 1150 || y < 175 || y > 570 ? 0 : 150"
        class="a1"
      >
        <img src="../assets/img/capoy.png" alt="logo" title="capoy" />
      </kinesis-element>
      <!-- background-circles-props -->
      <kinesis-element
        :strength="x < 129 || x > 1150 || y < 175 || y > 570 ? 0 : 50"
        axis="y"
      >
        <div class="circle circle-purple"></div>
      </kinesis-element>
      <kinesis-element
        :strength="x < 129 || x > 1150 || y < 175 || y > 570 ? 0 : 80"
        axis="y"
      >
        <div class="circle circle-purple1"></div>
      </kinesis-element>
      <kinesis-element
        :strength="x < 129 || x > 1150 || y < 175 || y > 570 ? 0 : 80"
        axis="y"
      >
        <div class="circle circle-purple2"></div>
      </kinesis-element>
      <kinesis-element
        :strength="x < 129 || x > 1150 || y < 175 || y > 570 ? 0 : 80"
        axis="y"
      >
        <div class="circle circle-purple3"></div>
      </kinesis-element>
      <kinesis-element
        :strength="x < 129 || x > 1150 || y < 175 || y > 570 ? 0 : -80"
      >
        <h1 class="aa">Hallo</h1>
      </kinesis-element>
      <kinesis-element
        :strength="x < 129 || x > 1150 || y < 175 || y > 570 ? 0 : 80"
      >
        <h1 class="ab">I'am Arif</h1>
      </kinesis-element>
    </kinesis-container>
    <div id="cursor" :style="{ left: `${x}px`, top: `${y}px` }"></div>
    <div class="face">
      <div class="eyes">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      cursor: document.getElementById('cursor'),
      x: 0,
      y: 0
      // rotate: 0
    }
  },
  mounted() {},
  methods: {
    updateCoordinates: function(event) {
      this.x = event.clientX
      this.y = event.clientY
      var eye = document.querySelectorAll('.eye')
      eye.forEach(function(eye) {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2
        const radian = Math.atan2(event.pageX - x, event.pageY - y)
        const rot = radian * (180 / Math.PI) * -1 + 270
        eye.style.transform = 'rotate(' + rot + 'deg)'
      })
    }
  }
}
</script>

<style>
#home {
  box-sizing: border-box;
  border: 1px solid black;
  width: 100%;
  margin: 0 auto 0;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: none;
  overflow: hidden;
}
h1 {
  position: relative;
  z-index: 5;
  margin-top: 50px;
  color: black;
  padding: 10px 20px;
}
.row {
  color: black;
  padding: 0 20px;
  margin-bottom: 10px;
}

img {
  width: 5rem;
}
.a1 {
  margin: 0 auto;
  width: 10%;
}
.aa {
  color: white;
  position: absolute;
  bottom: 20%;
  left: 20%;
  border: none;
}
.ab {
  color: white;
  position: absolute;
  top: 20%;
  right: 20%;
  border: none;
}
.container {
  width: 80%;
  padding: 10rem 0;
  background-color: #111111;
  position: relative;
  border-radius: 20px;
}

.circle {
  position: absolute;
  border-radius: 100%;
}

.circle.circle-purple {
  border: 10px solid #f2eafa;
  opacity: 0.1;
  width: 4vw;
  height: 4vw;
  left: 10%;
  top: 25%;
}

.circle.circle-purple1 {
  border: 15px solid #f2eafa;
  opacity: 0.1;
  width: 8vw;
  height: 8vw;
  right: -2%;
  bottom: 17%;
}
.circle.circle-purple2 {
  background-color: #f2eafa;
  opacity: 0.1;
  width: 5vw;
  height: 5vw;
  left: 20%;
  bottom: 17%;
}

.circle.circle-purple3 {
  border: 15px solid #f2eafa;
  opacity: 0.3;
  width: 3vw;
  height: 3vw;
  top: 80%;
  left: 60%;
}
#cursor {
  background-color: black;
  position: absolute;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  /* transition: 0.1s; */
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99;
}

h1:hover ~ #cursor,
[class|='container']:hover ~ #cursor,
[class|='row']:hover ~ #cursor {
  width: 50px;
  height: 50px;
  border: 5px dotted rgb(0, 0, 0);
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

h1:hover ~ #cursor,
[class|='row']:hover ~ #cursor {
  background-color: rgba(255, 255, 255, 0);
}

[class|='container']:hover ~ #cursor {
  border: 5px dotted rgb(247, 243, 243);
  background-color: rgb(0, 0, 0);
  filter: invert(100%);
  mix-blend-mode: difference;
}
/* -------------------------------------------- */
.face {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgb(9, 173, 152);
  display: flex;
  justify-content: center;
  align-items: center;
}
.eyes {
  position: relative;
  top: -30px;
  display: flex;
}

.eyes .eye {
  position: relative;
  width: 60px;
  height: 60px;
  display: block;
  background: white;
  margin: 0 15px;
  border-radius: 50%;
}
.eyes .eye::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translate(-50%, -50%);
  width: 35px;
  height: 35px;
  background: #333;
  border-radius: 50%;
}
</style>
