<template>
  <div class="links">
    <div v-for="link in links" :key="link.url" class="link-item">
      <a class="link" :href="link.url">{{ link.display }}</a>
      <a v-if="link.doc" class="link mr-5" :href="getDocLink(link)">(docs)</a>
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import { links } from "../../settings.json";

@Component()
class Links extends Vue {
  links = links;

  getDocLink({ url, doc }) {
    return `${url}${doc}`;
  }
}

export default Links;
</script>

<style scoped>
.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.mr-5 {
  margin-right: 5px;
}

.link-item {
  margin: 10px;
}

.link {
  font-family: "Caveat", cursive;
  font-size: 24px;
  text-decoration: none;
  color: turquoise;
  padding: 5px;
}

.link:hover {
  color: #fff;
  -webkit-animation: glow-small 2s ease-in-out infinite alternate;
  -moz-animation: glow-small 2s ease-in-out infinite alternate;
  animation: glow-small 2s ease-in-out infinite alternate;
}

@keyframes glow-small {
  from {
    text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 4px #32b8aa, 0 0 6px #32b8aa,
      0 0 8px #32b8aa, 0 0 9px #32b8aa, 0 0 10px #32b8aa;
  }
  to {
    text-shadow: 0 0 2px #fff, 0 0 3px #40e0d0, 0 0 5px #40e0d0, 0 0 7px#40e0d0,
      0 0 9px #40e0d0, 0 0 10px #40e0d0, 0 0 11px#40e0d0;
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
