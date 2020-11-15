<template>
  <div id="Skills" class="skills">
    <h1>Skills</h1>
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  date() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
#Skills {
  //   background-color: rgb(0, 0, 0);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  margin: 0;
  padding: 0;
  //   mix-blend-mode: difference;
  z-index: 1;
}
#Skills h1:nth-child(1) {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: rgba(255, 255, 255, 0.452);
  position: absolute;
  //   top: 40%;
  //   right: 50%;
  top: 40%;
  left: -100px;
  font-size: 102px;
  font-weight: bold;
  letter-spacing: 20px;
  transform: rotateZ(-90deg);
  filter: drop-shadow(-3px -3px 2px rgba(0, 0, 0, 0.288))
    drop-shadow(5px 5px 5px rgba(255, 255, 255, 0.2))
    drop-shadow(15px 15px 15px rgba(255, 255, 255, 0.2));
}
</style>
