import WeatherService from "./Services/weatherService.js";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;
const weatherService = new WeatherService(apiKey);

const fetchWeather = async() => {
    const weather = await weatherService.getWeather();
    console.log(weather);
};

fetchWeather();
setInterval(fetchWeather, 1000 * 60)