<template>
  <div class="navbar">
    <v-toolbar class="navbar l-container" height="80" dark flat app>
      <v-app-bar-nav-icon
        class="icon-menu"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-row class="menu justify-center align-center" no-gutters>
        <a
          class="nav-title mx-6 text-uppercase"
          v-for="(route, i) in routes"
          :key="i"
          :href="route.to"
          router
          exact
          >{{ route.title }}</a
        >
      </v-row>
    </v-toolbar>
    <v-navigation-drawer class="sidebar" dark app v-model="drawer" temporary>
      <v-list>
        <v-list-item
          v-for="(route, i) in routes"
          :key="i"
          :to="route.to"
          router
          exact
          aria-label="main menu"
        >
          <v-list-item-content>
            <v-list-item-title
              class="nav-title text-uppercase"
              v-text="route.title"
            />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    drawer: false,
    routes: [
      {
        title: "about",
        to: "#about",
      },
      {
        title: "education",
        to: "#education",
      },
      {
        title: "work",
        to: "#work",
      },
      {
        title: "skills",
        to: "#skills",
      },
      {
        title: "portfolio",
        to: "#portfolio",
      },
    ],
  }),
};
</script>

<style lang="scss">
.navbar,
.sidebar {
  background-color: var(--c-pri-main) !important;
}

.menu {
  display: none !important;
  @media only screen and (min-width: 1024px) {
    display: flex !important;
  }
}
.icon-menu {
  display: block;
  @media only screen and (min-width: 1024px) {
    display: none !important;
  }
}

.nav-title {
  font-family: var(--f-primary);
  font-size: var(--fp-h5-regular);
  font-weight: var(--bold);
  color: var(--c-acc-ligther) !important;
  &:hover {
    color: var(--c-pri-lighter) !important;
  }
}
</style>