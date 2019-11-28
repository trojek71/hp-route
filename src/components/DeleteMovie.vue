<template>
  <form @submit="submit">
    <fieldset>
      <input type="text" placeholder="Title" v-model="title" />
    </fieldset>
    <input class="button-primary" type="submit" value="Send" />
  </form>
</template>
<script>
/* eslint-disable */
import gql from "graphql-tag";
const DEL_MOVIE = gql`
  mutation removeTodo($title: String!) {
    delete_movies(where: { title: { _eq: $title } }) {
      affected_rows
    }
  }
`;

export default {
  name: "DeleteMovie",
  data() {
    return {
      title: ""
    };
  },
  apollo: {},
  methods: {
    submit(e) {
      e.preventDefault();
      const { title } = this.$data;
      this.$apollo.mutate({
        mutation: DEL_MOVIE,
        variables: {
          title
        }
        // refetchQueries: ["getMovies"]
      });
    }
  }
};
</script>
