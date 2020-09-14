import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    render() {
        return (
            <div className='element-container'>
                <div className='slogan-container'>
                    <p className='slogan1'>La mejor pizza</p>
                    <p className='slogan2'>Desde Italia hasta tu mesa</p>
                    <Link to='/menu'>
                        <button className='boton-home'><p>Ver el menú</p></button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home