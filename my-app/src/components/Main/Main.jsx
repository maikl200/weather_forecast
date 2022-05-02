import React, {useEffect, useState} from 'react';

import classes from './main.module.scss'

import air from '../../assests/air.png'
import humidity from '../../assests/humidity.png'
import {weatherIcon} from "../mockdata/WeatherIconIdentifier";

import {useSelector, useDispatch} from "react-redux";
import {asyncGetAPI, asyncGetCoord} from "../../redux/store/action";
import Loader from "../Loader/Loader";


const Main = () => {
  const [search, setSearch] = useState('')
  const getWeather = useSelector((store) => store.getAPIReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((geolocation) =>
        dispatch(asyncGetCoord(geolocation.coords)))
  }, [])

  const weatherData = {
    temp: getWeather.main && Math.round(getWeather.main.temp),
    tempFeel: getWeather.main && Math.round(getWeather.main.feels_like),
    description: getWeather.weather && getWeather.weather[0].description,
    humidity: getWeather.main && getWeather.main.humidity,
    speed: getWeather.wind && Math.round(getWeather.wind.speed),
    image: getWeather.weather && weatherIcon[getWeather.weather[0].main]
  }
  const weatherSearch = () => {
    dispatch(asyncGetAPI(search))
    setSearch('')
  }

  return (
      <main className={classes.main}>
        <div className={classes.main__container}>
          {getWeather.cod === '404' ?
              <span
                  className={classes.main__container_error}>Введенный город не найден. Может быть вы имели ввиду <span
                  onClick={() => dispatch(asyncGetAPI('Москва'))}>Москва?</span>
          </span>
              : ''}
          <div className={classes.main__container__geo}>
            <input
                type={"text"}
                placeholder={'Введите город'}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={weatherSearch}>Найти</button>
          </div>
          {getWeather.main ?
              <>
                <span className={classes.main__container__city}>{getWeather.name}</span>
                <div className={classes.main__container__weather}>
                  <div className={classes.main__container__weather__identifier}>
                    <img src={weatherData.image} alt={'Погода'}/>
                    <span>{weatherData.description}</span>
                  </div>
                  <div className={classes.main__container__weather__temp}>
                    <p className={classes.main__container__weather__degree}>{weatherData.temp}°C</p>
                    <p>Ощущается как {weatherData.tempFeel}°C</p>
                  </div>
                  <div className={classes.main__container__weather_info}>
                    <div className={classes.main__container__weather_info_value}>
                      <span>Скорость ветра:</span>
                      <img src={air} alt={'сила ветра'}/>
                      <span>{weatherData.speed} км/ч</span>
                    </div>
                    <div className={classes.main__container__weather_info_value}>
                      <span>Влажность:</span>
                      <img src={humidity} alt={'Влажность'}/>
                      <span>{weatherData.humidity} %</span>
                    </div>
                  </div>
                </div>
              </>
              : <Loader/>}
        </div>
      </main>
  );
};

export default Main;