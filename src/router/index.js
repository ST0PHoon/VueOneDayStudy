import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import VotingView from "../views/VotingView.vue";
import ResultView from "../views/ResultView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/voting",
    name: "voting",
    component: VotingView,
  },
  {
    path: "/result",
    name: "result",
    component: ResultView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
