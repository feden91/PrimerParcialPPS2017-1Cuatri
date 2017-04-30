import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import{Estad} from '../Estad/Estad';


@Component({
  selector: 'page-ganaste',
  templateUrl: 'Ganaste.html',
})
export class ganastePage {

usuario = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false};
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.usuario = this.NavParams.data;
           

    setTimeout(() => {
               this.navCtrl.push(Estad,this.usuario); 
            }, 4000);
  }



}
