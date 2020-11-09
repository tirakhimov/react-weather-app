export type WeatherType = {
  main: string;
}

export interface WeatherResponse {
  name: string;
  weather: WeatherType[];
  main: {
    temp: number;
  };
}

export default class NetworkingService {

  private readonly _apiBase: string;
  private readonly _apiKey: string;

  constructor() {
    this._apiBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
    this._apiKey = '725cc83d358bd4a0ea4c6dcd990a60fb';
  }

  async getWeather(cityName: string | undefined): Promise<WeatherResponse> {
    try {
      const response = await fetch(`${this._apiBase}${cityName}&appid=${this._apiKey}&units=metric`);
      return await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
