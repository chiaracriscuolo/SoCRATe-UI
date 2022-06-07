<template>
 <div>
    <!--<h2>Availability Plot</h2>-->
    <!--<svg width="960" height="600"></svg>-->
    <div id="deltaUH_graphs"></div>
  </div>
</template>
<script>
import * as d3 from 'd3'
import BandChart from "./BandChart.js";
export default {
  data () {
    return {}
  },
  async mounted () {
    const deltaLoss = await d3.json("/userHappiness.json");
    console.log(deltaLoss)
    document.getElementById("deltaUH_graphs").appendChild(BandChart(deltaLoss, {
        x: d => d.t,
        y1: d => d.v1,
        y2: d => d.v2,
        color: "steelblue",
        curve: d3.curveStep,
        yLabel: "↑ Difference User Happiness",
        width: 400,
        height: 500
        }))
  }
}

</script>
<style scoped>
</style>