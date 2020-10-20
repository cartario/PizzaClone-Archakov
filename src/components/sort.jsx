import React from 'react';

const items = ['популярности','цене', 'алфавиту'];

const Sort = () => {
  const [visible, setVisible] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(items[0]);
  const sortRef = React.useRef();

  const handleClickItem = (e) => {
    const target = e.target.textContent;
    setActiveItem(target)
  }

  const togglePopup = () => {
    setVisible(!visible);
  }

  const handleOutsideClick = (e)=>{
    
    if(!e.path.includes(sortRef.current)){
      setVisible(false);      
    }      
  };

  React.useEffect(()=>{
    document.body.addEventListener('click', handleOutsideClick);
  }, []);  

  return (
    <div  ref={sortRef}  className="filter-group__sort sort">
      <div className="sort__label">
        <svg className={visible ? 'rotated' : ''} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"></path>
        </svg>
        <b>Сортировка по: </b><span className="sort__link" onClick={togglePopup}>{activeItem}</span>
      </div>
      {visible &&
        <ul className="sort__popup" onClick={handleClickItem}>          
        {items && items.map((item)=>
        <li 
          className={item === activeItem ?'sort__popup--active' : ''}
          key={item}>{item}</li>)}
        </ul>
      }     
    </div>
  )
};

export default Sort;
