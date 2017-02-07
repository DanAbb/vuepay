// import Debts from './components/Debts'
import Income from './components/Income'
import IncomeDisplay from './components/IncomeDisplay'
import MapImg from './components/map'

export const routes = [
  { path: '/', component: Income },
  { path: '/display', component: IncomeDisplay },
  { path: '/map', component: MapImg }
]
