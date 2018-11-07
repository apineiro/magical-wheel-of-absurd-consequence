<template>
    <span class="emphasize" :style="[textStyle, {fontSize:this.$store.state.objectsFontSize}]">{{this.text}}</span>
</template>

<script>
  export default {
    name: "InlineEmphasize",
    props:{
      color: String,
      text: String,
      //fontSize: String
    },
    data() {

      let textStyle = {};

      if (this.color === '1') {
        textStyle = {
          backgroundColor:this.$store.state.color1,
          textDecoration:'none',
          padding: '0 8px',
          //fontSize: this.$store.state.objectsFontSize
        }
      }
      else if (this.color === '2') {
        textStyle = {
          backgroundColor:this.$store.state.color2,
          textDecoration:'none',
          padding: '0 8px',
          //fontSize: this.$store.state.objectsFontSize
        }
      }
      else {
        textStyle = {
          //fontSize: this.$store.state.objectsFontSize
        }
      }

      return {
        textStyle,
      }
    },
  };
</script>

<style scoped>
    .emphasize {
        color:black;
        font-weight: bold;
        text-decoration: underline;
    }
</style>