import React, { useState } from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = useState('');

  const onSelectItem = (index) => {
    setActiveItem(index);
  }

  return (
    <div className='categories'>
      <ul>
        <li className={activeItem === '' ? 'active' : ''} onClick={() => onSelectItem('')}>Все</li>
        {items.map((name, index) => (
          <li 
            className={activeItem === index ? 'active' : ''} 
            onClick={() => onSelectItem(index)} 
            key={`${name}_${index}`}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
