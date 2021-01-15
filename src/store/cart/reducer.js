import { ActionTypes } from './actions';

const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  const getTotalPrice = (arr) => {
    return Object.values(arr).reduce((acc, item) => {
      const totalPriceItem = item.reduce((subAcc, subItem) => subItem.price + subAcc, 0);
      return totalPriceItem + acc;
    }, 0);
  };

  switch (type) {
    case ActionTypes.ADD_PIZZA_CART:
      const items = {
        ...state.items,
        [payload.id]: !state.items[payload.id] ? [payload] : [...state.items[payload.id], payload],
      };

      const totalCount = Object.values(items).reduce((acc, item) => item.length + acc, 0);

      // console.log([].concat.apply([],Object.values(items)).length) //двумерный массив в массив

      const totalPrice = getTotalPrice(items);

      return {
        ...state,
        items,
        totalCount,
        totalPrice,
      };
    case ActionTypes.SET_TOTAL_PRICE:
      return { ...state, totalPrice: payload };
    case ActionTypes.SET_TOTAL_COUNT:
      return { ...state, totalCount: payload };
    case ActionTypes.REMOVE_CART:
      return { ...state, ...initialState };
    case ActionTypes.REMOVE_ITEM:
      const newItems = { ...state.items };
      delete newItems[payload];

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(newItems),
        totalCount: Object.values(newItems).reduce((acc, item) => item.length + acc, 0),
      };

    case ActionTypes.PLUS_ITEM:
      return {
        ...state,
        items: { ...state.items, [payload]: [...state.items[payload], state.items[payload][0]] },
        totalPrice: state.totalPrice + state.items[payload][0].price,
        totalCount: state.totalCount + 1,
      };

    case ActionTypes.MINUS_ITEM:
      return {
        ...state,
        items: {
          ...state.items,
          [payload]:
            state.items[payload].length > 1
              ? [...state.items[payload]].slice(1)
              : state.items[payload],
        },
        totalPrice:
          state.items[payload].length > 1
            ? state.totalPrice - state.items[payload][0].price
            : state.totalPrice,
        totalCount: state.items[payload].length > 1 ? state.totalCount - 1 : state.totalCount,
      };

    default:
      return state;
  }
};

export default reducer;
