import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Identificarse } from '../pages/Identificarse/Identificarse';

import { AcercaDe } from '../pages/acerca-de/acerca-de';
import {ppot}from '../pages/PiedraPapelOTijera/ppot';
import {Estadistica}from '../pages/Estadistica/Estadistica';
import{Listado} from '../pages/Listado/Listado';
import{List} from '../pages/List/List';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Identificarse;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Identificarse', component: Identificarse },
      { title: 'Listado', component: Listado },
      { title: 'AcercaDe', component: AcercaDe }
     
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
