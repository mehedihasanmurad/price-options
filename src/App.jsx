import './App.css'
import BarCharts from './components/BarCharts/BarCharts'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineCharts from './components/LineCharts/LineCharts'
import Navbar from './components/NavBar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    
    <Navbar></Navbar>
    <h1 className='text-3xl bg-orange-400'>Vite + React</h1>
    <PriceOptions></PriceOptions>
    <LineCharts></LineCharts>
    <BarCharts></BarCharts>

    </>
  )
}

export default App
