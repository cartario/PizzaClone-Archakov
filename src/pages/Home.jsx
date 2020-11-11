import React from 'react';
import Pizza from '../components/pizza';
import Categories from '../components/categories';
import Sort from '../components/sort';
import { useDispatch, useSelector } from 'react-redux';
import Preloader from '../components/Preloader';
import { Operations } from '../store/pizzas/operations';
import LoaderPizza from '../components/LoaderPizza';

const Home = () => {
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const items = useSelector((state) => state.pizzas.items);
  const { category, sortedBy } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(Operations.fetchPizzas(category, sortedBy));
  }, [category, sortedBy]);

  return (
    <div className="container">
      <div className="filter-group">
        <Categories />
        <Sort />
      </div>
      <section className="content-group">
        <h2>Все пиццы</h2>
        <ul className="pizzas">
          {!isLoaded
            ? Array.from('0123456789ab').map((block) => (
                <LoaderPizza key={block} className="pizza" />
              ))
            : items && items.map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
            {!items.length && <p>Пиццы закончились</p>}
        </ul>
      </section>
    </div>
  );
};

export default React.memo(Home);
