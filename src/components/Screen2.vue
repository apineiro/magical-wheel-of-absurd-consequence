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

</style>
