import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // 모바일 메뉴 열림/닫힘에 따른 배경 스크롤 제어
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // 컴포넌트 언마운트 시 스크롤 잠금 해제
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full z-50 bg-primary">
      <nav className="max-w-[1300px] mx-auto px-5 py-5 flex items-center justify-between">
        <a href="#" className="text-white text-[2rem] font-semibold">🌙 MoonShine</a>
        
        <ul className={`fixed top-0 w-[300px] h-full bg-white flex flex-col items-center pt-24 gap-4 transition-all duration-300 ease-in-out md:static md:flex-row md:h-auto md:w-auto md:bg-transparent md:pt-0 ${isMenuOpen ? 'left-0' : '-left-[300px]'} md:left-0`}>
          <button onClick={closeMenu} className="absolute top-7 right-7 text-2xl md:hidden text-dark">
            <i className="fas fa-times"></i>
          </button>
          {['Home', 'Owner', 'Menu', 'Signature', 'Gallery', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={item === 'Home' ? '#' : `#${item.toLowerCase()}`} 
                onClick={closeMenu}
                className="px-4 py-2 rounded-[30px] text-xl md:text-[1.12rem] text-dark md:text-white transition hover:text-primary hover:bg-secondary block"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button onClick={() => setIsMenuOpen(true)} className="text-white text-2xl md:hidden">
          <i className="fas fa-bars"></i>
        </button>
      </nav>
      {/* 백드롭 클릭 시 메뉴 닫힘 */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 md:hidden" onClick={closeMenu}></div>}
    </header>
  );
}