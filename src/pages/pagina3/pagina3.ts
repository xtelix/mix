import { Pagina5Page } from './../pagina5/pagina5';
import { Pagina4Page } from './../pagina4/pagina4';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Pagina3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina4(){
    this.navCtrl.push("Pagina_3");
  }

  irPagina5(){
    this.navCtrl.push("Pagina5Page");
  }

  ionViewDidLoad(){
    console.log("ionViewDidLoad");
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }

  ionViewWillUnload(){
    console.log("ionViewWillUnload");
  }

  ionViewCanEnter(){
    console.log("ionViewCanEnter");
    let numero = Math.round(Math.random()*10);
    console.log(numero);

    if(numero >= 3){
      return true;
    }else {
      return false;
    }

  }

  ionViewCanLeave(){
    console.log("ionViewCanLeave");
    //asincrono
    let promesa = new Promise((resolv,reject)=>{
      setTimeout(()=>{resolv(true);
      },2000);
    });

    return promesa;
  }

}
