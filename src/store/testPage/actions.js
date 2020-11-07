export const ActionTypes = {
  TEST: 'test',
};

export const ActionCreators = ({
  sayTest: (payload) =>({
    type: ActionTypes.TEST,
    payload: payload
  }),
});
