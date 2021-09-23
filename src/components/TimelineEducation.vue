<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      right
      v-for="(color, i) in colors"
      :key="i"
      :color="color.color"
      fill-dot
      small
    >
      <v-card class="CardTimeline text-center justify-center" flat>
        <v-card-title class="CardTimeline__title text-center justify-center">{{cardTitle}}</v-card-title>
        <v-card-text class="CardTimeline__text">
          <p>{{description}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <v-timeline-item left v-for="(color, i) in colors" :key="i" :color="color.color" fill-dot small>
      <v-card class="CardTimeline text-center justify-center" flat>
        <v-card-title class="CardTimeline__title text-center justify-center">{{cardTitleLeft}}</v-card-title>
        <v-card-text class="CardTimeline__text">
          <p>{{descriptionLeft}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
        <v-timeline-item
      right
      v-for="(color, i) in colors"
      :key="i"
      :color="color.color"
      fill-dot
      small
    >
      <v-card class="CardTimeline text-center justify-center" flat>
        <v-card-title class="CardTimeline__title text-center justify-center">{{cardTitleRight}}</v-card-title>
        <v-card-text class="CardTimeline__text">
          <p>{{descriptionRight}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: "Institución Educativa Carrasquilla Industrial",
    },
    description: {
      type: String,
      default: "Bachiller técnico con profundización en metalmecánica.",
    },
    cardTitleLeft: {
      type: String,
      default: "Fundación Universitaria Claretiana",
    },
    descriptionLeft: {
      type: String,
      default: "Ingeniero de sistemas.",
    },
    CardTitleRight:{
      type:String,
      default: "Servicio Nacional de Aprendizaje - SENA"
    },
    descriptionRight:{
      type:String,
      default:"Identificación, Funcionamiento y Diseño de Circuitos Electrónicos Digitales Básicos."
    }
  },
  data: () => ({
    name: "Timeline",
    colors: [
      {
        color: "#265A5C",
      },
    ],
  }),
};
</script>

<style lang="scss">
.CardTimeline {
  background-color: var(--c-fou-main) !important;
  border-radius: var(--border-radius-minor) !important;
  &__title {
    font-family: var(--f-primary);
    font-size: var(--fp-h5-regular);
    font-weight: var(--medium);
    line-height: calc(var(--line-height) * var(--fp-h5-regular));
    color: var(--c-sec-main) !important;
  }
  &__text {
    font-family: var(--f-secondary);
    font-size: var(--fs-small);
    font-weight: var(--regular);
    color: var(--c-acc-darker) !important;
    line-height: calc(var(--line-height) * var(--fs-small));
  }
}
</style>