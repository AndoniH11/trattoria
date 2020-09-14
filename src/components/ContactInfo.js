import React from 'react';
import pizza from '../assets/img/pizza.svg';
import phone from '../assets/img/phone-256.png';
import email from '../assets/img/email-512.png';
import map from '../assets/img/map-5-512.png';

const ContactInfo = () => {
    return(
        <div className='contact-info-container'>
                    <div>
                        <img src={pizza} className='info-img' alt='icono'/>
                        <p className='info-title'>Horario</p>
                        <p className='info'>12:00am - 11:00pm</p>
                    </div>
                    <div>
                        <img src={phone} className='info-img' alt='icono'/>
                        <p className='info-title'>Teléfono</p>
                        <p className='info'>675-965-987</p>
                    </div>
                    <div>
                        <img src={email} className='info-img' alt='icono'/>
                        <p className='info-title'>Email</p>
                        <p className='info'>latrattoria@restaurant.com</p>
                    </div>
                    <div>
                        <img src={map} className='info-img' alt='icono'/>
                        <p className='info-title'>Ubicación</p>
                        <p className='info'>Gracia, Barcelona</p>
                    </div>
                </div>
    )
}

export default ContactInfo