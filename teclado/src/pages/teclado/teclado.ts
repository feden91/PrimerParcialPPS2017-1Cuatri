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
  constructor(public navCtrl: NavController,private nativeAudio: NativeAudio,private vibration: Vibration,private file: File) {
 console.log(file.dataDirectory);
this.nativeAudio.preloadSimple('ratas', 'assets/sound/Ratas.mp3');
this.nativeAudio.preloadSimple('grillo', 'assets/sound/Grillo.mp3');
this.nativeAudio.preloadSimple('mono', 'assets/sound/Mono.mp3');
  this.nativeAudio.preloadSimple('murcielago', 'assets/sound/Murcielago.mp3');
  this.nativeAudio.preloadSimple('pajaro', 'assets/sound/Pajaro.mp3');
  this.nativeAudio.preloadSimple('mosca', 'assets/sound/Mosca.mp3');
 this.file.removeFile(this.file.externalDataDirectory,"Boton1.php");
  this.file.removeFile(this.file.externalDataDirectory,"Boton2.php");
   this.file.removeFile(this.file.externalDataDirectory,"Boton3.php");
   this.num=0;
}

ratas(){

  this.Sonido=" this.nativeAudio.play('ratas', () => console.log('ratas is done playing'));";
  this.guardado(this.Sonido);

   
  this.nativeAudio.play('ratas', () => console.log('ratas is done playing'));

this.vibration.vibrate(500);
}
grillo  (){
 this.Sonido=" this.nativeAudio.play('grillo', () => console.log('grillo is done playing'));";
    this.guardado(this.Sonido);
  this.nativeAudio.play('grillo', () => console.log('grillo is done playing'));
  this.vibration.vibrate(500);
}
mono  (){
 this.Sonido=" this.nativeAudio.play('mono', () => console.log('mono is done playing'));";
    this.guardado(this.Sonido);
  this.nativeAudio.play('mono', () => console.log('mono is done playing'));
 this.vibration.vibrate(500);
}
murcielago (){
 this.Sonido=" this.nativeAudio.play('murcielago', () => console.log('murcielago is done playing'));";
    this.guardado(this.Sonido);
  this.nativeAudio.play('murcielago', () => console.log('murcielago is done playing'));
this.vibration.vibrate(500);
}
pajaro (){
 this.Sonido=" this.nativeAudio.play('pajaro', () => console.log('pajaro is done playing'));";
   this.guardado(this.Sonido);
  this.nativeAudio.play('pajaro', () => console.log('pajaro is done playing'));
this.vibration.vibrate(500);
}
mosca (){
 this.Sonido=" this.nativeAudio.play('mosca', () => console.log('mosca is done playing'));";
    this.guardado(this.Sonido);
  this.nativeAudio.play('mosca', () => console.log('mosca is done playing'));
this.vibration.vibrate(500);
}

guardado(d){
if(this.num>0 && this.num<3)
{
 this.num=this.num+1;

 if(this.num==1){

this.file.writeFile(this.file.externalDataDirectory,"Boton1.php",d,true);

 }
if(this.num==2){

this.file.writeFile(this.file.externalDataDirectory,"Boton2.php",d,true);

 }
 if(this.num==3){

this.file.writeFile(this.file.externalDataDirectory,"Boton3.php",d,true);

 }


}

}


boton1(){

this.file.readAsText(this.file.externalDataDirectory, "Boton1.php");


}
boton2(){

this.file.readAsText(this.file.externalDataDirectory, "Boton2.php");


}
boton3(){

this.file.readAsText(this.file.externalDataDirectory, "Boton3.php");


}

}
