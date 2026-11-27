export type Product = {
  id: number;
  product_name: string;
  brand_name: string;
  photo: string;
  price: number;
};

export type CartItem = Product & { quantity: number };