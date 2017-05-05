import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {ganastePage} from '../Ganaste/Ganaste';
import {PerdistePage} from '../Perdiste/Perdiste'
import { NativeAudio } from '@ionic-native/native-audio';
import { Vibration } from '@ionic-native/vibration';
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
        pregunta1:string;
 
  usuario = { nombre:'',
        Puntuacion:0,
        Correctas:0,
        incorrectas:0,
        gano:false,
        pregunta1:'',
        pregunta2:'',
        pregunta3:'',
pregunta4:'',
     pregunta5:'',
     respuesta1:'',
    respuesta2:'',
    respuesta3:'',
    respuesta4:'',
    respuesta5:''
    };

 
  constructor(public navCtrl: NavController, public NavParams: NavParams,private nativeAudio: NativeAudio,private vibration: Vibration) {
    this.usuario = NavParams.data;
    this.nativeAudio.preloadSimple('mal', 'assets/sound/mal.mp3');
          this.nativeAudio.preloadSimple('bien', 'assets/sound/bien.mp3');
   
  }

  ionViewDidLoad(){

  
    
    this.trivia = "¿En que año se desato la Segunda Guerra Mundial?";
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
          {this.vibration.vibrate(500);
            this.nativeAudio.play('bien', () => console.log('bienvenida is done playing'));
            this.puntuacion = this.puntuacion+1;
            this.preguntas = this.preguntas+1;
            this.correctas = this.correctas+1;
            this.pregunta1="¿En que año se desato la Segunda Guerra Mundial?";
            this.preguntaDos();
          }else{
            this.vibration.vibrate([500,250,500]);
            this.nativeAudio.play('mal', () => console.log('bienvenida is done playing'));
            this.preguntas = this.preguntas+1;
            this.incorrectas = this.incorrectas+1;
            this.preguntaDos();
          }
     }else if (this.preguntas == 2){
       console.log("estoy en respuesta",respuesta);
             if(respuesta == 2)
                {this.vibration.vibrate(500);
                   this.nativeAudio.play('bien', () => console.log('bienvenida is done playing'));
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                  this.preguntaTres();
                }else{
                  this.vibration.vibrate([500,250,500]);
                  this.nativeAudio.play('mal', () => console.log('bienvenida is done playing'));
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                  this.preguntaTres();
                }
     }else if (this.preguntas ==3){
             if(respuesta == 3)
                {this.vibration.vibrate(500);
                  this.nativeAudio.play('bien', () => console.log('bienvenida is done playing'));
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                this.preguntaCuatro();
              }else{
                this.vibration.vibrate([500,250,500]);
                this.nativeAudio.play('mal', () => console.log('bienvenida is done playing'));
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                this.preguntaCuatro();
                }

     }else if (this.preguntas ==4){
             if(respuesta == 1)
                {this.vibration.vibrate(500);
                  this.nativeAudio.play('bien', () => console.log('bienvenida is done playing'));
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                  this.preguntaCinco();
                }else{
                  this.vibration.vibrate([500,250,500]);
                  this.nativeAudio.play('mal', () => console.log('bienvenida is done playing'));
                  this.preguntas = this.preguntas+1;
                  this.incorrectas = this.incorrectas+1;
                  this.preguntaCinco();
              }

     }else if (this.preguntas ==5){
             if(respuesta == 3)
                {
this.vibration.vibrate(500);
                  this.nativeAudio.play('bien', () => console.log('bienvenida is done playing'));
                  this.puntuacion = this.puntuacion+1;
                  this.preguntas = this.preguntas+1;
                  this.correctas = this.correctas+1;
                  this.GanoONo();
                 }else{
                   this.vibration.vibrate([500,250,500]);
                   this.nativeAudio.play('mal', () => console.log('bienvenida is done playing'));
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
           this.navCtrl.push(PerdistePage,this.usuario )  
      
    }
  }


}

