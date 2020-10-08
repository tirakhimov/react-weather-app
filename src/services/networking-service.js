export default class NetworkingService {

  _apiBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
  _apiKey = '725cc83d358bd4a0ea4c6dcd990a60fb';
  _proxy = 'https://cors-anywhere.herokuapp.com/';


  async getWeatherInfo(cityName) {
    try {
      const response = await fetch(`${this._proxy}${this._apiBase}${cityName}&appid=${this._apiKey}`);
      return await response.json();
    } catch(err) {
      console.log(err);
    }
  }
}



