import { ActionCreators } from './actions';

export const Operations = {
  fetchPizzas: () => (dispatch) => {    

    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((json) => {
        dispatch(ActionCreators.setPizzas(json.pizzas));
        dispatch(ActionCreators.isLoaded(true));
      })
      .catch((err) => {        
        
      });
  },
};
