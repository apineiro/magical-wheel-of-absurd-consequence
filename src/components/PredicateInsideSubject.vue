<template>
  <div>
    <h1>Three Possibilities</h1>
    <div class="text">Whatever is <span class="emphasize" :style="color1Style">{{predicate}}</span> (inner container)
      is necessarily <span class="emphasize" :style="color2Style">{{subject}}</span> (outer container).</div>
    <div id="stage-container" v-bind:style="styleObject">
      <v-stage :config="configKonva">
        <v-layer>
          <ThreePossibilities
                  :x="this.configKonva.width/2"
                  v-bind:y="baseRadius"
                  v-bind:radius="baseRadius"
                  :outerText="subject"
                  :innerText="predicate"
                  swapColors="true"
          />
        </v-layer>
      </v-stage>
    </div>
    <div id="text-container">
      <div>Find something that is <span class="emphasize" :style="color1Style">{{predicate}}</span> (inner container) that does not have the
        quality of being <span class="emphasize" :style="color2Style">{{subject}}</span> (outer container).</div>
      <input id="reasonInput" v-model="reasonText" @change="handleChange">
    </div>
    <div v-if="reasonText" id="consequence-container">
      <h1>Consequence</h1>
      <div><span class="emphasize">{{reasonText}}</span> is <span class="emphasize">{{subject}}</span> because
        <span class="emphasize">{{predicate}}</span></div>
      <div>OR</div>
      <div>Whatever is <span class="emphasize">{{predicate}}</span> is not necessarily <span class="emphasize">{{subject}}</span>
        because <span class="emphasize">{{reasonText}}</span></div>
    </div>
  </div>
</template>

<script>

import ThreePossibilities from './ThreePossibilities'


export default {
  name: 'PredicateInsideSubject',
  components: {
    ThreePossibilities,
  },
  computed: {
    subject: {
      get () { return this.$store.state.subject},
    },
    predicate: {
      get () { return this.$store.state.predicate},
    },
    reasonText: {
      get () { return this.$store.state.reason},
      set (value) {
        this.$store.commit('setReason', value);
      }
    }
  },
  mounted: function () {
    let elem = document.getElementById("reasonInput");
    if (elem) elem.scrollIntoView({ block: 'start',  behavior: 'smooth' });
  },
  methods: {
    handleChange() {
      let elem = document.getElementById("consequence-container");
      if (elem) elem.scrollIntoView({ block: 'start',  behavior: 'smooth' });
    },
    handleResize() {
      let width = window.innerWidth;
      console.log("width:" + width);
      let scale = width*0.8 / 800;
      this.styleObject.width = width*0.8 + 'px';
      this.configKonva = {
        width: this.stageWidth * scale,
        height: this.stageHeight * scale,
        scale: {
          x: scale,
          y: scale
        }
      }
    }
  },
  beforeMount: function () {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  data() {

    const stageWidth = this.$store.state.stageWidth;
    const stageHeight = stageWidth/5*2;

    return {
      stageWidth: this.$store.state.stageWidth,
      stageHeight: stageHeight,
      styleObject: {
        width: stageWidth + 'px',
        margin: '0 auto',
        marginTop: '20px'
      },
      color1Style: {
        backgroundColor:this.$store.state.color1,
        textDecoration:'none',
        padding: '0 8px'
      },
      color2Style: {
        backgroundColor:this.$store.state.color2,
        textDecoration:'none',
        padding: '0 8px'
      },
      configKonva: {
        width: stageWidth,
        height: stageHeight,
        scale: {
          x:1,
          y:1
        }
      },
      baseRadius: stageWidth/5
    }
  }
}
</script>

<style lang="scss">
  h1 {
    margin-top: 100px;
    margin-bottom: 40px;
  }
  .text {
    font-size: 18px;
  }
  #text-container {
    font-size: 18px;
    width:400px;
    margin: 30px auto 50px auto;
  }
  input {
    font-size: 18px;
    margin-top:20px;
  }
  #consequence-container {
    font-size: 18px;
    margin-bottom:100px;
  }
  .emphasize {
    color:black;
    font-weight: bold;
    text-decoration: underline;
  }
</style>
