<template>
 <div>
    <!--<h2>Availability Plot</h2>-->
    <!--<svg width="960" height="600"></svg>-->
    <div id="availHistogram_graphs"></div>
  </div>
</template>
<script>
import * as d3 from 'd3'
import Legend from "./Legend.js"
import GroupedBarChart from "./GroupedBarChart.js";
export default {
  name: 'AvailabilityHistogram',
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
      document.getElementById("availHistogram_graphs").innerHTML="";
      const dataset = await d3.json('/'+this.dataset+ '-'+this.compensation+'-'+this.choice+'-'+this.time+'.json');
      const availData = dataset.availability
      const statistics= ['runout', 'low', 'medium', 'high'];
      const availability = statistics.flatMap(stat => availData.map(d => ({t: d.iteration, stat, value: d[stat]})))
      const colors = ['#b22222','#F08080','#B0C4DE','#4682B4'];
      document.getElementById("availHistogram_graphs").appendChild(Legend (d3.scaleOrdinal(statistics, colors), { // (d3.scaleOrdinal(statistics, d3.schemeSpectral[statistics.length]), {
        title: "Availability",
        tickSize: 0
      }))
      // Swatches(d3.scaleOrdinal(statistics, d3.schemeCategory10))
      document.getElementById("availHistogram_graphs").appendChild( GroupedBarChart(availability, {
          x: d => d.t,
          y: d => d.value,
          z: d => d.stat,
          // facet: {data: availability, x: "t"},
          // sort: {fx: "y", reduce: "sum", limit: 6, reverse: true},
          // xDomain: d3.groupSort(availability, D => d3.sum(D, d => -d.value), d => d.iteration).slice(0, 6), // top 6
          yLabel: "↑ Availability (Avg) ",
          xLabel: 'Iteration',
          // zDomain: statistics,
          // color: {scheme: "spectral", domain: statistics},
          // colors: d3.schemeSpectral[statistics.length],
          colors: ['#b22222','#F08080','#B0C4DE','#4682B4'],
          width: 500,
          height: 200
          }))
    }
  } 
}
</script>
<style scoped>
</style>