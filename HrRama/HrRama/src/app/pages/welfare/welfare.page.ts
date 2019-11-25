import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welfare',
  templateUrl: './welfare.page.html',
  styleUrls: ['./welfare.page.scss'],
})
export class WelfarePage implements OnInit {

  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  welfare1()
  {
    this.NavCtr.navigateForward('/welfare1')
  }

  welfare2()
  {
    this.NavCtr.navigateForward('/welfare2')
  }

  welfare3()
  {
    this.NavCtr.navigateForward('/welfare3')
  }

  welfare4()
    {
      this.NavCtr.navigateForward('/welfare4')
    }
  

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
