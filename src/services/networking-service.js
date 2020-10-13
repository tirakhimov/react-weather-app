export default class NetworkingService {
  constructor() {
    this.apiBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this.apiKey = '725cc83d358bd4a0ea4c6dcd990a60fb';
    this.proxy = 'https://cors-anywhere.herokuapp.com/';
  }

  async getWeather(cityName) {
    try {
      const response = await fetch(`${this.apiBase}${cityName}&appid=${this.apiKey}&units=metric`);
      return await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
