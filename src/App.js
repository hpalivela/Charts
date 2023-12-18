import React from 'react'
import BarCharts from './BarCharts'
import 'bootstrap/dist/css/bootstrap.min.css';
import SpringTable from './SpringTable'
import StreamedChart from './StreamedChart'
import CardData from './CardData';

const App = () => {
  return (
    <div>
      <StreamedChart/>
     <BarCharts/>
      <SpringTable/>
      <CardData/>
    </div>
  )
}

export default App
