<template>
  <div id="app">
    <div class="nav">
      <router-link
        to="/"
        style="marginRight: 20px; color: white; fontWeight: bold; textDecoration: none;"
        >Home</router-link
      >
      <router-link
        to="/about"
        style="marginRight: 20px; color: white; fontWeight: bold; textDecoration: none;"
        >About me</router-link
      >
      <router-link
        to="/canvas"
        style="marginRight: 20px; color: white; fontWeight: bold; textDecoration: none;"
        >Canvas</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap');
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Dosis', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  color: white;
  background-color: #2b2a2a4b;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
}
</style>
