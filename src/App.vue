
<template>
  <div id="app">
    <sprite></sprite>
    <nav-menu></nav-menu>
    <div class="container">
      <router-view></router-view>
      <debts></debts>
      <!-- <outgoings></outgoings> -->
    </div>
  </div>
</template>

<script>
import Sprite from './components/Sprite'
import Income from './components/Income'
import IncomeDisplay from './components/IncomeDisplay'
import Debts from './components/Debts'
import MapImg from './components/map'
import NavMenu from './components/navMenu'
// import Outgoings from './components/Outgoings'

export default {
  name: 'app',
  components: {
    Income,
    IncomeDisplay,
    Sprite,
    Debts,
    MapImg,
    NavMenu
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
}

.container {
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
