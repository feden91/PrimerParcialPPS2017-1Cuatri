import { Component } from '@angular/core';

import { NavController,NavParams } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';



@Component({
  selector: 'page-List',
  templateUrl: 'List.html'
})
export class List {
      Usuarios : FirebaseListObservable<any[]>;
   usuario = { gano:""};
   descripcion ="";
 constructor(public navCtrl: NavController,public params: NavParams,af: AngularFire) {
 this.usuario = params.data;
 if(this.usuario.gano == "Gano"){
   this.descripcion = "Ganadores";
 this.Usuarios= af.database.list('/Usuarios', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Gano',
    limitToFirst: 5
  }
});
}else  if(this.usuario.gano == "Empato"){
   this.descripcion = "Empato";
 this.Usuarios= af.database.list('/Usuarios', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Empato',
    limitToFirst: 5
  }
});
}else if(this.usuario.gano == "Perdio"){
     this.descripcion = "Perdedores";
 this.Usuarios= af.database.list('/Usuarios', {
  query: {
    orderByChild: 'Gano',
    equalTo: 'Perdio',
    limitToFirst: 5
  }
});
}


}

}