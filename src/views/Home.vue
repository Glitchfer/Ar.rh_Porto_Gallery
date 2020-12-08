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
        <p>Website Developer</p>
        <button class="btn-a" @click="downloadCV">Download CV</button>
        <button class="btn-b"><a href="#contact">Hire Me</a></button>
      </b-col>
    </b-col>
    <b-col cols="12" sm="12" md="12" lg="12" xl="12" class="aboutMe" id="about">
      <div class="profile-img"></div>
      <div class="satu">
        <h3 style="fontWeight: bold;">About Me</h3>
      </div>
      <div class="dua">
        <p>
          Saya adalah seorang website developer yang memiliki background
          pendidikan sebagai sarjana teknik industri. Saya lulus dari salah satu
          perguruan tinggi di Indonesia pada 2018 lalu. Sedikit melenceng dari
          background pendidikan yang saya tempuh, saya lebih memilih untuk
          meningkatkan kemampuan saya pada bidang programming khususnya sebagai
          website developer. Saya memilih untuk berkarir sebagai website
          developer karena ketertarikan saya terhadap dunia programming, animasi
          dan design, selain itu saya juga lebih senang bekerja dengan komputer
          dibanding dengan pekerjaan lainnya. Keahlian ini saya dapatkan dari
          hasil pembelajaran yang saya ikuti dari tutorial-tutorial di internet
          dan juga berkat pelatihan secara intensif selama tiga bulan di salah
          satu lembaga pelatihan yang terkenal saat ini. Berkat hal tersebut
          saya jadi mendapatkan keahlian dalam pembuatan website dengan
          menggunakan vueJs untuk frontend dan expressJs untuk backend. Sampai
          saat ini sudah ada beberapa website yang pernah saya buat baik itu
          dibuat dengan seorang diri maupun bersama tim. Kedepannya saya
          berharap dapat menjadi seorang developer yang lebih handal lagi.
        </p>
      </div>
    </b-col>
    <Skills />
    <Portofolio />
    <footer id="contact">
      <div class="contact">
        <div style="padding: 0 10px">
          <h5>
            I will tell you a secret..
          </h5>
          <p>UI/UX design make my head pounding</p>
          <p>
            Feel free to say hi! <br />
            if you want to colab with me
          </p>
        </div>
        <div>
          <div style="font-size: 20px;">
            <b-icon icon="link"></b-icon>
            <h5>Sort Link</h5>
          </div>
          <a href="#landing">Top</a>
          <a href="#about">About</a>
          <a href="#Skills">Skills</a>
          <a href="#portofolio">Portofolio</a>
        </div>
        <div>
          <div style="font-size: 20px;">
            <b-icon icon="telephone"></b-icon>
            <h5>Contact</h5>
          </div>
          <p>+62 8977286415</p>
          <p>+62 8158124799</p>
        </div>
        <div>
          <div style="font-size: 20px;">
            <b-icon icon="envelope-open"></b-icon>
            <h5>Email</h5>
          </div>
          <p>a1.arifrahman.1213@gmail.com</p>
        </div>
      </div>
      <div class="credit">
        <p>© 2020 Rahman. All Rights Reserved</p>
        <div class="icns">
          <a target="_blank" href="https://www.instagram.com/ar.if.rh/"
            ><img src="../assets/img/instagram2.png" alt="instagram"
          /></a>
          <a target="_blank" href="https://www.facebook.com/arif.rh11"
            ><img src="../assets/img/facebook(1).png" alt="facebook"
          /></a>
          <a target="_blank" href="https://www.linkedin.com/in/ar-if-rh/"
            ><img src="../assets/img/linkedin(1).png" alt="linkedin"
          /></a>
          <a target="_blank" href="https://github.com/Glitchfer"
            ><img src="../assets/img/github(1).png" alt="github"
          /></a>
        </div>
      </div>
    </footer>
    <div class="fastNav">
      <a href="#landing"><b-icon icon="chevron-up"></b-icon></a>
    </div>
  </b-container>
</template>
<script>
import Navigate from '../components/Navigation'
import Skills from '../components/Skills'
import Portofolio from '../components/Portofolio'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      scrolled: 0
    }
  },
  components: {
    Navigate,
    Skills,
    Portofolio
  },
  mounted() {
    // if (
    //   this.$router.history.current.hash !== '#landing' ||
    //   this.$router.history.current.hash !== ''
    // ) {
    //   document.getElementById('about').style.setProperty('opacity', '0')
    // }
  },
  computed: {
    ...mapGetters(['getScrollDistance'])
  },
  updated() {
    // if (this.getScrollDistance > 558) {
    //   // document.getElementById('about').style.setProperty('top', '-30px')
    // }
  },
  methods: {
    scrollPoint(data) {
      this.scrolled = data
      if (data > 210 && data < 558) {
        document.getElementById('about').style.setProperty('opacity', '1')
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
          // document
          //   .getElementById('about')
          //   .style.setProperty('transform', ' translateX(' + 0 + '%)')
          document
            .getElementsByClassName('satu')[0]
            .style.setProperty('opacity', 1)
          document
            .getElementsByClassName('dua')[0]
            .style.setProperty('height', '200px')
          document
            .getElementsByClassName('dua')[0]
            .style.setProperty('color', 'rgb(4, 231, 193')
        }, 300)
      }
    },
    downloadCV() {
      alert('This feature is under development')
    }
  }
}
</script>

