import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResolucaoPageRoutingModule } from './resolucao-routing.module';

import { ResolucaoPage } from './resolucao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResolucaoPageRoutingModule
  ],
  declarations: [ResolucaoPage]
})
export class ResolucaoPageModule {}
