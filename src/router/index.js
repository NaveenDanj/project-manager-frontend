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
    path: "/sprintlist",
    name: "SprintList",
    component: () =>import("../views/SprintList.vue"),
  },
  {
    path: "/workspace",
    name: "Workspace",
    component: () =>import("../views/WorkSpace.vue"),
  },
  {
    path: "/myaccount",
    name: "MyAccount",
    component: () =>import("../views/MyAccount.vue"),
  },
  {
    path: "/notification",
    name: "Notification",
    component: () =>import("../views/Notification.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
