import React from 'react';
import {useDispatch, connect} from 'react-redux';
import {ActionCreators} from '../store/filters/actions';

const items = ['Все', 'Мясные','Вегетарианская','Гриль','Острые','Закрытые'];

function Categories ({active, dispatch}) {  
  // const [active, setActive] = React.useState('Все');


  const handleClick = (e) => {
    const target = e.target.textContent;
    // setActive(target); 
    dispatch(ActionCreators.setCategory(target));
  }; 
  
  return (
  <ul className="filter-group__list">
    {items&&items
    .map((item)=>
    <li 
   
    onClick={handleClick}
    className={`filter-group__item ${active===item ? ' filter-group__item--active': ''}`} key={item}>{item}</li>)}    
  </ul>
  );
};

const mapStateToProps = (state) => ({
  active: state.filters.category, 
})

export default connect(mapStateToProps)(Categories);
