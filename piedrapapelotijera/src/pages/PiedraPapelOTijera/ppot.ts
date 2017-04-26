import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ppot',
  templateUrl: 'ppot.html'
})
export class ppot {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = [{item:'Piedra'},{item:'Papel'},{item:'tijera'}];

    // Let's populate this page with some filler content for funzies
        
    
var value=null;
 value =this.selectedItem[Math.round(Math.random()*(1-3)+(1))];
    
    
  }

  jugar(a) {



  


}
}
