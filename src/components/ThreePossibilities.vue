<template>
  <v-group @click="click">
    <v-circle :config="outerCircle"></v-circle>
    <v-circle :config="innerCircle"></v-circle>
    <v-text :config="innerTextConfig"></v-text>
    <v-text :config="outerTextConfig"></v-text>
  </v-group>
</template>

<script>

export default {
  name: 'MuBoard',
  props: {
    x: Number,
    y: Number,
    radius: Number,
    outerText: String,
    innerText: String,
    click: Function
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
        fill: "white",
      },
      outerCircle: {
        x: this.x,
        y: this.y,
        radius: this.radius,
        fill: "DeepSkyBlue",
      },
      innerTextConfig: {
        x: this.x - innerCircleRadius * 3 / 2,
        y: this.y - innerCircleRadius/2,
        verticalAlign: 'middle',
        text: this.innerText,
        fontFamily: "Arial",
        fontSize: fontSize,
        height:innerCircleRadius,
        wrap:'word',
        width: innerCircleRadius * 3,
        align: "center"
      },
      outerTextConfig: {
        x: this.x - innerCircleRadius * 3 / 2,
        y: this.y + innerCircleRadius/2 + (this.radius - innerCircleRadius)/2,
        verticalAlign: 'middle',
        text: this.outerText,
        fontFamily: "Arial",
        fontSize: fontSize,
        height: innerCircleRadius,
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
