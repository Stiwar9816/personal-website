<template>
  <section class="section-experience" id="work">
    <v-container>
      <h1 class="section-title text-uppercase text-center my-16 my-lg-16">
        Experiencia
      </h1>
      <Timeline id="experience" />
    </v-container>
  </section>
</template>

<script>
import Timeline from "@/components/TimelineExperience.vue";
export default {
  name: "Experience",
  components: {
    Timeline,
  },
};
</script>