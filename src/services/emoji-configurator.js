export default class EmojiConfigurator {

  _objOfWeatherNamesAndEmojis = {
    Thunderstorm: '⛈️',
    Drizzle: '🌧️',
    Rain: '☔',
    Snow: '🌨️',
    Mist: '🌫️',
    Smoke: '💨',
    Haze: '‍🌫',
    Dust: '‍🌫',
    Fog: '‍🌫',
    Ash: '‍🌫',
    Clear: '🔆',
    Squall: '🌬',
    Tornado: '🌪',
    Clouds: '☁️',
  }

  configureEmoji(weatherName) {
    for (let key in this._objOfWeatherNamesAndEmojis) {
      if(key === weatherName) {
        return this._objOfWeatherNamesAndEmojis[key];
      }
    }
  }
}