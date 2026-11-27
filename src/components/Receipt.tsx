import { useEffect, useRef } from 'react';
import type { CartItem } from '../types/order';

interface ReceiptProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  totalPrice: number;
}

export default function Receipt({ isOpen, onClose, cart, totalPrice }: ReceiptProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const today = new Date();
      ctx.fillStyle = '#f5f5dc'; // 영수증 종이 색상
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000';

      ctx.font = '20px serif';
      ctx.fillText('영수증', 30, 50);
      ctx.font = '12px serif';
      ctx.fillText(today.toLocaleDateString(), 30, 70);
      ctx.fillText(today.toLocaleTimeString(), 120, 70);

      cart.forEach((item, i) => {
        ctx.font = '16px serif';
        ctx.fillText(` 제품명 : ${item.product_name}`, 30, 100 * (i + 1));
        ctx.fillText(` 기주 : ${item.brand_name}`, 30, 100 * (i + 1) + 20);
        ctx.fillText(` 수량 : ${item.quantity}개`, 30, 100 * (i + 1) + 40);
        ctx.fillText(` 금액 : ${item.price * item.quantity}원`, 30, 100 * (i + 1) + 60);
      });
      ctx.font = 'bold 20px serif';
      ctx.fillText(` 총액 : ${totalPrice.toLocaleString()}원`, 380, 520);
    }
  }, [isOpen, cart, totalPrice]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* 영수증 기계 슬릿(배출구) 래퍼 - overflow-hidden으로 인쇄 효과 극대화 */}
      <div className="relative flex flex-col items-center overflow-hidden pt-[20px] px-10 pb-10">
        
        {/* 영수증 기계 배출구 바 (시각적 장식) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[620px] h-[30px] bg-[#1a1a1a] rounded-t-lg shadow-2xl z-20 border-b-4 border-black"></div>

        {/* 슬라이드 다운 애니메이션 적용 (기계 아래서 나오는 효과) */}
        <div className="animate-receipt relative z-10 flex flex-col items-center">
          <canvas 
            ref={canvasRef} 
            width="600" 
            height="600" 
            className="shadow-2xl bg-white border-x border-b border-gray-300"
          ></canvas>
          
          <button 
            onClick={onClose} 
            className="mt-8 px-8 py-3 bg-[#027bff] hover:bg-blue-700 text-white font-bold rounded-[30px] shadow-lg transition-transform hover:scale-105"
          >
            확인 및 닫기
          </button>
        </div>
        
      </div>
    </div>
  );
}