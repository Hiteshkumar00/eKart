export class Product{
  id: number;
  name: string;
  brand: string;
  gender: "unisex" | "male" | "female" | "kids" | string;
  category: string;
  size: string[];
  colors: string[];
  price: number;
  discountPrice: number | null;
  is_in_inventory: boolean;
  items_left: number;
  imageURL: string;
  slug: string;
  description: string;
}
