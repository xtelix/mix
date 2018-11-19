import { Pagina3Page } from './../pagina3/pagina3';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pag2 = Pagina3Page;
  constructor(public navCtrl: NavController) {

  }

}
