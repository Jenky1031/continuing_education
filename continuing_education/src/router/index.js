import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import B from "../views/b/B.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/b/:part",
    name: "B",
    component: B,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
