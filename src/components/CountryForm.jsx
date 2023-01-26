import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const CountryForm = () => {
  const [nameCountry, setNameCountry] = useState("mexico")
  const [country, setCountry] = useState()

  const getInfoCountry = () => {
    const URL =`https://restcountries.com/v3.1/name/${nameCountry}` 
    axios.get(URL)
    .then((res) => setCountry(res.data[0]))
    .catch((err) => console.log(err))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setNameCountry(e.target.nameCountry.value)
  }

  useEffect(() => {
    getInfoCountry();
  }, [nameCountry])

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameCountry">Country</label>
          <input id="nameCountry" type="text" />
        </div>
        <button>Search</button>
      </form>
      <article className="cardCountry">
      <div className="cardCountry__img">
        <img src={country?.flags.svg} alt="" />
      </div>
      <h2>{country?.name.common}</h2>
      <ul className="cardCountry__list">
        <li>
          <b>Población: </b>
          {country?.population}
        </li>
        <li>
          <b>Capital: </b>
          {country?.capital}
        </li>
        <li>
          <b>Región: </b>
          {country?.region}
        </li>
      </ul>
    </article>
    </section>
    
  )
}

export default CountryForm