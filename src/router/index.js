import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>import("../views/WorkSpace.vue"),
    meta: { requiresAuth: true} 
  },
  {
    path: "/project",
    name: "Project",
    component: () =>import("../views/Project.vue"),
    meta: { requiresAuth: true} 
  },
  {
    path: "/sprintlist",
    name: "SprintList",
    component: () =>import("../views/SprintList.vue"),
    meta: { requiresAuth: true} 
  },
  {
    path: "/workspace",
    name: "Workspace",
    component: () =>import("../views/WorkSpace.vue"),
    meta: { requiresAuth: true} 
  },
  {
    path: "/myaccount",
    name: "MyAccount",
    component: () =>import("../views/MyAccount.vue"),
    meta: { requiresAuth: true} 
  },
  {
    path: "/notification",
    name: "Notification",
    component: () =>import("../views/Notification.vue"),
    meta: { requiresAuth: true} 
  },

  //auth routes
  {
    path : '/login',
    name : 'Login',
    component : () => import("../views/Auth/Login.vue")
  },
  {
    path : '/register',
    name : 'Register',
    component : () => import("../views/Auth/Register.vue")
  }


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.currentUser == null) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router;
