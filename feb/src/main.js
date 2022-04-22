// import { createApp, h } from 'vue'
import { createApp, provide, h } from 'vue'

// import apolloClient from './vue-apollo'
// import { createApolloProvider } from '@vue/apollo-option'
import { DefaultApolloClient } from '@vue/apollo-composable'

// import VueApollo from "vue-apollo"
//import { createRouter, createWebHashHistory } from 'vue-router'
// import Article from './containers/Article.vue'


import router from './router/index'


import App from './App.vue'
import { ApolloClient } from '@apollo/client/core'

//import Nav from "./components/Nav.vue";

// const apolloProvider = createApolloProvider({
//   defaultClient: apolloClient
// })

// const routes = [{ path: "/" }];
// const routes = [{ path: '/', component: Nav }];

// const app = createApp({
//   provide: apolloProvider,
//   render: () => h(App)
// })

const app = createApp({
  setup() {
    provide(DefaultApolloClient, ApolloClient)
  },
  render: () => h(App)
})

app.use(router)
app.use(ApolloClient)
// app.use(apolloProvider)
app.mount('#app')
