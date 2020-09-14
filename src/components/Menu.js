import React from 'react';
import {items} from '../data';
import Card from './Card'

class Menu extends React.Component{
    render(){
        return(
            <div className='menu-container'>
                {items.map(item => {return <Card key={item.id} pizza={item}/>})}
            </div>
        )
    }
}

export default Menu