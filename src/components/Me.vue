<template>
  <div>
    <v-parallax src="static/img/bg.jpg" id="header-container"height="500">
      <v-layout column align-center justify-center>
        <div id="particles">
        </div>
        <v-card class="business-card hidden-xs-only" color="grey darken-4 pa-4 elevation-12">
          <v-avatar size="200px">
            <img src="static/img/senci.jpg" id="parallax-background" class="ma-2 elevation-1">
          </v-avatar>
          <div class="pa-2">
            <v-card-title>
              <div class="pb-3">
                <div class="headline">
                  Senči
                </div>
                <br>
                <div class="subheadline">
                  <v-icon>location_on</v-icon>
                  Hamburg, Germany
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-chip outline color="primary">code magician.</v-chip>
              <v-chip outline color="primary">raver.</v-chip>
              <v-chip outline color="primary">nerd.</v-chip>
            </v-card-actions>
          </div>
        </v-card>
        <div id="xs-avatar" class="text-xs-center hidden-sm-and-up">
          <v-avatar size="180px">
            <img src="static/img/senci.jpg" class="elevation-1">
          </v-avatar>
          <div class="pt-4">
            <div class="headline">
              Senči
            </div>
            <br>
            <div class="subheadline">
              <v-icon>location_on</v-icon>
              Hamburg, Germany
            </div>
            <div class="pt-4">
              <v-chip color="primary">code magician.</v-chip>
              <v-chip color="primary">raver.</v-chip>
              <v-chip color="primary">nerd.</v-chip>
            </div>
          </div>
        </div>
      </v-layout>
    </v-parallax>
    <div class="elevation-12 grey darken-4">
      <v-layout row wrap>
        <v-flex xs10 offset-xs1 md6 offset-md3>
          <h5 class="headline my-4">.about</h5>
          <p class="body-1">
            Moin, I'm a passionate Software Engineer.
            My special interests lie within machine learning and audio processing.
            I'm always looking for a new challenge and thereby eager to start new projects.
            Although I'm familiar with classical technologies and patterns, I usually prefer to be bleeding edge.
          </p>
          <!--<h5 class="headline my-4">.skillz</h5>-->
          <!--<p class="body-1">I do stuff with computers.</p>-->
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'me',

    data () {
      return {}
    },

    mounted () {
      console.log('asdasdsa')
// eslint-disable-next-line no-undef
      particlesJS.load('particles', '/static/js/particles.json', () => {
        console.log('callback - particles.js config loaded')
      })
    }
  }
</script>

<style scoped>

  #particles {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  #parallax-background {
    width: 100vw;
  }

  #xs-avatar {
    pointer-events: none;
    z-index: 1;
  }

  #header-container {
    height: 90vh !important;
  }

  .business-card {
    display: flex;
  }

  .headline {
    font-family: 'Poiret One' !important;
    font-size: 2.4rem !important;
  }
</style>
