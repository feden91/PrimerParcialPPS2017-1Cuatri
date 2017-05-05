import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import{Estadistica} from '../Estadistica/Estadistica';

@Component({
  selector: 'page-ganaste',
  templateUrl: 'ganaste.html',
})
export class Ganaste {

usuario = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false};
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.usuario = this.NavParams.data;

    console.info(this.usuario);
  }

Estadisticas(){
  this.navCtrl.push(Estadistica,this.usuario);
}

}
