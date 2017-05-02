import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { juegoPage } from '../pages/juego/juego';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { ganastePage } from '../pages/Ganaste/Ganaste';

import { Estad } from '../pages/Estad/Estad';
import {PerdistePage} from '../pages/Perdiste/Perdiste'
export const firebaseConfig =
 {  
apiKey: "AIzaSyC5uCx-QokHlXKdZqelIpaQEhoJ7sm1yfw",
    authDomain: "mybd-ab691.firebaseapp.com",
    databaseURL: "https://mybd-ab691.firebaseio.com",
    projectId: "mybd-ab691",
    storageBucket: "mybd-ab691.appspot.com",
    messagingSenderId: "352321203180"
 };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ganastePage,
    Estad,
    PerdistePage,
   
    juegoPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(firebaseConfig),  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
 ganastePage,
 PerdistePage,
 Estad,
    juegoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
