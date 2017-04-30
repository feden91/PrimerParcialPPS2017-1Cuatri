import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {ganastePage} from '../Ganaste/Ganaste';
@Component({
  selector: 'page-juego',
  templateUrl: 'juego.html'
})
export class juegoPage {

 preguntas : number;
 trivia : string;
puntuacion: number;
correctas: number;
incorrectas:number;
 reCorrecta: number;
 
  usuario = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false
     
    
    };

 
  constructor(public navCtrl: NavController, public NavParams: NavParams) {
    this.usuario = NavParams.data;
    
   
  }

  ionViewDidLoad(){

  
    
    this.trivia = "¿En que año se desato la primera guerra mundial?";
    document.getElementById("opcion1").setAttribute("value","en 1949");
    document.getElementById("opcion2").setAttribute("value","en 1945");
    document.getElementById("opcion3").setAttribute("value","en 1943");   
    this.puntuacion = 0; 
    this.reCorrecta = 3;
    this.preguntas = 1;
    this.correctas =0;
    this.incorrectas = 0;
  }
  preguntaDos(){
     ;
     this.trivia = "¿Quien fue el mejor jugador del mundial de mexico 1986?";
    document.getElementById("opcion1").setAttribute("value","Romario");
    document.getElementById("opcion2").setAttribute("value","Maradona");
    document.getElementById("opcion3").setAttribute("value","Pele");  
     
  }
  preguntaTres(){
      this.trivia = "¿Quien creo la Bandera Argentina?";
    document.getElementById("opcion1").setAttribute("value","San Martin");
    document.getElementById("opcion2").setAttribute("value","Sarmiento");
    document.getElementById("opcion3").setAttribute("value","Belgrano");  
  }
  preguntaCuatro(){
      this.trivia = "¿en que año se declaro la independencia argentina?";
    document.getElementById("opcion1").setAttribute("value","en 1816");
    document.getElementById("opcion2").setAttribute("value","en 1920");
    document.getElementById("opcion3").setAttribute("value","en 1810");  
  }
  preguntaCinco(){
      this.trivia = "¿Que equipo fue campeon mundial en sudafrica 2010?";
    document.getElementById("opcion1").setAttribute("value","Holanda");
    document.getElementById("opcion2").setAttribute("value","Italia");
    document.getElementById("opcion3").setAttribute("value","España");  
  }

VerificarPregunta(respuesta){

    if(this.preguntas == 1){
       if(respuesta == 3)
          {
            this.puntuacion = this.puntuacion+1;
            this.preguntas = this.preguntas+1;
            this.correctas = this.correctas+1;
            this.preguntaDos();
          }else{
            this.preguntas = this.preguntas+1;
            this.incorrectas = this.incorrectas+1;
            this.preguntaDos();
          }
     }else if (this.preguntas == 2){
       console.log("estoy en respuesta",respuesta);
             if(respuesta == 2)
                {
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                  this.preguntaTres();
                }else{
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                  this.preguntaTres();
                }
     }else if (this.preguntas ==3){
             if(respuesta == 3)
                {
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                this.preguntaCuatro();
                }else{
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                this.preguntaCuatro();
                }

     }else if (this.preguntas ==4){
             if(respuesta == 1)
                {
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                  this.preguntaCinco();
                }else{
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                  this.preguntaCinco();
              }

     }else if (this.preguntas ==5){
             if(respuesta == 3)
                {
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                  this.GanoONo();
                 }else{
                   this.incorrectas = this.incorrectas+1;
                    this.GanoONo();
                }

     }
  
  }
  GanoONo(){
    if(this.puntuacion>=3)
    {
        this.usuario.gano=true;
        this.usuario.Puntuacion=this.puntuacion;
        this.usuario.incorrectas= this.incorrectas;
        this.usuario.Correctas = this.correctas;
            this.navCtrl.push(ganastePage,this.usuario)  


    }else{

       this.usuario.gano=false;
        this.usuario.Puntuacion=this.puntuacion;
        this.usuario.incorrectas= this.incorrectas;
        this.usuario.Correctas = this.correctas;
              //this.navCtrl.push(Perdedor,this.usuario )  
      
    }
  }


}

