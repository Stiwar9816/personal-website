<template>
  <section id="skill">
    <h1 class="section-title text-uppercase text-center my-16 my-lg-16">
      Habilidades
    </h1>
    <v-container>
      <v-row class="justify-center align-center" no-gutters>
        <v-col cols="12" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-language-html5"/>          
        </v-col>
         <v-col cols="12" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-vuejs" titleSkill="VueJS" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-language-css3" titleSkill="CSS3" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-language-javascript" titleSkill="JavaScript" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-react" titleSkill="ReactJS" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-wordpress" titleSkill="Wordpress" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-gatsby" titleSkill="GatsbyJS"/>          
        </v-col>
        <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-language-php" titleSkill="PHP" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-git" titleSkill="Git" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-github" titleSkill="Github" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-bootstrap" titleSkill="Bootstrap" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-linux" titleSkill="Linux" />          
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
  }
};
</script>
