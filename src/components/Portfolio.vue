<template>
  <section id="portfolio" class="mb-16">
    <h1 class="section-title text-uppercase text-center my-16 my-lg-16">
      portafolio
    </h1>
    <v-container>
      <v-row class="justify-center align-center" no-gutters>
        <v-col
          v-for="n in 6"
          :key="n"
          class="justify-center d-flex child-flex col-lg-4 col-sm-6 col-md-5 my-2"
          cols="12"
        >
          <v-img
            class="mx-2"
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>