<template>
 <div>
    <!--<h2>baselineCumLossDataability Plot</h2>-->
    <!--<svg width="960" height="600"></svg>-->
    <div id="baselineCumLoss_graphs"></div>
  </div>
</template>
<script>
import * as d3 from 'd3'
import MultipleLineChart from "./MultipleLineChart.js";

export default {
  name: 'BaselineCumLoss',
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
    async init () {
      document.getElementById("baselineCumLoss_graphs").innerHTML="";
      const dataset = await d3.json('/'+this.dataset+ '-'+this.compensation+'-'+this.choice+'-'+this.time+'.json');
      const baselineCumLossData = dataset.baselineCumLoss
      const statistics= ['u_min', 'u_25%', 'u_50%','u_75%','u_max'];
      const baselineCumLoss = statistics.flatMap(stat => baselineCumLossData.map(d => ({t: d.iteration, stat, value: d[stat]})))
      // console.log(baselineCumLoss)
      if(this.dataset === 'Crowdsourcing'&& this.time === 'Fixed'){
        document.getElementById("baselineCumLoss_graphs").appendChild( MultipleLineChart(baselineCumLoss, {
          x: d => d.t,
          y: d => d.value,
          z: d => d.stat,
          // facet: {data: baselineCumLoss, x: "t"},
          // sort: {fx: "y", reduce: "sum", limit: 6, reverse: true},
          // xDomain: d3.groupSort(baselineCumLoss, D => d3.sum(D, d => -d.value), d => d.iteration).slice(0, 6), // top 6
          yLabel: "↑ Loss ",
          // zDomain: statistics,
          // color: {scheme: "spectral", domain: statistics},
          colors: d3.schemeSpectral[statistics.length],
          yDomain: [0,1.0]
          // width: 500,
          // height: 250
          }))
      }
      else if(this.time === 'User'){
        document.getElementById("baselineCumLoss_graphs").appendChild( MultipleLineChart(baselineCumLoss, {
          x: d => d.t,
          y: d => d.value,
          z: d => d.stat,
          // facet: {data: baselineCumLoss, x: "t"},
          // sort: {fx: "y", reduce: "sum", limit: 6, reverse: true},
          // xDomain: d3.groupSort(baselineCumLoss, D => d3.sum(D, d => -d.value), d => d.iteration).slice(0, 6), // top 6
          yLabel: "↑ Loss ",
          // zDomain: statistics,
          // color: {scheme: "spectral", domain: statistics},
          colors: d3.schemeSpectral[statistics.length],
          yDomain: [0,0.3]
          // width: 500,
          // height: 250
          }))
      }
      else{
      document.getElementById("baselineCumLoss_graphs").appendChild( MultipleLineChart(baselineCumLoss, {
          x: d => d.t,
          y: d => d.value,
          z: d => d.stat,
          // facet: {data: baselineCumLoss, x: "t"},
          // sort: {fx: "y", reduce: "sum", limit: 6, reverse: true},
          // xDomain: d3.groupSort(baselineCumLoss, D => d3.sum(D, d => -d.value), d => d.iteration).slice(0, 6), // top 6
          yLabel: "↑ Loss ",
          // zDomain: statistics,
          // color: {scheme: "spectral", domain: statistics},
          colors: d3.schemeSpectral[statistics.length],
          yDomain: [0,5]
          // width: 500,
          // height: 250
          }))
      } 
    }
  } 
}
</script>
<style scoped>
</style>