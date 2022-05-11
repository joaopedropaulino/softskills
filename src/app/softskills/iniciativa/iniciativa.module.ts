import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciativaPageRoutingModule } from './iniciativa-routing.module';

import { IniciativaPage } from './iniciativa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciativaPageRoutingModule
  ],
  declarations: [IniciativaPage]
})
export class IniciativaPageModule {}
