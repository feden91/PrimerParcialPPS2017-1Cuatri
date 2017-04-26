import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { juegoPage } from '../pages/juego/juego';
import { juegoPage2 } from '../pages/juego2/juego2';
import { juegoPage3 } from '../pages/juego3/juego3';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';



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
    ListPage,
    juegoPage,
    juegoPage2,
    juegoPage3
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
    ListPage,
    juegoPage,
    juegoPage2,
    juegoPage3
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
