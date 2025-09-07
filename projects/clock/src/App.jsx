import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ClockHeading from "./components/ClockHeading"
import ClockDateTime from './components/ClockDateTIme'
import ClockSubTitile from './components/ClockSubTitile'
function App() {
 
return(
  <center>
  <div>
    <ClockHeading/>
    <ClockSubTitile></ClockSubTitile>
    <ClockDateTime></ClockDateTime>
  </div>
  </center>
)
  
}

export default App
