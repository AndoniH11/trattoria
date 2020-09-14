import React from 'react';
import { horarios } from '../data'
import { ProductConsumer } from '../context';
import { GiConsoleController } from 'react-icons/gi';

class ReservaForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            fecha: '',
            fechaChecked: false,
            servicio: '',
        }
    }

    render() {
        return (
            <ProductConsumer>
                {(value) => (
                    
                    <form className='reserva-form'
                    onSubmit={() => this.props.handleSubmit()}>
                    <div>
                        <p>Número de personas</p>
                        <div className='numero botones-container'>
                            <input type='radio' 
                                    name='number' 
                                    value='1' 
                                    id='numero1'
                                    onClick={(e) => value.handleClick(e)} 
                                    required/>
                            <label htmlFor='numero1' >1</label>
    
                            <input type='radio' 
                                name='number' 
                                value='2' 
                                id='numero2'
                                onClick={(e) => value.handleClick(e)} />
                            <label htmlFor='numero2' >2</label>
    
                            <input 
                                type='radio' 
                                name='number' 
                                value='3' 
                                id='numero3'
                                onClick={(e) => value.handleClick(e)} />
                            <label htmlFor='numero3' >3</label>
    
                            <input 
                                type='radio' 
                                name='number' 
                                value='4' 
                                id='numero4' 
                                onClick={(e) => value.handleClick(e)}/>
                            <label htmlFor='numero4' >4</label>
    
                            <input 
                                type='radio' 
                                name='number' 
                                value='5' 
                                id='numero5'
                                onClick={(e) => value.handleClick(e)} />
                            <label htmlFor='numero5' >5</label>
                        </div>
    
                    </div>
    
                    <div>
                        <p>
                            Fecha
                        </p>
                        <div className='fecha botones-container' >
                            <input type='radio'
                                name='fecha'
                                value='hoy'
                                id='hoy'
                                required
                                onClick={(e) => value.handleClick(e)} />
                            <label htmlFor='hoy'>Hoy</label>
    
                            <input
                                type='radio'
                                name='fecha'
                                value='mañana'
                                id='mañana'
                                onClick={(e) => value.handleClick(e)}/>
                            <label htmlFor='mañana'>Mañana</label>
                        </div>
                    </div>
    
                    {value.fechaChecked ?
                        <div>
                            <p>
                                Servicio
                        </p>
                            <div className='servicio botones-container'>
                                <input type='radio'
                                    name='servicio'
                                    value='desayuno'
                                    id='desayuno'
                                    required
                                    onClick={(e) => value.handleClick(e)}/>
                                <label htmlFor='desayuno'>Desayuno</label>
    
                                <input
                                    type='radio'
                                    name='servicio'
                                    value='comida'
                                    id='comida'
                                    onClick={(e) => value.handleClick(e)}/>
                                <label htmlFor='comida' >Comida</label>
    
                                <input
                                    type='radio'
                                    name='servicio'
                                    value='cena'
                                    id='cena'
                                    onClick={(e) => value.handleClick(e)}/>
                                <label htmlFor='cena'>Cena</label>
                            </div>
                        </div> : ''
                    }
    
                    {(() => {
                        if (value.servicio === 'desayuno') {
                            return(
                            <div className='hora-container'>
                                <p>
                                    Hora
                                </p>
    
                                <div className='hora'>
                                    {horarios.desayuno.map(item => {
                                        return <div key={item.id} className='boton-hora botones-container'>
                                            <input 
                                                type='radio' 
                                                name='hora' 
                                                value={item.hora} 
                                                id={item.id} onClick={(e) => value.handleClick(e)}
                                                required/>
                                            <label className='label-hora' htmlFor={item.id}>{item.hora}</label>
                                        </div>
                                    })}
                                </div>
                            </div>)
                        } else if(value.servicio === 'comida'){
                            return(
                                <div className='hora-container'>
                                    <p>
                                        Hora
                                    </p>
    
                                    <div className='hora'> 
                                        {horarios.comida.map(item => {
                                            return <div key={item.id} className='boton-hora boton-container'>
                                                    <input 
                                                        type='radio' 
                                                        name='hora' 
                                                        id={item.id} 
                                                        value={item.hora} onClick={(e) => value.handleClick(e)}
                                                        required/>
                                                    <label className='label-hora' htmlFor={item.id}>{item.hora}</label>
                                                </div>
                                        })}
                                    </div>
                                </div>
                            )
                        } else if(value.servicio === 'cena'){
                            return(
                                <div className='hora-container'>
                                    <p>Hora</p>
    
                                    <div className='hora'>
                                        {horarios.cena.map(item=>{
                                            return <div key={item.id} className='boton-hora boton-container'>
                                                        <input 
                                                            type='radio' 
                                                            name='hora' 
                                                            value={item.hora} 
                                                            id={item.id} onClick={(e) => value.handleClick(e)}
                                                            required/>
                                                        <label className='label-hora' htmlFor={item.id}>{item.hora}</label>
                                                </div>
                                        })}
                                    </div>
                                </div>
                            )
                        }
                    })()}
    
                    <input 
                        type='submit'  
                        className='continuar-button' 
                        value='CONTINUAR'
                        />
                </form>
                )}
            </ProductConsumer>
            


        )
    }
}

export default ReservaForm


