export const ActionTypes = {
  SORTED_BY: `filters/SORTED_BY`,
  SET_CATEGORY: `filters/SET_CATEGORY`,
};

export const ActionCreators = ({
  setSorted: (payload) =>({
    type: ActionTypes.SORTED_BY,
    payload
  }),
  setCategory: (payload) =>({
    type: ActionTypes.SET_CATEGORY,
    payload
  }),  
});
