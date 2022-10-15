<template>
  <div>
    <div class="ui three column stackable grid">
        <!-- INPUTS -->
        <div class="left aligned three wide column">
            <div class='main text container'>
            <the-header />
            <!--<h3 class="ui center aligned header">>
                <div class="center aligned content">
                    Input Parameters 
                <div class="left aligned sub header">Select your preferences</div>
                </div>
                <br/>
            </h3>-->

    <div class="ui form">
        <div class="grouped fields">
            <label for="dataset">
            <div class="icon ui button" data-tooltip="The dataset of the simulation" data-position="right center" data-variation="fixed very wide">
                <i class="info icon" />
              </div>
              Dataset:</label>
            <div class="field">
            <div class="ui radio checkbox">
        <input v-model="dataset" type="radio" value="Movies" name="dataset"  >
        <label>Amazon Movies</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="dataset" type="radio" value="Music" name="dataset"  >
        <label>Amazon Music</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="dataset" type="radio" value="Crowdsourcing" name="dataset"  >
        <label>Crowdsourcing</label>
      </div>
   </div>
   <div class="field">
      <div class="ui radio checkbox">
        <input v-model="dataset" type="radio" value="Synthetic" name="dataset"  >
        <label>Synthethic</label>
      </div>
   </div>
  </div>
  </div>
<br/>

<div class="ui form">
    <div class="grouped fields">
    <label for="compensation">
      <div class="icon ui button" data-tooltip="The compensation strategy is the way the users are compensated. PREFERENCE-DRIVEN in decreasing loss order and ROUND-ROBIN, where items are recommended to user in round-robin with respect to item availability" data-position="right center" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
              Compensation:</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="compensation" type="radio" value="Preference" name="compensation"  >
        <label>Preference-Driven</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="compensation" type="radio" value="Round" name="compensation"  >
        <label>Round-Robin</label>
      </div>
    </div>
  </div>
  </div>
  <br/>

  <div class="ui form">
    <div class="grouped fields">
    <label for="chioce">
      <div class="icon ui button" data-tooltip="Users choose k out of N provided recommendations according a choice model: RANDOM, where users are assumed to choose items randomly; PREFERENCE-BASED, where users are assumed to choose items in decreasing order of their utility wrt their profile; and RANK-BASED, where users are assumed to choose their items in the order in which they are ranked by the objective function" data-position="right center" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
      Choice Model:</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="choice" type="radio" value="Rank" name="chioce"  >
        <label>Rank-Based</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="choice" type="radio" value="Utility" name="chioce"  >
        <label>Utility-Based</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="choice" type="radio" name="chioce" value="Random"  >
        <label>Random</label>
      </div>
    </div>
  </div>
  </div>
  <br/>

  <div class="ui form">
    <div class="grouped fields">
    <label for="time">
      <div class="icon ui button" data-tooltip="There are two time granularity splits: FIXED, where recommendations of all users are re-optimized at fixed time periods, and USER-GROUP, where the best moment is determined for a group of users as a function of when they are all ready" data-position="right center" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
              Time Granularity:</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="time" type="radio" name="time" value="Fixed"  >
        <label>Fixed</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="time" type="radio" name="time" value="User"  >
        <label>User-Group</label>
      </div>
    </div>
  </div>
