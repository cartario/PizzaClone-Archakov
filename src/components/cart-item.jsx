import React from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreators} from '../store/cart/actions';

const CartItem = ({id,name, type, size, price, totalCountItem}) => {
  
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(ActionCreators.plusItem(id));
  };

  const handleClickDecrement = () => {   
    dispatch(ActionCreators.minusItem(id));
  };

  const handleRemoveItem = () => {
    if(window.confirm(`Вы действительно хотит удалить пиццу?`)){
      dispatch(ActionCreators.removeItem(id));
    }
  }

  return (
    <li className="cart__item">
      <div className="cart__item-img">
        <img
          src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
          alt="cart-img"
        />
      </div>
      <div className="cart__item-info">
        <h2>{name}</h2>
        <span>{type} тесто, {size} см</span>
      </div>
      <div className="cart__item-count">
        <div className="cart__item-btn cart__item-btn--minus" onClick={handleClickDecrement}>
          -
        </div>
        <span>{totalCountItem}</span>
        <div className="cart__item-btn cart__item-btn--plus" onClick={handleClickIncrement}>
          +
        </div>
      </div>
      <p className="cart__item-price">{price} ₽</p>
      <div className="cart__item-remove" onClick={handleRemoveItem}>
        <div className="cart__item-btn cart__item-btn--remove">+</div>
      </div>
    </li>
  );
};

export default CartItem;
