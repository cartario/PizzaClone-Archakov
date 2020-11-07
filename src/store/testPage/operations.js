import {ActionCreators} from './actions';

export const Operations = ({
  fetchTest: ()=>(dispatch)=>{
    dispatch(ActionCreators.sayTest('fetch'));
  },
});
