import { Link } from 'react-router-dom';

interface OrderNavProps {
  category: string;
  setCategory: (cat: string) => void;
}

export default function OrderNav({ category, setCategory }: OrderNavProps) {
  const categories = ['보드카', '진', '럼', '데킬라', '리큐르', '위스키', '와인', '안주'];

  return (
    <nav className="bg-[#343a40] p-[10px] text-white flex justify-between h-[60px] items-center">
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold"><i className="fa-solid fa-credit-card"></i> 주문하기</span>
          <ul className="flex gap-4 text-[#878b8e]">
            {categories.map((cat) => (
              <li key={cat}>
                <button 
                  className={`font-bold hover:text-[#ff6347] transition ${category === cat ? 'text-white' : ''}`}
                  onClick={() => setCategory(category === cat ? '' : cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6 font-bold text-xl">
          <button onClick={() => window.location.reload()} className="hover:text-[#ff6347] transition">
            <i className="fa-solid fa-rotate-left"></i> 처음으로
          </button>
          <Link to="/" className="hover:text-[#ff6347] transition">
            <i className="fa-solid fa-house"></i> 홈으로 돌아가기
          </Link>
        </div>
      </div>
    </nav>
  );
}