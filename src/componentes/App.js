import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import Formulario from './Formulario';
import Listado from './Listado';
import {validarPresupuesto} from '../helper';
import ControlPresupuesto from './ControlPresupuesto';

class App extends Component {

  state = {
    gastos: {},
    presupuesto: 0,
    restante:0,
  }

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto() {
    let presupuesto = prompt('Ingrese presupuesto');

    let resultado = validarPresupuesto(presupuesto);
    if (resultado) {
      this.setState({
        // aca el tuto le pasa presupuesto ne vez de resultado, pero esta mal porque es un string y no esta validado como numero
        presupuesto: resultado,
        restante: resultado,
      })
    } else {
      this.obtenerPresupuesto();
    }
  }

  //agregar un nuevo gasto al state
  agregarGasto = gasto => {
    //tomar copia del state actual (trae todos los gastos que guarde anteriormente, para no perderlos)
    const gastos = {...this.state.gastos}
    //agregar objeto gasto al objeto del state (agrega un gasto a los gastos que estaban guardados en el state)
    gastos[`gasto${Date.now()}`] = gasto;

    this.restarPresupuesto(gasto.cantidadGasto);

    //ponerlo en el state
    this.setState({
      gastos,
    })
    
  }

  restarPresupuesto = cantidad => {
    let restar = Number(cantidad);
    let restante = this.state.restante;
    restante -= restar;

    this.setState({
      restante,
    })
  }

  render() {
    return (
      <div className="App container">

        <Header 
          titulo = 'Gasto Semanal'
        />

        <div className="contenido-principal contenido">
          <div className="row">
            <div className="one-half column">
              <Formulario

                agregarGasto = {this.agregarGasto}

              />
            </div>
            <div className="one-half column">
              <Listado

                gastos = {this.state.gastos}

              />

              <ControlPresupuesto
              
                presupuesto = {this.state.presupuesto}
                restante = {this.state.restante}

              />
            </div>

          </div>
        </div>

      </div>

    );
  }
}

export default App;
