import VueRouter from "vue-router";
import HelloWorld from "./components/HelloWorld";
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import DeleteMovie from "./components/DeleteMovie";
const router = new VueRouter({
  routes: [
    { path: "/", component: HelloWorld },
    { path: "/onas", component: MoviesList },
    { path: "/dodaj", component: AddMovie },
    { path: "/kasuj", component: DeleteMovie }
  ]
});
export default router;
