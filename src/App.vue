<template>
  <div id="app">
    <h1 class="main-title">The Magical Wheel of Suffering</h1>
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
  data() {
    return {

    }
  },
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
  h1.main-title {
    font-size:50px;
  }
</style>
