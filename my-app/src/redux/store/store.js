import {combineReducers, createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import {getAPIWatch, getCoordWatch} from '../saga'
import {getAPIReducer} from "./getAPIReducer";
import {all} from "@redux-saga/core/effects";


const sagaMiddleware = createSagaMiddleware()

export default function* rootSaga() {
  yield all(
      [
        getAPIWatch(),
        getCoordWatch()
      ])
}

const rootReducer = combineReducers({getAPIReducer})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
