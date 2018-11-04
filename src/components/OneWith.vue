<template>
  <v-group>
    <v-circle :config="outerCircle"></v-circle>
    <v-circle :config="innerCircle"></v-circle>
    <v-text :config="innerTextConfig"></v-text>
  </v-group>
</template>

<script>

export default {
  name: 'OneWith',
  props: {
    x: Number,
    y: Number,
    radius: Number,
    outerText: String,
    innerText: String
  },
  watch: {
    innerText: function(newVal) {
      this.innerTextConfig.text = newVal + " & " + this.outerText;
    },
    outerText: function(newVal) {
      this.innerTextConfig.text = this.innerText + " & " + newVal;
    }
  },
  data() {

    const fontSize = this.radius/6;

    return {
      innerCircle: {
        x: this.x,
        y: this.y,
        radius: this.radius,
        fill: "white",
        stroke: 'DeepSkyBlue',
        strokeWidth: 5,
        opacity: 0.7,
      },
      outerCircle: {
        x: this.x,
        y: this.y,
        radius: this.radius,
        fill: "DeepSkyBlue",
      },
      innerTextConfig: {
        x: this.x - this.radius*0.5,
        y: this.y - this.radius/2,
        verticalAlign: 'middle',
        text: this.innerText + " & " + this.outerText,
        fontFamily: "Arial",
        fontSize: fontSize,
        height:this.radius,
        wrap:'word',
        width: this.radius,
        align: "center"
      },
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
