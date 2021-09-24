<template>
  <v-card class="cardSkill my-2 mx-2 justify-center align-center text-center " flat >
      <v-icon class="cardSkill__icon" size="34" >
        {{ icon }}
      </v-icon>
  </v-card>
</template>

<script>
export default {
  name: "CardSkill",
  props: {
    icon: {
      type: String,
      default: "mdi-language-html5",
    },
  },
};
</script>

<style lang="scss">
.cardSkill {
  background-color: var(--c-fou-lighter) !important;
  &__icon {
    margin: var(--gutter) 0 var(--gutter) 0;
    color: var(--c-sec-darker) !important;
    &:hover{
      color: var(--c-sec-lighter) !important;
    }
  }
}
</style>