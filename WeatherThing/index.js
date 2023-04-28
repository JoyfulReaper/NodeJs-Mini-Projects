import WeatherService from "./Services/weatherService.js";
import ConditionService from "./Services/conditionService.js";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;
const weatherService = new WeatherService(apiKey);
const conditionService = new ConditionService();

const fetchWeather = async() => {
    const weather = await weatherService.getWeather();
    const condition = conditionService.getCondition(weather.current.condition.code);
    console.log(condition);
};

fetchWeather();
setInterval(fetchWeather, 1000 * 60)