import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
/*
  Generated class for the MyData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyData {

  private ruta = "./datos.json";
  
  private puntajeObservable : FirebaseListObservable<any[]> = this.af.database.list('/puntajes');
  private respuestasObservable : FirebaseListObservable<any[]> = this.af.database.list('/Ultimasresp');
  private preguntasObservable : FirebaseListObservable<any[]> = this.af.database.list('/preguntas');
 // private ultimasRespObservable : FirebaseListObservable<any[]> = this.af.database.list('/Ultimasresp');
  public Ultimasresp: any = [];

  constructor(private http: Http, private af: AngularFire) {

      
    this.Ultimasresp.subscribe(
      datos => this.Ultimasresp = datos,
      error => console.error(error)
    );

   }
  
  public getPreguntas() {
    return this.http.get(this.ruta)
      .map(response => response.json());
  }

 public insertarPuntaje(nombre:string, puntaje:number)
 {
  this.puntajeObservable.push({usuario:nombre, puntaje:puntaje});
 }

  public guardarRespuestas(nombre:string, pregunta:string, respuesta:string)
  {
    this.respuestasObservable.push({usuario:nombre, pregunta:pregunta, respuesta:respuesta});
  }

  public traerPreguntas()
  {
    return this.preguntasObservable;
  }

}
