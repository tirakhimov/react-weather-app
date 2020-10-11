export default class DateFormatter {

  _daysOfWeekArray = [
    'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'
  ];
  _monthsArray = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
    'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];
  date = new Date();


  makeDate() {
    return {
      dayOfWeek: this._daysOfWeekArray[this.date.getDay()],
      currentDate: this.date.getDate(),
      currentMonth: this._monthsArray[this.date.getMonth()],
      currentTime: `${this.date.getHours()}:${this.date.getMinutes()}`,
    }
  }

  formatDate() {
    const dateObject = this.makeDate();
    const {dayOfWeek, currentDate, currentMonth, currentTime} = dateObject;
    return `${dayOfWeek}, ${currentDate} ${currentMonth} ${currentTime}`;
  }
}