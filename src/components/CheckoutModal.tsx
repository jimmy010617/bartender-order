import React from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function CheckoutModal({ isOpen, onClose, onSubmit }: CheckoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-[50%] h-[50%] p-[30px] relative border border-black/20 shadow-xl">
        <button 
          onClick={onClose} 
          className="absolute top-[10px] right-[10px] text-[30px] text-black/40 hover:text-black bg-transparent border-none cursor-pointer"
        >
          X
        </button>
        <h1 className="text-2xl font-bold mb-4">Thank you for your purchase!</h1>
        <h3 className="text-lg font-medium">테이블 번호와 연락처를 입력해주세요!</h3>
        <form onSubmit={onSubmit} className="flex flex-col mt-5">
          <span className="block mt-5 mb-2">Table Number</span>
          <input type="text" required placeholder="테이블 번호를 입력해주세요." className="w-[50%] h-[30px] border border-gray-300 px-2 outline-none focus:border-[#027bff]" />
          <span className="block mt-5 mb-2">Phone Number</span>
          <input type="tel" required placeholder="연락처를 입력해주세요." className="w-[50%] h-[30px] border border-gray-300 px-2 outline-none focus:border-[#027bff]" />
          <button type="submit" className="absolute bottom-0 left-0 w-full h-[30px] bg-[#027bff] hover:bg-blue-700 transition text-white border border-black/20 cursor-pointer">
            주문하기
          </button>
        </form>
      </div>
    </div>
  );
}