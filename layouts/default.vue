<template>
  <v-app>
    <v-app-bar app dense clipped-left>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Augmented Idea Studio</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn-toggle
        v-model="locale"
        dense
        mandatory
        rounded
      >
        <template v-for="locale in this.$i18n.locales">
          <v-btn :key="locale" :value="locale">{{ locale.toUpperCase() }}</v-btn>
        </template>
      </v-btn-toggle>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <!-- -->
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer app>
      <span>Copyright &copy; {{ new Date().getFullYear() }} Augmented Idea Studio.</span>
    </v-footer>
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
</style>