<style scoped>
.fastNav {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  border-radius: 25%;
  z-index: 1;
  background-color: rgba(161, 161, 161, 0.726);
  background-image: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.726),
    rgba(0, 219, 219, 0.216)
  );
  border: 2px solid rgba(0, 0, 0, 0.425);
}
.fastNav a {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(35, 122, 108);
  font-size: 18px;
}
footer {
  margin-top: 50px;
  background: rgb(0, 34, 26);
  width: 100%;
  height: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0 70px;
}
footer div {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
}
footer .credit {
  border: 1px solid rgba(255, 255, 255, 0.356);
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom: none;
  border-right: none;
  border-left: none;
  font-size: 14px;
}
footer .credit p {
  margin: 0;
}
footer .credit .icns {
  margin: 0;
  position: relative;
  width: 50%;
  display: flex;
  justify-content: flex-end;
}
footer .credit .icns a {
  margin: 0;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  margin-right: 15px;
}
footer .credit .icns a img {
  margin: 0;
  width: 20px;
  height: 20px;
}
footer .contact div {
  padding-top: 15px;
  position: relative;
  width: 25%;
  height: 230px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: left;
}

footer .contact div:nth-child(1) {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

footer .contact div:nth-child(2),
footer .contact div:nth-child(3),
footer .contact div:nth-child(4) {
  padding-left: 70px;
}

footer .contact div:nth-child(2) div,
footer .contact div:nth-child(3) div,
footer .contact div:nth-child(4) div {
  margin-bottom: 15px;
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
}

footer .contact div:nth-child(2) div h5,
footer .contact div:nth-child(3) div h5,
footer .contact div:nth-child(4) div h5 {
  font-size: 18px;
  margin: 0;
  position: relative;
  left: 8px;
  top: 3px;
}

footer .contact div:nth-child(2) a,
footer .contact div:nth-child(3) p,
footer .contact div:nth-child(4) p {
  font-size: 14px;
  margin: 0 0 5px 0;
  color: white;
  text-decoration: none;
}
.landing {
  padding: 0;
  background-image: linear-gradient(
    -125deg,
    rgba(255, 255, 255, 0.63),
    rgba(255, 255, 255, 0.651)
  );
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
  background-image: linear-gradient(135deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));

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
.hero p {
  width: 400px;
  position: absolute;
  color: rgb(255, 255, 255);
  font-weight: bolder;
  font-size: 26px;
  bottom: 27%;
  right: 16%;
  z-index: 1;
  mix-blend-mode: overlay;
  border: 1px solid rgb(13, 255, 215);
  border-top: none;
  border-right: none;
  border-left: none;
}
.hero .btn-a {
  padding: 5px 10px;
  position: absolute;
  color: rgba(12, 221, 204, 0.863);
  font-weight: bolder;
  font-size: 12px;
  bottom: 22%;
  right: 39%;
  z-index: 1;
  border: 1px solid rgb(13, 255, 215);
  z-index: 2;
  background: rgba(0, 0, 0, 0.548);
  border-radius: 5px;
  outline: none;
}
.hero .btn-b {
  padding: 5px 10px;
  position: absolute;
  font-weight: bolder;
  font-size: 12px;
  bottom: 22%;
  right: 32%;
  z-index: 1;
  border: 1px solid rgb(13, 255, 215);
  z-index: 2;
  background: rgba(0, 0, 0, 0.548);
  border-radius: 5px;
}
.hero .btn-b a {
  color: rgba(12, 221, 204, 0.863);
  text-decoration: none;
}
.hero .btn-a:hover {
  background: rgb(14, 241, 185);
  color: black;
  border: 2px solid rgb(254, 255, 255);
}
.hero .btn-b:hover {
  background: rgb(14, 241, 185);
  border: 2px solid rgb(254, 255, 255);
}
.hero .btn-b:hover a {
  color: black;
}
/* -------------------------- */
#about {
  --play-state: paused;
  --translate-one: translateX(-10px) translateY(10px);
  --translate-two: translateX(20px) translateY(-20px);
  margin: -60px auto 0;
  position: relative;
  top: -30px;
  /* top: 210px; */
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
  transition: 0.5s;
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
  padding: 20px 30px 0 30px;
  line-height: 10px;
  text-align: left;
  opacity: 1;
  transition: 0.1s;
  border-radius: 3px;
  border: 1px solid rgba(9, 110, 88, 0.274);
  background: white;
  filter: drop-shadow(4px 4px 2px rgba(40, 41, 41, 0.904));
}
.dua {
  margin: 0 auto;
  top: -10px;
  left: -30px;
  box-sizing: border-box;
  grid-area: desc;
  position: relative;
  padding: 0 20px 0 30px;
  color: white;
  text-align: left;
  text-align: justify;
  width: 650px;
  height: 0;
  transition: 0.3s;
  border: 1px solid black;
  background: rgb(2, 2, 2);
  border-radius: 0 0 10px 10px;
  overflow: auto;
}
</style>
