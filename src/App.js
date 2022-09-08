import './App.css';
import Detalles from './Componentes/Detalles'
import { Route } from 'wouter';
import Main from './Componentes/Main';

function App() {

  return (
    <>
<Route path='/' component={Main}/>
<Route path="/:name" component={Detalles} />
    </>
    );
}


export default App;
