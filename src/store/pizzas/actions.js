export const ActionTypes = {
  IS_LOADED: `pizzas/IS_LOADED`,
  SET_PIZZAS: `pizzas/SET_PIZZAS`,
};

export const ActionCreators = ({
  setPizzas: (payload) =>({
    type: ActionTypes.SET_PIZZAS,
    payload
  }),
  isLoaded: (payload) =>({
    type: ActionTypes.IS_LOADED,
    payload
  }),
});
