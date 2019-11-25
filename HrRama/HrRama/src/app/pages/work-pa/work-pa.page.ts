import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-work-pa',
  templateUrl: './work-pa.page.html',
  styleUrls: ['./work-pa.page.scss'],
})
export class WorkPAPage implements OnInit {

  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  workPA1()
  {
    this.NavCtr.navigateForward('/work-pa1')
  }

  workPA2()
  {
    this.NavCtr.navigateForward('/work-pa2')
  }

  workPA3()
  {
    this.NavCtr.navigateForward('/work-pa3')
  }

  workPA4()
  {
    this.NavCtr.navigateForward('/work-pa4')
  }

  workPA5()
  {
    this.NavCtr.navigateForward('/work-pa5')
  }
  
  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
