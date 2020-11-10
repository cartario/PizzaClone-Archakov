import { ActionCreators } from './actions';
import {adapter} from '../../utils';

export const Operations = {
  fetchPizzas: (category, sortedBy) => (dispatch) => {  
    dispatch(ActionCreators.isLoaded(false));  
    fetch(`http://localhost:3000/pizzas?${category==='Все'? "":`tag=${adapter(category)}`}&_sort=${adapter(sortedBy)}&_order=asc`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(ActionCreators.setPizzas(json));
        dispatch(ActionCreators.isLoaded(true));
      })
      .catch((err) => {        
        
      });
  },
};
