<template>
 <div>
    <!--<h2>Availability Plot</h2>-->
    <!--<svg width="960" height="600"></svg>-->
    <div id="userHappiness_graphs"></div>
  </div>
</template>
<script>
import * as d3 from 'd3'
import LineChart from "./LineChart.js";
// import * as Plot from "https://cdn.skypack.dev/@observablehq/plot@0.4";
export default {
  props: {
    dataset: {
      type: String,
      default() {
        return ''
      }
    },
    compensation: {
      type: String,
      default() {
        return ''
      }
    },
    choice: {
      type: String,
      default() {
        return ''
      }
    },
    time: {
      type: String,
      default() {
        return ''
      }
    }
  },
  data () {
    return {}
  },
  watch : {
    dataset(){
      this.init()
    },
    compensation(){
      this.init()
    },
    choice(){
      this.init()
    },
    time(){
      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async init() {
      document.getElementById("userHappiness_graphs").innerHTML="";
      const dataset = await d3.json('/'+this.dataset+ '-'+this.compensation+'-'+this.choice+'.json');
      const dataUH = dataset.userHappiness
      document.getElementById("userHappiness_graphs").appendChild(LineChart(dataUH, {
        x: d => d.t,
        y: d => d.happiness,
        yLabel: "↑ User Happiness",
        width: 500,
        height: 250,
        color: "black",
        })) 
      // Plot.line(dataUH, {x: "t", y: "happiness"}).plot())
    }
  }
} 

</script>
<style scoped>
</style>