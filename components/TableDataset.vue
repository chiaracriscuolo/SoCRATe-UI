<!-- DISPARITY MANAGEMENT -->
<template>
    <div class="three wide right aligned column">
            <div class='main text container' style="padding-top: 0px">
                <h3 class="ui left aligned header">
                <div class="content" data-tooltip="The Disparity panel seeks to sum up in just a single scalar value the efficacy of different compensation strategies by means of progress bars. The two indicators in the bottom part display the standard deviation of the cumulated loss, which quantify the disparity between the users of the system" data-position="bottom center" data-variation="fixed very wide">
                    Disparity 
                </div>
                </h3>
                <div style="height:30px;"><br></div>
                <div class="text title">
                    Averaged Cumulated Loss
                </div>
            <div class="ui segment">
            <div class="ui progress success" :data-percent='`${ avgCumLossSocrate*100 }`'>
                <div class="bar" :style="'transition-duration: 300ms;display: block;width: ' +avgCumLossSocrate*100 +'%;'">
                    <div class="progress">{{ avgCumLossSocrate }}</div>
                </div>
                <div class="label">SoCRATe</div>
            </div>
            <div class="ui progress error" :data-percent='`${avgCumLossBaseline*100}`'>
                <div class="bar" :style="`transition-duration: 300ms;display: block;width: ${avgCumLossBaseline*100}%;`">
                    <div class="progress">{{ avgCumLossBaseline }}</div>
                </div>
                <div class="label">Baseline</div>
            </div>
            </div>
            <div class="text title">
              Standard Deviation Cumulated Loss
            </div>
            <div class="ui segment">
            <div class="ui progress success" :data-percent='`${stDevCumLossSocrate*100}`'>
                <div class="bar" :style="`transition-duration: 300ms;display: block;width: ${stDevCumLossSocrate*100}%;`">
                    <div class="progress">{{ stDevCumLossSocrate }}</div>
                </div>
                <div class="label">SoCRATe</div>
            </div>
            <div class="ui progress error" :data-percent='`${stDevCumLossBaseline*100}`'>
                <div class="bar" :style="`transition-duration: 300ms;display: block;width: ${stDevCumLossBaseline*100}%;`">
                    <div class="progress">{{ stDevCumLossBaseline }}</div>
                </div>
                <div class="label">Baseline</div>
            </div>
            </div>
            <!--<p id="double-spaced" style="line-height: 30%;"><br/></p>-->
            <div style="height:16px;"><br></div>

            <h3 class="ui left aligned header">
                <div class="content" data-tooltip="The Statistics panel displays general information about the dataset, such as the number of users and items, and the average availability of items" data-position="top center" data-variation="fixed very wide">
                    Statistics
                </div>
            </h3>
            <table class="ui celled table">
  <thead>
    <tr><th>Number of Users</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="users">{{ users }}</td>
    </tr>
    </tbody>
    <thead>
    <tr><th>Number of Items</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="items">{{ items }}</td>
    </tr>
    </tbody>
    <thead>
    <tr><th>Average Availability</th>
  </tr></thead>
  <tbody>
    <tr>
      <td data-label="avail">{{ avgAvailability }}</td>
    </tr>
      </tbody>
        </table>
        </div>
    </div>
</template>
<script>
import * as d3 from 'd3'

export default {
  name: 'StackedChart',
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
    return {
      stDevCumLossSocrate: 0.42,
      stDevCumLossBaseline: 0.94,
      avgCumLossSocrate: 0.76,
      avgCumLossBaseline: 0.89,
      users: 3074,
      items: 6423,
      avgAvailability: 30
    }
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
        const obj = await d3.json('/'+this.dataset+ '-'+this.compensation+'-'+this.choice+'-'+this.time+'.json')
        this.users = obj.users
        this.items = obj.items
        this.avgAvailability = obj.avgAvailability
        this.stDevCumLossSocrate = obj.stDevCumLossSocrate
        this.stDevCumLossBaseline = obj.stDevCumLossBaseline
        this.avgCumLossSocrate = obj.avgCumLossSocrate
        this.avgCumLossBaseline = obj.avgCumLossBaseline
        } 
    }
}
</script>
<style scoped>
.ui.progress .bar>.progress {
    color: white;
    font-size: 11.5px;
}
</style>"