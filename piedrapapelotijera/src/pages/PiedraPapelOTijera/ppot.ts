import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Estadistica}from '../Estadistica/Estadistica';
@Component({
  selector: 'page-ppot',
  templateUrl: 'ppot.html'

})
export class ppot {
  ronda:any;
 cantRondas:any;
 puntosUser:number;
 puntosMaq:number;
 puntuacion:any;
gano:any;
ramOpUser=["piedra","papel","tijera"];
opMaq:any;
num:any;
imgMaq:any;
jugo:any;
vJuego:boolean;
vMaquina:boolean;
rondas:number;
 jg:any;
  usuario = { nombre:'',
        Puntuacion:0,
        puntosUser:0,
        puntosMaq:0,
        gano:""};

  // items: Array<{title: string}>;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
  
    // Let's populate this page with some filler content for funzies
      
}


  ionViewDidLoad(){
    this.ronda = "preparese para jugar";
    this.puntosMaq=0;
    this.puntosUser=0;
     this.imgMaq="assets/img/maquina.png";
     this.jugo= "LA MAQUINA!"
            this.rondas=0;
     setTimeout(()=>{
           this.ronda = "Primera ronda!";
            this.vJuego=true;
            this.vMaquina =true;
          },2000);
          console.info(this.rondas);
  }
  maquina(queJugo){
this.vJuego=false;
this.jugo = "La maquina jugo...";
this.ComprobarJuego(queJugo);
  if(this.rondas==1){
   setTimeout(()=>{
           this.ronda = "Segunda ronda!";
             
     this.jugo= "LA MAQUINA!"
            this.vJuego=true;
          },2000);
        }else  if(this.rondas==2){
   setTimeout(()=>{
           this.ronda = "Tercera ronda!";
             
     this.jugo= "LA MAQUINA!"
            this.vJuego=true;
          },2000);

        }else if(this.rondas==3){
   setTimeout(()=>{
           this.ronda = "RONDA FINAL!!";
             
     this.jugo= "LA MAQUINA!"
            this.vJuego=true;
          },2000);

        }else  if(this.rondas==4){
   setTimeout(()=>{
           this.ronda = "FINAL DEL JUEGO!!";
             
     this.jugo= "LA MAQUINA!"
            this.vJuego=true;
          },2000);

        }
}

ComprobarJuego(quejuego){
  this.rondas=this.rondas+1;
 this.num = Math.floor(Math.random() * 3);  
 this.opMaq=this.ramOpUser[this.num];
 console.log(this.opMaq);

 if(quejuego=="piedra")
        {
  // this.imgElect="assets/img/piedra.jpg";
          if (this.opMaq=="piedra")
          {
              this.puntosMaq=this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
             this.jugo="piedra";
         }
          else if (this.opMaq=="papel")
          {
               this.puntosMaq = this.puntosMaq+1;
              this.jugo="piedra";
         }
          else if (this.opMaq=="tijera")
          {
              this.puntosUser=this.puntosUser+1;
          this.jugo="piedra";
        }
        }
       if(quejuego=="papel")
        {
          if (this.opMaq=="piedra")
          {
              this.puntosUser=this.puntosUser+1;
               this.jugo="papel";
       }
          else if (this.opMaq=="papel")
          {
               this.puntosMaq = this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
          this.jugo="papel";
        }
          else if (this.opMaq=="tijera")
          {
               this.puntosMaq = this.puntosMaq+1;
              this.jugo="papel";
         }
        }
       if(quejuego=="tijera")
        {
          if (this.opMaq=="piedra")
          {
               this.puntosMaq = this.puntosMaq+1;
               this.jugo="tijera";
        }
          else if (this.opMaq=="papel")
          {
              this.puntosUser=this.puntosUser+1;
              this.jugo="tijera";
        }
          else if (this.opMaq=="tijera")
          {
               this.puntosMaq = this.puntosMaq+1;
              this.puntosUser=this.puntosUser+1;
              this.jugo="tijera";
         }
        }

         if (this.opMaq=="piedra")
          {
            
            this.jugo="Piedra";
         
          }
          else if (this.opMaq=="papel")
          {
            
          this.jugo="Papel";
        }
          else if (this.opMaq =="tijera")
          {
            
         this.jugo="Tijera";
         }

          console.log("maq",this.puntosMaq);
          console.log("user",this.puntosUser);
    this.Estadisticas();

}
Estadisticas(){
      
    this.usuario.Puntuacion= this.puntosUser;
    this.usuario.puntosMaq= this.puntosMaq;
    this.usuario.puntosUser=this.puntosUser;
    if(this.gano == false){
    
    this.usuario.gano="Perdio";
    }else if(this.gano == "EMPATE"){
        this.usuario.gano="Empato";
    }else if(this.gano == true){
    
    this.usuario.gano="Gano";
    }
     setTimeout(() => {
               this.navCtrl.push(Estadistica,this.usuario)  
            }, 4000);
    
}


}
