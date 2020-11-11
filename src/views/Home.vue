<template>
  <b-container fluid class="landing">
    <!-- <nav> -->
    <Navigate />
    <!-- </nav> -->
    <h3>
      My <br />
      GALLERY
    </h3>
    <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="hero">
      <img src="../assets/img/arrr.jpg" alt="" />
      <img src="../assets/img/ar.png" alt="" />
      <h1>
        Hi_ my name <br />
        Arif Rahman
      </h1>
    </b-col>
    <!-- <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="aboutMe"> -->
    <div class="satu">
      <a href="#">About me</a>
    </div>
    <div class="dua">
      <a href="#">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ad, rem
        eos perferendis id dignissimos corrupti autem facere voluptate dicta a
        repudiandae totam voluptates natus fugit quis corporis minus!
        Temporibus.
      </a>
    </div>
    <!-- </b-col> -->
  </b-container>
</template>
<script>
import Navigate from '../components/Navigation'
export default {
  name: 'Home',
  data() {
    return {}
  },
  components: {
    Navigate
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
.landing {
  position: relative;
  padding: 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
.landing::before {
  content: '';
  width: 100%;
  height: 31.5rem;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.781);
  mix-blend-mode: overlay;
  z-index: 2;
}
.landing h3 {
  text-align: left;
  position: absolute;
  top: 20px;
  right: 30px;
  padding: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
  margin: 0;
  color: rgb(5, 253, 220);
  font-size: 32px;
  font-weight: bold;
  height: 70px;
  mix-blend-mode: difference;
}
.landing h3:before {
  padding: 10px 0 0 20px;
  content: 'welcome to';
  width: 235px;
  height: 275px;
  position: absolute;
  top: -92px;
  left: -63px;
  font-size: 16px;
  color: rgba(13, 255, 215, 0.473);
  margin: 0;
  border: 1px solid rgba(13, 255, 215, 0.808);
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.966),
    rgba(0, 0, 0, 0.377)
  );

  box-shadow: inset 1px 1px 5px rgba(13, 255, 215, 0.74),
    inset -1px -1px 3px rgba(13, 255, 215, 0.863);
  mix-blend-mode: multiply;
  transform: rotate(-65deg);
}
.landing h3:after {
  content: '';
  width: 45rem;
  height: 95px;
  position: absolute;
  top: 35px;
  right: -10px;
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: multiply;
  border-right: none;
  border-left: none;
  border-bottom: none;
}
.hero {
  position: relative;
  top: 0;
  width: 100%;
  height: 35rem;
  margin: 0;
  padding: 0;
  text-align: left;
  overflow: hidden;
}
.hero h1 {
  position: absolute;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  line-height: 80px;
  font-size: 62px;
  top: 45%;
  right: 18%;
  z-index: 1;
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: overlay;
}
.hero h1:after {
  content: '';
  width: 135px;
  height: 120px;
  position: absolute;
  bottom: -30px;
  right: -35px;
  background-color: rgba(9, 107, 78, 0.432);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: overlay;
}
.hero h1:before {
  content: '';
  width: 155px;
  height: 130px;
  position: absolute;
  top: -30px;
  left: -35px;
  background-color: rgb(22, 22, 22);
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: difference;
}
.hero img:nth-child(2) {
  position: absolute;
  left: 10%;
  width: 40%;
  filter: brightness(110%) contrast(250%);
}
.hero img:nth-child(1) {
  margin-top: -55px;
  width: 100%;
  height: 35rem;
  filter: blur(9px);
  transform: scale(2);
}
.hero::before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 35rem;
  background-color: rgba(0, 0, 0, 0.178);
  z-index: 1;
  background-image: linear-gradient(
    135deg,
    rgba(2, 2, 2, 0.966),
    rgba(31, 238, 203, 0.377),
    rgba(2, 2, 2, 0.966)
  );
}
.satu {
  margin-top: 100px;
  cursor: pointer;
}
.satu:hover ~ .dua {
  background-color: rgb(31, 238, 203);
  color: black;
}
</style>
