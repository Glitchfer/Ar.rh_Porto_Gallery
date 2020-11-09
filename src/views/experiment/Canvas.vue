<template>
  <div class="canvas" @mousemove="newPointer">
    <NavExp />
    <br />
    <br />
    <br />
    <h1>
      MAKE YOUR OWN EXPERIMENT HERE
    </h1>
    <hr style="color: white; position:relative; zIndex:2;" />
    <h2>Drag and Drop</h2>
    <div id="container">
      <div id="item">
        <div class="face">
          <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="cursor" :style="{ left: `${x}px`, top: `${y}px` }"></div>
  </div>
</template>

<script>
import NavExp from '../../components/expCompt/NavExp'
export default {
  name: 'Canvas',
  props: {},
  data() {
    return {
      container: document.getElementsByClassName('canvas')[0],
      cursor: document.getElementById('cursor'),
      x: 0,
      y: 0
    }
  },
  components: {
    NavExp
  },
  watch: {},
  mounted() {
    document.querySelector('body').addEventListener('mousemove', eyeball)
    function eyeball() {
      var eye = document.querySelectorAll('.eye')
      eye.forEach(function(eye) {
        const x = eye.getBoundingClientRect().left + eye.clientWidth / 2
        const y = eye.getBoundingClientRect().top + eye.clientHeight / 2
        const radian = Math.atan2(event.pageX - x, event.pageY - y)
        const rot = radian * (180 / Math.PI) * -1 + 270
        eye.style.transform = 'rotate(' + rot + 'deg)'
      })
    }
  },
  methods: {
    newPointer(event) {
      this.x = event.clientX
      this.y = event.clientY
      // ---------------------
    }
  }
}
</script>

<style lang="scss" scoped>
$ease: cubic-bezier(0.23, 1, 0.32, 1);

.canvas {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  cursor: none;
}
h1 {
  color: white;
  margin: 0;
  padding: 10px;
}
h2 {
  color: rgb(197, 33, 197);
  padding: 10px;
  border: 1px solid rgb(197, 33, 197);
}

hr {
  width: 90%;
  border: 0.5px solid white;
}
#container {
  padding: 50px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  touch-action: none;
}
#item {
  width: 210px;
  height: 210px;
  background-color: rgb(245, 230, 99);
  border-radius: 50%;
  touch-action: none;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
// ----------------------------------------
#cursor {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgb(255, 252, 252);
  box-sizing: border-box;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
}

h1:hover ~ #cursor,
h2:hover ~ #cursor {
  width: 50px;
  height: 50px;
  animation: animate 3s linear infinite;
}
#container:hover ~ #cursor {
  width: 250px;
  height: 250px;
  transition: 0.1s;
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
h2:hover ~ #cursor,
#container:hover ~ #cursor {
  background-color: rgb(0, 0, 0);
  filter: invert(100%);
  mix-blend-mode: difference;
}

// // ----------------------------------------

.face {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: greenyellow;
  display: flex;
  justify-content: center;
  align-items: center;
}
.face::before {
  content: '';
  position: absolute;
  top: 130px;
  width: 110px;
  height: 50px;
  background: #b57700;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  transition: 0.5s;
}
.face::after {
  content: '';
  position: absolute;
  top: 130px;
  width: 70px;
  height: 50px;
  background: #8a0505;
  border-radius: 20px 20px 70px 70px;
  transition: 0.5s;
}
.face:hover::before {
  top: 160px;
  width: 110px;
  height: 20px;
  border-bottom-left-radius: 00px;
  border-bottom-right-radius: 00px;
}
.face:hover::after {
  top: 160px;
  width: 80px;
  height: 20px;
  border-radius: 20px 20px 70px 70px;
}
.face:active::before {
  top: 155px;
  width: 60px;
  height: 30px;
  border-radius: 25% 25% 50% 50%;
}
.face:active::after {
  top: 160px;
  width: 50px;
  height: 50px;
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
