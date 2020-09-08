import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
//obtener la fecha
const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" numero={20}></Header>
      <Footer fecha={fecha}></Footer>
    </Fragment>
  );
}

export default App;