</div>
</div>
</div>

        <!-- LOSS MANAGEMENT -->
    <div class="ten wide middle aligned column">
            <h3 class="ui left aligned header">
                <div class="content" data-tooltip="The Loss Management panel is divided into 2 zones: on the left displays the loss at each iteration of the system for five selected users; on the top the loss is displayed for the specific instantiation of SoCRATe, on the bottom is displayed a baseline where no compensation is applied, therefore users are always considered in the same order by the recommender. On the right it displays the cumulated loss, which is the sum of all losses occurred in the previous iterations for a specific user" data-position="bottom center" data-variation="fixed very wide">
                  Loss Management
                </div>
            </h3>
            
            <div class="ui two column stackable grid">
              <div class="row">
                <div class="middle aligned column">
                  <div class="text title">
                      SoCRATe Loss
                  </div>
                    <div class='container main text'>
                        <SocrateLoss :dataset='dataset' :compensation='compensation' :choice='choice' :time='time'/>
                    </div>
                </div>
                <div class="middle aligned column">
                  <div class="text title">
                        SoCRATe Cumulated Loss
                  </div>
                    <div class='container main text'>
                        <SocrateCumLoss :dataset='dataset' :compensation='compensation' :choice='choice' :time='time'/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="middle aligned column">
                  <div class="text title">
                      Baseline Loss
                  </div>  
                      <div class='container main text'>
                      <BaselineLoss :dataset='dataset' :compensation='compensation' :choice='choice' :time='time'/>  
                      </div>
                </div>
                <div class="middle aligned column">
                      <div class="text title">
                        Baseline Cumulated Loss
                      </div>
                        <div class='container main text'>
                       <BaselineCumLoss :dataset='dataset' :compensation='compensation' :choice='choice' :time='time'/>   
                       </div>
                </div>
              </div>
            </div>

            <h3 class="ui left aligned header">
                <div class="content" data-tooltip="In Item Management panel the user can keep track of the evolution of item consumption: on the left the availability in the form of an histogram, on the right the popularity shown as a percentage stacked area chart" data-position="top center" data-variation="fixed very wide">
                   Item Management
                </div>
            </h3>
            <div class="ui two column stackable grid">
                <div class="middle aligned column">
                    <div class='main text container'>
                        <AvailabilityHistogram :dataset='dataset' :compensation='compensation' :choice='choice' :time='time' />
                    </div>
                </div>
                <div class="middle aligned column">
                    <div class='main text container'>
                        <StackedChart :dataset='dataset' :compensation='compensation' :choice='choice' :time='time' />
                    </div>
                </div>
            </div>
    </div>
        <!-- DISPARITY MANAGEMENT -->
    <TableDataset :dataset='dataset' :compensation='compensation' :choice='choice' :time='time' />
</div>


<the-footer/>

</div>
</template>

<script>
import AvailabilityHistogram from '../components/AvailabilityHistogram'
import StackedChart from '../components/StackedChart'
import SocrateLoss from '../components/SocrateLoss'
import SocrateCumLoss from '../components/SocrateCumLoss'
import BaselineLoss from '../components/BaselineLoss'
import BaselineCumLoss from '../components/BaselineCumLoss'

export default { 
  name: 'IndexPage', 
  components: {
    AvailabilityHistogram,
    StackedChart,
    BaselineLoss,
    BaselineCumLoss,
    SocrateLoss,
    SocrateCumLoss
  },
  data () {
    return {
      dataset: 'Movies',
      compensation: 'Preference',
      choice: 'Rank',
      time: 'Fixed',
    }
  },
}
</script>

<style>
.left.aligned.header {
  height: 30px;
  margin: 1px;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.center.aligned.header {
  height: 30px;
  background: #0077b6;
}
.left.aligned.three.wide.column {
  width: 100%;
  color: rgba(0,0,0,.87);
  background: #0077b6;
  max-width: 300px;
  padding: 35px;
}
.main.text.container {
    padding: 7px;
    margin: 0px;
    max-width: 800px;
    text-align: left;
}
.title {
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
}
.column.four.wide {
    background: #0077b6;
    color:white;
}
.ui.form.grouped.fields.labels{
    color: white;
}
.content {
    color: white;
}
.ui.checkbox label {
  color: white;
}
.ui.form .grouped.fields>label {
  color: white;
}
.ui.progress .bar>.progress {
  color: black;
}
.ui.table {
  text-align: center;
  font-size: 1rem;
  border-top: 1px solid rgba(34,36,38,.1);
}
.ui.celled.table>thead>tr>th:first-child {
  border-top: 1px solid rgba(34,36,38,.1);
}
.ui.table>tbody>tr:first-child>td {
    padding: 0.2rem;
}
.ui.grid {
  padding: 0.2rem;
}
.ui.icon.button:not(.animated):not(.compact), .ui.icon.buttons .button {
    padding: 0.33em;
}
.ui.header .content {
    padding-left: 0.5em;
}
</style>

