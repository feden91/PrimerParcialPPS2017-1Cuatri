import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { ppot} from '../PiedraPapelOTijera/ppot';

@Component({
  selector: 'page-Identificarse',
  templateUrl: 'Identificarse.html'
})
export class Identificarse {
usuario = { nombre:'',
        Puntuacion:0,
        gano:false};

        user : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,af: AngularFire) {
this.user= af.database.list('/Usuarios');
  }
Usuario

         Ingreso(){
           
          this.user.push({
            nombre:this.usuario.nombre
         })
         this.navCtrl.push(ppot,this.usuario)  
        }
}
