import {GET_WEATHER} from "./actionTypes";

const defaultState =  []

export const getAPIReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return action.payload


    default: return state
  }
}