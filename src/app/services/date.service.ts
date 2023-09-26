import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  convertDate(date: string) {
    let newdate = new Date(date);
    // Get the day, month, year, hours, minutes, and seconds from the date.
    const day = newdate.getDay();
    const dayOfMonth = newdate.getDate();
    const month = newdate.getMonth() + 1; // Months in JavaScript are zero-indexed.
    const year = newdate.getFullYear();
    const hours = newdate.getHours();
    const minutes = newdate.getMinutes();
    const seconds = newdate.getSeconds();

    // Get the day name.
    const dayName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ][day];

    // Get the month name.
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ][month - 1];

    // Return the date in the format "day name, month name day date year. hours:minutes:seconds".
    return `${monthName} ${dayOfMonth}, ${year} ${hours}:${minutes}`;
  }


}
