<template>
  <div class="mu-board">
    <easel-canvas width="800" height="800">
      <easel-shape
              :x="x"
              :y="y"
              form="circle"
              fill="DeepSkyBlue"
              :dimensions="diameter"
              :align="['center','center']"
      >
      </easel-shape>
      <easel-shape
              :x="x"
              :y="y"
              form="circle"
              fill="white"
              :dimensions="diameter/2.5"
              :align="['center','center']"
      >
      </easel-shape>
      <easel-text
              :text="innerText"
              font="20px Arial"
              color="black"
              :align="['center','middle']"
              :lineWidth="200"
              :y="y"
              :x="x"
      >
      </easel-text>
      <ExtendedText
              :text="outerText"
              font="20px Arial"
              color="black"
              :align="['center','top']"
              :lineWidth="200"
              :y="y + diameter/1.7"
              :x="x"
      >
      </ExtendedText>
    </easel-canvas>
  </div>
</template>

<script>

  import ExtendedText from './ExtendedText';

export default {
  name: 'MuBoard',
  components: {
    ExtendedText
  },
  props: {
    x: Number,
    y: Number,
    diameter: Number,
    outerText: String,
    innerText: String
  },
  mounted: function() {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
