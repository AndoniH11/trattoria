import React from 'react';
import ReservaForm from './ReservaForm'
import ConfirmacionReserva from './ConfirmacionReserva';

class Reserva extends React.Component{

    state = {
        submitted: false
    }
    
    handleSubmit = () => {
        this.setState({
            submitted: true
        })
    }

    render(){
        const saludo = 'hola'
        return(
            <div>
                {this.state.submitted ? 
                    <ConfirmacionReserva />
            :
            <div className='element-container'>
                <div className='reserva-container'>
                    <h2> Haz tu reserva </h2>
                    <ReservaForm handleSubmit={this.handleSubmit}/>
                </div>
            </div>
            
        
            
        }
        </div>)
           
        
    }
}

export default Reserva