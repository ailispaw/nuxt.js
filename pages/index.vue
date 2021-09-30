<template>
  <div>
    <h1>Augmented Idea Studio</h1>

    <h2>coming soon!</h2>

    <section class="container">
      <ul>
        <li v-for="entry in entries">
          <p>{{ entry.fields.title }}</p>
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({ env }) {
      return client.getEntries({
        content_type: env.CTF_CONTENT_TYPE_ID,
        order: '-fields.published'
      }).then(( res ) => {
        return {
          entries: res.items
        }
      }).catch( console.error )
    }
  }
</script>