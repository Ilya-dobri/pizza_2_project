import React, { useCallback } from 'react';
import { Categories, SortPopup, PizzasBlock, LoadingBlock } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy  } from '../Redux/actions/filters';
import { fetchPizzass } from '../Redux/actions/pizzas';

const NameCategories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const SortItems = [
  {name:"Популярности", type:"popular", order:"desc"},
  {name:"Цена", type:"price", order:"desc"},
  {name:"Алфавит", type:"name", order:"asc"},
]
function Home() {
  const pizzas = useSelector((state) => state.pizzas.items);
  const isLoaded = useSelector((state) => state.pizzas.isLoaded);
  const {category, sortBy}= useSelector(({filters}) => filters);
  const dispatch = useDispatch();


  const onSelectSortType = useCallback((type) =>{
    dispatch(setSortBy(type))
  }, []);

  React.useEffect(() => {
  dispatch(fetchPizzass(category, sortBy));
}, [dispatch, category, sortBy ]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);


  
  return (
    <div className='container'>
      <div className='content__top'>
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={NameCategories}
        />
        <SortPopup
        activeSortType={sortBy}
          items={SortItems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {isLoaded
          ? pizzas.map((obj) => <PizzasBlock key={obj.id} isLoading={true} {...obj} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
