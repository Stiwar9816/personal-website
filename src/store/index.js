import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    aboutItems: [
      {
        text: "1 de octubre de 1998",
        icon: "mdi-cake-variant",
      },
      {
        text: "Quibdó, Chocó",
        icon: "mdi-map-marker",
      },
      {
        text: "stiwar.asprilla1998@gmail.com",
        icon: "mdi-email",
      },
    ],
    iconsFooter: [
      {
        name: "mdi-github",
        url: "https://github.com/Stiwar9816",
      },
      {
        name: "mdi-linkedin",
        url: "https://www.linkedin.com/in/stiwar-asprilla",
      },
      {
        name: "mdi-twitter",
        url: "https://twitter.com/stiwar_asprilla",
      },
      {
        name: "mdi-instagram",
        url: "https://www.instagram.com/stiwar_asprilla/",
      },
    ],
    routes: [
      {
        title: "Sobre Mí",
        to: "#about",
      },
      {
        title: "Educación",
        to: "#education",
      },
      {
        title: "Experencia",
        to: "#work",
      },
      {
        title: "Habilidades",
        to: "#skills",
      },
      {
        title: "Portafolio",
        to: "#portfolio",
      },
    ],
  },
});
