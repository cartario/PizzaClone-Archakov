import React from 'react';
import {Route} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(()=>{
    fetch("http://localhost:3000/db.json")
    .then((res)=>res.json())
    .then((json)=>setPizzas(json.pizzas));    
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <main className="main">
          <Route path="/" exact render={()=> <Home items={pizzas}/>}/>          
          <Route path="/cart" exact component={Cart}/>
        </main>
        <footer className="footer">footer
        </footer>
      </div>
    </div>
  );
}

export default App;
