<template>
  <div>
    {{innerText}} is {{outerText}}
  </div>
</template>

<script>

export default {
  name: 'Test',
  props: {
    outerText: String,
    innerText: String,
  },
  beforeUpdate: () => {
    console.log("Updating...")
  },
  data() {

    return {

    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
