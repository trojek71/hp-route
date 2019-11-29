<template>
  <div class="container-fluid">
    <h1>Witaj</h1>
    <ul>
      <li>
        <router-link to="/">Moje Filmy</router-link>
      </li>
      <li>
        <router-link to="/onas">Lista filmów</router-link>
      </li>
      <li>
        <router-link to="/dodaj">Dodaj film</router-link>
      </li>
      <li>
        <router-link to="/kasuj">Kasuj film</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  components: { Menu }
};
</script>
<style>
</style>