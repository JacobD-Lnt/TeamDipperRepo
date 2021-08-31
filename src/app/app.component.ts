import { Component } from '@angular/core';

let currentdate = new Date();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date = this.getTimeString();

  getTimeString(): string {
    let blankNum1 = '';
    let blankNum2 = '';
    let blankNum3 = '';
    let baseHours = currentdate.getHours();
    let truncatedHours = baseHours;
    let endText = 'AM';

    if (baseHours > 12) {
      endText = 'PM';
      truncatedHours = baseHours % 12;
    }

    if (truncatedHours < 10) {
      blankNum1 = '0';
    }

    if (currentdate.getMinutes() < 10) {
      blankNum2 = '0';
    }

    if (currentdate.getSeconds() < 10) {
      blankNum3 = '0';
    }

    let timeString =
      currentdate.getDate() +
      '/' +
      (currentdate.getMonth() + 1) +
      '/' +
      currentdate.getFullYear() +
      ' @ ' +
      blankNum1 +
      truncatedHours +
      ':' +
      blankNum2 +
      currentdate.getMinutes() +
      ':' +
      blankNum3 +
      currentdate.getSeconds() +
      ' ' +
      endText;

    return timeString;
  }

  title = 'Team Dipper';
  bio = 'We are Team Dipper!';
  slogan = 'We could not think of a slogan.';
  mascot = '../assets/the-big-dipper.jpg';
  icon = '../assets/icon.png';
  flag = '../assets/texas-flag.png';
}
