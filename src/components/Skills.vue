<template>
  <div id="Skills" class="skills" @mousemove="skillCoordinate">
    <h1>TECHNICAL <br />SKILLS</h1>
    <span class="q"></span>
    <div class="layer1"></div>
    <kinesis-container class="icon" :duration="Number(15000)">
      <kinesis-element
        class="elm"
        :strength="Math.random() * (30 - -30) + -30"
        v-for="(item, index) in basic"
        :key="index"
      >
        <img :src="require(`../assets/img/${item.path}`)" :alt="item.path" />
        <p>{{ item.name }}</p>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  components: {},
  data() {
    return {
      x: 0,
      y: 0,
      basic: [
        {
          path: 'html.png',
          name: 'HTML'
        },
        {
          path: 'css3.png',
          name: 'CSS'
        },
        {
          path: 'js.png',
          name: 'Javascript'
        },
        {
          path: 'vueIcon.png',
          name: 'Vuejs'
        },
        {
          path: 'nodeJs.png',
          name: 'Nodejs'
        },
        {
          path: 'express.png',
          name: 'Expressjs'
        },
        {
          path: 'bootstrap-4.png',
          name: 'Bootstrap'
        },
        {
          path: 'mysql.png',
          name: 'MySQL'
        },
        {
          path: 'aws(1).png',
          name: 'AWS'
        },
        {
          path: 'git(1).png',
          name: 'GIT'
        },
        {
          path: 'redis.png',
          name: 'Redis'
        }
      ],
      learn: [
        {
          path: 'react-js.png',
          name: 'React'
        },
        {
          path: 'python.png',
          name: 'Python'
        },
        {
          path: 'Golang.png',
          name: 'Go'
        }
      ],
      divs: document.getElementsByClassName('elm'),
      divWidth: 0,
      divHeight: 0
    }
  },
  mounted() {
    // console.log(this.distance(100, 150, 110, 150))
    this.divWidth = document.querySelector('.icon').offsetWidth - 120
    this.divHeight = document.querySelector('.icon').offsetHeight - 150

    var objects = []
    var protect = 0
    // for (var i = 0; i < 11; i++) {
    while (objects.length < 11) {
      const randomX = Math.floor(Math.random() * (this.divWidth - 0) + 0)
      const randomY = Math.floor(Math.random() * (this.divHeight - 0) + 0)
      const radius = 100
      var object = {
        x: randomX,
        y: randomY,
        radius: radius
      }

      var overlapping = false
      for (var j = 0; j < objects.length; j++) {
        var other = objects[j]
        var dist = this.distance(object.x, object.y, other.x, other.y)
        if (dist - radius * 2 < 0) {
          overlapping = true
        }
      }

      if (!overlapping) {
        objects.push(object)
      }

      protect++
      console.log(protect)
      if (protect > 200000) {
        break
      }
    }

    for (var l = 0; l < objects.length; l++) {
      this.divs[l].style.left = objects[l].x + 'px'
      this.divs[l].style.top = objects[l].y + 'px'
    }
    console.log(objects)
  },
  methods: {
    skillCoordinate: function(event) {
      this.x = event.clientX
      this.y = event.clientY
      // <325 >620
    },
    distance(x1, y1, x2, y2) {
      const xDist = x2 - x1
      const yDist = y2 - y1
      return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
    },
    xDistance(x1, x2) {
      const xDist = x2 - x1
      return xDist
    },
    yDistance(y1, y2) {
      const yDist = y2 - y1
      return yDist
    },
    randomDiv() {
      // var particles = []
      // for (var i = 0; i < 4; i++) {
      //   let randomX = Math.floor(Math.random() * (this.divWidth - 0) + 0)
      //   let randomY = Math.floor(Math.random() * (this.divHeight - 0) + 0)
      //   const radius = 140
      //   if (i !== 0) {
      //     for (let j = 0; j < particles.length; j++) {
      //       if (
      //         this.distance(randomX, randomY, particles[j].x, particles[j].y) -
      //           radius * 2 <
      //         0
      //       ) {
      //         console.log(
      //           this.distance(randomX, randomY, particles[j].x, particles[j].y) -
      //             radius * 2
      //         )
      //         randomX = Math.floor(Math.random() * (this.divWidth - 0) + 0)
      //         randomY = Math.floor(Math.random() * (this.divHeight - 0) + 0)
      //         j = -1
      //       }
      //     }
      //   }
      //   this.divs[i].style.left = randomX + 'px'
      //   this.divs[i].style.top = randomY + 'px'
      //   particles.push({ x: randomX, y: randomY, radius: radius })
      // }
      // console.log(particles.length)
    }
  }
}
</script>

