<template>
  <div id="app">
    <h1 class="main-title">The Magical Wheel of Absurd Consequences</h1>
    <input
            id="fontsizetest"
            v-model="fontsizetest"
    >
    <Screen1 />
    <Screen2 v-if="this.$store.state.selectedPervasion && this.$store.state.subject && this.$store.state.predicate"/>
  </div>
</template>

<script>

import Screen1 from './components/Screen1'
import Screen2 from './components/Screen2'


export default {
  name: 'app',
  props: ['store'],
  components: {
    Screen1,
    Screen2
  },
  computed:{
    fontsizetest: {
      get () { return this.$store.state.objectsFontSize},
      set (value) {
        this.$store.commit('setObjectFontSize', value);
      }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  body {
    font-size: 18px;
  }

  h1.main-title {
    font-size:50px;
    margin-left: 50px;
    margin-right: 50px;
  }
  h1 {
    margin-top: 100px;
    margin-bottom: 40px;
  }

  #text-container {
    width: 50%;
    margin: 30px auto 50px auto;
  }

  input {
    margin-top:20px;
  }

  #consequence-container {
    margin-bottom:100px;
    div {
      margin-bottom: 20px;
    }
  }
  .emphasize {
    color:black;
    font-weight: bold;
    text-decoration: underline;
  }

</style>
