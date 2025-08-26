import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input('product') product: {
    id: number;
    name: string;
    brand: string;
    gender: "unisex" | "male" | "female" | "kids" | string;
    category: string;
    size: string;
    colors: string[];
    price: number;
    discountPrice: number | null;
    is_in_inventory: boolean;
    items_left: number;
    imageURL: string;
    slug: string;
    description: string;
  };
}
