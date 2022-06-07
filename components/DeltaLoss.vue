<template>
 <div>
    <!--<h2>Availability Plot</h2>-->
    <!--<svg width="960" height="600"></svg>-->
    <div id="deltaLoss_graphs"></div>
  </div>
</template>
<script>
import * as d3 from 'd3'
import * as Plot from "@observablehq/plot";
// import BandChart from "./BandChart.js";
// import IndexChart from './IndexChart.js';
// import MultipleLineChart from './MultipleLineChart.js';
export default {
  data () {
    return {}
  },
  async mounted () {
    const deltaLoss = await d3.json("/sftemps.json");
    // const deltaLoss = await d3.json("/lossDelta1.json");
    console.log(deltaLoss)
    /* document.getElementById("deltaLoss_graphs").appendChild(BandChart(deltaLoss, {
        x: d => d.date,
        y1: d => d.v1,
        y2: d => d.v2,
        color: "steelblue",
        curve: d3.curveStep,
        yLabel: "↑ Difference Loss",
        width: 400,
        height: 500
        })) */

    // const statistics= ['v1', 'v2'];
    // const dataLoss = statistics.flatMap(stat => deltaLoss.map(d => ({Date: d.date, stat, value: d[stat]})))
    // console.log(dataLoss)
    document.getElementById("deltaLoss_graphs").appendChild(/* Plot.plot({
  marks: [
    Plot.line(dataLoss, {
      x: "date", 
      y: "value", 
      z: "stat"
    })
  ]
})) */
    /* IndexChart(dataLoss, {
      x: d => d.Date,
      y: d => d.value,
      z: d => d.stat,
      yLabel: "↑ Change loss (×)",
      width:400,
      height: 500,
      color: "steelblue"
    })) */
    Plot.plot({
  y: {
    grid: true,
    label: "↑ Temperature (°F)"
  },
  marks: [
    Plot.line(deltaLoss, Plot.windowY({k: 6, x: "date", y: "v1", stroke: "#4e79a7"})),
    Plot.line(deltaLoss, Plot.windowY({k: 6, x: "date", y: "v2", stroke: "#e15759"})),
    Plot.ruleY([]) // freezing
  ]
}))
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