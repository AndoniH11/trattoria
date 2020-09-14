import React from 'react';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {

    state = {
        number: "",
        fecha: '',
        fechaChecked: false,
        servicio: '',
        hora : '',
    }

    handleClick = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if (name === 'fecha') {
            this.setState({
                fechaChecked: true
            })
        }
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleClick: this.handleClick
            }}
            >
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer, ProductContext}