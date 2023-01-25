import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const CardCountry = ({pais}) => {
  const [country, setCountry] = useState()

  const getInfoCountry = () => {
    const URL =`https://restcountries.com/v3.1/name/${pais}` 
    axios.get(URL)
    .then((res) => setCountry(res.data[0]))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getInfoCountry();
  }, [])

  return (
    <article className="cardCountry">
      <div className="cardCountry__img">
        <img src={country?.flags.svg} alt="" />
      </div>
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
  );
}

export default CardCountry