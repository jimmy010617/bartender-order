import React from 'react';
import type { Product } from '../types/order';

interface ProductCardProps {
  product: Product;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, id: number) => void;
}

export default function ProductCard({ product, onDragStart }: ProductCardProps) {
  return (
    <div 
      draggable
      onDragStart={(e) => onDragStart(e, product.id)}
      className="w-[200px] h-[300px] border border-black flex flex-col relative cursor-move overflow-hidden animate-[appear_0.5s_forwards]"
    >
      <img 
        src={`/${product.photo}`} 
        alt={product.product_name} 
        className="h-[170px] object-cover transition-transform duration-300 hover:scale-110" 
        draggable={false} 
      />
      <h3 className="m-[10px] font-medium">{product.product_name}</h3>
      <span className="mx-[10px] text-gray-500">{product.brand_name}</span>
      <span className="absolute bottom-0 w-full h-[40px] bg-[#f7f7f7] leading-[40px] pl-[10px] font-bold">
        {product.price}원
      </span>
    </div>
  );
}