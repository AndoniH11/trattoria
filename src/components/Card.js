import React from 'react';

const Card = (props) => {
    const {pizza} = props
    return(
        <div className='card'>
            <div className='img-container'>
                <img src={pizza.img} className='img'/>
            </div>
            <div className='info-container'>
                <h2>{pizza.name}</h2>
                <p className='ingredientes'>{pizza.ingredients}</p>
                <p className='precio'>{pizza.price}€</p>
            </div>
        </div>
    )
}

export default Card;