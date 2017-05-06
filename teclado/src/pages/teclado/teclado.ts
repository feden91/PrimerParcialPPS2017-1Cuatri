import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html'
})
export class teclado {

  constructor(public navCtrl: NavController,private nativeAudio: NativeAudio) {
this.nativeAudio.preloadSimple('ratas', 'assets/sound/Ratas.mp3');
this.nativeAudio.preloadSimple('grillo', 'assets/sound/Grillo.mp3');
this.nativeAudio.preloadSimple('mono', 'assets/sound/Mono.mp3');
  this.nativeAudio.preloadSimple('murcielago', 'assets/sound/Murcielago.mp3');
  this.nativeAudio.preloadSimple('pajaro', 'assets/sound/Pajaro.mp3');
  this.nativeAudio.preloadSimple('mosca', 'assets/sound/Mosca.mp3');
}

ratas(){

  this.nativeAudio.play('ratas', () => console.log('ratas is done playing'));
}
grillo  (){

  this.nativeAudio.play('grillo', () => console.log('grillo is done playing'));
}
mono  (){

  this.nativeAudio.play('mono', () => console.log('mono is done playing'));
}
murcielago (){

  this.nativeAudio.play('murcielago', () => console.log('murcielago is done playing'));
}
pajaro (){

  this.nativeAudio.play('pajaro', () => console.log('pajaro is done playing'));
}
mosca (){

  this.nativeAudio.play('mosca', () => console.log('mosca is done playing'));
}
}
