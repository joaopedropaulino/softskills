import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResolucaoPage } from './resolucao.page';

const routes: Routes = [
  {
    path: '',
    component: ResolucaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResolucaoPageRoutingModule {}
