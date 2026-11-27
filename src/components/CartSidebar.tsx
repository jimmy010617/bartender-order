import React from 'react';
import type { CartItem } from '../types/order';

interface CartSidebarProps {
  cart: CartItem[];
  totalPrice: number;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
  onPurchase: () => void;
}

export default function CartSidebar({ cart, totalPrice, onDrop, onUpdateQuantity, onRemove, onPurchase }: CartSidebarProps) {
  return (
    <section className="w-75 flex-shrink-0">
      <h1 className="text-2xl font-bold mb-6"><i className="fa-solid fa-cart-plus"></i> 장바구니</h1>
      <div className="border border-gray-300 p-[10px] relative pb-[50px] min-h-[400px]">
        <div 
          onDragOver={(e) => e.preventDefault()}
          onDrop={onDrop}
          className="w-full h-[250px] bg-[#343a40] text-white flex items-center justify-center mb-[10px] border-2 border-dashed border-gray-500"
        >
          이 곳에 상품을 놓아주세요.
        </div>
        
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.id} className="relative border p-2 bg-white">
              <img src={`/${item.photo}`} alt={item.product_name} className="w-[200px] h-[150px] object-cover mb-2 mx-auto" />
              <h3 className="font-bold">{item.product_name}</h3>
              <span className="text-sm text-gray-500 block mb-2">{item.brand_name}</span>
              <div className="flex items-center gap-2 mb-2">
                <label className="bg-[#f7f7f7] border px-2 text-sm">수량</label>
                <input 
                  type="number" 
                  value={item.quantity} 
                  onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                  className="border w-[60px] pl-1 h-[20px]"
                />
              </div>
              <span className="font-bold text-lg block">{item.price * item.quantity}원</span>
              <button onClick={() => onRemove(item.id)} className="absolute top-2 right-2 text-xl hover:text-red-500 font-bold bg-transparent">X</button>
            </div>
          ))}
        </div>

        <div className="mt-6 text-lg font-bold">
          total <span className="text-xl text-[#027bff]">{totalPrice}</span>₩
        </div>
        
        <button 
          onClick={onPurchase}
          className="absolute bottom-0 left-0 w-full h-[30px] bg-[#027bff] text-white cursor-pointer border border-black/20 outline-none hover:bg-blue-700 transition"
        >
          구매하기
        </button>
      </div>
    </section>
  );
}