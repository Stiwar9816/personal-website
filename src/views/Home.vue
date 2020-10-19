<template>
  <div class="home">
    <Banner />
    <About />
    <Education />
    <Experience />
    <Skill />
    <Portfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import About from "@/components/About.vue";
import Education from "@/components/Education.vue";
import Experience from "@/components/Experience.vue";
import Skill from "@/components/Skill.vue";
import Portfolio from "@/components/Portfolio.vue";
export default {
  name: "Home",
  components: {
    Banner,
    About,
    Education,
    Experience,
    Skill,
    Portfolio,
  },
};
</script>
