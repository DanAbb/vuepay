
<template>
  <div id="app">
    <sprite></sprite>
    <income></income>
    <debts></debts>
    <!-- <outgoings></outgoings> -->
  </div>
</template>

<script>
import Sprite from './components/Sprite'
import Income from './components/Income'
import Debts from './components/Debts'
// import Outgoings from './components/Outgoings'

export default {
  name: 'app',
  components: {
    Income,
    Sprite,
    Debts
    // Outgoings
  }
}
</script>
<style src="reset-css/reset.css"></style>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 50px;
}
</style>
