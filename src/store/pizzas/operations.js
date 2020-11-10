import { ActionCreators } from './actions';

export const Operations = {
  fetchPizzas: () => (dispatch) => {    

    fetch('http://localhost:3000/pizzas')
      .then((res) => res.json())
      .then((json) => {
        dispatch(ActionCreators.setPizzas(json));
        dispatch(ActionCreators.isLoaded(true));
      })
      .catch((err) => {        
        
      });
  },
};
