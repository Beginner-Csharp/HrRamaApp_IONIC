import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retire',
  templateUrl: './retire.page.html',
  styleUrls: ['./retire.page.scss'],
})
export class RetirePage implements OnInit {

  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
