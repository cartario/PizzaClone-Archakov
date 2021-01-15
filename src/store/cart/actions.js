export const ActionTypes = {
  ADD_PIZZA_CART: `cart/ADD_PIZZA_CART`,
  SET_TOTAL_PRICE: `cart/SET_TOTAL_PRICE`,
  SET_TOTAL_COUNT: `cart/SET_TOTAL_COUNT`,
  REMOVE_CART: `cart/REMOVE_CART`,
  REMOVE_ITEM: `cart/REMOVE_ITEM`,
  PLUS_ITEM: `cart/PLUS_ITEM`,
  MINUS_ITEM: `cart/MINUS_ITEM`,
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
  clearCart: ()=>({
    type: ActionTypes.REMOVE_CART
  }),
  removeItem: (id)=>({
    type: ActionTypes.REMOVE_ITEM,
    payload: id
  }), 
  plusItem: (id)=>({
    type: ActionTypes.PLUS_ITEM,
    payload: id
  }), 
  minusItem: (id)=>({
    type: ActionTypes.MINUS_ITEM,
    payload: id
  }), 
});
