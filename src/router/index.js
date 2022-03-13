import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>import("../views/WorkSpace.vue"),
  },
  {
    path: "/project",
    name: "Project",
    component: () =>import("../views/Project.vue"),
  },
  {
    path: "/notification",
    name: "Notification",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>import("../views/Notification.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
