import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'page-Estadistica',
  templateUrl: 'Estadistica.html'
})
export class Estadistica {
 usuario = { nombre:'',
        Puntuacion:0,
        puntosUser:0,
        puntosMaq:0,
          gano: '',
        
      };
  Gano:string;
 fecha:string;
  user : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public NavParams: NavParams,af: AngularFire) {
      this.user= af.database.list('/Usuarios');
      console.log(this.NavParams.data);
      this.fecha = new Date().toString();
    this.usuario = this.NavParams.data;
     this.user.push({
           Fecha:this.fecha,
           nombre:this.usuario.nombre,
           Puntuacion:this.usuario.Puntuacion,
           puntosMaq:this.usuario.puntosMaq,
           puntosUser:this.usuario.puntosUser,
           Gano:this.usuario.gano
          })
  }
  
 

}
