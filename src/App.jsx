import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardCountry from './components/CardCountry'
import CountryForm from './components/CountryForm';

function App() {

  

  //Ejercicio
  //Mostrar en pantalla la bandera de su país, la población, la capital, region

  //Ejercicio 2
  //Crear un componente que dependiendo del string(nombre del pais) 
  //que reciba por prop me renderice la informacion del pais coincidente

  return (
    <div className="App">
          <CountryForm />
    </div>
  );
}

export default App
