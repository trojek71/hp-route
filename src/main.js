/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import MoviesList from "./components/MoviesList";
//import { createProvider } from "./vue-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueRouter from "vue-router";
import VueApollo, { ApolloProvider } from "vue-apollo";
import router from "./router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: "http://192.168.66.189:8080/v1/graphql"
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);
Vue.use(VueRouter);
Vue.use(VueMaterial);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  el: "#app",
  router: router,
  components: { App, MoviesList },
  template: "<app />",
  apolloProvider,
  render: h => h(App)
});
