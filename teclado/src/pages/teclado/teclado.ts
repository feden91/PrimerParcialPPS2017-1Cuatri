import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
import { File } from '@ionic-native/file';
@Component({
  selector: 'page-teclado',
  templateUrl: 'teclado.html'
})
export class teclado {
Sonido:any;
num:any;
var:any;
  constructor(public navCtrl: NavController,private nativeAudio: NativeAudio,private vibration: Vibration,private file: File) {
 console.log(file.dataDirectory);
this.nativeAudio.preloadSimple('ratas', 'assets/sound/Ratas.mp3');
this.nativeAudio.preloadSimple('grillo', 'assets/sound/Grillo.mp3');
this.nativeAudio.preloadSimple('mono', 'assets/sound/Mono.mp3');
  this.nativeAudio.preloadSimple('murcielago', 'assets/sound/Murcielago.mp3');
  this.nativeAudio.preloadSimple('pajaro', 'assets/sound/Pajaro.mp3');
  this.nativeAudio.preloadSimple('mosca', 'assets/sound/Mosca.mp3');
 
   this.num=0;
}

ratas(){

  this.Sonido=" this.nativeAudio.play('ratas', () => console.log('ratas is done playing'));";
  this.guardado("ratas");

   
  this.nativeAudio.play('ratas', () => console.log('ratas is done playing'));

this.vibration.vibrate(500);
}
grillo  (){
 this.Sonido=" this.nativeAudio.play('grillo', () => console.log('grillo is done playing'));";
    this.guardado("grillo");
  this.nativeAudio.play('grillo', () => console.log('grillo is done playing'));
  this.vibration.vibrate(500);
}
mono  (){
 this.Sonido=" this.nativeAudio.play('mono', () => console.log('mono is done playing'));";
    this.guardado("mono");
  this.nativeAudio.play('mono', () => console.log('mono is done playing'));
 this.vibration.vibrate(500);
}
murcielago (){
 this.Sonido=" this.nativeAudio.play('murcielago', () => console.log('murcielago is done playing'));";
    this.guardado("murcielago");
  this.nativeAudio.play('murcielago', () => console.log('murcielago is done playing'));
this.vibration.vibrate(500);
}
pajaro (){
 this.Sonido=" this.nativeAudio.play('pajaro', () => console.log('pajaro is done playing'));";
   this.guardado("pajaro");
  this.nativeAudio.play('pajaro', () => console.log('pajaro is done playing'));
this.vibration.vibrate(500);
}
mosca (){
 this.Sonido=" this.nativeAudio.play('mosca', () => console.log('mosca is done playing'));";
    this.guardado("mosca");
  this.nativeAudio.play('mosca', () => console.log('mosca is done playing'));
this.vibration.vibrate(500);
}

guardado(d){

this.Destructor1();
this.file.writeFile(this.file.externalDataDirectory,"Boton1.txt",d,true);

}

Destructor1(){
           this.file.removeFile(this.file.externalDataDirectory,"Boton1.txt");
      }
boton1(){

this.var=this.file.readAsText(this.file.externalDataDirectory, "Boton1.txt");
if(this.var=="ratas")
{
 this.nativeAudio.play('ratas', () => console.log(' playing'));
}
}


}
