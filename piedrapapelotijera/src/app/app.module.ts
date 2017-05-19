import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { Identificarse } from '../pages/Identificarse/Identificarse';
import { ppot } from '../pages/PiedraPapelOTijera/ppot';
import { AcercaDe } from '../pages/acerca-de/acerca-de';
import { Estadistica} from '../pages/Estadistica/Estadistica';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {firebaseconfig} from '../pages/firebase/firebase-config';
import {Listado} from '../pages/Listado/Listado';
import{List} from '../pages/List/List';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

@NgModule({
  declarations: [
    MyApp,
    Identificarse,
    ppot,
    AcercaDe,
    Listado,
   
    Estadistica,
     List
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseconfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Identificarse,  
    ppot,
    AcercaDe,
    Listado,
    Estadistica,
    List
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
