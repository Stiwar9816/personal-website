<template>
  <section id="skill">
    <h1 class="section-title text-uppercase text-center my-16 my-lg-16">
      skills
    </h1>
    <v-container>
      <v-row class="justify-center align-center" no-gutters>
        <v-col cols="12" class="justify-center col-lg-4 col-sm-6 col-md-5">
          <CardSkill />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import CardSkill from "./CardSkill";
export default {
  name: "Skill",
  components: {
    CardSkill,
  },
  data() {
    return {
      icon: [
        "mdi-mdi-language-html5",
        "mdi-vuejs",
        "mdi-language-css3",
        "mdi-language-javascript",
        "mdi-react",
        "mdi-wordpress",
        "mdi-gatsby",
      ],
      titleSkill: [
        "HTML5",
        "VueJS",
        "CSS3",
        "JavaScript",
        "ReactJS",
        "WordPress",
        "GatsbyJS",
      ],
    };
  },
};
</script>
