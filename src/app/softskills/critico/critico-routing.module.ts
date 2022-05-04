import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriticoPage } from './critico.page';

const routes: Routes = [
  {
    path: '',
    component: CriticoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriticoPageRoutingModule {}
