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
    <v-list
      class="cardSkill text-center mt-n3"
      role="list"
      aria-label="listItems"
      flat
    >
      <v-list-item-group role="listitem">
        <v-list-item-content v-for="(item, index) in dataSkill" :key="index">
          <v-list-item-title v-text="item" />
        </v-list-item-content>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "CardSkill",
  props: {
    icon: {
      type: String,
      default: "mdi-phone",
    },
    titleSkill: {
      type: String,
      default: "Lorem Ipsum",
    },
    dataSkill: {
      type: Array,
      default: null,
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