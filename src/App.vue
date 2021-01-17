<template>
  <main>
    <div class="content">
      <div class="header">
        <h1 class="title">HAKKERBOJZ</h1>
      </div>
      <div class="links">
        <div v-for="link in links" :key="link.url">
          <a class="link" :href="link.url">{{ link.display }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import * as settings from "../settings.json";

@Component()
class App extends Vue {
  links = settings.links;
}

export default App;
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Caveat&display=swap");

@font-face {
  font-family: "Clip";
  src: local("Clip"), url("./fonts/Clip.ttf") format("truetype");
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.content {
  min-height: 100vh;
  width: 100%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.header {
  padding: 20px;
}

.title {
  font-family: "Clip";
  color: #fff;
  font-size: 150px;
  font-weight: normal;
  -webkit-animation: glow 2s ease-in-out infinite alternate;
  -moz-animation: glow 2s ease-in-out infinite alternate;
  animation: glow 2s ease-in-out infinite alternate;
}
.links {
  display: flex;
}

.link {
  margin: 0 10px;
  font-family: "Caveat", cursive;
  text-decoration: none;
  font-size: 24px;
  color: turquoise;
}

.link:hover {
  color: #fff;
  -webkit-animation: glow-small 2s ease-in-out infinite alternate;
  -moz-animation: glow-small 2s ease-in-out infinite alternate;
  animation: glow-small 2s ease-in-out infinite alternate;
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

@-webkit-keyframes glow-small {
  from {
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 4px #32b8aa, 0 0 6px #32b8aa,
      0 0 8px #32b8aa, 0 0 9px #32b8aa, 0 0 10px #32b8aa;
  }
  to {
    text-shadow: 0 0 2px #fff, 0 0 3px #40e0d0, 0 0 5px #40e0d0, 0 0 7px#40e0d0,
      0 0 9px #40e0d0, 0 0 10px #40e0d0, 0 0 11px#40e0d0;
  }
}
</style>
