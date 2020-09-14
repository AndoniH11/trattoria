import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';

const ConfirmacionReserva = () => {
    return (
        <ProductConsumer>
            {(value) => (
                <div className='confirmacion-reserva-container'>
                    <div className='confirmacion-container'>
                        <h2>Tu reserva ha sido realizada con éxito.</h2>

                        <p>Hemos reservado una mesa de {value.number} {value.number === '1' ? 'persona' : 'personas'}, para el día de {value.fecha} a las {value.hora}.</p>
                        <p>Te enviaremos un correo eléctronico con la confirmación de la reserva, así como de toda la información de esta.</p>
                        <p>Recuerda que en caso de ser alérgico a cualquier tipo de alergéno, deberás comentárselo a tu camarero a la llegada para que este se lo comunique al chef.</p>

                        <Link to='/'>
                            <button>Volver a inicio</button>
                        </Link>

                        <p>Para cualquier duda o cambio en la reserva, no dudes en ponerte en contacto con nosotros a través de cualquiera de estos medios: </p>

                        <div className='icons-container'>
                            <div className='icon-container'>
                                <FaPhone className='icon' />
                                <p className='parrafo-icon'>678 577 990</p>
                            </div>

                            <div className='icon-container'>
                                <MdEmail className='icon' />
                                <p className='parrafo-icon'>latrattoria@restaurant.com</p>
                            </div>

                            <div className='icon-container'>
                                <FaInstagramSquare className='icon' />
                                <p className='parrafo-icon'>@latrattoriabcn</p>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </ProductConsumer>
    )
}

export default ConfirmacionReserva