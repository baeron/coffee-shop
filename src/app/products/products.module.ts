import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,

    HttpClientModule,
    HttpModule
  ],
  declarations: [
    ProductListComponent,
    ProductItemComponent
  ]
})
export class ProductsModule { }
