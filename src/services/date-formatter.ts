export default class DateFormatter {

  private readonly daysOfWeekArray: string[];
  private readonly monthsArray: string[];

  constructor() {
    this.daysOfWeekArray = [
      'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота',
    ];
    this.monthsArray = [
      'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля',
      'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря',
    ];
  }

  formatDate(date: Date = new Date()): string {
    const dayOfWeek: string = this.daysOfWeekArray[date.getDay()];
    const dayOfMonth: number = date.getDate();
    const currentMonth: string = this.monthsArray[date.getMonth()];
    const hours: number = date.getHours();
    const minutes: number = date.getMinutes();

    const hoursToString = (hours: number): string => hours < 10 ? `0${hours}` : `${hours}`;
    const minutesToString = (minutes: number): string => minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${dayOfWeek}, ${dayOfMonth} ${currentMonth} ${hoursToString(hours)}:${minutesToString(minutes)}`;
  }
}
