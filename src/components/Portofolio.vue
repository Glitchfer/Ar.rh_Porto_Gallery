<template>
  <div id="portofolio">
    <div class="crsl">
      <h1 style="padding: 0;">
        Portofolio
      </h1>
      <div class="portoImg">
        <img src="../assets/porto/Menu_page.jpg" alt="" />
        <img src="../assets/porto/ProfileFIT.jpg" alt="" />
        <img src="../assets/porto/dashboard.jpg" alt="" />
        <img src="../assets/porto/landing.jpg" alt="" />
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
  methods: {
    methods: {}
  }
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
  border-radius: 50px 50px 0 0;
  filter: drop-shadow(1px -1px 1px rgba(78, 78, 78, 0.322))
    drop-shadow(2px 2px 1px rgba(241, 241, 241, 0.3))
    drop-shadow(2px 2px 1px rgba(101, 139, 123, 0.3));
}
#portofolio h1 {
  padding-top: 30px;
  font-weight: bold;
  color: rgb(15, 165, 152);
  filter: drop-shadow(-5px -5px 2px rgba(78, 78, 78, 0.322))
    drop-shadow(5px 5px 3px rgba(241, 241, 241, 0.3))
    drop-shadow(5px 5px 3px rgba(101, 139, 123, 0.3));
}
.crsl {
  padding-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.portoImg {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 20px 10px 10px 20px;
  position: relative;
  width: 80%;
  height: 90%;
  filter: drop-shadow(8px 8px 2px rgba(241, 241, 241, 0.8))
    drop-shadow(8px 8px 2px rgba(101, 139, 123, 0.8));
}
.crsl .portoImg img {
  border: 2px solid rgba(0, 0, 0, 0.651);
  width: 480px;
  height: 240px;
  margin: 0 10px 10px 0;
  border-radius: 5px;
}
</style>
