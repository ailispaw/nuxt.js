<template>
  <v-row>
    <v-col>
      <AiSLogo />
      
      <v-card>
        <v-list>
          <v-list-item v-for="entry in entries" :key="entry.title">
            <v-list-item-content>
              <v-list-item-title>{{ entry.title }}</v-list-item-title>
              <v-list-item-subtitle v-html="entry.content"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { createClient } from '~/plugins/contentful.js'
  import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

  const client = createClient()

  export default {
    // `env` is available in the context object
    asyncData ({ app, env }) {
      return client.getEntries({
        content_type: env.CTF_CONTENT_TYPE_ID,
        locale: ( app.i18n.locale === 'en' ? 'en-US' : app.i18n.locale ),
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