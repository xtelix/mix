import { Platform } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AjustesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AjustesProvider {

  listaAjustes = {
    mostrar_tutorial:true
  }
  constructor(private plaforma: Platform, private storage: Storage, private ajustesProvider: AjustesProvider) {
    
  }

  cargarMemoria(){
    if(this.plaforma.is("cordova")){

    }else {
      if(localStorage.getItem("ajustes")){
        this.listaAjustes = JSON.parse(localStorage.getItem("ajustes"));
      }
    }
  }

  guardarStorage(){
    
    if(this.plaforma.is("cordova")){
      this.storage.ready().then(()=>{this.storage.set("ajustes",this.listaAjustes)});
    }else{
      localStorage.setItem("ajustes", JSON.stringify(this.listaAjustes))
    }

    let promesa = new Promise((resolve, reject) => {
      if(this.plaforma.is("cordova")){
        this.storage.ready().then(
         () => {
           this.storage.get("ajustes").then(
             a => {
               if(a){
               this.listaAjustes = a;
               }
               resolve();
             }
           )
         } 
        );
      }else{
        if(localStorage.getItem("ajustes")){
          localStorage.setItem("ajustes", JSON.stringify(this.listaAjustes))
        }
        resolve();
      }
    });
    return promesa;
  }

  saltarTutorial(){
    this.ajustesProvider.listaAjustes.mostrar_tutorial = false;
    this.ajustesProvider.guardarStorage();
  }
}
