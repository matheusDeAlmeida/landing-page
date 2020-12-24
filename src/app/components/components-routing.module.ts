import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TccComponent } from './tcc/tcc.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComponentsComponent } from './components.component';

const routes: Routes = [
    {
      path: '', component: ComponentsComponent,
      children: [
        { path: '', component: LandingPageComponent },
        { path: 'trabalho-de-graduacao', component: TccComponent },
      ]
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class ComponentsRoutingModule { }