<template>
  <v-group @click="handleClick">
    <v-circle :config="outerCircle"></v-circle>
    <v-circle :config="innerCircle"></v-circle>
    <v-text :config="innerTextConfig"></v-text>
    <v-text :config="outerTextConfig"></v-text>
  </v-group>
</template>

<script>

export default {
  name: 'ThreePossibilities',
  props: {
    x: Number,
    y: Number,
    radius: Number,
    outerText: String,
    innerText: String,
    pervasionName: String
  },
  methods: {
    handleClick: function() {
      if (this.$store.state.subject && this.$store.state.predicate) {
        if (this.pervasionName) {
          this.$store.commit('setSelectedPervasion', this.pervasionName);
        }
      }
    }
  },
  watch: {
    innerText: function(newVal) {
      this.innerTextConfig.text = newVal;
    },
    outerText: function(newVal) {
      this.outerTextConfig.text = newVal;
    }
  },
  data() {

    const fontSize = this.radius/6;
    const innerCircleRadius = this.radius / 2.5;

    return {
      innerCircle: {
        x: this.x,
        y: this.y,
        radius: innerCircleRadius,
        fill: this.$store.state.color2,
      },
      outerCircle: {
        x: this.x,
        y: this.y,
        radius: this.radius,
        fill: this.$store.state.color1,
      },
      innerTextConfig: {
        x: this.x - innerCircleRadius * 3 / 2,
        y: this.y - innerCircleRadius,
        verticalAlign: 'middle',
        text: this.innerText,
        fontFamily: "Arial",
        fontSize: fontSize,
        height:innerCircleRadius*2,
        wrap:'word',
        width: innerCircleRadius * 3,
        align: "center"
      },
      outerTextConfig: {
        x: this.x - innerCircleRadius * 3 / 2,
        y: this.y + (this.radius - innerCircleRadius)/2,
        verticalAlign: 'middle',
        text: this.outerText,
        fontFamily: "Arial",
        fontSize: fontSize,
        height: innerCircleRadius*2,
        wrap:'word',
        width: innerCircleRadius * 3,
        align: "center"
      }
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
