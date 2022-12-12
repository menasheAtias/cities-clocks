import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-ng-clock',
  templateUrl: './ng-clock.component.html',
  styleUrls: ['./ng-clock.component.scss'],
})
export class NgClockComponent implements OnInit, OnDestroy {
  dialLines: any;
  clockEl: any;
  digitalDate!: any;
  @Input() offset: number = 0;
  @Input() clockId!: number;
  clockInterval: any;
  secondArmInterval: any;
  digitalClockInterval: any;
  constructor(private datePipe: DatePipe) { }


  ngOnInit() {
    this.clockInterval = setInterval(() => this.clock(this.clockId, this.offset), 500);
    this.secondArmInterval = setInterval(() => this.updateSecondArm(this.clockId, this.offset), 1);
    this.digitalClockInterval = setInterval(() => this.digitalClock(this.clockId, this.offset), 500);
  }
  ngOnDestroy(): void {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
    if (this.secondArmInterval) {
      clearInterval(this.secondArmInterval);
    }
    if (this.digitalClockInterval) {
      clearInterval(this.digitalClockInterval);
    }
  }
  ngAfterViewInit() {
    this.dialLines = document.getElementsByClassName('diallines' + this.clockId);
    for (let i = 1; i < 60; i++) {
      this.dialLines[i].style.transform = 'rotate(' + 6 * i + 'deg)';
    }
  }

  updateSecondArm(clockId: number, offset: number) {
    const date = new Date();
    date.setHours(date.getHours() + offset);
    const milSec = date.getMilliseconds();
    const sec = date.getSeconds();
    const millSecDeg = (360 / (60 * 1000)) * milSec;
    const secDeg = sec * 6;
    const sEl: HTMLElement = document.getElementById('second-hand' + clockId)!;
    sEl.style.transform = 'rotate(' + (millSecDeg + secDeg) + 'deg)';
  }

  linesArray(): Array<number> {
    return new Array(60);
  }

  digitalClock(clockId: number, offset: number) {
    let currentDate = new Date()
    currentDate.setHours(currentDate.getHours() + offset);
    let digitalDate = document.getElementById('digital-clock-container' + clockId)!;
    digitalDate.innerHTML = this.datePipe.transform(currentDate, 'HH:mm:ss')!;
  }
  clock(clockId: number, offset: number) {
    let d = new Date();
    d.setHours(d.getHours() + offset);
    let weekday = new Array(7),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
      hDeg = h * 30 + m * (360 / 720),
      mDeg = m * 6 + s * (360 / 3600),
      hEl: HTMLElement = document.getElementById('hour-hand' + clockId)!,
      mEl: HTMLElement = document.getElementById('minute-hand' + clockId)!,
      dateEl = document.getElementById('date' + clockId)!,
      dayEl = document.getElementById('day' + clockId)!;

    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    let day = weekday[d.getDay()];

    if (month < 9) {
      month = +('0' + month);
    }

    hEl.style.transform = 'rotate(' + hDeg + 'deg)';
    mEl.style.transform = 'rotate(' + mDeg + 'deg)';
    dateEl.innerHTML = date + '/' + month + '/' + year;
    dayEl.innerHTML = day;
  }
}
