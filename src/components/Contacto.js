import React from 'react';
import ContactInfo from './ContactInfo'

const Contacto = () => {
    return (
        <div className='element-container'>
            <div className='contacto-container'>
                <div className='form-container'>
                    <h2 className='form-titulo'>
                        Envíanos un email
                    </h2>

                    <form className='form'>
                        <div className='name-container'>
                            <label htmlFor='name'>Tu nombre:</label>
                            <input type='text' className='nombre-input' />
                        </div>

                        <div className='email-container'>
                            <label htmlFor='email'>Tu email:</label>
                            <input type='email' className='email-input' />
                        </div>

                        <div className='asunto-container'>
                            <label htmlFor='asunto'>Asunto:</label>
                            <input type='text' className='asunto-input' />
                        </div>

                        <div className='message-container'>
                            <label htmlFor='message'>Mensaje:</label>
                            <textarea name='message' className='message-input' rows='5' columns='200' />
                        </div>
                    </form>
                    <button className='form-button'>
                        Enviar
                    </button>
                </div>
                <ContactInfo/>
            </div>
        </div>
    )
}

export default Contacto