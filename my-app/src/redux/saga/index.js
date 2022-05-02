import {put, takeEvery, takeLeading} from '@redux-saga/core/effects'
import {ASYNC_GET_API, ASYNC_GET_COORD} from '../store/actionTypes'
import {getWeatherAction} from "../store/action";

const ApiKey = 'a8c0e0c773646e6171ed285f8738038b'

export function* getAPIWorker(action) {
  const data = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${action.payload}&appid=${ApiKey}&lang=ru&units=metric`)
      .then((request) => request.json())
  try {
    yield put(getWeatherAction(data))
  } catch (e) {
    console.error(e)
  }
}

export function* getCoordWorker(action) {
  const coord = yield fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${action.payload.latitude}&lon=${action.payload.longitude}&appid=${ApiKey}&lang=ru&units=metric`)
      .then((request) => request.json())
  try {
    yield put(getWeatherAction(coord))
  } catch (e) {
    console.error(e)
  }
}


export function* getAPIWatch() {
  yield takeLeading(ASYNC_GET_API, getAPIWorker)

}

export function* getCoordWatch() {
  yield takeEvery(ASYNC_GET_COORD, getCoordWorker)
}