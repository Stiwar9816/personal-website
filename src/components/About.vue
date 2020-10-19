<template>
  <section class="section-about" id="about">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" class="col-lg-6 col-xl-6 mt-n6 mt-lg-0">
          <v-img
            max-width="538"
            :src="require('@/assets/svg/illustration.svg')"
          />
        </v-col>
        <v-col cols="12" class="col-lg-6 col-xl-6">
          <h1 class="section-title text-uppercase mt-16 mt-lg-5">about</h1>
          <p class="text-about mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
            viverra aliquet eget sit amet tellus cras adipiscing.
          </p>
          <v-list flat>
            <v-list-item v-for="(item, i) in aboutItems" :key="i">
              <v-list-item-icon>
                <v-icon
                  class="about-icon"
                  size="28"
                  v-text="item.icon"
                ></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="about-info"
                  v-text="item.text"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
        <v-row align="center" justify="center" no-gutters>
          <v-btn
            class="btn-about text-uppercase py-5 px-5 mt-16"
            depressed
            large
          >
            download cv
            <v-icon right>mdi-cloud-download</v-icon>
          </v-btn>
        </v-row>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "About",
  computed: {
    aboutItems() {
      return this.$store.state.aboutItems;
    },
  },
};
</script>

<style lang="scss">
.section-about {
  margin-top: calc(var(--gutter) * 5);
}

.section-title {
  text-align: center;

  @media only screen and (min-width: 1024px) {
    text-align: left;
  }
}

.text-about {
  font-family: var(--f-secondary);
  font-weight: var(--regular);
  font-size: var(--fs-normal);
  line-height: calc(var(--line-height) * var(--fs-normal));
  color: var(--c-acc-darker);
  text-align: justify;

  @media only screen and (min-width: 1024px) {
    text-align: left;
  }
}

.about-info {
  font-family: var(--f-secondary);
  font-size: var(--fs-regular);
  font-weight: var(--regular);
  line-height: calc(var(--line-height) * var(--fs-regular));
  color: var(--c-acc-darker);
}

.about-icon {
  color: var(--c-sec-darker) !important;
}

.btn-about {
  justify-content: center;
  background-color: var(--c-sec-darker) !important;
  border-radius: var(--border-radius-semi);
  color: var(--c-acc-ligther) !important;
  font-family: var(--f-secondary);
  font-size: var(--fs-regular);
  font-weight: var(--medium);
  line-height: calc(var(--line-height) * var(--fs-regular));

  &:hover {
    background-color: var(--c-sec-main) !important;
  }
}
</style>
