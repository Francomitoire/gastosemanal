import React,{Component, Fragment} from 'react';
import Presupuesto from './Presupuesto';
import Restante from  './Restante';
import PropTypes from 'prop-types';

export default class ControlPresupuesto extends Component {

    render() {
        return (
            <Fragment>
                <Presupuesto
                    presupuesto = {this.props.presupuesto}
                />
                <Restante
                    presupuesto = {this.props.presupuesto}
                    restante = {this.props.restante}
                />
            </Fragment>
        );
    }
}

ControlPresupuesto.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}