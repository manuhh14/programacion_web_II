import React, { Component } from 'react';
import './App.css';

import { PrimerComponente } from './PrimerComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

class App extends Component {
  render() {


    /**DEclaracion de objeto */
    const ficha_medica = {
      altura: "187cm",
      grupoSangre: "B+",
      estadoSalud: "bueno",
      alergias: "ninguno"
    };


    return (
      <div className="App">
        <div className="App-header">
          <PrimerComponente />
          <hr />
        </div>

        <SegundoComponente />
        <hr />

        <TercerComponente
          nombre="Juanita"
          apellido="Juarez"
          ficha= {ficha_medica} />
      </div>
    );
  }
}

export default App;
