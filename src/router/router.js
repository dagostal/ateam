import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Contacts from "../components/Contact/ContactApp.vue";
import Projects from "../components/Project/Projects.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    props: true
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
