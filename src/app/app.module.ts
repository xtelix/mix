import { Pagina6Page } from './../pages/pagina6/pagina6';
import { Pagina4Page } from './../pages/pagina4/pagina4';
import { Pagina3Page } from './../pages/pagina3/pagina3';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AjustesProvider } from '../providers/ajustes/ajustes';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Pagina3Page,
    Pagina6Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina3Page,
    Pagina6Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesProvider
  ]
})
export class AppModule {}
