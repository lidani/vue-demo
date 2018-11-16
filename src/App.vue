<template>
  <div id="app">
    <v-toolbar
      fixed
      clipped-left
      app
      scroll-off-screen
      dark>
      <v-btn v-on:click="drawer = !drawer" icon transition="fade-transition">
        <v-icon v-if="drawer">chevron_left</v-icon>
        <v-icon v-else>menu</v-icon>
      </v-btn>
      <v-toolbar-title>Nome</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="(route, i) in routers" :key="i">
        <v-btn flat :to="route.path" v-if="route.showWhenMobile">{{route.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      dark
      disable-route-watcher
      disable-resize-watcher
      mobile-break-point>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>Nome sobrenome</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile
          v-for="(route, i) in routers" :key="i"
          v-if="(route.showWhenMobile && isMobile) || !route.showWhenMobile"
          v-on:click="!route.path ? doLogout() : drawer = !drawer"
          :to="route.path">
          <v-list-tile-action>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ route.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-layout container wrap>
      <v-flex xs12 center>
        <router-view :key="$router.path" />
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    drawer: false,
    isMobile: false,
    routers: [
      { title: 'Feed', icon: 'format_list_bulleted', showWhenMobile: true, path: '/' },
      { title: 'Sobre nós', icon: 'people', showWhenMobile: true, path: '/about' },
      { title: 'Vídeos', icon: 'movie', showWhenMobile: true, path: '/videos' },
      { title: 'Sair', icon: 'exit_to_app', showWhenMobile: false }
    ],
    mini: true,
    right: null
  }),
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
    doLogout () {
      console.log('do Logout')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
