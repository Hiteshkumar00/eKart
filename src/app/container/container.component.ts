import { Component, OnInit, ViewChild } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  standalone: false,
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent: ProductListComponent;

  setSearchText(value: string){
    this.searchText = value;
  }


}
