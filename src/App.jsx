
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineCharts from './components/LineCharts/LineCharts'
import BarChats from './components/BarCharts/BarChats'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {
 
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <BarChats></BarChats>
    </>
  )
}

export default App
