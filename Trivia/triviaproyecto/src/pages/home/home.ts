import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {juegoPage } from '../juego/juego';
import { MyData } from '../../providers/my-data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Usuario:string
  private preguntasJSON:any = [];

  listadoDeUsuarios: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController,af:AngularFire, private servicio: MyData) {

this.servicio.traerPreguntas().subscribe(
      datos => this.preguntasJSON = datos,
      error => console.error(error));
    

  }
Acceder(Usuario){

this.Usuario=Usuario;
this.navCtrl.push(juegoPage, {
      Usuario : this.Usuario,
      preguntasArray: this.preguntasJSON
    });

//this.listadoDeUsuarios.push({Usuario:this.Usuario});
//this.mensaje="";


}


 

}
