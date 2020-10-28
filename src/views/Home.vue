<template>
  <div class="home">
    <div class="jumbotron">
      <img alt="pwlogo" src="../assets/img/logo.jpg" />
      <h4>Petualangan wayang official website</h4>
      <h2>COOMING SOON !</h2>
    </div>
    <img class="cover" src="../assets/img/IMG-20200121-WA0001.jpg" />
    <div class="selaput"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
.home {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.jumbotron {
  padding: 20px 0;
  position: relative;
  z-index: 2;
  width: 1000px;
  background-color: rgba(255, 255, 255, 0.637);
  border-radius: 10px;
  box-shadow: 1px 5px 15px -3px rgba(0, 0, 0, 0.781);
}
.home .jumbotron img {
  opacity: 0.7;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 520px;
  height: 300px;
  border-radius: 15px;
}
.cover {
  bottom: 1px solid black;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}
.selaput {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #0e40727a;
}
</style>
