import { Pagina3Page } from './../pages/pagina3/pagina3';
import { AjustesProvider } from './../providers/ajustes/ajustes';
import { Pagina6Page } from './../pages/pagina6/pagina6';
import { Component } from '@angular/core';
import { Platform, IonicPage } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public ajustesProvider:AjustesProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      this.ajustesProvider.guardarStorage().then(()=>{
        if(this.ajustesProvider.listaAjustes.mostrar_tutorial){
          this.rootPage = HomePage;
        }else{
          this.rootPage = HomePage;
        }
      })

      /*
      this.ajustesProvider.guardarStorage();

      if(this.ajustesProvider.listaAjustes.mostrar_tutorial){
        this.rootPage = HomePage;
      }else{
        this.rootPage = HomePage;
      }*/
      
    


      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

