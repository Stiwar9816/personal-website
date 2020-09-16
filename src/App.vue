<template>
  <v-app>
    <Navbar />
    <v-main>
      <Home />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
    Footer,
  },
};
</script>
