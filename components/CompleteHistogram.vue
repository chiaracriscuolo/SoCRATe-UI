<template>
  <div>
    <h2>Complete Histogram II</h2>
    <svg width="660" height="400"></svg>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  data () {
    return {}
  },
  mounted () {
    const marge = { top: 60, bottom: 60, left: 60, right: 60 }
    const svg = d3.select('svg')
    const width = svg.attr('width')
    const height = svg.attr('height')
    const g = svg.append('g')
      .attr('transform', 'translate(' + marge.top + ',' + marge.left + ')')
    const dataset = [10, 20, 30, 23, 13, 40, 27, 35, 20]
    // Draw the axis in the X, Y direction
    // x , y 方向绘制坐标轴
    const xScale = d3.scaleBand()
      .domain(d3.range(dataset.length))
      .rangeRound([0, width - marge.left - marge.right])
    const xAxis = d3.axisBottom(xScale)
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset)])
      .range([height - marge.top - marge.bottom, 0])
    const yAxis = d3.axisLeft(yScale)
    g.append('g')
      .attr('transform', 'translate(' + 0 + ',' + (height - marge.top - marge.bottom) + ')')
      .call(xAxis)
    g.append('g')
      .attr('transform', 'translate(0, 0)')
      .call(yAxis)
    // Create gourps for rectangles and corresponding text
    const gs = g.selectAll('.rect')
      .data(dataset)
      .enter()
      .append('g')
    // draw rectangle
    const rectPadding = 20
    gs.append('rect')
      .attr('x', function (d, i) {
        return xScale(i) + rectPadding / 2
      })
      .attr('y', function () {
        // init state
        // 初始状态
        const min = yScale.domain()[0]
        return yScale(min)
      })
      .attr('width', function () {
        return xScale.step() - rectPadding
      })
      .attr('height', function () {
        // init state
        return 0
      })
      .attr('fill', 'lightblue')
      .transition()
      .duration(2000)
      .delay(function (d, i) {
        return i * 400
      })
      // .ease(d3.easeElasticInout)
      .attr('y', function (d) {
        // Return to the final state
        // 回到最终状态
        return yScale(d)
      })
      .attr('height', function (d) {
        // Return to the final state
        return height - marge.top - marge.bottom - yScale(d)
      })
    // Draw text
    gs.append('text')
      .attr('x', function (d, i) {
        return xScale(i) + rectPadding / 2
      })
      .attr('y', function () {
        // return yScale(d)
        const min = yScale.domain()[0]
        return yScale(min)
      })
      .attr('dx', function () {
        ((xScale.step() - rectPadding) / 2) // eslint-disable-line
      })
      .attr('dy', 20)
      .text(function (d) {
        return d
      })
      .transition()
      .duration(2000)
      .delay(function (d, i) {
        return i * 400
      })
      .attr('y', function (d) {
        return yScale(d)
      })
  }
}
</script>
<style scoped>
</style>