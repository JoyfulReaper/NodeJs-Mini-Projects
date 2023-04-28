export default class WeatherService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getWeather() {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=17011&aqi=no`);
        const jsonData = await response.json();
        return (jsonData);
    }
}