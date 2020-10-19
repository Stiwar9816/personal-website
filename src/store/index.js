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
      {
        text: "3183919028",
        icon: "mdi-phone",
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
        url: "https://twitter.com/AsprillaStiwar",
      },
    ],
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
  },
});
