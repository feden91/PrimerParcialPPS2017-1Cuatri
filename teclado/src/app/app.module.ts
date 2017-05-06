import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {teclado} from '../pages/teclado/teclado';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';

import { NativeAudio } from '@ionic-native/native-audio';

export const firebaseConfig =
 {  
apiKey: "AIzaSyCkprC_-qjNg9-GdQssIFkV49-lQI6wzSI",
    authDomain: "bdteclado.firebaseapp.com",
    databaseURL: "https://bdteclado.firebaseio.com",
    projectId: "bdteclado",
    storageBucket: "bdteclado.appspot.com",
    messagingSenderId: "821691496395"
 };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    teclado
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
    teclado
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
