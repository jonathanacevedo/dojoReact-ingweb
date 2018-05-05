import React, { Component } from 'react';
import './Creador.css';
import PropTypes from 'prop-types';

const porClave = (nombreKey, valor) => () => ({
    [nombreKey]: valor,
});


class Creador extends Component {

    static propTypes = {

    }

    constructor() {
        super();
        this.state = {
            titulo: '',
            cuerpo: '',
            referencias: '',
            url: ''
        }
        this.manejador = this.manejador.bind(this);
    }

    manejador(clave, valor){
        this.setState(
            porClave(clave, valor)
        );
        this.props.sendData(this.state.titulo, this.state.cuerpo, this.state.referencias, this.state.url);
    }

    render() {
        const {
            titulo,
            cuerpo,
            referencias,
            url
        } = this.state;
        return (
            <div className="App">
                <table className="tablaArt">
                    <tbody>
                    <tr>
                        <td>
                            <div className="texto">Titulo del Articulo:</div>
                        </td>
                        <td>
                            <input className="campoForm"
                                value={titulo}
                                type="text"
                                onChange={event => this.manejador('titulo', event.target.value)}
                                placeholder="Titulo"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="texto">Imagen Principal:</div>
                        </td>
                        <td>
                            <input className="campoForm"
                                value={url}
                                type="text"
                                onChange={event => this.manejador('url', event.target.value)}
                                placeholder="Url de la imagen"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="texto">Cuerpo del Articulo:</div>
                        </td>
                        <td>
                            <textarea rows="10" cols="50" className="campoArea"
                                value={cuerpo}
                                type="text"
                                onChange={event => this.manejador('cuerpo', event.target.value)}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="texto">Referencias:</div>
                        </td>
                        <td>
                            <textarea className="campoArea" rows="3" cols="50"
                                value={referencias}
                                type="text"
                                onChange={event => this.manejador('referencias', event.target.value)}
                                placeholder="Referencias"
                            ></textarea>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Creador;
