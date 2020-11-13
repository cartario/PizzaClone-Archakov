import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Route path="/" exact component={Home}/>          
          <Route path="/cart" exact component={Cart}/>
        </main>
        <footer className="footer">footer
        </footer>
      </div>
    </div>
  );
}


export default App;
