<template>
  <div id="Navigate" class="Navigate">
    <a
      href="#landing"
      class="rl-1"
      style="marginLeft: 20px; fontWeight: bold; textDecoration: none; "
      @click="navNimate(1)"
      >Home</a
    >
    <a
      href="#about"
      class="rl-2"
      style="marginLeft: 45px; color:   rgb(255, 255, 255); fontWeight: bold; textDecoration: none; "
      @click="navNimate(2)"
      >About
    </a>
    <a
      href="#skill"
      class="rl-3"
      style="marginLeft: 45px; color:   rgb(255, 255, 255); fontWeight: bold; textDecoration: none; "
      @click="navNimate(3)"
      >Skill</a
    >
    <a
      href="#potofolio"
      class="rl-4"
      style="marginLeft: 45px; color:   rgb(255, 255, 255); fontWeight: bold; textDecoration: none; "
      @click="navNimate(4)"
      >Portofolio</a
    >
    <a
      href="#contact"
      class="rl-5"
      style="marginLeft: 45px; color:   rgb(255, 255, 255); fontWeight: bold; textDecoration: none; "
      @click="navNimate(5)"
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
      const selector = document.querySelector('.rl-1:before')
      console.log(selector)
    },
    getScrollNum(event) {
      const roll = document.documentElement.scrollTop
      if (roll > 20) {
        document.getElementById('Navigate').classList.remove('Navigate')
        document.getElementById('Navigate').classList.add('navMotion')
        document.getElementById('Navigate').classList.add('navExpand')
        // document.getElementById('Navigate').classList.toggle('navMotion')
        // document.getElementById('Navigate').style.position = 'fixed'
        // document.getElementById('Navigate').style.mixBlendMode = 'normal'
      } else {
        document.getElementById('Navigate').classList.remove('navMotion')
        document.getElementById('Navigate').classList.remove('navExpand')
        document.getElementById('Navigate').classList.add('Navigate')
        // document.getElementById('Navigate').classList.toggle('Navigate')
        // document.getElementById('Navigate').style.position = 'absolute'
        // document.getElementById('Navigate').style.mixBlendMode = 'overlay'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Navigate {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  color: rgb(255, 255, 255);
  font-size: 16px;
  top: 0;
  right: 0;
  width: 750px;
  height: 70px; /*70 default */
  z-index: 10;
  mix-blend-mode: overlay;
}
.navMotion {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  color: rgb(255, 255, 255);
  font-size: 16px;
  top: 0;
  right: 0;
  width: 750px;
  height: 57px;
  z-index: 10;
  mix-blend-mode: normal;
}
// .navExpand {
//   position: fixed;
//   right: 0;
//   top: 0;
//   width: 100%;
//   height: 57px;
// }
.navMotion:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid rgb(5, 5, 5);
  width: 100%;
  height: 50px;
  // background-color: rgba(0, 0, 0, 0.384);
  mix-blend-mode: difference;
}
.navMotion::after {
  content: '';
  border: 1px solid rgba(0, 255, 179, 0.801);
  border-left: none;
  border-right: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 750px;
  height: 50px;
  // background-color: rgba(0, 0, 0, 0);
  mix-blend-mode: difference;
}
@keyframes scrollMotion {
  0% {
  }
  100% {
  }
}
.rl-1 {
  color: rgb(0, 255, 191);
  font-weight: bolder;
  position: relative;
}
.rl-1:after {
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
}
</style>
