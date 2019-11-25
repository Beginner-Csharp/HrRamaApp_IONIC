import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-training',
  templateUrl: './training.page.html',
  styleUrls: ['./training.page.scss'],
})
export class TrainingPage implements OnInit {
  
  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  training1()
  {
    this.NavCtr.navigateForward('/training1')
  }

  training2()
  {
    this.NavCtr.navigateForward('/training2')
  }

  training3()
  {
    this.NavCtr.navigateForward('/training3')
  }

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
