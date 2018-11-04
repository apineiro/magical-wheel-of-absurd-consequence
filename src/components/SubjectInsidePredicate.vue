<template>
  <div>
    <h1>Three Possibilities</h1>
    <div class="text">Whatever is <span class="emphasize">{{subject}}</span> (inner container) is necessarily <span class="emphasize">{{predicate}}</span> (outer container).</div>
    <div id="stage-container" v-bind:style="styleObject">
      <v-stage :config="configKonva">
        <v-layer>
          <ThreePossibilities
                  :x="this.configKonva.width/2"
                  v-bind:y="baseRadius"
                  v-bind:radius="baseRadius"
                  :outerText="predicate"
                  :innerText="subject"
          />
        </v-layer>
      </v-stage>
    </div>
    <div id="text-container">
      <div>Find something that is <span class="emphasize">{{subject}}</span> (inner container) that does not have the
        quality of being <span class="emphasize">{{predicate}}</span> (outer container).</div>
      <input id="reasonInput" v-model="reasonText" @change="handleChange">
    </div>
    <div v-if="reasonText" id="consequence-container">
      <h1>Consequence</h1>
      <div><span class="emphasize">{{reasonText}}</span> is <span class="emphasize">{{predicate}}</span> because
        <span class="emphasize">{{subject}}</span></div>
      <div>OR</div>
      <div>Whatever is <span class="emphasize">{{subject}}</span> is not necessarily
        <span class="emphasize">{{predicate}}</span> because <span class="emphasize">{{reasonText}}</span></div>
    </div>
  </div>
</template>

<script>

import ThreePossibilities from './ThreePossibilities'

export default {
  name: 'SubjectInsidePredicate',
  components: {
    ThreePossibilities,
  },
  computed: {
    subject: {
      get () { return this.$store.state.subject},
    },
    predicate: {
      get () { return this.$store.state.predicate},
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
    }
  },
  data() {

    const stageWidth = this.$store.state.stageWidth;
    const stageHeight = stageWidth/5*2;

    return {
      reasonText:'',
      styleObject: {
        width: stageWidth + 'px',
        margin: '0 auto',
        marginTop: '20px'
      },
      configKonva: {
        width: stageWidth,
        height: stageHeight
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
    div {
      margin-bottom: 20px;
    }
  }
</style>
