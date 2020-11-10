<template>
  <div id="Navigate">
    <a
      href="#landing"
      class="rl-1"
      style="marginLeft: 20px; fontWeight: bold; textDecoration: none; "
      >Home</a
    >
    <a
      href="#about"
      class="rl-2"
      style="marginLeft: 45px; color:   rgb(255, 255, 255); fontWeight: bold; textDecoration: none; "
      >About
    </a>
    <a
      href="#skill"
      class="rl-3"
      style="marginLeft: 45px; color:   rgb(255, 255, 255); fontWeight: bold; textDecoration: none; "
      >Skill</a
    >
    <a
      href="#potofolio"
      class="rl-4"
      style="marginLeft: 45px; color:   rgb(255, 255, 255); fontWeight: bold; textDecoration: none; "
      >Portofolio</a
    >
    <a
      href="#contact"
      class="rl-5"
      style="marginLeft: 45px; color:   rgb(255, 255, 255); fontWeight: bold; textDecoration: none; "
      >Contact</a
    >
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    drop: e => {
      const cardId = e.dataTransfer.getData('cardId')
      const card = document.getElementById(cardId)
      card.style.display = 'block'
      e.target.appendChild(card)
    }
  }
}
</script>

<style scoped>
#Navigate {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  color: rgb(255, 255, 255);
  font-size: 16px;
  top: 0;
  right: 0;
  width: 750px;
  height: 70px;
  z-index: 10;
  mix-blend-mode: overlay;
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
