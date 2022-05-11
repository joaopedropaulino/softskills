import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciativaPage } from './iniciativa.page';

const routes: Routes = [
  {
    path: '',
    component: IniciativaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciativaPageRoutingModule {}
