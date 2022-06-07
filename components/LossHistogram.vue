<template>
 <div>
    <!--<h2>lossability Plot</h2>-->
    <!--<svg width="960" height="600"></svg>-->
    <div id="loss_graphs"></div>
  </div>
</template>
<script>
import * as d3 from 'd3'
import Legend from "./Legend.js"
import GroupedBarChart from "./GroupedBarChart.js";
// import * as Plot from "https://cdn.skypack.dev/@observablehq/plot@0.4";
// import * as Plot from "@observablehq/plot";
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
    async init () {
    document.getElementById("loss_graphs").innerHTML="";  
    // const loss = await d3.json("/loss.json");
    const dataset = await d3.json('/'+this.dataset+ '-'+this.compensation+'-'+this.choice+'.json');
    const loss = dataset.loss
    const statistics= ['min', 'avg', 'max'];
    const dataloss = statistics.flatMap(stat => loss.map(d => ({t: d.date, stat, value: d[stat]})))
    // console.log(dataloss)
    document.getElementById("loss_graphs").appendChild(Legend(d3.scaleOrdinal(statistics, d3.schemeSpectral[statistics.length]), {
  title: "User Loss",
  tickSize: 0
}))
    // Swatches(d3.scaleOrdinal(statistics, d3.schemeCategory10))
    document.getElementById("loss_graphs").appendChild( GroupedBarChart(dataloss, {
        x: d => d.t,
        y: d => d.value,
        z: d => d.stat,
        // facet: {data: dataloss, x: "t"},
        // sort: {fx: "y", reduce: "sum", limit: 6, reverse: true},
        // xDomain: d3.groupSort(dataloss, D => d3.sum(D, d => -d.value), d => d.date).slice(0, 6), // top 6
        yLabel: "↑ Loss ",
        // zDomain: statistics,
        // color: {scheme: "spectral", domain: statistics},
        colors: d3.schemeSpectral[statistics.length],
        width: 500,
        height: 250
        })) 
    }
  } 
}
</script>
<style scoped>
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding-left: 0.5rem;
}
</style>