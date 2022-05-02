import {ASYNC_GET_COORD, ASYNC_GET_API, GET_WEATHER} from './actionTypes'

export const getWeatherAction = (payload) => ({
  type: GET_WEATHER,
  payload
})

export const asyncGetCoord = (payload) => ({
  type: ASYNC_GET_COORD,
  payload
})

export const asyncGetAPI = (payload) => ({
  type: ASYNC_GET_API,
  payload
})

