import {ActionTypes} from './actions';

const initialState = {
  hello: 'yo',
  a: []
};

const reducer = (state = initialState, action)=>{
  const {type, payload} = action;
  switch(type){
    case ActionTypes.TEST:
      return {...state, hello: !!payload ? payload :1};
    default:
      return state;
  }
};

export default reducer;
