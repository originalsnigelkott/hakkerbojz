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
  color: hotpink;
  font-size: 100px;
  font-weight: normal;
}
.link {
  text-decoration: none;
  font-size: 18px;
  color: hotpink;
}
.link:hover {
  text-shadow: rgb(255, 159, 207) 0 0 2px;
}
</style>
