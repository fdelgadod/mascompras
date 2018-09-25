import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AtencionClientePage } from './atencion-cliente';

@NgModule({
  declarations: [
    AtencionClientePage,
  ],
  imports: [
    IonicPageModule.forChild(AtencionClientePage),
  ],
})
export class AtencionClientePageModule {}
