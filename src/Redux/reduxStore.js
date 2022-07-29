import {applyMiddleware, combineReducers, legacy_createStore as createStore, compose} from "redux";
import thunkMiddleware from 'redux-thunk'
import yesNoReducer from "./Reducers/yesNoReducer";
import beerReducer from "./Reducers/beerReducer";



let rootReducer = combineReducers({
      yesNo: yesNoReducer,
    beer: beerReducer,
  })


const store = createStore(rootReducer, compose(applyMiddleware(thunkMiddleware)));


export default store

