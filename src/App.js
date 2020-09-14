import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import Contacto from './components/Contacto';
import Reserva from './components/Reserva';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='sombra'>
          <NavBar />
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/menu'} component = {Menu}/>
            <Route exact path={'/contactanos'} component = {Contacto}/>
            <Route exact path={'/haz-tu-reserva'} component = {Reserva}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
