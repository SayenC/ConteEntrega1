import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from "../src./components/Button"
import { getDefaultNormalizer } from '@testing-library/react'


function Button (){
  return <Button>Click</Button>
}

function App() {
  function authUser () {
    return {
      username: "Mara",
      colorPreferido: "verde",
    };
  }

  function contadorDeVisitas() {
    return 123808053;
  }

  const user = authUser();

  const stylesViewCount = {
    backgroundColor: user.colorPreferido,
    color: "black",
    fontWeight: "700",
    marginTop: "5",
  }


  return (
    <div className="header">
    <div>
      <p className="read-the-docs">
        Mare Studio Online
      </p>
  </div>
  <div>
  <h1>
    Hola {user.username} Shop Online
  </h1>
  </div>
  <div>
  <h2>Prendas Personalizadas</h2>
  <div style={stylesViewCount}>{contadorDeVisitas()}</div>
        <Button label="ingresar"/>
        <Button label="Salir"/>
  </div>
  </div>
  )
  }
export default App
