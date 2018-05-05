import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Creador from './creador/Creador.js';
import Visualizador from './visualizador/Visualizador.js';


class App extends Component {

  constructor(){
    super(); 
    this.getData = this.getData.bind(this);
    this.state= ({
      tituloArticulo: '',
      cuerpoArticulo: '',
      referenciasArticulo: '',
      urlArticulo: ''
    });
  }

  getData(tituloR, cuerpoR, refR, urlR){
    this.setState({
      tituloArticulo: tituloR,
      cuerpoArticulo: cuerpoR,
      referenciasArticulo: refR,
      urlArticulo: urlR
    });
  }

  render() {
    const {
      tituloArticulo,
      cuerpoArticulo,
      referenciasArticulo,
      urlArticulo
    } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Dojo React Ingeniería Web</h1>
        </header>
        <table className="tabla">
          <tbody>
          <tr>
            <th>Publicador</th>
            <th>Visualizador</th>
          </tr>
          <tr>
            <td className="borde">
            <Creador sendData={this.getData}/>
            </td>
            <td className="borde">
              <Visualizador titulo={tituloArticulo} cuerpo={cuerpoArticulo} referencias={referenciasArticulo} url={urlArticulo}/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
