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
            KONTASAN merupakan aplikasi berbasi web yang digunakan untuk
            membantu pekerjaan seorang kasir dalam mengelola proses order
            makanan & minuman. Aplikasi ini memiliki fitur CRUD untuk mengelola
            orderan seperti tambah menu, update menu, hapus menu, menampilkan
            history penjualan, cari menu berdasarkan kategori, paginasi,
            pengurutan, add order, cancel order, aktivitas login user (only in
            database), kirim checkout ke email or download pdf. Aplikasi ini
            dubuat menggunakan vue js dan express js, dan tambahan storage
            external redis.
          </p>
          <a target="_blank" href="https://kontasan.netlify.app/">Visit web</a>
          <img src="../assets/porto/Menu_page.jpg" alt="" />
        </div>
        <div>
          <h3>NONGKY</h3>
          <p>
            NONGKY adalah aplikasi realtime chat berbasis web yang dibuat
            menggunakan vue js, dan express js. Aplikasi ini memiliki fitur
            realtime chat, login, register, reset password, google location,
            cari teman, tambah teman, notifikasi pertemanan, notifikasi pesan
            terbaru, update profile, tambah gambar dan video, dll. Fitur realtim
            chat sendiri dibuat menggunakan socket io.
          </p>
          <a target="_blank" href="https://nongky.netlify.app/">Visit web</a>
          <img src="../assets/porto/ProfileFIT.jpg" alt="" />
        </div>
        <div>
          <h3>PELLET</h3>
          <p>
            Pellet merupakan singkatan dari 'Payment E-Wallet'. Adalah aplikasi
            berbasis web yang digunakan untuk melakukan pembayaran secara
            online. Sama seperti aplikasi-aplikasi sejenisnya, pellet akan
            memudahkan penggunanya dalam melakukan transaksi jual beli. Aplikasi
            ini dilengkapi dengan fitur transfer dan top up. Fitur transfer
            digunakan bila pengguna akan mengirimkan sejumlah uang kepada
            pengguna lain, sedangkan fitu top up digunakan untuk menambahkan
            saldo pengguna untuk keperluan transaksi nantinya. Pellet sendiri
            dibuat menggunakan ExpressJs untuk configurasi APInya, serta VueJs
            untuk keperluan styling dan konektifitas antara back-end dengan
            front-end. Project ini dikerjakan secara tim yang beranggotakan 5
            orang dalam waktu 1 minggu. Pada project ini saya bertugas sebagai
            fullstack developer yang bertugas untuk membantu rekan-rekan saya
            dalam menangani bagian front end maupun back end. Salah satu contoh
            dari sisi front end, saya menangani style dari halaman transfer
            beserta konektifitas dengan databasenya. Sedangkan dari sisi back
            end saya menangani beberapa konfigurasi API untuk keperluan top up.
          </p>
          <a target="_blank" href="https://pellet.netlify.app/">Visit web</a>
          <img src="../assets/porto/dashboard.jpg" alt="" />
        </div>
        <div>
          <h3>BADAG</h3>
          <p>
            BADAG adalah situs Job Portal Digital, dimana tempat untuk para
            Jobseeker mencari pekerjaan yang berkualiatas, ataupun para pemilik
            usaha untuk menemukan talent-talent terbaik untuk dipekerjakan.
            Project ini dikerjakan oleh lima orang, dimana dua orang bertugas
            sebagai backend developer dan dua orang sebagai frontend developer,
            serta satu orang sebagai leader. Peran saya dalam project ini adalah
            sebagai frontend developer yang betugas membuat tampilan beserta
            fungsionalitas dari halaman login, register, reset password, serta
            semua halaman untuk pengguna dari sisi pencari kerja.
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
