<template>
  <b-container fluid class="landing">
    <Navigate @scrolled="scrollPoint" />

    <h3 class="welcome" v-if="scrolled > 20">
      Arrh <br />
      GALLERY
    </h3>
    <b-col
      class="sectionOne"
      cols="12"
      sm="12"
      md="12"
      lg="12"
      xl="12"
      id="landing"
    >
      <!-- <nav> -->
      <!-- </nav> -->
      <h3 class="welcomeh3" v-if="scrolled < 20">
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
    </b-col>
    <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="aboutMe" id="about">
      <div class="profile-img"></div>
      <div class="satu">
        <h3 style="fontWeight: bold;">About Me</h3>
        <p>Website Developer</p>
      </div>
      <div class="dua">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
          labore sit quo ipsum, totam asperiores dicta beatae, doloribus
          voluptatem eveniet explicabo perspiciatis, minima tempora perferendis
          unde corporis. Porro consequuntur maxime enim velit vero ad rem
          soluta, corporis iusto laboriosam minima praesentium asperiores quis
          atque obcaecati aut vel labore neque et! Beatae vel nesciunt
          architecto accusantium laudantium vero nihil soluta. Quam amet unde
          sint? Ipsum rerum labore modi doloremque, dolorum ab delectus unde,
          eveniet amet alias, rem fuga et asperiores repellat?.
        </p>
      </div>
    </b-col>
    <Skills />
  </b-container>
</template>
<script>
import Navigate from '../components/Navigation'
import Skills from '../components/Skills'
export default {
  name: 'Home',
  data() {
    return {
      scrolled: 0
    }
  },
  components: {
    Navigate,
    Skills
  },
  mounted() {
    if (
      this.$router.history.current.hash === '#landing' ||
      this.$router.history.current.hash === ''
    ) {
      document
        .getElementById('about')
        .style.setProperty('transform', ' translateX(' + -1410 + 'px)')
    }
  },
  methods: {
    scrollPoint(data) {
      this.scrolled = data
      console.log(data)
      if (data > 210 && data < 558) {
        document
          .getElementById('landing')
          .style.setProperty('transform', ' translateX(' + 0 + '%)')
        document
          .getElementById('about')
          .style.setProperty('transform', ' translateX(' + 0 + 'px)')
        // document
        //   .getElementById('about')
        //   .style.setProperty('--play-state', 'running')
        setTimeout(() => {
          document
            .getElementById('about')
            .style.setProperty(
              '--translate-one',
              ' translateX(' + 0 + 'px) translateY(' + 0 + 'px)'
            )

          document
            .getElementById('about')
            .style.setProperty(
              '--translate-two',
              ' translateX(' + 0 + 'px) translateY(' + 0 + 'px)'
            )
          document
            .getElementsByClassName('satu')[0]
            .style.setProperty('opacity', 1)
          document
            .getElementsByClassName('dua')[0]
            .style.setProperty('opacity', 1)
        }, 1000)
      } else if (data < 210) {
        document
          .getElementById('about')
          .style.setProperty('transform', ' translateX(' + -1410 + 'px)')

        document
          .getElementById('about')
          .style.setProperty(
            '--translate-one',
            ' translateX(' + -10 + 'px) translateY(' + 10 + 'px)'
          )

        document
          .getElementById('about')
          .style.setProperty(
            '--translate-two',
            ' translateX(' + 20 + 'px) translateY(' + -20 + 'px)'
          )
        document
          .getElementsByClassName('satu')[0]
          .style.setProperty('opacity', 0)
        document
          .getElementsByClassName('dua')[0]
          .style.setProperty('opacity', 0)
      } else if (data > 558 && data < 789) {
        document
          .getElementById('about')
          .style.setProperty('transform', ' translateX(' + 1200 + 'px)')
        document
          .getElementById('landing')
          .style.setProperty('transform', ' translateX(' + -100 + '%)')
      }
    }
  }
}
</script>

