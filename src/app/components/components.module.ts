import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayFormatedContentComponent } from './display-formated-content/display-formated-content.component';



@NgModule({
  declarations: [DisplayFormatedContentComponent],
  imports: [
    CommonModule
  ],
  exports:[DisplayFormatedContentComponent]
})
export class ComponentsModule { }
