import React from 'react';
import Pizza from '../components/pizza';
import Categories from '../components/categories';
import Sort from '../components/sort';
import {useDispatch, useSelector} from 'react-redux';
import Preloader from '../components/Preloader';
import {Operations} from '../store/pizzas/operations';

const Home = () => {  
  const isLoaded = useSelector((state)=>state.pizzas.isLoaded);
  const items = useSelector((state)=>state.pizzas.items);
  const {category, sortedBy} = useSelector((state)=>state.filters);

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(Operations.fetchPizzas(category, sortedBy));
  },[category, sortedBy]);

  if(!isLoaded){
    return <Preloader />
  }

  return (
    <div className="container">
      <div className="filter-group">
        <Categories />
        <Sort />
      </div>
      <section className="content-group">
        <h2>Все пиццы</h2>
        <ul className="pizzas">
          {items && items.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
        </ul>
      </section>
    </div>
  );
};

export default React.memo(Home);
