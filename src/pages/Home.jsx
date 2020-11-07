import React, { memo, useMemo } from 'react';
import Pizza from '../components/pizza';
import Categories from '../components/categories';
import Sort from '../components/sort';
import {connect } from 'react-redux';
import Preloader from '../components/Preloader';

const Home = ({isLoaded, items}) => {

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

const mapStateToProps = (state) => ({
  items: state.pizzas.items,
  isLoaded: state.pizzas.isLoaded,
});

export default connect(mapStateToProps)(Home);
