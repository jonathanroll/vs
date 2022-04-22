<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <router-link
          v-for="article in leftArticles"
          :to="{ path: '/article/' + article.attributes.slug }"
          class="uk-link-reset"
          :key="article.attributes.slug"
        >
          {{ 'Left:  '+ article.attributes.title }}
          {{ '  Length: ' + leftArticles.length }}
          {{ '  Count: ' + leftArticlesCount }} 
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <!-- <img
                :src="api_url + article.attributes.image.data.attributes.url"
                alt=""
                height="100"
              /> -->
              <img
                :src="api_url + article.attributes.cover.data.attributes.url"
                alt=""
                height="100"
              />
            </div>
            <div class="uk-card-body">
              <p
                id="category"
                v-if="article.attributes.category"
                class="uk-text-uppercase"
              >
                {{ article.attributes.category.data.attributes.name }}
              </p>
              <p id="title" class="uk-text-large">
                {{ article.attributes.title }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
      <div>
        <div class="uk-child-width-1-2@m uk-grid-match" uk-grid>
          <router-link
            v-for="article in rightArticles"
            :to="{ path: '/article/' + article.attributes.slug }"
            class="uk-link-reset"
            :key="article.attributes.slug"
          >
            <!-- {{ 'Right:'+ article.attributes.title }} -->

            <div class="uk-card uk-card-muted">
              <div class="uk-card-media-top">
                <!-- <img
                  :src="api_url + article.attributes.image.data.attributes.url"
                  alt=""
                  height="100"
                /> -->
                <img
                  :src="api_url + article.attributes.cover.data.attributes.url"
                  alt=""
                  height="100"
                />
              </div>
              <div class="uk-card-body">
                <p
                  id="category"
                  v-if="article.attributes.category"
                  class="uk-text-uppercase"
                >
                  {{ article.attributes.category.data.attributes.name }}
                </p>
                <p id="title" class="uk-text-large">
                  {{ article.attributes.title }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArticlesList',
  data: function () {
    return {
      // api_url: process.env.VUE_APP_STRAPI_API_URL
      api_url: 'http://localhost:1337'
    }
  },
  // props: {
  //   articles: {
  //     type: Object,
  //     default: () => []
  //   }
  // },
  props: {
    // articles: { Object, default: () => {} }
    // articles: { Object, default: () => {} }
    // articles: { Array, default: () => {} }
    articles: {}
  },
  computed: {
    leftArticles() {
      // return this.articles.data.slice(0, this.leftArticlesCount)
      // return this.data.articles.data.slice(0, this.leftArticlesCount)
      // return this.data.articles.data.slice(0, 2)
      console.table('data: ' + articles.data)
      console.log('data: ' + articles)
      console.log(this.articles)
      // console.log({...this.articles.data})
      // console.table(proxyRefs.get(this.articles,this.articles.data))
      console.log(JSON.parse(JSON.stringify({...this.articles})))
      // console.table(this.articles.data)
      // console.dir(this.articles.data.slice(1,3))
      // console.dir(proxyRefs.get(this.articles.data))
      return this.articles.data.slice(0, 2)
      
    },
    leftArticlesCount() {
      return Math.ceil(this.articles.data.length / 5)
    },

    rightArticles() {
      // return this.articles.data.slice(this.leftArticlesCount, this.articles.data.length)
      return this.articles.data
    }
  }
}
</script>
