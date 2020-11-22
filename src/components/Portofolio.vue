<template>
  <div id="portofolio">
    <h1>PORTOFOLIO</h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#portofolio {
  position: relative;
  margin-top: 150px;
  width: 100%;
  height: 100vh;
  background: rgb(255, 255, 255);
}

#portofolio::before {
  content: '';
  position: absolute;
  top: -324px;
  right: 0;
  width: 50%;
  height: 50%;
  background: rgb(248, 248, 248);
}
#portofolio:after {
  content: '';
  position: absolute;
  top: -310px;
  right: 0;
  width: 110%;
  height: 50%;
  background: rgb(176, 245, 236);
  filter: invert(0.1%);
  transform: rotate(-5deg);
}
#portofolio h1 {
  border: 1px solid black;
  transform: rotate(-5deg);
  padding-top: 30px;
}
</style>
