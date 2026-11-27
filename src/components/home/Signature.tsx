import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { signatureData } from '../../data/homeData';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Signature() {
  return (
    <section id="signature" className="py-24 bg-light-pink text-center scroll-mt-[80px]">
      <h2 className="text-[2rem] uppercase font-bold mb-16 relative after:content-[''] after:w-[80px] after:h-[5px] after:block after:mx-auto after:mt-3 after:rounded-md after:bg-secondary">Signature</h2>
      <div className="max-w-[1300px] mx-auto px-10">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {signatureData.map((item, idx) => (
            <SwiperSlide key={idx} className="flex flex-col items-center select-none p-8">
              <img src={`/images/signature/${item.img}`} alt={item.name} className="w-[180px] h-[180px] object-cover rounded-full mb-10 mx-auto" />
              <h3 className="text-[1.12rem] mb-4 font-semibold">{item.name}</h3>
              <i className="leading-[25px] text-gray-700">{item.desc}</i>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}