import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriticoPageRoutingModule } from './critico-routing.module';

import { CriticoPage } from './critico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriticoPageRoutingModule
  ],
  declarations: [CriticoPage]
})
export class CriticoPageModule {}
