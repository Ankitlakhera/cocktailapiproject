import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./rootReducer";



import rootSaga from "./rootSaga";


// create middleware instance
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    
        }) : compose;

const enhancer = composeEnhancers(      
    applyMiddleware(sagaMiddleware),
   
);

const Store = createStore(
    rootReducers,
    enhancer
);


sagaMiddleware.run(rootSaga);

export default Store;