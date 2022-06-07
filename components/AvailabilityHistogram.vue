<template>
 <div>
    <!--<h2>Availability Plot</h2>-->
    <!--<svg width="960" height="600"></svg>-->
    <div id="avail_graphs"></div>
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
      document.getElementById("avail_graphs").innerHTML="";
      // const avail = await d3.json('/'+this.compensation+'-avail.json');
      const dataset = await d3.json('/'+this.dataset+ '-'+this.compensation+'-'+this.choice+'.json');
      const avail = dataset.avail
      // console.log('NEW PATH: /'+this.compensation+'-avail.json')
      const statistics= ['low', 'medium', 'high'];
      const dataAvail = statistics.flatMap(stat => avail.map(d => ({t: d.date, stat, value: d[stat]})))
      // console.log(dataAvail)
      document.getElementById("avail_graphs").appendChild(Legend(d3.scaleOrdinal(statistics, d3.schemeSpectral[statistics.length]), {
        title: "Item Availability",
        tickSize: 0
      }))
      // Swatches(d3.scaleOrdinal(statistics, d3.schemeCategory10))
      document.getElementById("avail_graphs").appendChild( GroupedBarChart(dataAvail, {
          x: d => d.t,
          y: d => d.value,
          z: d => d.stat,
          // facet: {data: dataAvail, x: "t"},
          // sort: {fx: "y", reduce: "sum", limit: 6, reverse: true},
          // xDomain: d3.groupSort(dataAvail, D => d3.sum(D, d => -d.value), d => d.date).slice(0, 6), // top 6
          yLabel: "↑ Availability (Avg) ",
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
</style>