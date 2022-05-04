import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlexibilidadePageRoutingModule } from './flexibilidade-routing.module';

import { FlexibilidadePage } from './flexibilidade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlexibilidadePageRoutingModule
  ],
  declarations: [FlexibilidadePage]
})
export class FlexibilidadePageModule {}
