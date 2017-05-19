import { Component } from '@angular/core';
import 'rxjs/Rx'; 
import { NavController,ViewController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { ppot } from '../ppot/ppot';

import { ModalController } from 'ionic-angular';
import {List} from '../List/List';

@Component({
  selector: 'page-Listado',
  templateUrl: 'Listado.html'
})
export class Listado {
          usuario = { gano: ""};
UsuGano : FirebaseListObservable<any[]>;
UsuPerdio : FirebaseListObservable<any[]>;
UsuEmpato : FirebaseListObservable<any[]>;


 constructor(public navCtrl: NavController,af: AngularFire,public viewCtrl:
  ViewController,public modalCtrl: ModalController) {
  this.UsuGano= af.database.list('/Usuarios', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Gano',
    limitToFirst: 5
  }
});
this.UsuPerdio= af.database.list('/Usuarios', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Perdio',
     limitToFirst: 5
  }
});
this.UsuEmpato= af.database.list('/Usuarios', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Empato',
     limitToFirst: 5
  }
});

    }

AbrirModal(usuario){
  console.log(usuario);
  if(usuario == "Empato"){
    this.usuario.gano="Empato";
  let modal = this.modalCtrl.create(List,this.usuario);
      modal.present();
  }else  if(usuario == "Gano"){
    this.usuario.gano="Gano";
  let modal = this.modalCtrl.create(List,this.usuario);
      modal.present();
  }else  if(usuario == "Perdio"){
    this.usuario.gano="Perdio";
  let modal = this.modalCtrl.create(List,this.usuario);
      modal.present();
  }
   
}
   
   dismiss() {
    this.viewCtrl.dismiss();
  }

}
