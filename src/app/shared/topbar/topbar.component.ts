import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  onTop: boolean = window.scrollY === 0 ? true : false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  scrollHandler(): void {
    let updatedOnTop: boolean;
    updatedOnTop = window.scrollY === 0 ? true : false;
    if (updatedOnTop !== this.onTop) {
      this.onTop = updatedOnTop;
      console.log(this.onTop);
    }
  }
}
