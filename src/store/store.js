import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import pizzasReducer from './pizzas/reducer';
import filtersReducer from './filters/reducer';
import cart from './cart/reducer';
import { Operations } from './pizzas/operations';

const rootReducer = combineReducers({  
  pizzas: pizzasReducer,
  filters: filtersReducer,
  cart
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
