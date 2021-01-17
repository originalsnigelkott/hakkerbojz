<template>
  <div class="header">
    <h1 class="title">HAKKERBOJZ</h1>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component()
class Header extends Vue {}

export default Header;
</script>

<style>
.header {
  padding: 10px;
}

.title {
  font-family: "Clip";
  color: #fff;
  font-size: 50px;
  font-weight: normal;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073,
      0 0 25px #e60073, 0 0 30px #e60073, 0 0 35px #e60073;
  }
  to {
    text-shadow: 0 0 10px #fff, 0 0 15px #ff4da6, 0 0 20px #ff4da6,
      0 0 25px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6, 0 0 40px #ff4da6;
  }
}

@-webkit-keyframes glow {
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073,
      0 0 25px #e60073, 0 0 30px #e60073, 0 0 35px #e60073;
  }
  to {
    text-shadow: 0 0 10px #fff, 0 0 15px #ff4da6, 0 0 20px #ff4da6,
      0 0 25px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6, 0 0 40px #ff4da6;
  }
}

@media screen and (min-width: 500px) {
  .title {
    font-size: 75px;
  }
}
@media screen and (min-width: 700px) {
  .title {
    font-size: 100px;
  }
}
@media screen and (min-width: 900px) {
  .title {
    font-size: 125px;
  }
}
@media screen and (min-width: 1100px) {
  .title {
    font-size: 150px;
  }
}
</style>
