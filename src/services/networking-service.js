export default class NetworkingService {

  _apiBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
  _apiKey = '725cc83d358bd4a0ea4c6dcd990a60fb';


  async getResource(cityName) {
    const res = await fetch(`${this._apiBase}${cityName}&appid${this._apiKey}`, {
      mode: 'no-cors', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    if(!res.ok) {
      throw new Error('Could not fetch');
    }
    return await res.json();

  }

  // getWeather() {
  //   return this.getResource(cityName)
  // }

}

const networking = new NetworkingService();

networking.getResource('London').then((body) => {
  console.log(body.name);
})