export const ActionTypes = {
  ADD_PIZZA_CART: `cart/ADD_PIZZA_CART`,
  SET_TOTAL_PRICE: `cart/SET_TOTAL_PRICE`,
  SET_TOTAL_COUNT: `cart/SET_TOTAL_COUNT`,
};

export const ActionCreators = ({
  addPizzaToCart: (pizzaObj) => ({
    type: ActionTypes.ADD_PIZZA_CART,
    payload: pizzaObj
  }),
  setTotalPrice: (payload) =>({
    type: ActionTypes.SET_TOTAL_PRICE,
    payload
  }),
  setTotalCount: (payload) =>({
    type: ActionTypes.SET_TOTAL_COUNT,
    payload
  }),  
});
