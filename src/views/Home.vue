<template>
  <div class="home">
    <Banner />
    <About />
    <Education />
    <Experience />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
export default {
  name: "Home",
  components: {
    Banner,
    About,
    Education,
    Experience,
  },
};
</script>
