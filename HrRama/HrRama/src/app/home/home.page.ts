import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ClickRama()
  {
    this.NavCtrl.navigateForward('/rama')
  }

  ClickOffice()
  {
    this.NavCtrl.navigateForward('/officer')
  }

  ClickTraining()
  {
    this.NavCtrl.navigateForward('/training')
  }

  ClickworkPA()
  {
    this.NavCtrl.navigateForward('/work-pa')
  }

  ClickBenefit()
  {
    this.NavCtrl.navigateForward('/benefit')  
  }

  ClickWelfare()
  {
    this.NavCtrl.navigateForward('/welfare')
  }

  ClickRetire()
  {
    this.NavCtrl.navigateForward('/retire')
  }

  ClickTicket()
  {
    this.NavCtrl.navigateForward('/ticket')
  }

  ClickCalendar()
  {
    this.NavCtrl.navigateForward('/calendar')
  }

  ClicknewOffice()
  {
    this.NavCtrl.navigateForward('/new-office')
  }

  
  
constructor(private NavCtrl:NavController) {}

}
