import NetworkingService from './networking-service';

export default class WeatherAppService {

}

const networking = new NetworkingService();
  networking.getWeatherInfo('London').then((body) => {
    console.log(body);
})