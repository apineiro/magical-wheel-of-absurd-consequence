<template>
  <v-group>
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
    innerText: String
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

    const fontSize = this.radius/5;

    return {
      innerCircle: {
        x: this.x,
        y: this.y,
        radius: this.radius,
        fill: "white",
        stroke: 'DeepSkyBlue',
        strokeWidth: 5
      },
      outerCircle: {
        x: this.x + this.radius*2,
        y: this.y,
        radius: this.radius,
        fill: "DeepSkyBlue",
      },
      innerTextConfig: {
        x: this.x - this.radius*0.5,
        y: this.y - this.radius/2,
        verticalAlign: 'middle',
        text: this.innerText,
        fontFamily: "Arial",
        fontSize: fontSize,
        height:this.radius,
        wrap:'word',
        width: this.radius,
        align: "center"
      },
      outerTextConfig: {
        x: this.x + this.radius*1.5,
        y: this.y - this.radius/2,
        verticalAlign: 'middle',
        text: this.outerText,
        fontFamily: "Arial",
        fontSize: fontSize,
        height: this.radius,
        wrap:'word',
        width: this.radius,
        align: "center"
      }
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
