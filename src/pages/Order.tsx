import React, { useState, useEffect } from 'react';
import type { Product, CartItem } from '../types/order';
import OrderNav from '../components/OrderNav';
import ProductCard from '../components/ProductCard';
import CartSidebar from '../components/CartSidebar';
import CheckoutModal from '../components/CheckoutModal';
import Receipt from '../components/Receipt';
import Toast from '../components/Toast';

export default function Order() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  
  // Toast 관련 상태
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  useEffect(() => {
    fetch('/store.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));

    const checkScrollTop = () => setShowScroll(window.pageYOffset > 100);
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.product_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.brand_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category ? p.brand_name.includes(category) : true;
    return matchesSearch && matchesCategory;
  });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: number) => {
    e.dataTransfer.setData('productId', id.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = parseInt(e.dataTransfer.getData('productId'));
    addToCart(id);
  };

  const addToCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      const product = products.find((p) => p.id === id);
      return product ? [...prev, { ...product, quantity: 1 }] : prev;
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 0) return;
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, quantity } : item));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePurchaseSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsReceiptOpen(true);
  };

  const closeReceipt = () => {
    setIsReceiptOpen(false);
    setCart([]);
  };

  const triggerToast = (message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 네비게이션 */}
      <OrderNav category={category} setCategory={setCategory} />

      {/* 검색창 */}
      <div className="max-w-[1200px] mx-auto my-5 px-5">
        <input 
          type="text" 
          placeholder="칵테일 이름 또는 베이스를 적어주세요(ex. 잭콕, 럼콕, 보드카, 브랜디....)" 
          className="w-full h-[40px] px-3 border border-gray-300 rounded outline-none focus:border-[#027bff]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-w-[1550px] mx-auto px-5 flex flex-col md:flex-row gap-8 mb-[200px]">
        {/* 상품 리스트 */}
        <section className="flex-1">
          <h1 className="text-2xl font-bold mb-6"><i className="fa-solid fa-list"></i> 모든 상품 리스트</h1>
          <div className="flex flex-wrap gap-5">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onDragStart={handleDragStart} />
            ))}
          </div>
        </section>

        {/* 장바구니 사이드바 */}
        <CartSidebar 
          cart={cart} 
          totalPrice={totalPrice} 
          onDrop={handleDrop} 
          onUpdateQuantity={updateQuantity} 
          onRemove={removeFromCart} 
          onPurchase={() => cart.length > 0 ? setIsModalOpen(true) : triggerToast("상품을 먼저 장바구니에 담아주세요.")} 
        />
      </div>

      {/* Top 버튼 */}
      {showScroll && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="fixed bottom-5 right-8 z-[9999] bg-[#555] hover:bg-[#333] text-white p-4 rounded-[10px] border-none outline-none cursor-pointer"
        >
          Top
        </button>
      )}

      {/* 모달, 영수증, Toast 알림 컴포넌트 */}
      <Toast message={toastMessage} isVisible={isToastVisible} onClose={() => setIsToastVisible(false)} />
      
      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handlePurchaseSubmit} />
      
      <Receipt isOpen={isReceiptOpen} onClose={closeReceipt} cart={cart} totalPrice={totalPrice} />
    </div>
  );
}