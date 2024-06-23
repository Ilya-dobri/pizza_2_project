
import axios from 'axios';






export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
})


export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items
})


export const fetchPizzass = (category, sortBy) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false
  })
  const categories = category !== null ? `category=${category}` : "";
  axios.get(`http://localhost:3000/pizzas?${categories}&_sort=${sortBy.type}&_order=desc`).then(({ data }) => {

    dispatch(setPizzas(data));
    
  });
}