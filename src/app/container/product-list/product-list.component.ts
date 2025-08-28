import { Component, Input } from '@angular/core';

import { Product } from '../../Models/Product';

@Component({
  selector: 'product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  @Input() searchText: string = '';

  selectedProduct: Product;
  products: Product[] = [
    {
      id: 1,
      name: "Classic White T-Shirt",
      brand: "BasicsCo",
      gender: "unisex",
      category: "T-Shirts",
      size: ["S", "M", "L", "XL"],
      colors: ["White", "Black", "Navy"],
      price: 19.99,
      discountPrice: 4.4,
      is_in_inventory: true,
      items_left: 120,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "classic-white-t-shirt",
      description: "A timeless white tee made from soft cotton, perfect for any casual look."
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      brand: "DenimPro",
      gender: "male",
      category: "Jeans",
      size: ["30", "32", "34", "36"],
      colors: ["Dark Blue", "Gray", "Black"],
      price: 49.99,
      discountPrice: 10.4,
      is_in_inventory: true,
      items_left: 55,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "slim-fit-jeans",
      description: "Dark blue slim fit jeans offering a sleek silhouette with durable denim fabric."
    },
    {
      id: 3,
      name: "Leather Handbag",
      brand: "LuxBags",
      gender: "female",
      category: "Bags",
      size: ["One Size"],
      colors: ["Brown", "Tan", "Cream"],
      price: 129.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 30,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "leather-handbag",
      description: "Elegant brown leather handbag with ample storage and a chic design."
    },
    {
      id: 4,
      name: "Running Sneakers",
      brand: "Speedster",
      gender: "unisex",
      category: "Shoes",
      size: ["8", "9", "10", "11"],
      colors: ["Black", "White", "Red"],
      price: 89.99,
      discountPrice: null,
      is_in_inventory: false,
      items_left: 0,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "running-sneakers",
      description: "Lightweight and comfortable running sneakers designed for all terrains."
    },
    {
      id: 5,
      name: "Formal Shirt",
      brand: "SuitUp",
      gender: "male",
      category: "Shirts",
      size: ["M", "L", "XL"],
      colors: ["Light Blue", "White", "Gray"],
      price: 39.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 40,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "formal-shirt",
      description: "Light blue formal shirt tailored for a sharp, professional look."
    },
    {
      id: 6,
      name: "Yoga Leggings",
      brand: "FlexFit",
      gender: "female",
      category: "Leggings",
      size: ["XS", "S", "M"],
      colors: ["Gray", "Black", "Lavender"],
      price: 29.99,
      discountPrice: 3.9,
      is_in_inventory: true,
      items_left: 70,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "yoga-leggings",
      description: "Stretchy and breathable gray leggings, perfect for yoga and workouts."
    },
    {
      id: 7,
      name: "Denim Jacket",
      brand: "DenimPro",
      gender: "unisex",
      category: "Jackets",
      size: ["S", "M", "L"],
      colors: ["Blue", "Light Blue", "Black"],
      price: 69.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 25,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "denim-jacket",
      description: "Classic blue denim jacket with a comfortable fit and durable stitching."
    },
    {
      id: 8,
      name: "Casual Hoodie",
      brand: "CozyWear",
      gender: "male",
      category: "Hoodies",
      size: ["L", "XL", "XXL"],
      colors: ["Navy", "Gray", "Olive"],
      price: 49.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 60,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "casual-hoodie",
      description: "Comfortable navy hoodie for casual wear and relaxed days."
    },
    {
      id: 9,
      name: "Summer Dress",
      brand: "Sunshine",
      gender: "female",
      category: "Dresses",
      size: ["S", "M", "L"],
      colors: ["Yellow", "Peach", "Mint"],
      price: 59.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 20,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "summer-dress",
      description: "Bright yellow summer dress designed for comfort and style in warm weather."
    },
    {
      id: 10,
      name: "Sports Watch",
      brand: "ChronoX",
      gender: "unisex",
      category: "Accessories",
      size: ["One Size"],
      colors: ["Black", "Red", "Silver"],
      price: 199.99,
      discountPrice: 20.9,
      is_in_inventory: true,
      items_left: 15,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "sports-watch",
      description: "Durable sports watch with multiple features for athletes and outdoor lovers."
    },
    {
      id: 11,
      name: "Wireless Earbuds",
      brand: "SoundBeat",
      gender: "unisex",
      category: "Accessories",
      size: ["One Size"],
      colors: ["Black", "White"],
      price: 89.99,
      discountPrice: null,
      is_in_inventory: false,
      items_left: 0,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "wireless-earbuds",
      description: "High-quality wireless earbuds with noise cancellation and long battery life."
    },
    {
      id: 12,
      name: "Fitness Tracker",
      brand: "FitLine",
      gender: "unisex",
      category: "Accessories",
      size: ["S", "M", "L"],
      colors: ["Black", "Blue"],
      price: 59.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 40,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "fitness-tracker",
      description: "Track your workouts, steps, and heart rate with this sleek fitness tracker."
    },
    {
      id: 13,
      name: "Travel Backpack",
      brand: "GoPack",
      gender: "unisex",
      category: "Bags",
      size: ["M", "L"],
      colors: ["Gray", "Black"],
      price: 69.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 18,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "travel-backpack",
      description: "Durable and spacious backpack ideal for travel, hiking, or everyday use."
    },
    {
      id: 14,
      name: "Classic Aviator Sunglasses",
      brand: "SunRay",
      gender: "unisex",
      category: "Accessories",
      size: ["One Size"],
      colors: ["Gold", "Silver"],
      price: 39.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 32,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "aviator-sunglasses",
      description: "Stylish aviator sunglasses with UV protection and a lightweight frame."
    },
    {
      id: 15,
      name: "Waterproof Bluetooth Speaker",
      brand: "BoomBox",
      gender: "unisex",
      category: "Accessories",
      size: ["One Size"],
      colors: ["Black", "Red"],
      price: 79.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 22,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "bluetooth-speaker",
      description: "Portable waterproof Bluetooth speaker with deep bass and 10-hour battery life."
    },
    {
      id: 16,
      name: "Digital Alarm Clock",
      brand: "TimeWise",
      gender: "unisex",
      category: "Accessories",
      size: ["One Size"],
      colors: ["Black", "White"],
      price: 29.99,
      discountPrice: 4.9,
      is_in_inventory: true,
      items_left: 47,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "digital-alarm-clock",
      description: "Sleek digital alarm clock with LED display and temperature monitor."
    },
    {
      id: 17,
      name: "Smart Thermos Bottle",
      brand: "HydroSmart",
      gender: "unisex",
      category: "Accessories",
      size: ["350ml", "500ml", "750ml"],
      colors: ["Silver", "Black"],
      price: 49.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 30,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "smart-thermos-bottle",
      description: "Insulated smart thermos with LED temperature display and touch control."
    },
    {
      id: 18,
      name: "Wireless Charging Pad",
      brand: "ChargeMate",
      gender: "unisex",
      category: "Accessories",
      size: ["Standard", "Mini", "XL"],
      colors: ["Black", "White"],
      price: 34.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 28,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "wireless-charging-pad",
      description: "Fast wireless charging pad compatible with all Qi-enabled devices."
    },
    {
      id: 19,
      name: "Foldable Laptop Stand",
      brand: "DeskPro",
      gender: "unisex",
      category: "Accessories",
      size: ["11-13 inch", "14-16 inch"],
      colors: ["Gray", "Silver"],
      price: 44.99,
      discountPrice: 7.9,
      is_in_inventory: true,
      items_left: 36,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "laptop-stand",
      description: "Portable and adjustable laptop stand for improved posture and cooling."
    },
    {
      id: 20,
      name: "Anti-Theft Sling Bag",
      brand: "SecureStyle",
      gender: "unisex",
      category: "Bags",
      size: ["S", "M", "L"],
      colors: ["Black", "Navy"],
      price: 54.99,
      discountPrice: null,
      is_in_inventory: true,
      items_left: 20,
      imageURL: "https://wallpaper-house.com/data/out/12/wallpaper2you_574444.jpg",
      slug: "anti-theft-sling-bag",
      description: "Compact sling bag with anti-theft zippers and USB charging port."
    }
  ];

  filteredProducts = this.products;

  onFilterProductsChanged(value){
    if(value == 'true'){
      this.filteredProducts = this.products.filter(prod => prod.is_in_inventory);
    }else if(value == 'false'){
      this.filteredProducts = this.products.filter(prod => !prod.is_in_inventory)
    }else{
      this.filteredProducts = this.products;
    }
  }

  productsFilterInfomation = [
    { filter: 'All', count: this.products.length , value: 'all'},
    { filter: 'In Stock', count: this.products.filter(prod => prod.is_in_inventory).length, value: 'true'},
    { filter: 'Out Of Stock', count: this.products.filter(prod => !prod.is_in_inventory).length, value: 'false' },
  ]

}
