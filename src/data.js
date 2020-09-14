import margarita from './assets/img/margarita.jpg';
import proscuitto from './assets/img/proscuitto.jpg';
import crispyChicken from './assets/img/crispy-chicken.jpg';
import napoletana from './assets/img/napolitana.jpg';
import prawns from './assets/img/seafood.jpg';
import pesto from './assets/img/pesto.jpg';
import avoLover from './assets/img/avocado.jpg';
import vegan from './assets/img/vegetarian.jpg'



export const items = [
    {
        id: 1,
        name: 'Margarita',
        ingredients: 'Tomate, queso mozzarella, albahaca y aceite de oliva',
        price: 8,
        img: margarita
    },
    {
        id: 2,
        name: 'Proscuitto',
        ingredients: 'Crema, queso mozzarella, tomates cherry, proscuitto y queso de cabra',
        price: 9,
        img: proscuitto
    },
    {
        id: 3,
        name: 'Crispy Chicken',
        ingredients: 'Tomate, queso mozzarella, bacon, onion, chicken, pimiento verde y salsa barbacoa',
        price: 10,
        img: crispyChicken
    },
    {
        id: 4,
        name: 'La Napoletana',
        ingredients: 'Tomate, queso mozzarella, crema, tomates cherry, albahaca y aceite de oliva',
        price: 9,
        img: napoletana
    },
    {
        id: 5,
        name: 'Delicia de Marisco',
        ingredients: 'Tomate, queso mozzarella, gambas, calamares y albahaca',
        price: 13,
        img: prawns
    },
    {
        id: 6,
        name: 'Pesto',
        ingredients: 'Pesto, queso mozzarella, pollo, tomates cherry, queso de cabra y aceite de oliva',
        price: 11,
        img: pesto
    },
    {
        id: 7,
        name: 'Avo Lover',
        ingredients: 'Crema, queso mozzarella, espinaca, mango, aguacate y vinagre negro',
        price: 13,
        img: avoLover
    },
    {
        id: 8,
        name: 'La vegana',
        ingredients: 'Tomate, queso vegano, cebolla, setas, pimiento rojo y berenjena',
        price: 11,
        img: vegan
    },
    
]

export const horarios = {
    desayuno: [
        {
            id: 1,
            hora: '10:00'
        },
        {
            id: 2,
            hora: '10:30'
        },
        {
            id: 3,
            hora: '11:00'
        }],
    comida: [
        {
        id: 1,
        hora: '12:00'
    }, 
    {
        id: 2,
        hora: '12:30'
    },
    {
        id: 3,
        hora: '13:00'
    },
    {
        id: 4,
        hora: '13:30'
    }
],
    cena: [
        {
            id: 2,
            hora: '20:00'
        },
        {
            id: 3,
            hora: '20:30'
        },
        {
            id: 4,
            hora: '21:00'
        },
        {
            id: 5,
            hora: '21:30'
        },
        {
            id: 6,
            hora: '22:00'
        },
    ]
}