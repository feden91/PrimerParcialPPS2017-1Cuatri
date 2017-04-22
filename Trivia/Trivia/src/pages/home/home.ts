import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {AngularFire,FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usuario:string
  mensaje:string

  listadoDeMensajes: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,af:AngularFire) {this.listadoDeMensajes=af.database.list('*/mensajes');

this.usuario="anonimo";  
}
}
  