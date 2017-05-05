import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var networkinterface: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  getIp() {
      networkinterface.getIPAddress((ip) => {
        alert(ip);
      });
  }
  

}
