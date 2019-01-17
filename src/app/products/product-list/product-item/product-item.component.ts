import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() itemIndex: number;
  // TODO: Create model for this item
  @Input() product: any;

  productImage: string;

  constructor() { }

  ngOnInit() {
    this.productImage = this.product.productImg;
  }
}
