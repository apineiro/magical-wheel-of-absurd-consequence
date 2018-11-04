<template>
  <div class="mu-board">
    <v-stage :config="configKonva">
      <v-layer>
        <v-circle :config="outerCircle"></v-circle>
        <v-circle :config="innerCircle"></v-circle>
        <v-text :config="innerTextConfig"></v-text>
        <v-text :config="outerTextConfig"></v-text>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>

export default {
  name: 'MuBoard',
  props: {
    x: Number,
    y: Number,
    diameter: Number,
    outerText: String,
    innerText: String
  },
  data() {

    const innerCircleDiameter = this.diameter / 2.5;

    return {
      configKonva: {
        width: 800,
        height: 800
      },
      innerCircle: {
        x: this.x,
        y: this.y,
        radius: innerCircleDiameter,
        fill: "white",
      },
      outerCircle: {
        x: this.x,
        y: this.y,
        radius: this.diameter,
        fill: "DeepSkyBlue",
      },
      innerTextConfig: {
        x: this.x - innerCircleDiameter * 3 / 2,
        y: this.y - innerCircleDiameter/2,
        verticalAlign: 'middle',
        text: this.innerText,
        fontFamily: "Arial",
        fontSize: "20",
        height:innerCircleDiameter,
        wrap:'word',
        width: innerCircleDiameter * 3,
        align: "center"
      },
      outerTextConfig: {
        x: this.x - innerCircleDiameter * 3 / 2,
        y: this.y + innerCircleDiameter/2 + (this.diameter - innerCircleDiameter)/2,
        verticalAlign: 'middle',
        text: this.outerText,
        fontFamily: "Arial",
        fontSize: "20",
        height: innerCircleDiameter,
        wrap:'word',
        width: innerCircleDiameter * 3,
        align: "center"
      }
    };
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
