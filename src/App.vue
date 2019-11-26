<template>
  <div id="app">
    <h1>Witaj</h1>
    <ul>
      <li><router-link to="/">Moje Filmy</router-link></li>
      <li><router-link to="/onas">Lista filmów</router-link></li>
      <li><router-link to="/dodaj">Dodaj film</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
//import MoviesList from "./components/MoviesList.vue";
//import AddMovie from "./components/AddMovie.vue";
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
