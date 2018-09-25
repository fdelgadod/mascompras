import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromocionCercaPage } from './promocion-cerca';

@NgModule({
  declarations: [
    PromocionCercaPage,
  ],
  imports: [
    IonicPageModule.forChild(PromocionCercaPage),
  ],
})
export class PromocionCercaPageModule {}
