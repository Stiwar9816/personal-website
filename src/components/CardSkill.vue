<template>
  <v-card class="cardSkill my-2 mx-4 " flat >
     <v-row class="justify-lg-start cardSkill__row " no-gutters>
      <v-icon class="cardSkill__icon" size="34" >
        {{ icon }}
      </v-icon> 
      <v-card-title class="cardSkill__title ">
        {{ titleSkill }}
      </v-card-title>
     </v-row>
      
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
     titleSkill: {
      type: Object,
      default: "HTML",
    },
  },
};
</script>

<style lang="scss">
.cardSkill {
  background-color: var(--c-fou-lighter) !important;
  &__row {
    margin-left: calc(var(--gutter) * 5.5) !important;
     @media only screen and (min-width: 1024px) {
       margin-left: calc(var(--gutter) * 3.5) !important;
     }
  }
  &__title {
    font-family: var(--f-secondary);
    font-size: var(--fs-regular);
    font-weight: var(--medium);
    color: var(--c-sec-darker) !important;
      &:hover{
      color: var(--c-sec-lighter) !important;
    }
  }
  &__icon {
    margin: var(--gutter) 0 var(--gutter) 0;
    color: var(--c-sec-darker) !important;
    &:hover{
      color: var(--c-sec-lighter) !important;
    }
  }
}
</style>