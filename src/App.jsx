import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [country, setCountry] = useState()

  const getInfoCountry = () => {
    const URL ="https://restcountries.com/v3.1/name/mexico" 
    axios.get(URL)
    .then((res) => setCountry(res.data[0]))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getInfoCountry();
  }, [])

  //Ejercicio
  //Mostrar en pantalla la bandera de su país, la población, la capital, region

  return (
    <div className="App">
      {country ? (
        <>
          <article className='cardCountry'>
            <div className='cardCountry__img'>
              <img src={country.flags.svg} alt="" />
            </div>
            <ul className='cardCountry__list'>
              <li><b>Población: </b>{country.population}</li>
              <li><b>Capital: </b>{country.capital}</li>
              <li><b>Región: </b>{country.region}</li>
            </ul>
          </article>
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
}

export default App
