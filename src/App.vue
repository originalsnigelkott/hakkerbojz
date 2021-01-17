<template>
  <main>
    <div class="content">
      <Header />
      <Links />
    </div>
  </main>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import Header from "./components/Header";
import Links from "./components/Links";

@Component({
  components: { Header, Links }
})
class App extends Vue {}

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
</style>
