import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

const secondaryRoutes: Routes = [];

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(secondaryRoutes)
  ],
  exports: [
    NavComponent,
    FooterComponent,
    RouterModule
  ]
})
export class CoreModule { }
