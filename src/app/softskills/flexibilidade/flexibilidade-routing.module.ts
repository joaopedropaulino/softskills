import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexibilidadePage } from './flexibilidade.page';

const routes: Routes = [
  {
    path: '',
    component: FlexibilidadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlexibilidadePageRoutingModule {}
