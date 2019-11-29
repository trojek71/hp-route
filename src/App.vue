<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">Portal z filmami</a>
      </div>
    </div>
    <div id="app">
      <div class="row">
        <div class="col-3 bg-info p-2">
          <ul>
            <li>
              <router-link to="/" tag="button">Moje Filmy</router-link>
            </li>
            <li>
              <router-link to="/onas" tag="button">Lista filmów</router-link>
            </li>
            <li>
              <router-link to="/dodaj" tag="button">Dodaj film</router-link>
            </li>
            <li>
              <router-link to="/kasuj" tag="button">Kasuj film</router-link>
            </li>
          </ul>
        </div>

        <div class="col-9 bg-light p-2">
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import MoviesList from "./components/MoviesList.vue";
//import AddMovie from "./components/AddMovie.vue";
export default {
  name: "app"
};
</script>

<style>
li {
  list-style-type: none;
}
</style>
