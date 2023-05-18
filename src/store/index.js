import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import produceReducer from './produce';

let enhancer;

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
};



const rootReducer = combineReducers({
    produce: produceReducer
});



const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };
  
export default configureStore;

// Can we in console:
// store.dispatch({type: "foo"})
// it seems this will cause future valid .dispatch to error: - why?
// store.dispatch()