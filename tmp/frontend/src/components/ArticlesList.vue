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
        <!-- {{ 'Left:  '+ article.attributes.title }} -->
        <!-- {{ '  Length: ' + leftArticles.length }} -->
        <!-- {{ '  Count: ' + leftArticlesCount }} -->
          <div class="uk-card uk-card-muted">
            <div class="uk-card-media-top">
              <img
                :src="api_url + article.attributes.image.data.attributes.url"
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
                <img
                  :src="api_url + article.attributes.image.data.attributes.url"
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

<script>import { toNumber } from "@vue/shared";

export default {
  name: "ArticlesList",
  data: function () {
    return {
      // api_url: process.env.VUE_APP_STRAPI_API_URL
      api_url: 'http://localhost:1337'
      
    };
  },
  props: {
    articles: {
      type: Object,
      default: () => {},
    },
  },
  computed: {

    leftArticles() {
      return this.articles.data.slice(0, this.leftArticlesCount);
    },
    leftArticlesCount() {
      return Math.ceil(this.articles.data.length / 5);
    },
    
    rightArticles() {
      return this.articles.data.slice(this.leftArticlesCount, this.articles.data.length);
    },
  },
};
</script>