<style scoped>
/* :root {
  --play-state: paused;
} */
.landing {
  /* height: 200vh; */
  padding: 0;
  background-color: white;
  /* background-color: rgb(0, 255, 200);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.726),
    rgba(0, 219, 219, 0.534)
  ); */
}
#landing {
  border: none;
  transition: 1s ease-in-out;
}
.sectionOne {
  position: sticky;
  top: -310px;
  padding: 0;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */
  z-index: 2;
}
.sectionOne::before {
  content: '';
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.781);
  mix-blend-mode: overlay;
  z-index: 2;
}
.sectionOne .welcomeh3 {
  text-align: right;
  position: absolute;
  top: 10px;
  left: 30px;
  padding: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
  margin: 0;
  color: rgb(5, 253, 220);
  font-size: 28px;
  font-weight: bold;
  height: 70px;
  mix-blend-mode: difference;
  z-index: 10;
  animation: welcomeTitle 2s ease-out 1 forwards;
}
@keyframes welcomeTitle {
  0% {
    transform: translateX(-150%);
  }
  100% {
    transform: translateX(0);
  }
}
.sectionOne .welcomeh3:before {
  padding: 19px 90px 0 0;
  content: 'welcome to';
  width: 240px;
  height: 70px;
  position: absolute;
  top: 0px;
  left: -63px;
  font-size: 14px;
  color: rgba(0, 250, 196, 0.411);
  margin: 0;
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.966),
    rgba(0, 0, 0, 0.377)
  );

  mix-blend-mode: multiply;
  /* transform: rotate(-270deg); */
}
.sectionOne .welcomeh3:after {
  content: '';
  width: 12rem;
  height: 95px;
  position: absolute;
  top: 35px;
  left: -30px;
  border: 1px solid rgb(13, 255, 215);
  mix-blend-mode: multiply;
  border-right: none;
  border-left: none;
  border-bottom: none;
}
.welcome {
  text-align: left;
  position: fixed;
  top: -8px;
  right: 30px;
  padding: 10px;
  z-index: 2;
  display: flex;
  align-items: center;
  margin: 0;
  color: rgb(5, 253, 220);
  font-size: 18px;
  font-weight: bold;
  height: 70px;
  mix-blend-mode: difference;
  z-index: 50;
  animation: name 3s ease 1 forwards;
}
@keyframes name {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.welcome:before {
  padding: 19px 90px 0 0;
  content: '';
  width: 240px;
  height: 70px;
  position: absolute;
  top: 0px;
  left: -63px;
  font-size: 14px;
  color: rgba(0, 250, 196, 0.411);
  margin: 0;
  background-image: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.966),
    rgba(0, 0, 0, 0.377)
  );

  mix-blend-mode: multiply;
  /* transform: rotate(-270deg); */
}
.welcome:after {
  content: '';
  width: 12rem;
  height: 95px;
  position: absolute;
  top: 35px;
  left: 5px;
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
  height: 100vh;
  margin: 0;
  padding: 0;
  text-align: left;
  overflow: hidden;
}

.hero::before {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.178);
  z-index: 1;
  background-image: linear-gradient(
    135deg,
    rgba(2, 2, 2, 0.966),
    rgba(31, 238, 203, 0.377),
    rgba(2, 2, 2, 0.966)
  );
}
.hero h1 {
  position: absolute;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  line-height: 80px;
  font-size: 62px;
  top: 35%;
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
/* -------------------------- */
#about {
  --play-state: paused;
  --translate-one: translateX(-10px) translateY(10px);
  --translate-two: translateX(20px) translateY(-20px);
  margin: -90px auto;
  position: sticky;
  top: 210px;
  z-index: 13;
  border-radius: 25px;
  padding: 25px 40px 25px 40px;
  height: 20rem;
  width: 85%;
  background-color: #ffffff;
  box-shadow: 1px 1px 10px #0e9986dc, 1px 1px 5px #0e9986dc,
    1px 1px 3px #0e9986dc;
  display: grid;
  grid-template-areas:
    'image title'
    'image desc';
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 2.5fr;
  transition: 1s ease-in-out;
}
.profile-img {
  margin: 0 auto;
  grid-area: image;
  position: relative;
  background-image: url(../assets/img/S_7272243340393.jpg);
  background-size: cover;
  background-position-x: -26px;
  width: 200px;
  height: 230px;
  background-color: white;
  box-shadow: inset 0px 0px 40px #00000050;
  filter: grayscale(1) contrast(130%);
  transform: var(--translate-one);
  /* animation-name: var(--name-one);
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: var(--play-state); */
  transition: 1s;
}
@keyframes image-after {
  0% {
    transform: translateX(-10px) translateY(10px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
}
.profile-img:before {
  content: '';
  position: absolute;
  top: 20px;
  left: -20px;
  width: 100%;
  height: 100%;
  mix-blend-mode: difference;
  background-color: rgb(0, 0, 0);
  border: 7px solid rgb(0, 0, 0);
  transform: var(--translate-two);
  /* animation-name: var(--name-two);
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation-play-state: var(--play-state); */
  transition: 1s;
}
@keyframes image-before {
  0% {
    transform: translateX(20px) translateY(-20px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
}
.satu {
  grid-area: title;
  position: relative;
  top: -10px;
  left: -30px;
  font-size: 14px;
  font-weight: bold;
  padding: 0 30px 0 30px;
  line-height: 10px;
  text-align: left;
  opacity: 0;
  transition: 0.3s;
}
.dua {
  top: -10px;
  left: -30px;
  box-sizing: border-box;
  grid-area: desc;
  position: relative;
  padding: 0 20px 0 30px;
  color: black;
  text-align: left;
  text-align: justify;
  height: 200px;
  transition: 1s;
}
</style>
