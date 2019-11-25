import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  homeClick()
  {
    this.NavCtr.navigateForward('/home')
  }

  constructor(private NavCtr:NavController) { }

  ngOnInit() {
  }

}
