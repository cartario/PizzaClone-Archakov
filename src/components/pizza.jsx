import React, { useState } from 'react';
import classNames from 'classnames';
import {ActionCreators} from '../store/cart/actions';
import {useDispatch, useSelector} from 'react-redux';

const availableTypes = ['тонкое', 'традиционное'];
const availableSizes = [26, 30, 40];

const Pizza = ({ outline, name, types, sizes, price, imgUrl ,id}) => {
  const [active, setActive] = useState({ type: types[0], size: availableSizes.indexOf(sizes[0]) });
  const dispatch = useDispatch();
  const items = useSelector(({cart})=>cart.items[id])||"";
  const count = items&&items.length;   

  const handleClickType = (i) => {
    setActive({ ...active, type: i });
  };

  const handleClickSize = (i) => {
    setActive({ ...active, size: i });
  };

  const handleAddClick = () => {    
    const obj = {id, name, active, price};
    dispatch(ActionCreators.addPizzaToCart(obj))
  }

  return (
    <li className="pizza">
      <img width="250" alt="pizza-img" src={imgUrl} />
      <h3>{name}</h3>
      <div className="pizza__options options">
        <ul className="options__types">
          {availableTypes.map((item, i) => (
            <li
              key={item}
              onClick={() => handleClickType(i)}
              // className={
              //   !types.includes(i)
              //     ? 'options__type options__button disabled'
              //     : i === active.type
              //       ? "options__type options__button options__button--active"
              //       : "options__type options__button"
              // }
              className={classNames({
                options__type: true,
                options__button: true,
                'options__button--active': i === active.type,
                disabled: !types.includes(i),
              })}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="options__sizes">
          {availableSizes.map((size, i) => (
            <li
              key={size}
              onClick={() => handleClickSize(i)}
              className={classNames({
                'options__type options__button': true,
                'options__button--active': i === active.size,
                disabled: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza__footer">
        <p className="pizza__price">от {price} Р.</p>
        <button className={outline ? 'button button--outline' : 'button'} onClick={handleAddClick}>Добавить {count}</button>
      </div>
    </li>
  );
};

export default React.memo(Pizza);
