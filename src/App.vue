
<template>
  <div id="app">
    <sprite></sprite>
    <income></income>
    <income-Display></income-Display>
    <debts></debts>
    <!-- <outgoings></outgoings> -->
  </div>
</template>

<script>
import Sprite from './components/Sprite'
import Income from './components/Income'
import IncomeDisplay from './components/IncomeDisplay'
import Debts from './components/Debts'
// import Outgoings from './components/Outgoings'

export default {
  name: 'app',
  components: {
    Income,
    IncomeDisplay,
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
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: row wrap;
}
</style>
