import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'softskills',
    loadChildren: () => import('./softskills/softskills.module').then( m => m.SoftskillsPageModule)
  },
  {
    path: 'flexibilidade',
    loadChildren: () => import('./softskills/flexibilidade/flexibilidade.module').then( m => m.FlexibilidadePageModule)
  },
  {
    path: 'flexibilidade',
    loadChildren: () => import('./softskills/flexibilidade/flexibilidade.module').then( m => m.FlexibilidadePageModule)
  },
  {
    path: 'critico',
    loadChildren: () => import('./softskills/critico/critico.module').then( m => m.CriticoPageModule)
  },
  {
    path: 'resolucao',
    loadChildren: () => import('./softskills/resolucao/resolucao.module').then( m => m.ResolucaoPageModule)
  },
  {
    path: 'resiliencia',
    loadChildren: () => import('./softskills/resiliencia/resiliencia.module').then( m => m.ResilienciaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
