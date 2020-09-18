<template>
  <section class="section-experience" id="work">
    <v-container>
      <h1 class="section-title text-uppercase text-center my-16 my-lg-16">work experience</h1>
      <Timeline v-for="n in 2" :key="n" />
    </v-container>
  </section>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
export default {
  name: "Experience",
  components: {
    Timeline,
  },
};
</script>