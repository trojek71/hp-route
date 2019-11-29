<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">Moje Filmy</a>
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <MovieMenu />
      </div>

      <div class="col-9 p-2">
        <product-list />
      </div>
    </div>
  </div>
</template>
<script>
import MovieMenu from "./MovieMenu";
///import CategoryControls from "./CategoryControls";
export default {
  components: { MovieMenu }
};
</script>