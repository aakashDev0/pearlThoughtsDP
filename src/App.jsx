import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'


function App() {
  const [selectedDate,setDate] = useState(null);
  

  return (
    <>
    <div className="App rounded-sm bg-violet-800">
      <DatePicker selected={selectedDate} onChange={date=>setDate(date)}
       />
    </div>
     </>
  )
}[]
export default App;
