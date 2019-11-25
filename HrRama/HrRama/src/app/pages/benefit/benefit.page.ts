import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.page.html',
  styleUrls: ['./benefit.page.scss'],
})
export class BenefitPage implements OnInit {
  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  benefit1()
  {
    this.NavCtr.navigateForward('/benefit1')
  }

  benefit2()
  {
    this.NavCtr.navigateForward('/benefit2')
  }

  benefit3()
  {
    this.NavCtr.navigateForward('/benefit3')
  }

  benefit4()
  {
    this.NavCtr.navigateForward('/benefit4')
  }

  benefit5()
  {
    this.NavCtr.navigateForward('/benefit5')
  }

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
