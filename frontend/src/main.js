import { createApp, h } from 'vue'
// import VueApollo from "vue-apollo"
import apolloClient from './vue-apollo'
import { createRouter, createWebHashHistory } from 'vue-router'
import Articles from './containers/Articles.vue'
import Article from './containers/Article.vue'
import App from './App.vue'

import { createApolloProvider } from '@vue/apollo-option'
// import Nav from "./components/Nav.vue";

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient
})
// const apolloProvider = new VueApollo({
// 	defaultClient: apolloClient,
// });

// const routes = [{ path: "/" }];
// const routes = [{ path: '/', component: Nav }];
const routes = [
  {
    path: '/',
    components: {
      default: Articles,
      Articles,
    }
  },
  {
    path: '/article/:slug',
    components: {
      Article
    }
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for routes: routes
})

const app = createApp({
  render: () => h(App)
})

app.use(router)
// app.use(VueApollo);
app.use(apolloProvider)
app.mount('#app')
