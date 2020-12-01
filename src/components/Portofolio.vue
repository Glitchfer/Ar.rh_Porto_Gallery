<template>
  <div id="portofolio">
    <div class="crsl">
      <h1 style="padding: 0;">
        PORTOFOLIO
      </h1>
      <div class="portoImg">
        <div>
          <h3>KONTASAN</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            sit maxime libero amet sint quam? Dignissimos voluptate..
          </p>
          <a target="_blank" href="https://kontasan.netlify.app/">Visit web</a>
          <img src="../assets/porto/Menu_page.jpg" alt="" />
        </div>
        <div>
          <h3>NONGKY</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut beatae
            in laboriosam eligendi libero, officia expedita voluptates delectus
            mollitia aliquam impedit architecto molestias. Tempora dolores,
            maxime cum accusantium ratione repellendus, quisquam voluptates
            adipisci dicta fugit cumque, modi atque. Reprehenderit aut tempore
            at nobis ab sint sapiente cum obcaecati quia quam dolor iure dolores
            ea nulla, deleniti in ducimus sunt consequatur necessitatibus
            maiores, magni rerum soluta illum a? Animi, est vel. Omnis iusto vel
            cupiditate unde ad voluptatum, rerum tenetur pariatur aspernatur! Ex
            voluptates a, quia animi enim itaque sapiente maiores, temporibus
            culpa non natus. Accusantium quod ducimus ad nihil! Modi.
          </p>
          <a target="_blank" href="https://nongky.netlify.app/">Visit web</a>
          <img src="../assets/porto/ProfileFIT.jpg" alt="" />
        </div>
        <div>
          <h3>PELLET</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            vitae, temporibus perspiciatis corrupti voluptatibus inventore
            mollitia. Magni aliquam molestias illum.
          </p>
          <a target="_blank" href="https://pellet.netlify.app/">Visit web</a>
          <img src="../assets/porto/dashboard.jpg" alt="" />
        </div>
        <div>
          <h3>BADAG</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            vitae, temporibus perspiciatis corrupti voluptatibus inventore
            mollitia. Magni aliquam molestias illum.
          </p>
          <a target="_blank" href="https://badag.netlify.app/">Visit web</a>
          <img src="../assets/porto/landing.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import carousel from 'vue-owl-carousel'
import { mapGetters } from 'vuex'
export default {
  name: 'Portpfolio',
  components: {
    // carousel
  },
  data() {
    return {}
  },
  mounted() {},
  updated() {},
  computed: {
    ...mapGetters(['getScrollDistance'])
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
#portofolio {
  position: relative;
  margin-top: 0px;
  width: 100%;
  min-height: 100vh;
  background: #ffffff73;
}
#portofolio:before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 2.5%;
  width: 95%;
  height: 95%;
  background: rgb(255, 255, 255);
  border-radius: 20px;
  filter: drop-shadow(1px -1px 1px rgba(78, 78, 78, 0.322))
    drop-shadow(2px 2px 1px rgba(241, 241, 241, 0.3))
    drop-shadow(2px 2px 1px rgba(101, 139, 123, 0.3));
}
#portofolio h1 {
  letter-spacing: 30px;
  padding-top: 30px;
  font-weight: bold;
  color: rgb(15, 165, 152);
  width: 75%;
  position: relative;
  top: -8px;
  border: 1px solid #00000042;
  border-radius: 5px;
  border-top: none;
  border-right: none;
  border-left: none;
  color: #01696094;
  box-shadow: 0px 0px 1px rgba(60, 124, 110, 0.562), 0px 0px 1px #00998c3d,
    0px 0px 1px #02c5a552;
}
.crsl {
  padding-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.portoImg {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 10px 10px 10px 20px;
  position: relative;
  top: -10px;
  width: 85%;
  height: 90%;
  filter: drop-shadow(8px 8px 2px rgba(241, 241, 241, 0.8))
    drop-shadow(8px 8px 2px rgba(101, 139, 123, 0.8));
}
.crsl .portoImg div {
  position: relative;
  border: 2px solid rgba(156, 156, 156, 0.226);
  width: 480px;
  height: 240px;
  margin: 0 40px 10px 0;
  border-radius: 5px;
  z-index: 2;
  overflow: hidden;
  background: white;
}
.crsl .portoImg div img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.1s;
}
.crsl .portoImg div p {
  width: 230px;
  height: 78%;
  position: absolute;
  text-align: left;
  top: 5px;
  left: 0;
  padding: 5px 10px;
  overflow: auto;
}

.crsl .portoImg div:hover img,
.crsl .portoImg div:hover h3 {
  transform: translateX(50%);
}

.crsl .portoImg div a {
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: 1px solid black;
  padding: 2px 5px;
  border-radius: 5px;
  text-decoration: none;
  background: #08dfcd11;
  color: #01696094;
  font-size: 14px;
  margin-right: 5px;
  box-shadow: 0px 0px 3px rgba(60, 124, 110, 0.562), 0px 0px 3px #00998c3d,
    0px 0px 3px #02c5a552;
}
.crsl .portoImg div a:hover {
  background: #08dfcdc5;
  color: #092b28be;
}
.crsl .portoImg div a:active {
  border: 2px solid black;
  color: white;
}
.crsl .portoImg div h3 {
  position: absolute;
  display: flex;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  z-index: 2;
  transition: 0.3s;
  background: rgba(0, 0, 0, 0.2);
  color: white;
  font-weight: bold;
  filter: drop-shadow(-5px -5px 2px rgba(78, 78, 78, 0.2))
    drop-shadow(5px 5px 3px rgba(241, 241, 241, 0.2))
    drop-shadow(5px 5px 3px rgba(101, 139, 123, 0.2));
}
.crsl .portoImg div:hover h3 {
  justify-content: flex-start;
  padding-left: 50px;
}
</style>
