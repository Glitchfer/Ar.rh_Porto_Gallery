<template>
  <div id="Navigate" class="Navigate">
    <a
      href="#landing"
      class="r-1"
      style="marginLeft: 20px;  fontWeight: bold; textDecoration: none; "
      @click="navNimate('home')"
      >Home</a
    >
    <a
      href="#about"
      class="r-2"
      style="marginLeft: 45px;  fontWeight: bold; textDecoration: none; "
      @click="navNimate('about')"
      >About
    </a>
    <a
      href="#Skills"
      class="r-3"
      style="marginLeft: 45px;  fontWeight: bold; textDecoration: none; "
      @click="navNimate('skill')"
      >Skills</a
    >
    <a
      href="#portofolio"
      class="r-4"
      style="marginLeft: 45px;  fontWeight: bold; textDecoration: none; "
      @click="navNimate('porto')"
      >Portofolio</a
    >
    <a
      href="#contact"
      class="r-5"
      style="marginLeft: 45px;  fontWeight: bold; textDecoration: none; "
      @click="navNimate('contact')"
      >Contact</a
    >
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  date() {
    return {}
  },
  mounted() {
    this.$nextTick(function() {
      document.getElementsByTagName('body')[0].onscroll = this.getScrollNum
      // document.getElementsByTagName('body')[0].addEventListener('scroll', this.getScrollNum)
    })

    this.$nextTick(function() {
      document.getElementsByTagName('body')[0].onmousemove = this.navSelect
    })

    if (this.$router.history.current.hash === '#about') {
      document.getElementsByClassName('r-1')[0].classList.remove('rl')
      document.getElementsByClassName('r-2')[0].classList.add('rl-3')
      document.documentElement.style.setProperty('--width-before', '56px')
      document.documentElement.style.setProperty('--width-after', '51px')
    } else if (this.$router.history.current.hash === '#skill') {
      document.getElementsByClassName('r-1')[0].classList.remove('rl')
      document.getElementsByClassName('r-3')[0].classList.add('rl-3')
      document.documentElement.style.setProperty('--width-before', '45px')
      document.documentElement.style.setProperty('--width-after', '41px')
    } else if (this.$router.history.current.hash === '#portofolio') {
      document.getElementsByClassName('r-1')[0].classList.remove('rl')
      document.getElementsByClassName('r-4')[0].classList.add('rl-3')
      document.documentElement.style.setProperty('--width-before', '83px')
      document.documentElement.style.setProperty('--width-after', '79px')
    } else if (this.$router.history.current.hash === '#contact') {
      document.getElementsByClassName('r-1')[0].classList.remove('rl')
      document.getElementsByClassName('r-5')[0].classList.add('rl-3')
      document.documentElement.style.setProperty('--width-before', '68px')
      document.documentElement.style.setProperty('--width-after', '63.5px')
    } else {
      document.getElementsByClassName('r-1')[0].classList.add('rl')
    }

    // ================================================================================================
    // ------cara merubah css variable property
    // document.documentElement.style.setProperty('--blue', 'white')

    // ------cara melihat pseudo element css
    // var element = document.querySelector('#item')
    // var styles = window.getComputedStyle(element, ':after')
    // var content = styles.border
    // console.log(content)
  },
  // beforeDestroy() { window.removeEventListener('resize', this.getPointer)},
  methods: {
    drop: e => {
      const cardId = e.dataTransfer.getData('cardId')
      const card = document.getElementById(cardId)
      card.style.display = 'block'
      e.target.appendChild(card)
    },
    navNimate(val) {
      switch (val) {
        case 'home':
          document.getElementsByClassName('r-1')[0].classList.add('rl')
          document.getElementsByClassName('r-1')[0].classList.remove('rl-1')
          document.getElementsByClassName('r-2')[0].classList.remove('rl-3')
          break
        case 'about':
          document.getElementsByClassName('r-1')[0].classList.remove('rl')
          document.getElementsByClassName('r-2')[0].classList.remove('rl-2')
          document.getElementsByClassName('r-2')[0].classList.add('rl-3')
          document.documentElement.style.setProperty('--width-before', '56px')
          document.documentElement.style.setProperty('--width-after', '51px')
          break
        case 'skill':
          document.getElementsByClassName('r-1')[0].classList.remove('rl')
          document.getElementsByClassName('r-3')[0].classList.remove('rl-2')
          document.getElementsByClassName('r-3')[0].classList.add('rl-3')
          document.documentElement.style.setProperty('--width-before', '45px')
          document.documentElement.style.setProperty('--width-after', '41px')
          break
        case 'porto':
          document.getElementsByClassName('r-1')[0].classList.remove('rl')
          document.getElementsByClassName('r-4')[0].classList.remove('rl-2')
          document.getElementsByClassName('r-4')[0].classList.add('rl-3')
          document.documentElement.style.setProperty('--width-before', '83px')
          document.documentElement.style.setProperty('--width-after', '79px')
          break
        case 'contact':
          document.getElementsByClassName('r-1')[0].classList.remove('rl')
          document.getElementsByClassName('r-5')[0].classList.remove('rl-2')
          document.getElementsByClassName('r-5')[0].classList.add('rl-3')
          document.documentElement.style.setProperty('--width-before', '68px')
          document.documentElement.style.setProperty('--width-after', '63.5px')
          break
      }
    },
    getScrollNum(event) {
      const roll = document.documentElement.scrollTop
      this.$emit('scrolled', roll)
      if (roll > 20) {
        document.getElementById('Navigate').classList.remove('Navigate')
        document.getElementById('Navigate').classList.add('navMotion')
      } else {
        document.getElementById('Navigate').classList.remove('navMotion')
        document.getElementById('Navigate').classList.add('Navigate')
      }
    },
    navSelect(event) {
      if (event.clientX > 545 && event.clientX < 605 && event.clientY < 65) {
        document.getElementsByClassName('r-2')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-3')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-4')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-5')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-1')[0].classList.add('rl-1')
        document.documentElement.style.setProperty('--width-before', '55px')
        document.documentElement.style.setProperty('--width-after', '50px')
      } else if (
        event.clientX > 635 &&
        event.clientX < 691 &&
        event.clientY < 65
      ) {
        document.getElementsByClassName('r-1')[0].classList.remove('rl')
        document.getElementsByClassName('r-3')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-4')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-5')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-2')[0].classList.add('rl-2')
        document.documentElement.style.setProperty('--width-before', '56px')
        document.documentElement.style.setProperty('--width-after', '51px')
      } else if (
        event.clientX > 727 &&
        event.clientX < 781 &&
        event.clientY < 65
      ) {
        document.getElementsByClassName('r-1')[0].classList.remove('rl')
        document.getElementsByClassName('r-2')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-4')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-5')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-3')[0].classList.add('rl-2')
        document.documentElement.style.setProperty('--width-before', '45px')
        document.documentElement.style.setProperty('--width-after', '41px')
      } else if (
        event.clientX > 804 &&
        event.clientX < 880 &&
        event.clientY < 65
      ) {
        document.getElementsByClassName('r-1')[0].classList.remove('rl')
        document.getElementsByClassName('r-2')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-3')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-5')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-4')[0].classList.add('rl-2')
        document.documentElement.style.setProperty('--width-before', '83px')
        document.documentElement.style.setProperty('--width-after', '79px')
      } else if (
        event.clientX > 923 &&
        event.clientX < 983 &&
        event.clientY < 65
      ) {
        document.getElementsByClassName('r-1')[0].classList.remove('rl')
        document.getElementsByClassName('r-2')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-3')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-4')[0].classList.remove('rl-3')
        document.getElementsByClassName('r-5')[0].classList.add('rl-2')
        document.documentElement.style.setProperty('--width-before', '68px')
        document.documentElement.style.setProperty('--width-after', '63.5px')
      } else {
        document.getElementsByClassName('r-1')[0].classList.remove('rl-1')
        document.getElementsByClassName('r-2')[0].classList.remove('rl-2')
        document.getElementsByClassName('r-3')[0].classList.remove('rl-2')
        document.getElementsByClassName('r-4')[0].classList.remove('rl-2')
        document.getElementsByClassName('r-5')[0].classList.remove('rl-2')
        if (this.$router.history.current.hash === '#about') {
          document.getElementsByClassName('r-2')[0].classList.add('rl-3')
          document.documentElement.style.setProperty('--width-before', '56px')
          document.documentElement.style.setProperty('--width-after', '51px')
        } else if (this.$router.history.current.hash === '#skill') {
          document.getElementsByClassName('r-3')[0].classList.add('rl-3')
          document.documentElement.style.setProperty('--width-before', '45px')
          document.documentElement.style.setProperty('--width-after', '41px')
        } else if (this.$router.history.current.hash === '#portofolio') {
          document.getElementsByClassName('r-4')[0].classList.add('rl-3')
          document.documentElement.style.setProperty('--width-before', '83px')
          document.documentElement.style.setProperty('--width-after', '79px')
        } else if (this.$router.history.current.hash === '#contact') {
          document.getElementsByClassName('r-5')[0].classList.add('rl-3')
          document.documentElement.style.setProperty('--width-before', '68px')
          document.documentElement.style.setProperty('--width-after', '63.5px')
        } else {
          document.getElementsByClassName('r-1')[0].classList.add('rl')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
:root {
  --move-x-c1: 0;
  --move-x-c2: 0;
  --width-before: 0px;
  --width-after: 0px;
}

.Navigate {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  font-size: 16px;
  top: 0;
  right: 0;
  width: 750px;
  height: 70px; /*70 default */
  z-index: 10;
  mix-blend-mode: difference;
}
.Navigate a {
  color: rgb(0, 255, 200);
}
.navMotion {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  font-size: 16px;
  top: 0;
  right: 0;
  width: 750px;
  height: 57px;
  z-index: 10;
  mix-blend-mode: normal;
  animation: scrollMotion 1s ease 1 forwards;
}
.navMotion a {
  color: rgb(0, 255, 200);
}
.navMotion:before {
  content: '';
  position: absolute;
  border-radius: 0 0 0 50px;
  top: 0;
  left: 0;
  border: 1px solid rgb(5, 5, 5);
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.363);
  mix-blend-mode: difference;
  animation: scrollMotion 1s ease 1 forwards;
}
.navMotion::after {
  content: '';
  border: 1px solid rgba(0, 255, 179, 0.801);
  border-left: none;
  border-right: none;
  position: absolute;
  border-radius: 0 0 0 50px;
  top: 0;
  left: 0;
  width: 750px;
  height: 50px;
  background-image: linear-gradient(
    135deg,
    rgb(2, 2, 2),
    rgba(31, 238, 203, 0.979),
    rgb(2, 2, 2)
  );
  mix-blend-mode: overlay;
  z-index: 1;
  animation: scrollMotion 1s ease 1 forwards;
}
@keyframes scrollMotion {
  0% {
    opacity: 0;
    height: 20px;
  }
  100% {
    opacity: 1;
    height: 50px;
  }
}
@keyframes navMotions {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.rl-1 {
  color: rgb(0, 255, 191);
  font-weight: bolder;
  position: relative;
  z-index: 10;
}
.rl-1::after {
  content: '';
  position: absolute;
  top: 0;
  left: 5px;
  width: 50px;
  height: 50px;
  background-color: rgba(250, 250, 250, 0.897);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: overlay;
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.966),
    rgba(0, 0, 0, 0.377)
  );
  z-index: 10;
  animation: showInAfter 0.5s ease 1 forwards;
}
.rl-1:before {
  content: '';
  position: absolute;
  top: -10px;
  left: -5px;
  width: 55px;
  height: 55px;
  background-color: rgb(0, 0, 0);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: difference;
  z-index: 10;
  transition: 1s ease-in;
  animation: showInBefore 1s ease 1 forwards;
}
@keyframes showInAfter {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 50px;
    height: 50px;
  }
}
@keyframes showInBefore {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 55px;
    height: 55px;
  }
}
// ---------------------------------
.rl-2 {
  color: rgb(0, 255, 191);
  font-weight: bolder;
  position: relative;
  z-index: 10;
}
.rl-2::after {
  content: '';
  position: absolute;
  top: 0;
  left: 5px;
  width: var(--width-after);
  height: 50px;
  background-color: rgba(250, 250, 250, 0.897);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: overlay;
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.966),
    rgba(0, 0, 0, 0.377)
  );
  z-index: 10;
  animation: rl2InAfter 0.5s ease 1 forwards;
}
.rl-2:before {
  content: '';
  position: absolute;
  top: -10px;
  left: -5px;
  width: var(--width-before);
  height: 55px;
  background-color: rgb(0, 0, 0);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: difference;
  z-index: 10;
  transition: 1s ease-in;
  animation: rl2InBefore 1s ease 1 forwards;
}
@keyframes rl2InAfter {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: var(--width-after);
    height: 50px;
  }
}
@keyframes rl2InBefore {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: var(--width-before);
    height: 55px;
  }
}
// ------------------------------
.rl {
  color: rgb(0, 255, 191);
  font-weight: bolder;
  position: relative;
  z-index: 10;
}
.rl::after {
  content: '';
  position: absolute;
  top: 0;
  left: 5px;
  width: 50px;
  height: 50px;
  background-color: rgba(250, 250, 250, 0.897);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: overlay;
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.966),
    rgba(0, 0, 0, 0.377)
  );
  z-index: 10;
  animation: showAfter 0.5s ease 1 forwards;
}
.rl:before {
  content: '';
  position: absolute;
  top: -10px;
  left: -5px;
  width: 55px;
  height: 55px;
  background-color: rgb(0, 0, 0);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: difference;
  z-index: 10;
  transition: 1s ease-in;
  animation: showBefore 1s ease 1 forwards;
}
@keyframes showAfter {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 50px;
    height: 50px;
  }
}
@keyframes showBefore {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 55px;
    height: 55px;
  }
}
// ---------------------------------
.rl-3 {
  color: rgb(0, 255, 191);
  font-weight: bolder;
  position: relative;
  z-index: 10;
}
.rl-3::after {
  content: '';
  position: absolute;
  top: 0;
  left: 5px;
  width: var(--width-after);
  height: 50px;
  background-color: rgba(250, 250, 250, 0.897);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: overlay;
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.966),
    rgba(0, 0, 0, 0.377)
  );
  z-index: 10;
  animation: rl3InAfter 0.5s ease 1 forwards;
}
.rl-3:before {
  content: '';
  position: absolute;
  top: -10px;
  left: -5px;
  width: var(--width-before);
  height: 55px;
  background-color: rgb(0, 0, 0);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: difference;
  z-index: 10;
  transition: 1s ease-in;
  animation: rl3InBefore 1s ease 1 forwards;
}
@keyframes rl3InAfter {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: var(--width-after);
    height: 50px;
  }
}
@keyframes rl3InBefore {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: var(--width-before);
    height: 55px;
  }
}
</style>
