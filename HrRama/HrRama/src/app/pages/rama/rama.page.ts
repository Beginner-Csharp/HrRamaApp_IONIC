import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rama',
  templateUrl: './rama.page.html',
  styleUrls: ['./rama.page.scss'],
})
export class RamaPage implements OnInit {

  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
