<template>
  <div class="home">
    <Banner />
    <About />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";

export default {
  name: "Home",
  components: {
    Banner,
    About,
  },
};
</script>
