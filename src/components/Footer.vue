<template>
  <v-footer class="footer" dark padless height="80">
    <v-card class="footer flex mt-2" flat tile>
      <v-container>
        <v-card-title class="footer justify-center">
          <v-row no-gutters class="networks">
            <v-btn
              v-for="icon in iconsFooter"
              :key="icon"
              class="mx-2"
              icon
              :href="icon.url"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="icons-networks"
            >
              <v-icon class="icons" size="26px">{{ icon.name }}</v-icon>
            </v-btn>
          </v-row>
          <v-spacer></v-spacer>
          <strong class="copyright"
            >Copyright © {{ new Date().getFullYear() }} All rights
            reserved.</strong
          >
        </v-card-title>
      </v-container>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    iconsFooter() {
      return this.$store.state.iconsFooter;
    },
  },
};
</script>

<style lang="scss">
.footer {
  background-color: var(--c-pri-darker) !important;
}

.copyright {
  font-family: var(--f-secondary);
  font-size: var(--fs-small);
  font-weight: var(--regular);
  color: var(--c-acc-ligther);
}

.networks {
  justify-content: flex-end;
  align-content: center;

  @media only screen and (min-width: 1024px) {
    justify-content: flex-start;
  }

  @media only screen and (min-width: 728px) {
    justify-content: flex-start;
  }
}

.icons {
  color: var(--c-fou-lighter) !important;

  &:hover {
    color: var(--c-fou-darker) !important;
  }
}
</style>
