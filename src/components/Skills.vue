<template>
  <div id="Skills" class="skills">
    <h1>TECHNICAL <br />SKILLS</h1>
    <span></span>
    <div class="layer1"></div>
    <kinesis-container class="icon" :duration="Number(15000)">
      <kinesis-element class="elm" :strength="50">
        <img src="../assets/img/vueIcon.png" alt="vueIcon" />
      </kinesis-element>
      <kinesis-element class="elm" :strength="50">
        <img src="../assets/img/vueIcon.png" alt="vueIcon" />
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {}
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
#Skills span {
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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 0;
  width: 100%;
  height: 300px;
  border: 1px solid black;
  z-index: 6;
}
.icon .elm {
  position: relative;
  // top: 20px;
  // left: 50px;
  width: 100px;
  height: 100px;
}
.icon .elm:nth-child(1) {
  filter: drop-shadow(-3px -3px 2px rgba(1, 121, 101, 0.548));
  padding: 10px;
}
</style>
