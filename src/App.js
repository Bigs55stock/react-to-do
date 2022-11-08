import logo from './logo.svg';
import './App.css';
import {useState, setState} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'

function App() {
  const[dos, setDo] = useState({
    title: 'Wash the Dishes',
    complete: false
  },
  {
    title: 'walk the Dog',
  complete: false},
  {
    title: 'make the bed',
    complete: true
  },
  {
    title:'Do your Laundry',
    complete: false
  },
  {
    title: 'Finish you WDI hw',
    complete: false
  }
  
  )

  const [does, setDos] =useState([])
  
  return (
    <div className="App">
      <ToDoForm dos={dos} does={does} setDo={setDo} setDos={setDos} />
      <ToDoList does={does}/>
    </div>
  );
}

export default App;
