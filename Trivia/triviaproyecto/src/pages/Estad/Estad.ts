import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'page-estad',
  templateUrl: 'Estad.html',
})
export class Estad {
  usuario = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false};
  Gano={};

  user : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public NavParams: NavParams,af: AngularFire) {
      this.user= af.database.list('/Usuarios');
    this.usuario = this.NavParams.data;
     
    if(this.usuario.gano==true){
      this.Gano="Gano";
    }else{
      this.Gano="Perdio";
    }

     this.user.push({
           nombre:this.usuario.nombre,
           Puntuacion:this.usuario.Puntuacion,
           Correctas:this.usuario.Correctas,
           Incorrectas:this.usuario.incorrectas,
           Gano:this.Gano
          })
  }
  
 

}
