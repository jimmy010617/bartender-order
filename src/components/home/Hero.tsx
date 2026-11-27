import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullQuote = '"세상에는 절대로 손님을 배신하면 안 되는 일이 두 가지 있습니다. 하나는 의사, 약제사, 또 다른 하나는 바텐더. 술에 들어 있는 건 영혼입니다, 영혼이기에 사람의 영혼도 위로할 수 있는 거죠."';

  // 타이핑 효과 로직
  useEffect(() => {
    let currentLength = 0;
    const typingInterval = setInterval(() => {
      setTypedText(fullQuote.substring(0, currentLength));
      currentLength++;
      
      if (currentLength > fullQuote.length) {
        clearInterval(typingInterval);
      }
    }, 50); // 숫자가 작을수록 타이핑 속도가 빠름

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen bg-primary flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-5 flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full text-white text-center md:text-left">
        
        {/* 텍스트 영역 */}
        <div className="flex-1 max-w-xl">
          {/* 부드러운 페이드인 등장 효과 */}
          <h2 className="text-[2.3rem] text-secondary font-miniver opacity-0 animate-fade-in-up">
            The glass of God
          </h2>
          
          <h3 className="text-[2rem] font-semibold mt-2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            영혼을 구하는 마지막 한 잔
          </h3>
          
          {/* 타이핑 효과가 적용된 명대사 */}
          <p className="text-[1.12rem] my-6 h-[100px] md:h-[80px] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {typedText}
            {/* 깜빡이는 커서 효과 */}
            <span className="animate-pulse ml-1 inline-block w-1.5 h-5 bg-secondary align-middle"></span>
          </p>
          
          {/* 버튼 영역 시차 등장 */}
          <div className="flex justify-center md:justify-start gap-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <Link to="/order" className="px-6 py-2 border-2 border-transparent bg-secondary text-primary rounded-[30px] font-medium transition hover:bg-transparent hover:text-white hover:border-white">
              Order Now
            </Link>
            <a href="#contact" className="px-6 py-2 border-2 border-transparent bg-secondary text-primary rounded-[30px] font-medium transition hover:bg-secondary hover:text-primary hover:border-secondary">
              Contact Us
            </a>
          </div>
        </div>
        
        {/* 플로팅 애니메이션이 적용된 히어로 이미지 */}
        <div className="w-[270px] md:w-[500px] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <img 
            src="/images/logo/logo1.jpg" 
            alt="Hero" 
            className="w-full rounded-lg animate-float shadow-2xl" 
          />
        </div>

      </div>
    </section>
  );
}