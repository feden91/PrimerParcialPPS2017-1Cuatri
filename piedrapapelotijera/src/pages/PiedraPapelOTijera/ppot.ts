import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {Estadistica}from '../Estadistica/Estadistica';

import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
@Component({
  selector: 'page-ppot',
  templateUrl: 'ppot.html'

})
export class ppot {
  nombre:any;
  ronda:any;
 cantRondas:any;
 puntosUser:number;
 puntosMaq:number;
 puntuacion:any;
gano:any;
ramOpUser=["Piedra","Papel","Tijera"];
opMaq:any;
num:any;
imgMaq:any;
jugo:any;
vJuego:boolean;
vMaquina:boolean;
vEstadisticas:boolean;
rondas:number;
 jg:any;

  usuario = { nombre:'',
        Puntuacion:0,
        puntosUser:0,
        puntosMaq:0,
        gano:""};

  // items: Array<{title: string}>;
 
  constructor(public navCtrl: NavController, public NavParams: NavParams,private vibration: Vibration,private nativeAudio: NativeAudio) {
 this.usuario = NavParams.data;
  this.nativeAudio.preloadSimple('mal', 'assets/sound/mal.mp3');
          this.nativeAudio.preloadSimple('bien', 'assets/sound/bien.mp3');
            this.nativeAudio.preloadSimple('empate', 'assets/sound/empate.mp3');
           
}


  ionViewDidLoad(){
    this.ronda = " A jugar!";
    this.puntosMaq=0;
    this.puntosUser=0;
     this.imgMaq="assets/img/5.png";
     this.jugo= "Juegue"
            this.rondas=0;
     setTimeout(()=>{
           this.ronda = "1era ronda";
            this.vJuego=true;
            this.vMaquina =true;
          },2000);
          console.info(this.rondas);
  }
  boton(queJugo){
this.vJuego=false;
this.jugo = "La maquina jugo...";
this.ComprobarJuego(queJugo);
  if(this.rondas==1){
   setTimeout(()=>{
           this.ronda = "2da ronda";
             
     this.jugo= "Juegue"
            this.vJuego=true;
          },2000);
        }else  if(this.rondas==2){
   setTimeout(()=>{
           this.ronda = "3ra ronda";
             
     this.jugo= "Juegue"
            this.vJuego=true;
          },2000);

        }else if(this.rondas==3){
   setTimeout(()=>{
           this.ronda = "4ta ronda";
             
     this.jugo= "Juegue"
            this.vJuego=true;
          },2000);

        }else  if(this.rondas==4){
   setTimeout(()=>{
           this.ronda = "5ta ronda";
             
     this.jugo= "Juegue"
            this.vJuego=true;
            if(this.puntosMaq > this.puntosUser)
                {
                this.usuario.gano="Perdio";
                this.jugo = "Perdiste";
                
                  
                this.vEstadisticas =true;
             
            }else if(this.puntosMaq < this.puntosUser){
                    console.log("Gano");
                this.usuario.gano="Gano";
                this.jugo = "Ganaste";
                this.jugo = this.usuario.nombre;
                
                               this.vEstadisticas =true;
                             
                }else if(this.puntosMaq == this.puntosUser){
                    this.usuario.gano="Empato";
                    this.jugo = "Empataste"
                    
                   
                                  
                                   this.vEstadisticas =true;
                                 
                }
          },2000);
this.Estadisticas();
        }
}

ComprobarJuego(quejuego){
  this.vEstadisticas=false;
  this.rondas=this.rondas+1;
 this.num = Math.floor(Math.random() * 3);  
 this.opMaq=this.ramOpUser[this.num];
 console.log(this.opMaq);

 if(quejuego=="Piedra")
        {
   
          if (this.opMaq=="Piedra")
          { this.vibration.vibrate(400);
            this.nativeAudio.play('empate', () => console.log('bienvenida is done playing'));
              this.puntosMaq=this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
             this.jugo="Piedra";
         }
          else if (this.opMaq=="Papel")
          {
            this.vibration.vibrate([500,250,500]);
            this.nativeAudio.play('mal', () => console.log('bienvenida is done playing'));
            
            this.vibration.vibrate(500);
               this.puntosMaq = this.puntosMaq+1;
              this.jugo="Piedra";
         }
          else if (this.opMaq=="Tijera")
          {
           this.vibration.vibrate(500);
            this.nativeAudio.play('bien', () => console.log('bienvenida is done playing'));
              this.puntosUser=this.puntosUser+1;
          this.jugo="Piedra";
        }
        }
       if(quejuego=="Papel")
        {
          if (this.opMaq=="Piedra")
          {
            this.vibration.vibrate(500);
            this.nativeAudio.play('bien', () => console.log('bienvenida is done playing'));
            this.vibration.vibrate(500);
              this.puntosUser=this.puntosUser+1;
               this.jugo="Papel";
       }
          else if (this.opMaq=="Papel")
          {
            this.vibration.vibrate(400);
            this.nativeAudio.play('empate', () => console.log('bienvenida is done playing'));
               this.puntosMaq = this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
          this.jugo="papel";
        }
          else if (this.opMaq=="Tijera")
          {
            this.vibration.vibrate([500,250,500]);
            this.nativeAudio.play('mal', () => console.log('bienvenida is done playing'));
            
            this.vibration.vibrate([500,250,500]);
               this.puntosMaq = this.puntosMaq+1;
              this.jugo="papel";
         }
        }
       if(quejuego=="Tijera")
        {
          if (this.opMaq=="Piedra")
          {this.vibration.vibrate([500,250,500]);
            this.nativeAudio.play('mal', () => console.log('bienvenida is done playing'));
               this.puntosMaq = this.puntosMaq+1;
               this.jugo="Tijera";
        }
          else if (this.opMaq=="Papel")
          {
            this.vibration.vibrate(500);
            this.nativeAudio.play('bien', () => console.log('bienvenida is done playing'));
            
            this.vibration.vibrate(500);
              this.puntosUser=this.puntosUser+1;
              this.jugo="Tijera";
        }
          else if (this.opMaq=="Tijera")
          { this.vibration.vibrate(400);
            this.nativeAudio.play('empate', () => console.log('bienvenida is done playing'));
               this.puntosMaq = this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
              this.jugo="Tijera";
         }
        }

         if (this.opMaq=="Piedra")
          {
            
            this.jugo="Piedra";
         
          }
          else if (this.opMaq=="Papel")
          {
            
          this.jugo="Papel";
        }
          else if (this.opMaq =="Tijera")
          {
            
         this.jugo="Tijera";
         }

          console.log("maq",this.puntosMaq);
          console.log("user",this.puntosUser);
    

}
Estadisticas(){
      
      
    this.usuario.Puntuacion= this.puntosUser;
    this.usuario.puntosMaq= this.puntosMaq;
    this.usuario.puntosUser=this.puntosUser;
    
    
     setTimeout(() => {
               this.navCtrl.push(Estadistica,this.usuario)  
            }, 4000);
    
}


}
