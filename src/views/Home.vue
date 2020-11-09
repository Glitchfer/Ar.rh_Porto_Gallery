<template>
  <b-container fluid class="landing">
    <h3>
      Arrh <br />
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
  </b-container>
</template>
<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.landing {
  padding: 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}
.landing h3 {
  text-align: left;
  position: absolute;
  top: 60px;
  left: 30px;
  padding: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
  margin: 0;
  color: rgb(223, 223, 223);
  font-size: 32px;
  font-weight: bold;
  height: 70px;
  /* border: 1px solid rgb(13, 255, 215); */
  box-shadow: inset -1px 1px 1px #06fcb2e7, inset -1px 1px 2px #05fde9ec,
    -1px 1px 7px #f1f1f1ec;
  mix-blend-mode: difference;
}
.landing h3:before {
  content: '';
  width: 235px;
  height: 275px;
  position: absolute;
  top: -92px;
  left: -63px;
  margin: 0;
  border: 1px solid rgb(13, 255, 215);
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.966),
    rgba(0, 0, 0, 0.377)
  );
  mix-blend-mode: multiply;
  transform: rotate(-65deg);
}
.landing h3:after {
  content: '';
  width: 195px;
  height: 95px;
  position: absolute;
  top: -12px;
  left: -10px;
  /* border: 1px solid rgb(13, 255, 215); */
  background-image: linear-gradient(
    135deg,
    rgba(2, 2, 2, 0.966),
    rgba(31, 238, 203, 0.671),
    rgba(2, 2, 2, 0.966)
  );
  mix-blend-mode: overlay;
}
.hero {
  position: absolute;
  top: 50px;
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
  top: 40%;
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
}
.hero img:nth-child(1) {
  margin-top: -55px;
  width: 100%;
  filter: blur(9px);
  transform: scale(2);
}
.hero::before {
  position: absolute;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.178);
  z-index: 1;
  background-image: linear-gradient(
    135deg,
    rgba(2, 2, 2, 0.966),
    rgba(31, 238, 203, 0.377),
    rgba(2, 2, 2, 0.966)
  );
}
</style>
