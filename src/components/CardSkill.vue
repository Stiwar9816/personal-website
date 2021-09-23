<template>
  <v-card class="cardSkill my-2 mx-2 justify-center" flat>
    <v-row class="justify-center" no-gutters>
      <v-icon class="cardSkill__icon mt-4 mb-n2">
        {{ icon }}
      </v-icon>
    </v-row>
    <v-card-title class="cardSkill__title text-center justify-center">
      {{ titleSkill }}</v-card-title
    >
  </v-card>
</template>

<script>
export default {
  name: "CardSkill",
  props: {
    icon: {
      type: Object,
      default: "mdi-language-html5",
    },
    titleSkill: {
      type: Object,
      default: "HTML",
    },
  },
};
</script>

<style lang="scss">
.cardSkill {
  background-color: var(--c-fou-main) !important;

  &__title {
    font-family: var(--f-secondary);
    font-size: var(--fs-regular);
    font-weight: var(--medium);
    color: var(--c-sec-darker) !important;
  }
  &__icon {
    color: var(--c-sec-darker) !important;
  }
}
</style>