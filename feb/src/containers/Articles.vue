<template>
  <div>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>Strapi blog blog</h1>
        <ArticlesList :articles="articles"></ArticlesList>
         {{ articles }}
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import ArticlesList from '../components/ArticlesList.vue'

export default {
  name: 'ArticlesVue',
  components: {
    ArticlesList
  },
  data() {
    return {
      articles: {}
    };
  },
  apollo: {
    articles: gql`
      query Articles {
        articles {
          data {
            attributes {
              title
              slug
              cover {
                data {
                  attributes {
                    url
                  }
                }
              }
              category {
                data {
                  attributes {
                    slug
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
  },
};
</script>
