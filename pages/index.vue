<template>
 <div>
  <the-header />
  <div class='main text container'>
  <h3 class="ui left aligned header">
  <div class="content">
    Parameters 
    <div class="left aligned sub header">Select your preferences</div>
  </div>
</h3>
  <div class="ui two column very relaxed stackable grid">
  <div class="four wide middle aligned column">
  <div class="ui form">
    <div class="grouped fields">
    <label for="dataset">
      <div class="icon ui button" data-tooltip="The dataset of the simulation." data-position="bottom center" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
              Dataset:</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="dataset" type="radio" value="AMAZON" name="dataset">
        <label>AMAZON</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="dataset" type="radio" value="MOVIES" name="dataset">
        <label>MOVIES</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="dataset" type="radio" value="CROWDSOURCING" name="dataset">
        <label>CROWDSOURCING</label>
      </div>
   </div>
  </div>
</div>
</div>
<div class="four wide middle aligned column">
<div class="ui form">
    <div class="grouped fields">
    <label for="compensation">
      <div class="icon ui button" data-tooltip="The compensation strategy is the way the users are compensated. LOSS-DRIVEN in decreasing loss order and ROUND-ROBIN, where items are recommended to user in round-robin with respect to item availability and HYBRID." data-position="bottom center" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
              Compensation:</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="compensation" type="radio" value="HYBRID" name="compensation" @click='print()'>
        <label>HYBRID</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="compensation" type="radio" value="LOSS-DRIVEN" name="compensation" @click='print()'>
        <label>LOSS-DRIVEN</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="compensation" type="radio" value="ROUND-ROBIN" name="compensation" @click='print()'>
        <label>ROUND-ROBIN</label>
      </div>
    </div>
  </div>
  </div>
</div>
<div class="four wide middle aligned column">
<div class="ui form">
    <div class="grouped fields">
    <label for="chioce">
      <div class="icon ui button" data-tooltip=" Users choose k out of N provided recommendations according a choice model: RANDOM, where users are assumed to choose items randomly; UTILITY-BASED, where users are assumed to choose items in decreasing order of their utility wrt their profile; and RANK-BASED, where users are assumed to choose their items in the order in which they are ranked by the objective function." data-position="bottom center" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
      Choice Model:</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="choice" type="radio" name="chioce" value="RANDOM">
        <label>RANDOM</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="choice" type="radio" value="UTILITY-BASED" name="chioce">
        <label>UTILITY-BASED</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="choice" type="radio" value="RANK-BASED" name="chioce">
        <label>RANK-BASED</label>
      </div>
    </div>
  </div>
  </div>
</div>
<div class="four wide middle aligned column">
<div class="ui form">
    <div class="grouped fields">
    <label for="time">
      <div class="icon ui button" data-tooltip="select one of three temporal granularities: FIXED, 
      SINGLE-USER and USER-GROUP splits. FIXED where recommendations of all users are re-optimized at 
      fixed time periods; SINGLE-USER, where the best moment for re-optimizing recommendations is
      determined for each user separately as a function of the user; and USER-GROUP, where the best 
      moment is determined for a group of users as a function of when they are all ready" data-position="bottom center" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
              Time Split:</label>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="time" type="radio" name="time" value="FIXED">
        <label>FIXED</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="time" type="radio" name="time" value="SINGLE USER">
        <label>SINGLE USER</label>
      </div>
    </div>
    <div class="field">
      <div class="ui radio checkbox">
        <input v-model="time" type="radio" name="time" value="GROUP-USER">
        <label>GROUP-USER</label>
      </div>
    </div>
  </div>
</div>
</div>
</div>
  </div>
  <div class='main text container'>
  <!--<h2 class="ui left aligned header">
  <div class="content">
    Availability
    <div class="left aligned sub header">Select your preferences</div>
  </div>
  </h2>-->
<!--<CompleteHistogram />-->
<AvailabilityHistogram :dataset='dataset' :compensation='compensation' :choice='choice' :time='time' />
</div>
<!--<div class='ui bordless main menu'>-->
  <div class="ui  grid">
    <div class="two column row"> 
  <div class="middle aligned column">
    <!--<div class='fluid text container'>
    <h3 class="ui left aligned header">
      <div class="content">
        <div class="icon ui button" data-tooltip="User Loss is..." data-position="top left" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
        User Loss 
      </div>
    </h3>
    </div>-->
