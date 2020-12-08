<template>
  <div id="Skills" class="skills" @mousemove="skillCoordinate">
    <h1 v-if="text === ''">TECHNICAL <br />SKILLS</h1>
    <h2 class="oth" v-else>{{ text }}</h2>
    <h5 style="position:absolute; top:0; left:0; display:none;">
      <!-- {{ getScrollDistance }} -->
    </h5>
    <span class="q"></span>
    <div class="layer1"></div>
    <div class="icon">
      <div v-if="onBasic === true">
        <div class="elm" v-for="(item, index) in basic" :key="index">
          <div class="kin">
            <img
              :src="require(`../assets/img/${item.path}`)"
              :alt="item.path"
            />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>

      <div v-if="onBasicFilter === true">
        <div class="elm" v-for="(item, index) in basicFilter" :key="index">
          <div class="kin">
            <img
              :src="require(`../assets/img/${item.path}`)"
              :alt="item.path"
            />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>

      <div v-if="onLearn === true">
        <div class="elm" v-for="(item, index) in learn" :key="index">
          <div class="kin">
            <img
              :src="require(`../assets/img/${item.path}`)"
              :alt="item.path"
            />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="skillOptions" style="position: absolute; right: 0; zIndex: 6;">
      <button @click="skillFilter('main')">Tch</button>
      <button @click="skillFilter('basic')">Bsc</button>
      <button @click="skillFilter('learn')">Lrn</button>
      <button @click="skillFilter('support')">Oth</button>
      <!-- <button @click="skillFilter('others')">Others</button> -->
    </div>
    <div class="random-toggle" style="zIndex:6;">
      <p>Random</p>
      <button class="btn-rndm" @click="randomActive('on')">On</button>
      <button class="btn-rndm" @click="randomActive('on')">Off</button>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'Skills',
  components: {},
  data() {
    return {
      text: '',
      scrollDistance: 0,
      x: 0,
      y: 0,
      basicFilter: [],
      basic: [
        {
          path: 'html.png',
          name: 'HTML',
          type: 'basic'
        },
        {
          path: 'css3.png',
          name: 'CSS',
          type: 'basic'
        },
        {
          path: 'js.png',
          name: 'Javascript',
          type: 'basic'
        },
        {
          path: 'vueIcon.png',
          name: 'Vuejs',
          type: 'basic'
        },
        {
          path: 'nodeJs.png',
          name: 'Nodejs',
          type: 'basic'
        },
        {
          path: 'express.png',
          name: 'Expressjs',
          type: 'basic'
        },
        {
          path: 'bootstrap-4.png',
          name: 'Bootstrap',
          type: 'support'
        },
        {
          path: 'mysql.png',
          name: 'MySQL',
          type: 'basic'
        },
        {
          path: 'aws(1).png',
          name: 'AWS',
          type: 'support'
        },
        {
          path: 'git(1).png',
          name: 'GIT',
          type: 'support'
        },
        {
          path: 'redis.png',
          name: 'Redis',
          type: 'support'
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
      others: [
        {
          path: 'react-js.png',
          name: 'MS Word'
        },
        {
          path: 'react-js.png',
          name: 'MS Excell'
        },
        {
          path: 'react-js.png',
          name: 'MS Power Point'
        },
        {
          path: 'react-js.png',
          name: 'Photoshop'
        },
        {
          path: 'react-js.png',
          name: 'Vegas Pro'
        },
        {
          path: 'react-js.png',
          name: 'Blender'
        }
      ],
      divs: document.getElementsByClassName('elm'),
      kin: document.getElementsByClassName('kin'),
      divWidth: 0,
      divHeight: 0,
      randomPalcement: false,
      onBasic: true,
      onBasicFilter: false,
      onLearn: false
    }
  },
  mounted() {
    this.divWidth = document.querySelector('.icon').offsetWidth - 120
    this.divHeight = document.querySelector('.icon').offsetHeight - 150

    if (this.randomPalcement === true) {
      // var objects = []
      // var protect = 0
      // // for (var i = 0; i < 11; i++) {
      // while (objects.length < 11) {
      //   const randomX = Math.floor(Math.random() * (this.divWidth - 0) + 0)
      //   const randomY = Math.floor(Math.random() * (this.divHeight - 0) + 0)
      //   const radius = 100
      //   var object = {
      //     x: randomX,
      //     y: randomY,
      //     radius: radius
      //   }
      //   var overlapping = false
      //   for (var j = 0; j < objects.length; j++) {
      //     var other = objects[j]
      //     var dist = this.distance(object.x, object.y, other.x, other.y)
      //     if (dist - radius * 2 < 0) {
      //       overlapping = true
      //     }
      //   }
      //   if (!overlapping) {
      //     objects.push(object)
      //   }
      //   protect++
      //   if (protect > 200000) {
      //     break
      //   }
      // }
      // for (var l = 0; l < objects.length; l++) {
      //   this.divs[l].style.left = objects[l].x + 'px'
      //   this.divs[l].style.top = objects[l].y + 'px'
      // }
    } else {
      this.setPosition()
    }
  },
  updated() {
    this.setPosition()
  },
  computed: {},
  methods: {
    randomActive(value) {
      if (value === 'on') {
        alert('this feature is disabled')
      } else {
        alert('this feature is disabled')
      }
    },
    skillFilter(value) {
      switch (value) {
        case 'main':
          this.onBasic = true
          this.onBasicFilter = false
          this.onLearn = false
          this.text = ''
          break

        case 'basic':
          this.onBasic = false
          this.onBasicFilter = true
          this.onLearn = false
          this.text = 'BASIC SKILLS'

          break

        case 'support':
          this.onBasic = false
          this.onBasicFilter = true
          this.onLearn = false
          this.text = 'OTHERS'
          break

        case 'learn':
          this.onBasic = false
          this.onBasicFilter = false
          this.onLearn = true
          this.text = 'WILLING TO LEARN'
          break

        case 'others':
          alert('Under Development')
          break
      }
      if (value === 'basic' || value === 'support') {
        var arr = this.basic.filter(function(item) {
          return item.type === value
        })

        this.basicFilter = arr
      }

      this.setPosition()
    },
    setPosition() {
      if (this.randomPalcement === false) {
        let distance = 3
        for (let i = 0; i < this.divs.length; i++) {
          if (i % 2 === 0) {
            this.divs[i].style.top = 60 + '%'
          } else {
            this.divs[i].style.top = 15 + '%'
          }
          this.divs[i].style.left = distance + '%'
          distance += 8
        }
      }
    },
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
      // pindahan dari mounted
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
.random-toggle {
  display: flex;
  position: absolute;
  background: rgba(255, 255, 255, 0.514);
  top: 25px;
  right: 150px;
  padding: 5px 5px 5px 10px;
  border-radius: 5px;
}
.random-toggle p {
  position: relative;
  top: 3px;
  margin: 0 5px 5px 0;
  color: #0169604f;
}
.random-toggle .btn-rndm {
  border-radius: 10px;
  background: #08dfcd11;
  color: #0169604f;
  width: 40px;
  height: 30px;
  font-size: 12px;
  margin-right: 5px;
  border: 1px solid black;
  box-shadow: 0px 0px 3px rgba(60, 124, 110, 0.562), 0px 0px 3px #00998c3d,
    0px 0px 3px #02c5a552;
}
.random-toggle .btn-rndm {
  outline: none;
  border: none;
}
.random-toggle .btn-rndm:hover {
  background: #08dfcdc5;
  color: #092b28be;
}
.random-toggle .btn-rndm:active {
  border: 2px solid black;
  color: white;
}

#Skills {
  background-color: rgb(255, 255, 255);
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
  z-index: 6;
}

#Skills .oth {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgba(237, 243, 243, 0.452);
  position: absolute;
  right: 100px;
  top: 100px;
  width: 700px;
  font-size: 92px;
  font-weight: bold;
  text-align: right;
  letter-spacing: 20px;
  // transform: rotateZ(-90deg);
  filter: drop-shadow(-3px -3px 2px rgba(241, 241, 241, 0.534))
    drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2))
    drop-shadow(15px 15px 15px rgba(0, 0, 0, 0.2));
  z-index: 6;
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
  background-color: rgba(161, 161, 161, 0.459);
  background-image: linear-gradient(
    90deg,
    rgba(157, 161, 160, 0.726),
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
    rgba(218, 250, 242, 0.582),
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
  box-shadow: inset -2px -2px 10px rgba(60, 124, 110, 0.562),
    inset -2px -2px 5px #05534d3d, inset -2px -2px 5px #0b645552;
}
.icon .elm {
  position: absolute;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  top: 0;
  left: 0;
  width: 120px;
  height: 145px;
  box-sizing: border-box;
}
.icon .elm::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 15px;
}
.icon .elm p {
  position: relative;
  top: 10px;
  width: 90px;
  border-radius: 5px;
  box-shadow: inset 0 0px 3px rgba(1, 121, 101, 0.5),
    inset 0 0px 5px rgba(1, 121, 101, 0.5);
  filter: drop-shadow(4px 4px 2px rgba(1, 121, 101, 0.548));
  transform: scale(0.8);
}
.icon .elm img {
  filter: drop-shadow(4px 4px 2px rgba(1, 121, 101, 0.548));
  width: 90px;
  height: 90px;
  // transform: scale(0.1);
}
.icon .elm img {
  animation: ctn ease-in-out 3s alternate infinite;
  // animation-delay: 3s;
}
.bounce-out {
  animation: bounceOut ease-in 3s 1 forwards;
}
.fade-in {
  animation: scaleOut ease-in 3s 1 forwards;
}
@keyframes bounceOut {
  0% {
    transform: scale(0);
  }
  70% {
    transform: scale(0.5);
  }
  80% {
    transform: scale(1.5);
  }
  90% {
    transform: scale(1);
  }
  95% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
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

.icon .kin {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 0.1);
  top: 0;
  left: 0;
  width: 120px;
  height: 145px;
  box-sizing: border-box;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2),
    inset -3px 0px 5px rgba(121, 197, 181, 0.562), inset -3px 0px 6px #00998c3d,
    inset -3px 0px 6px #02c5a552;
}
.icon .kin::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 15px;
  background: linear-gradient(
    -65deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0.1) 5%,
    transparent 50%,
    transparent 65%,
    rgba(255, 255, 255, 0.4) 100%
  );
}

.skillOptions {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 40%;
  height: 130px;
  width: 35px;
}
.skillOptions button {
  background: #ffffff;
  color: #0169604f;
  border: 1px solid rgb(255, 255, 255);
  text-align: left;
  width: 150px;
  overflow: hidden;
  box-shadow: 0px 0px 3px rgba(60, 124, 110, 0.562), 0px 0px 3px #00998c3d,
    0px 0px 3px #02c5a552;
}

.skillOptions button {
  outline: none;
  border: none;
}
.skillOptions button:hover {
  background: #08dfcdc5;
  color: #092b28be;
}
.skillOptions button:active {
  border: px solid black;
  color: white;
}
</style>
