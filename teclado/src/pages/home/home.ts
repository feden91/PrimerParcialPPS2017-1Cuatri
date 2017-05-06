import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import{teclado} from '../teclado/teclado';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
usuario = { nombre:'',
        
       };

        user : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,af: AngularFire) {
this.user= af.database.list('/Usuarios');
  }
Usuario

         Ingreso(){
           
          this.user.push({
            nombre:this.usuario.nombre
         })
         this.navCtrl.push(teclado,this.usuario)  
        }
}
