import { ActionTypes } from './actions';

const initialState = {
  sortedBy: 'популярности',
  category: 'Все',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  
  switch (type) {
    case ActionTypes.SORTED_BY:
      return { ...state, sortedBy: payload };
    case ActionTypes.SET_CATEGORY:
      return { ...state, category: payload };

    default:
      return state;
  }
};

export default reducer;