<style lang="scss" scoped>
#Skills {
  // background: rgb(255, 255, 25s
  background-color: rgb(255, 255, 255);
  // background-image: linear-gradient(
  //   90deg,
  //   rgba(255, 255, 255, 0.726),
  //   rgba(0, 219, 219, 0.534)
  // );
  // mix-blend-mode: difference;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  z-index: 1;
  box-sizing: border-box;
  overflow: hidden;
  box-shadow: -2px -2px 20px rgba(60, 124, 110, 0.562), -2px -2px 20px #00998c3d,
    -2px -2px 20px #02c5a552;
}
#Skills h1:nth-child(1) {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgba(237, 243, 243, 0.452);
  position: relative;
  left: -230px;
  top: -130px;
  font-size: 102px;
  font-weight: bold;
  letter-spacing: 20px;
  // transform: rotateZ(-90deg);
  filter: drop-shadow(-3px -3px 2px rgba(241, 241, 241, 0.534))
    drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
    drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2));
}
#Skills .q {
  position: absolute;
  top: -150px;
  left: -60%;
  width: 1500px;
  height: 1500px;
  border-radius: 50%;
  border: 311px solid rgba(255, 255, 255, 0.336);
  z-index: 3;
  mix-blend-mode: overlay;
}
.layer1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(0, 255, 200);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.726),
    rgba(0, 219, 219, 0.116)
  );
}
.layer1:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background-image: linear-gradient(
    125deg,
    rgba(4, 19, 16, 0.014),
    rgba(31, 238, 203, 0.582),
    rgba(0, 0, 0, 0.021)
  );
  mix-blend-mode: saturation;
  z-index: 6;
}
.icon {
  margin-left: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  // top: 50%;
  bottom: 20px;
  left: 20px;
  width: 90%;
  // height: 300px;
  height: 85%;
  z-index: 6;
  overflow: hidden;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.199);
  box-shadow: inset -2px -2px 20px rgba(60, 124, 110, 0.562),
    inset -2px -2px 20px #00998c3d, inset -2px -2px 20px #02c5a552;
}
.icon .elm {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.274);
  top: 0;
  left: 0;
  width: 120px;
  height: 145px;
  box-sizing: border-box;
  box-shadow: inset -3px 0px 5px rgba(121, 197, 181, 0.562),
    inset -3px 0px 6px #00998c3d, inset -3px 0px 6px #02c5a552;
}
.icon .elm img {
  filter: drop-shadow(4px 4px 2px rgba(1, 121, 101, 0.548));
  width: 90px;
  height: 90px;
  // transform: scale(0.1);
}
.icon .elm img {
  animation: ctn ease-in-out 3s alternate infinite;
  animation-delay: 3s;
}
@keyframes bounce {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(0.5);
  }
  80% {
    transform: scale(1.5);
  }
  85% {
    transform: scale(1);
  }
  90% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes ctn {
  0% {
    filter: drop-shadow(4px 4px 2px rgba(1, 121, 101, 0.548));
    transform: scale(0.8);
  }
  100% {
    filter: drop-shadow(10px 10px 2px rgba(1, 121, 101, 0.548));
    transform: scale(1);
  }
}
</style>
