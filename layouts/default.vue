<template>
  <v-app>
    <v-app-bar app dense clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <nuxt-link :to="localePath('/')">
        <v-layout align-center>
          <AiSLogo-48 />
        </v-layout>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn-toggle
        v-model="locale"
        color="light-blue"
        dense
        mandatory
        rounded
      >
        <template v-for="locale in $i18n.locales">
          <v-tooltip :key="locale.code" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                :value="locale.code"
                min-width="42"
                small
                v-bind="attrs"
                v-on="on"
              >
                {{ locale.code }}
              </v-btn>
            </template>
            <span>{{ locale.name }}</span>
          </v-tooltip>
        </template>
      </v-btn-toggle>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped stateless width="128">
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          color="light-blue"
          link
          :nuxt="item.nuxt"
          :to="item.nuxt ? localePath( item.link ) : undefined"
          :href="item.nuxt ? undefined : item.link"
          :target="item.nuxt ? undefined : '_blank'"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t( 'nav.' + item.title ) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>Copyright &copy; {{ new Date().getFullYear() }} Augmented Idea Studio.</span>
    </v-footer>

    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="github"
          href="https://github.com/ailispaw/nuxt.js"
          target="_blank"
          color="blue"
          fab
          fixed
          bottom
          right
          small
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-github</v-icon>
        </v-btn>
      </template>
      <span>{{ $t( 'View on GitHub' ) }}</span>
    </v-tooltip>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
      navItems: [
        { title: 'home', icon: 'mdi-home', link: '/', nuxt: true },
        { title: 'blog', icon: 'mdi-post', link: 'https://ailis.paw.zone/' }
      ]
    }),
    computed: {
      locale: {
        get () {
          return this.$i18n.locale
        },
        set ( locale ) {
          this.$i18n.setLocale( locale )
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-navigation-drawer .v-list-item__icon {
    margin-right: 8px !important;
  }

  .v-btn.github {
    color: #fff !important;
  }
</style>
