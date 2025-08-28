import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
  @Input() productListComp: ProductListComponent;

  product: Product;

  ngOnInit(): void {
    this.product = this.productListComp.selectedProduct;
  }

}
