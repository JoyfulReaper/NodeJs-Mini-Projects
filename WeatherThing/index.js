import WeatherService from "./Services/weatherService.js";
import ConditionService from "./Services/conditionService.js";
import AlertService from "./Services/alertService.js";
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.API_KEY;
const weatherService = new WeatherService(apiKey);
const conditionService = new ConditionService();
const alertService = new AlertService();

const fetchWeather = async() => {
    const weather = await weatherService.getWeather();
    const condition = conditionService.getCondition(weather.current.condition.code);
    const isAlertCondition = alertService.isAlertCondition(weather.current.condition.code);

    console.log(condition);

    if(isAlertCondition) {
        console.log("ALERT CONDITION!!!!");
        alertService.sendAlert(weather.current.condition.code, false, true);
    } else {
        console.log("Not an alert!");
    }
};

fetchWeather();
setInterval(fetchWeather, 1000 * 60)