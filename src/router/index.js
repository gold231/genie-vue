import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue"
import Consutler from "../components/Consutler.vue"
import Historique from "../components/Historique.vue"
import Ajouter from "../components/Ajouter.vue"

Vue.use(VueRouter);

export default new VueRouter({
  routes:  [
    {
      path: "",
      name: "Home",
      component: Home
    },
    {
      path: "/consutler",
      name: "Consutler",
      component: Consutler
    },
    {
      path: "/historique",
      name: "Historique",
      component: Historique
    },
    {
      path: "/ajouter",
      name: "Ajouter",
      component: Ajouter
    }
  ]
});
