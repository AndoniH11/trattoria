import React from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'

class NavBar extends React.Component {

    state = {
        toggle: true,
    }

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    render() {
        return (
            <nav className='navBar'>
                <h1 className='nombre'>
                    La Trattoria
                </h1>
                <GiHamburgerMenu 
                    className='hamburger' 
                    onClick={()=>this.handleClick()}
                />

                <ul className={this.state.toggle ? 'oculto' : 'active'}>
                    <Link to='/' className='link' onClick={()=>this.handleClick()}>
                        <li className={this.state.toggle ? '' : 'linkActive'}>Home</li>
                    </Link>
                    <Link to='/menu' className='link' onClick={()=>this.handleClick()}>
                        <li className={this.state.toggle ? '' : 'linkActive'}>Menu</li>
                    </Link>
                    <Link to='/contactanos' className='link' onClick={()=>this.handleClick()}>
                        <li className={this.state.toggle ? '' : 'linkActive'}>Contáctanos</li>
                    </Link>
                    <Link to='/haz-tu-reserva' className='link' onClick={()=>this.handleClick()}>
                        <li className={this.state.toggle ? '' : 'linkActive'}>Haz tu reserva</li>
                    </Link>

                </ul>
            </nav>
        )
    }
}

export default NavBar