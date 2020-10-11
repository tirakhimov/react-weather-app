export default class DateFormatter {

  daysOfWeekArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  monthsArray = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
  date = new Date();

  configureDate() {
    return {
      dayOfWeek: this.daysOfWeekArray[this.date.getDay()],
      currentDate: this.date.getDate(),
      currentMonth: this.monthsArray[this.date.getMonth()],
      currentTime: `${this.date.getHours()}:${this.date.getMinutes()}`,
    }
  }

  formatDate() {
    const dateObject = this.configureDate();
    return `${dateObject.dayOfWeek}, ${dateObject.currentDate} ${dateObject.currentMonth} ${dateObject.currentTime}`;
  }
}