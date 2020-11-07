import { ActionTypes } from './actions';

const initialState = {
  isLoaded: false,
  items: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SET_PIZZAS:
      return { ...state, items: payload };
    case ActionTypes.IS_LOADED:
      return { ...state, isLoaded: payload };
    default:
      return state;
  }
};

export default reducer;
