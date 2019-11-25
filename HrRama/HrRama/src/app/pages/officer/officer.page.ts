import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.page.html',
  styleUrls: ['./officer.page.scss'],
})
export class OfficerPage implements OnInit {

  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  officer1()
  {
    this.NavCtr.navigateForward('/officer1')
  }

  officer2()
  {
    this.NavCtr.navigateForward('/officer2')
  }

  officer3()
  {
    this.NavCtr.navigateForward('/officer3')
  }

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
