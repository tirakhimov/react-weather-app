export default class DateFormatter {

  _daysOfWeekArray = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
  ];
  _monthsArray = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];
  date = new Date();

  formatDate() {

    let dayOfWeek = this._daysOfWeekArray[this.date.getDay()],
        currentDate = this.date.getDate(),
        currentMonth = this._monthsArray[this.date.getMonth()],
        hour = this.date.getHours(),
        minutes = this.date.getMinutes()

    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${dayOfWeek}, ${currentDate} ${currentMonth} ${hour}:${minutes}`;
  }
}