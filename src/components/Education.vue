<template>
  <section class="section-education" id="education">
    <v-container>
      <h1 class="section-title text-uppercase text-center my-16 my-lg-16">
        education
      </h1>
      <Timeline id="education" v-for="n in 2" :key="n" />
    </v-container>
  </section>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
export default {
  name: "Education",
  components: {
    Timeline,
  },
};
</script>