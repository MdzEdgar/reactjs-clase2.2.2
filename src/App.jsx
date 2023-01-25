import axios from 'axios'
import { useEffect } from 'react'
import './App.css'

function App() {

  const getInfoCountry = () => {
    const URL ="https://restcountries.com/v3.1/name/mexico" 
    axios.get(URL)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getInfoCountry();
  }, [])

  return (
    <div className="App">
     <h1>Hola Mundo</h1>
    </div>
  )
}

export default App
