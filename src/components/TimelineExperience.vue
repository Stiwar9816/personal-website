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
        <v-card-title class="CardTimeline__title text-center justify-center">{{TitleOne}}</v-card-title>
        <v-card-text class="CardTimeline__text">
          <p>{{descriptionOne}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <v-timeline-item left v-for="(color, i) in colors" :key="i" :color="color.color" fill-dot small>
      <v-card class="CardTimeline text-center justify-center" flat>
        <v-card-title class="CardTimeline__title text-center justify-center">{{TitleTwo}}</v-card-title>
        <v-card-text class="CardTimeline__text">
          <p>{{descriptionTwo}}</p>
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
        <v-card-title class="CardTimeline__title text-center justify-center">{{TitleThrid}}</v-card-title>
        <v-card-text class="CardTimeline__text">
          <p>{{descriptionThrid}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    <v-timeline-item
      left
      v-for="(color, i) in colors"
      :key="i"
      :color="color.color"
      fill-dot
      small
    >
      <v-card left class="CardTimeline text-center justify-center" flat>
        <v-card-title class="CardTimeline__title text-center justify-center">{{TitleFour}}</v-card-title>
        <v-card-text class="CardTimeline__text">
          <p>{{descriptionFour}}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  props: {
    TitleOne: {
      type: String,
      default: "CodeOn LLC",
    },
    descriptionOne: {
      type: String,
      default: "Desarrollar interfaces basadas en diseños ya propuestos aplicando métricas exactas de UX/UI.",
    },
    TitleTwo: {
      type: String,
      default: "JSConf Colombia",
    },
    descriptionTwo: {
      type: String,
      default: "Desarrollo del sitio web oficial para la conferencia tech más grande de Colombia.",
    },
    TitleThrid:{
      type:String,
      default: "NodeConf Colombia"
    },
      descriptionThrid: {
      type: String,
      default: "Desarrollo del sitio web de la conferencia en su primera versión.",
    },
    TitleFour:{
      type:String,
      default:"Sischocó S.A.S"
    },
    descriptionFour:{
      type:String,
      default:"Dar soporte y mejoras a los sistemas creados con el fin de mejorar el rendimiento"
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