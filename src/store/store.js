import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import testPageReducer from './testPage/reducer';
import pizzasReducer from './pizzas/reducer';
import filtersReducer from './filters/reducer';
import { Operations } from './pizzas/operations';

const rootReducer = combineReducers({  
  pizzas: pizzasReducer,
  filters: filtersReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(Operations.fetchPizzas());

export default store;
