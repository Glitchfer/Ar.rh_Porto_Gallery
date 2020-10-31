<template>
  <div class="home">
    <div class="jumbotron">
      <img alt="pwlogo" src="../assets/img/Keroropoy.jpg" />
      <carousel
        :autoplay="true"
        :nav="false"
        :items="1"
        style="display: flex; justifyContent: center; alignItems: center; width: 730px"
      >
        <div class="p1">
          <h2>HELLO THERE !</h2>
          <h1>WELCOME TO MY GALLERY</h1>
        </div>
        <div class="p1">
          <h2>
            MY NAME <br />
            IS ARIF RAHMAN
          </h2>
        </div>
        <div class="p1">
          <h2>
            THIS WEBSITE IS USED TO SHARE MY COLLECTION <br />
            PORTOFOLIO OR MY PROJECT
          </h2>
        </div>
        <div class="p1">
          <h2>
            WANT TO KNOW MORE ABOUT ME ? <br />
            <a href="/about">HERE</a> YOU CAN CHECK MY BIO
          </h2>
        </div>
      </carousel>
    </div>
    <img class="cover" src="../assets/img/92f8wv7xkj.jpg" />
    <div class="selaput"></div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  name: 'Home',
  components: {
    carousel
  }
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
  display: flex;
  flex-direction: row;
  padding: 50px 20px;
  position: relative;
  z-index: 2;
  width: 1000px;
  background-color: rgba(235, 228, 211, 0.637);
  border-radius: 10px;
  box-shadow: 1px 5px 15px -1px rgba(0, 0, 0, 0.781);
}
.home .jumbotron img {
  opacity: 0.9;
  margin: 10px 20px 10px 20px;
  width: 230px;
  height: 270px;
  border-radius: 15px;
  border: 1px solid black;
  box-shadow: 1px 1px 15px -2px rgba(0, 0, 0, 0.781);
}
.p1 {
  font-size: 18px;
  color: rgba(46, 28, 2, 0.911);
  font-family: 'Dosis', sans-serif;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  line-height: 5px;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
  width: 100%;

  box-sizing: border-box;
  padding: 0 20px;
}
.p1 h2 {
  line-height: 45px;
  text-align: center;
}
.p1 h2 a {
  color: rgba(46, 28, 2, 0.911);
}
.cover {
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
  background-color: #72570e3b;
}
</style>
