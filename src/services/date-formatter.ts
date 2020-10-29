export default class DateFormatter {

  private readonly daysOfWeekArray: string[];
  private readonly monthsArray: string[];
  private readonly date: Date;

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

  formatDate(): string {
    const dayOfWeek: string = this.daysOfWeekArray[this.date.getDay()];
    const dayOfMonth: number = this.date.getDate();
    const currentMonth: string = this.monthsArray[this.date.getMonth()];
    const hours: number = this.date.getHours();
    const minutes: number = this.date.getMinutes();

    const hoursToString = (hours: number): string => hours < 10 ? `0${hours}` : `${hours}`;
    const minutesToString = (minutes: number): string => minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${dayOfWeek}, ${dayOfMonth} ${currentMonth} ${hoursToString(hours)}:${minutesToString(minutes)}`;
  }
}
