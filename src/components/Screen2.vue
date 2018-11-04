<template>
  <div v-if="this.$store.state.selectedPervasion === 'SubjectInsidePredicate'">
    <SubjectInsidePredicate />
  </div>
  <div v-else-if="this.$store.state.selectedPervasion === 'PredicateInsideSubject'">
    <PredicateInsideSubject />
  </div>
  <div v-else>
    <div id="text-container">
      Please choose a pervasion
    </div>
  </div>
</template>

<script>

  import SubjectInsidePredicate from './SubjectInsidePredicate'
  import PredicateInsideSubject from './PredicateInsideSubject'


export default {
  name: 'Screen2',
  components: {
    PredicateInsideSubject,
    SubjectInsidePredicate
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
  h1 {
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .text {
    font-size: 18px;
  }
  #text-container {
    font-size: 18px;
    width:400px;
    margin: 30px auto 50px auto;
  }
  input {
    font-size: 18px;
    margin-top:20px;
  }
  #consequence-container {
    font-size: 18px;
    margin-bottom:100px;
  }
  .emphasize {
    color:black;
    font-weight: bold;
    text-decoration: underline;
  }
</style>