<!--<CompleteHistogram ten wide middle aligned/>-->
<LossHistogram :dataset='dataset' :compensation='compensation' :choice='choice' :time='time'/>
  </div>
  <div class="middle aligned column">
    <h3 class="ui left aligned header">
      <div class="content">
        <div class="icon ui button" data-tooltip="User Happiness is..." data-position="top left" data-variation=" fixed very wide">
                <i class="info icon" />
              </div>
        User Happiness 
      </div>
    </h3>
<UserHappiness :dataset='dataset' :compensation='compensation' :choice='choice' :time='time'/>
  </div>
  </div>
</div>
<div class='main text container'>
  <div class="ui two column very relaxed stackable grid">
<div class="six wide middle aligned column">
  <div class="ui form">
    <div class="grouped fields">
    <label for="lossCompensation">Compare two Compensations (Loss):</label>
    <div class="field">
      <div class="ui checkbox">
        <input v-model="compensationsLoss" type="checkbox" name="lossCompensation" checked="" value="HYBRID">
        <label>HYBRID</label>
      </div>
    </div>
    <div class="field">
      <div class="ui checkbox">
        <input v-model="compensationsLoss" type="checkbox" value="LOSS-DRIVEN" name="lossCompensation">
        <label>LOSS-DRIVEN</label>
      </div>
    </div>
    <div class="field">
      <div class="ui checkbox">
        <input v-model="compensationsLoss" type="checkbox" value="ROUND-ROBIN" name="lossCompensation">
        <label>ROUND-ROBIN</label>
      </div>
    </div>
  </div>
  </div>
</div>
<div class="seven wide middle aligned column">
    <div class="ui form">
    <div class="grouped fields">
    <label for="UHCompensation">Compare two Compensations (User Happiness):</label>
    <div class="field">
      <div class="ui checkbox">
        <input v-model="compensationsUH" type="checkbox" name="UHCompensation" checked="" value="HYBRID">
        <label>HYBRID</label>
      </div>
    </div>
    <div class="field">
      <div class="ui checkbox">
        <input v-model="compensationsUH" type="checkbox" value="LOSS-DRIVEN" name="UHCompensation">
        <label>LOSS-DRIVEN</label>
      </div>
    </div>
    <div class="field">
      <div class="ui checkbox">
        <input v-model="compensationsUH" type="checkbox" value="ROUND-ROBIN" name="UHCompensation">
        <label>ROUND-ROBIN</label>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
<div v-if="!formIsValid" class="container">
      <p v-if="!formIsValid" class="ui error message">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-if="!compensationLossIsValid">
            You must compare exaclty 2 compensations for the Loss.
          </li>
          <li v-if="!compensationUHIsValid">
            You must compare exaclty 2 compensations for the UH.
          </li>
        </ul>
      </p>
</div>
        
<div class="ui  grid">
  <div class="two column row">
  <div class="middle aligned column">
    <h3 class="ui left aligned header">
      <div class="content">
        Comparison of Loss with two compensations
      </div>
    </h3>
    <DeltaLoss />
  </div>
  <div class="middle aligned column">
    <h3 class="ui left aligned header">
      <div class="content">
        Comparison of User Happiness with two compensations 
      </div>
    </h3>
    <DeltaUH />
  </div>
  </div>
  </div>
  <the-footer />
  </div>
</template>

<script>
import AvailabilityHistogram from '../components/AvailabilityHistogram'

export default { 
  name: 'IndexPage', 
  components: {
    AvailabilityHistogram
  },
  data () {
    return {
      dataset: 'AMAZON',
      compensation: 'LOSS-DRIVEN',
      choice: 'RANDOM',
      time: 'FIXED',
      compensationsLoss: ['LOSS-DRIVEN', 'HYBRID'],
      compensationsUH: ['LOSS-DRIVEN', 'HYBRID'],
    }
  },
  computed : {
    formIsValid () {
      return (this.compensationLossIsValid && this.compensationUHIsValid)
    },
    compensationLossIsValid () {
      return (!(this.compensationsLoss.length !== 2))
    },
    compensationUHIsValid () {
      return (!(this.compensationsUH.length !== 2))
    },
  },
  methods: {
    print() {
      // console.log("Changing"+ this.compensation)
    }
  }
}
</script>

<style>
.left.aligned.header {
  height: 30px;
  background: white;
  display: flex;
  justify-content: space-between;
  text-align: left;
}
.left.aligned.sub.header {
  width: 100%;
  color: rgba(0,0,0,.87);
  max-width: 600px;
  margin: left;
  align-items: center;
}
.main.text.container {
    padding: 10px;
    margin: 10px auto;
    max-width: 800px;
    text-align: center;
}
.title {
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
}
</style>
