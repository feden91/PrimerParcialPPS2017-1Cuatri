import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ppot',
  templateUrl: 'ppot.html'

})
export class ppot {
  selectedItem: any;
  value="";
 index=0;

  // items: Array<{title: string}>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
      
}
jugar(){  

  this.index=Math.random();
  if(this.index=1){

  this.value="piedra";
  }
if(this.index=3){

  this.value="papel";
  }
if(this.index=2){

  this.value="tijera";
  }


return this.value;
}

}
