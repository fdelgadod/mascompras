import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MisComprasPage } from "../pages/mis-compras/mis-compras";
import { PromocionCercaPage } from "../pages/promocion-cerca/promocion-cerca";
import { AtencionClientePage } from "../pages/atencion-cliente/atencion-cliente";
import { SobreNosotrosPage } from "../pages/sobre-nosotros/sobre-nosotros";



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MisComprasPage,
    PromocionCercaPage,
    AtencionClientePage,
    SobreNosotrosPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MisComprasPage,
    PromocionCercaPage,
    AtencionClientePage,
    SobreNosotrosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
