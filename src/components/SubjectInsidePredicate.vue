<template>
  <div>
    <h1 id="three-possibilities-header">Three Possibilities</h1>
    <div class="text">Whatever is <InlineEmphasize color="2" :text="subject" /> (inner container)
      is necessarily <InlineEmphasize color="1" :text="predicate" /> (outer container).</div>
    <div id="stage-container" v-bind:style="styleObject">
      <v-stage :config="configKonva">
        <v-layer>
          <ThreePossibilities
                  :x="this.configKonva.width/2"
                  v-bind:y="baseRadius"
                  v-bind:radius="baseRadius"
                  :outerText="predicate"
                  :innerText="subject"
                  :swapColors="false"
          />
        </v-layer>
      </v-stage>
    </div>
    <div id="text-container">
      <div>Find something that is <InlineEmphasize color="2" :text="subject" /> (inner container) that does not have the
        quality of being <InlineEmphasize color="1" :text="predicate" /> (outer container).</div>
      <input
              id="reasonInput"
              v-model="reasonText"
              @change="handleChange"
              :style="{fontSize:this.$store.state.objectsFontSize}"
      >
    </div>
    <div id="consequence-container">
      <h1>Consequence</h1>
      <div><InlineEmphasize :text="reasonText" /> is <InlineEmphasize :text="predicate" /> because
        <InlineEmphasize :text="subject" /></div>
      <div>and you claimed</div>
      <div>Whatever is <InlineEmphasize :text="subject" /> is necessarily <InlineEmphasize :text="predicate" /></span></div>
    </div>
  </div>
</template>

<script>

import ThreePossibilities from './ThreePossibilities'
import InlineEmphasize from './InlineEmphasize'

export default {
  name: 'SubjectInsidePredicate',
  components: {
    ThreePossibilities,
    InlineEmphasize
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
    if (elem) elem.scrollIntoView({ block: 'end',  behavior: 'smooth' });
  },
  methods: {
    handleChange() {
      //let elem = document.getElementById("consequence-container");
      //if (elem) elem.scrollIntoView({ block: 'end',  behavior: 'smooth' });
    },
    handleResize() {
      let width = window.innerWidth;
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
    const baseRadius = stageWidth/7;
    const stageHeight = baseRadius*2;

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
      baseRadius: baseRadius,
    }
  }
}
</script>

<style lang="scss">
  h1 {
    margin-top: 100px;
    margin-bottom : 40px;
  }
</style>
