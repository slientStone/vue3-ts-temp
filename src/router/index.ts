import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// eslint-disable-next-line
import HomeView from "@/views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  // {
  //   path: "/course",
  //   name: "CourseView",
  //   component: () => 
  //   import("../views/CourseView.vue")
  // },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
