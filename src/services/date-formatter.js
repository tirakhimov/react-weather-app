export default class DateFormatter {
  constructor() {
    this.daysOfWeekArray = [
      'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',
    ];
    this.monthsArray = [
      'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
      'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',
    ];
    this.date = new Date();
  }

  formatDate() {
    const dayOfWeek = this.daysOfWeekArray[this.date.getDay()];
    const dayOfMonth = this.date.getDate();
    const currentMonth = this.monthsArray[this.date.getMonth()];
    let hour = this.date.getHours();
    let minutes = this.date.getMinutes();

    hour = hour < 10 ? `0${hour}` : hour;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${dayOfWeek}, ${dayOfMonth} ${currentMonth} ${hour}:${minutes}`;
  }
}
