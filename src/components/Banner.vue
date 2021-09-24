<template>
  <v-card flat tile class="card-banner">
    <v-img
      class="img-banner align-center"
      :src="require('../assets/images/bg.webp')"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <v-img
            class="img-avatar"
            max-height="250"
            :src="require('../assets/images/avatar.webp')"
            contain
          />
          <p class="text-subtitle mt-12">Hello my name is</p>
          <h1 class="name text-uppercase mt-n3">Stiwar asprilla</h1>
          <p class="text-subtitle">I'm a frontend developer</p>
        </v-col>
      </v-row>
    </v-img>
  </v-card>
</template>


<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss">
.img-banner {
  height: 550px;
  @media only screen and (min-width: 1024px) {
    height: 600px;
  }
}
.name {
  font-family: var(--f-primary);
  font-weight: var(--bold);
  color: var(--c-acc-ligther);
  font-size: var(--fp-h4-normal);
  line-height: calc(var(--line-height) * var(--fp-h4-normal));
  @media only screen and (min-width: 1024px) {
    font-size: var(--fp-h1-title);
    line-height: calc(var(--line-height) * var(--fp-h1-title));
  }
  &:hover{
    color: var(--c-fou-darker);
  }
}
.text-subtitle {
  font-family: var(--f-secondary);
  font-size: var(--fs-normal);
  font-weight: var(--regular);
  color: var(--c-acc-ligther);
  line-height: calc(var(--line-height) * var(--fs-normal));
}
</style>