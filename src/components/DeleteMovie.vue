/* eslint-disable */
<template>
  <form @submit="submit">
    <fieldset>
      <input type="text" placeholder="Title" v-model="title" />
      
    </fieldset>
    <input class="button-primary" type="Kasuj" value="Send" />
  </form>
</template>
<script>

import gql from "graphql-tag";
const DEL_MOVIE = gql`
  mutation delMovie {
    movies  {
      id
      title
      director
      composer
      release_date
    }
  }
`;

export default {  
}
</script>
