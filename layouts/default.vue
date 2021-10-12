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
        dense
        mandatory
        rounded
      >
        <template v-for="locale in this.$i18n.locales">
          <v-btn
            :key="locale"
            :value="locale"
            elevation="1"
            min-width="42"
            small
          >
            {{ locale }}
          </v-btn>
        </template>
      </v-btn-toggle>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped stateless width="128">
      <v-list nav>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title><nuxt-link :to="localePath('/')">Home</nuxt-link></v-list-item-title>
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
      <span>View on GitHub</span>
    </v-tooltip>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false
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
  @import '~/assets/css/main.scss';

  .v-btn-toggle {
    color: #{$logo-top-color} !important;
  }

  .v-btn.github {
    background-color: #{$logo-bottom-color} !important;
    color: #fff !important;
  }
</style>
