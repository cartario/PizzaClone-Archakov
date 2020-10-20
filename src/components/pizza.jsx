import React from 'react';

const Pizza = ({outline}) => {  
  
  return (
    <li className="pizza">
      <img width="250" alt="pizza-img" src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"/>
      <h3>Чизбургер-пицца</h3>
      <div className="pizza__options options">

        <ul className="options__types">
          <li className="options__type options__button options__button--active">тонкое</li>
          <li className="options__type options__button">традиционное</li>
        </ul>
        <ul className="options__sizes">
          <li className="options__size options__button">26 см.</li>
          <li className="options__size options__button options__button--active">30 см.</li>
          <li className="options__size options__button">40 см.</li>
        </ul>

      </div>
      <div className="pizza__footer">
        <p className="pizza__price">от 395 Р.</p>
        <button className={outline ? 'button button--outline' : 'button'}>
          Добавить
        </button>
      </div>
    </li>
  );
};

export default Pizza;