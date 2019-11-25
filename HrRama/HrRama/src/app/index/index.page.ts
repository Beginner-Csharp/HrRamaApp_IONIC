import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  onClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
