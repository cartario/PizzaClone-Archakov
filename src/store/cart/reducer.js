import { ActionTypes } from './actions';

const initialState = {
  items: {},
  totalCount: 10,
  totalPrice: 20,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionTypes.ADD_PIZZA_CART:
      return {
        ...state,
        items: {...state.items,
          [payload.id]: !state.items[payload.id] 
            ? [payload] 
            : [...state.items[payload.id], payload],
        },
      };
    case ActionTypes.SET_TOTAL_PRICE:
      return { ...state, totalPrice: payload };
    case ActionTypes.SET_TOTAL_COUNT:
      return { ...state, totalCount: payload };

    default:
      return state;
  }
};

export default reducer;
