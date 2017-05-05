import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import{Estadisticas} from '../estadisticas/estadisticas';

@Component({
  selector: 'page-ganaste',
  templateUrl: 'ganaste.html',
})
export class Ganaste {

usu = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false};
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.usu = this.NavParams.data;

    console.info(this.usu);
  }

Estadisticas(){
  this.navCtrl.push(Estadisticas,this.usu);
}

}
