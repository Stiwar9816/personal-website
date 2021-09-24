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
          <CardSkill icon="mdi-vuejs" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-language-css3" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-language-javascript" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-react" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-wordpress"  />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-gatsby"  />          
        </v-col>
        <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-language-php" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-git" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-github" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-bootstrap" />          
        </v-col>
         <v-col cols="12" md="3" class="justify-center col-lg-3 col-sm-6 col-md-5">
          <CardSkill icon="mdi-linux" />          
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
