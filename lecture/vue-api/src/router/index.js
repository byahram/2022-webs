import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import ReferenceView from "../views/ReferenceView.vue";
import PortfolioView from "../views/PortfolioView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import MovieView from "../views/MovieView.vue";
import UnsplashView from "../views/UnsplashView.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/reference",
    name: "Reference",
    component: ReferenceView,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: PortfolioView,
  },
  {
    path: "/youtube",
    name: "Youtube",
    component: YoutubeView,
  },
  {
    path: "/movie",
    name: "Movie",
    component: MovieView,
  },
  {
    path: "/unsplash",
    name: "Unsplash",
    component: UnsplashView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
