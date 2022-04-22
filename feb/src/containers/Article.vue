<template>
  <div v-if="articles.data">
    <div
      v-if="articles.data[0].attributes.image"
      id="banner"
      class="uk-height-small uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding"
      :data-src="
        api_url + articles.data[0].attributes.image.data.attributes.url
      "
      uk-img
    >
      <h1>{{ articles.data[0].attributes.title }}</h1>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-small">
        <vue-markdown-it
          v-if="articles.data[0].attributes.content"
          :source="articles.data[0].attributes.content"
          id="editor"
        />
        <p v-if="articles.data[0].attributes.publishedAt">
          {{
            moment(articles.data[0].attributes.publishedAt).format("MMM Do YY")
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// var moment = require('moment');
import VueMarkdownIt from 'vue-markdown-it'
import gql from 'graphql-tag'
var moment = import('moment')

export default {
  data() {
    return {
      articles: {},
      moment: moment,
      api_url: process.env.VUE_APP_STRAPI_API_URL,
      //api_url: 'http://localhost:1337',
      routeParam: this.$route.params.slug,
    }
  },
  components: {
    VueMarkdownIt,
  },
  apollo: {
    articles: {
      query: gql`
        query Article($slug: String!) {
          articles(filters: { slug: { eq: $slug } }) {
            data {
              attributes {
                slug
                title
                content
                category {
                  data {
                    attributes {
                      slug
                      name
                    }
                  }
                }
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      `,
      variables() {
        return {
          slug: this.routeParam,
        };
      },
    },
  },
};
</script>
