<template>
  <div>
    <h1>Augmented Idea Studio</h1>

    <h2>coming soon!</h2>

    <section class="container">
      <ul>
        <li v-for="entry in entries" :key="entry.title">
          <h3>{{ entry.title }}</h3>
          <div v-html="entry.content"></div>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js'
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({ env }) {
      return client.getEntries({
        content_type: env.CTF_CONTENT_TYPE_ID,
        order: '-fields.published'
      }).then( res  => {
        let entries = []
        res.items.forEach( item => {
          entries.push({
            title: item.fields.title,
            content: documentToHtmlString( item.fields.content )
          })
        });
        return {
          entries: entries
        }
      }).catch( console.error )
    }
  }
</script>