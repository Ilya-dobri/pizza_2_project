import React from 'react';
import { Categories, SortPopup } from '../components';
import PizzasBlock from '../components/PizzasBlock';

function Home({ items }) {
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories items={[
          'Мясные',
          'Вегетарианская',
          'Гриль',
          'Острые',
          'Закрытые',
        ]} />
         <SortPopup items={[
          { name: 'популярности', type: 'Popular' },
          { name: 'цене', type: 'Price' },
          { name: 'алфавиту', type: 'Alphabet' }
        ]} />

      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {
          items.map((obj) => <PizzasBlock key={obj.id} {...obj} />)
        }
        
      </div>
    </div>
  );
}

export default Home;
