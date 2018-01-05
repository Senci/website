<template>
  <div id="app">
    <v-app dark v-scroll="onScroll">
      <v-toolbar :class="toolbarClasses" :fixed="true" :style="toolbarStyle" class="grey darken-4" v-show="false">
        <v-toolbar-title>Senad Ličina <span>{dev}</span></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-sm-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn flat>.senči</v-btn>
          <v-btn flat>.blog</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-navigation-drawer temporary v-model="drawer" :mini-variant="mini" dark absolute right>
      </v-navigation-drawer>
      <!--<img src="./assets/logo.png">-->
      <router-view/>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      offsetTop: 0,
      drawer: false
    }
  },

  computed: {
    toolbarStyle () {
      let style = {}
      if (this.offsetTop < 10) {
        // style['background-color'] = 'transparent'
        style['opacity'] = 0
        style['pointer-events'] = 'none'
      }
      return style
    },

    toolbarClasses () {
      return this.offsetTop > 10 ? 'elevation-2' : 'elevation-0'
    }
  },

  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    }
  }
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main.styl';

  html, body {
    margin: 0;
    padding: 0;
  }

  .toolbar {
    .toolbar__title {
      font-family: 'Poiret One';
      font-weight: 800;

      span {
        font-weight: 500;
      }
    }
  }
</style>
