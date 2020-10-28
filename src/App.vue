<template>
  <div id="app">
    <div class="nav">
      <router-link
        to="/"
        style="marginRight: 20px; color: white; fontWeight: bold;"
        >Home</router-link
      >
      <router-link
        to="/about"
        style="marginRight: 20px; color: white; fontWeight: bold;"
        >About us</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  background-color: #0d3c6bb6;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 56px;
}
</style>
