export default class EmojiService {

  _weatherEmojisObject = {
    Thunderstorm: '⛈️',
    Drizzle: '🌧️',
    Rain: '🌧️',
    Snow: '🌨️',
    Mist: '🌫️',
    Smoke: '🌫️',
    Haze: '🌫️',
    Dust: '🌫️',
    Fog: '🌫️',
    Ash: '🌫️',
    Clear: '🔆',
    Squall: '💨',
    Tornado: '🌪',
    Clouds: '☁️',
  }

  setEmojiFor(weatherName) {
    for (let key in this._weatherEmojisObject) {
      if(key === weatherName) {
        return this._weatherEmojisObject[key];
      }
    }
  }
}