import { ActionCreators } from './actions';

export const Operations = {
  fetchPizzas: () => (dispatch) => {
    dispatch(ActionCreators.isLoaded(true));

    fetch('http://localhost:3000/db.json')
      .then((res) => res.json())
      .then((json) => {
        dispatch(ActionCreators.setPizzas(json.pizzas));
        dispatch(ActionCreators.isLoaded(false));
      })
      .catch((err) => {        
        dispatch(ActionCreators.isLoaded(false));
      });
  },
};
