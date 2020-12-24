import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayFormatedContentComponent } from './display-formated-content/display-formated-content.component';
import { TccComponent } from './tcc/tcc.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [
    DisplayFormatedContentComponent,
    TccComponent,
    LandingPageComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    ComponentsRoutingModule,

  ],
  exports:[
    DisplayFormatedContentComponent,
    TccComponent,
    LandingPageComponent,
  ]
})
export class ComponentsModule { }
