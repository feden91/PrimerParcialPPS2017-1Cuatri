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
@NgModule({
  declarations: [
    MyApp,
    Identificarse,
    ppot,
    AcercaDe,
    Estadistica
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
    Estadistica
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
