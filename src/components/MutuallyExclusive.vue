<template>
  <v-group>
    <v-circle :config="outerCircle"></v-circle>
    <v-circle :config="innerCircle"></v-circle>
    <v-text :config="Object.assign({fontSize:objectsFontSize}, innerTextConfig)"></v-text>
    <v-text :config="Object.assign({fontSize:objectsFontSize}, outerTextConfig)"></v-text>
  </v-group>
</template>

<script>

export default {
  name: 'MutuallyExclusive',
  props: {
    x: Number,
    y: Number,
    radius: Number,
    outerText: String,
    innerText: String,
  },
  watch: {
    innerText: function(newVal) {
      this.innerTextConfig.text = newVal;
    },
    outerText: function(newVal) {
      this.outerTextConfig.text = newVal;
    }
  },
  computed: {
    objectsFontSize () {
      return this.$store.state.objectsFontSize.replace('px','');
    }
  },
  data() {

    return {
      innerCircle: {
        x: this.x,
        y: this.y,
        radius: this.radius,
        fill: this.$store.state.color2,
        stroke: this.$store.state.color1,
        strokeWidth: 5
      },
      outerCircle: {
        x: this.x + this.radius*2,
        y: this.y,
        radius: this.radius,
        fill: this.$store.state.color1,
      },
      innerTextConfig: {
        x: this.x - this.radius,
        y: this.y - this.radius/2,
        verticalAlign: 'middle',
        text: this.innerText,
        fontFamily: "Arial",
        height:this.radius,
        wrap:'word',
        width: this.radius*2,
        align: "center"
      },
      outerTextConfig: {
        x: this.x + this.radius,
        y: this.y - this.radius/2,
        verticalAlign: 'middle',
        text: this.outerText,
        fontFamily: "Arial",
        height: this.radius,
        wrap:'word',
        width: this.radius*2,
        align: "center"
      }
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
