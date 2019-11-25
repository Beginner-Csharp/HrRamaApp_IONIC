import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
