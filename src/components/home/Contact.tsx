import { useState } from 'react';
import { contactData } from '../../data/homeData';
import Toast from '../Toast'; // 상위 폴더의 Toast 컴포넌트 재활용

export default function Contact() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 새로고침 동작 방지
    
    // 폼 초기화
    e.currentTarget.reset();
    
    // Toast 알림 띄우기
    setIsToastVisible(true);
  };

  return (
    <section id="contact" className="py-24 bg-light-pink scroll-mt-[80px] relative">
      <h2 className="text-[2rem] uppercase font-bold text-center mb-16 relative after:content-[''] after:w-[80px] after:h-[5px] after:block after:mx-auto after:mt-3 after:rounded-md after:bg-secondary">Contact Us</h2>
      
      <div className="max-w-[1000px] mx-auto px-5 flex flex-col-reverse md:flex-row gap-12 justify-center items-center md:items-start md:gap-24">
        
        <ul className="flex flex-col gap-5 text-[1.12rem] w-full md:w-auto">
          {contactData.map((info, idx) => (
            <li key={idx} className="flex items-center gap-5">
              <i className={`${info.icon} w-5 text-center`}></i>
              <p>{info.text}</p>
            </li>
          ))}
        </ul>

        {/* onSubmit 이벤트 연결 */}
        <form onSubmit={handleSubmit} className="w-full md:w-[400px] flex flex-col">
          <input type="text" placeholder="Your name" required className="w-full h-[50px] px-3 mb-4 rounded-lg border border-medium-gray outline-none focus:border-secondary transition" />
          <input type="email" placeholder="Your email" required className="w-full h-[50px] px-3 mb-4 rounded-lg border border-medium-gray outline-none focus:border-secondary transition" />
          <textarea placeholder="Your message" required className="w-full h-[100px] p-3 mb-4 rounded-lg border border-medium-gray outline-none focus:border-secondary resize-y transition"></textarea>
          <button type="submit" className="px-6 py-2 mt-2 bg-primary border border-primary text-white rounded-[30px] text-[1.12rem] font-medium transition hover:bg-transparent hover:text-primary cursor-pointer">Submit</button>
        </form>
      </div>

      {/* 문의 완료 알림 토스트 (Order 페이지에서 만든 컴포넌트 재활용) */}
      <Toast 
        message="문의가 성공적으로 접수되었습니다." 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
      />
    </section>
  );
}