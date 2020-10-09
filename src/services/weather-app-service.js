import NetworkingService from './networking-service';

export default class WeatherAppService extends NetworkingService {
  
  configureWeatherObject(cityName) {
    super.getWeatherInfo(cityName).then((body) => {
      const weatherObj = {
        cityName: `${body.name}`,
        temperature: `${Math.round(body.main.temp - 273)}`,
        sky: `${body.weather[0].main}`,
      }
      console.log(weatherObj);
      return weatherObj;
    })
  }
}

const weatherAppService = new WeatherAppService();
weatherAppService.configureWeatherObject('London');