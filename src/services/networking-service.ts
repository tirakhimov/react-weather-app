export type WeatherType = {
  main: string;
}

export type DailyType = {
  dt: number;
  weather: WeatherType[];
  temp: {
    day: number;
  };
}

export interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  name: string;
  weather: WeatherType[];
  main: {
    temp: number;
  };
}

export interface WeatherResponseWeek {
  name: string;
  daily: DailyType[];
}

export default class NetworkingService {

  private readonly _apiBase: string;
  private readonly _apiKey: string;

  constructor() {
    this._apiBase = 'http://api.openweathermap.org/data/2.5/';
    this._apiKey = '725cc83d358bd4a0ea4c6dcd990a60fb';
  }

  async getWeatherForToday(cityName: string | undefined): Promise<WeatherResponse> {
    try {
      const response = await fetch(`${this._apiBase}weather?q=${cityName}&appid=${this._apiKey}&units=metric`);
      return await response.json();
    } catch (err) {
      throw new Error(err.message);
    }
  }

   getWeatherForWeek(cityName: string | undefined): Promise<WeatherResponseWeek> {
    return this.getWeatherForToday(cityName).then( async (response) => {
      const { lat, lon } = response.coord;
      const responseWeek =
        await fetch(`${this._apiBase}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${this._apiKey}&units=metric`);
        return { ...await responseWeek.json(), name: response.name }
    });
  }
}