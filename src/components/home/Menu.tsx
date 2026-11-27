import { menuData } from '../../data/homeData';

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-dark text-white text-center scroll-mt-[80px]">
      <h2 className="text-[2rem] uppercase font-bold mb-16 relative after:content-[''] after:w-[80px] after:h-[5px] after:block after:mx-auto after:mt-3 after:rounded-md after:bg-secondary">Our Menu</h2>
      <div className="max-w-[1300px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {menuData.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img src={`/images/menu/${item.img}`} alt={item.name} className="w-[200px] md:w-4/5 aspect-square object-contain mb-4" />
            <h3 className="text-[1.5rem] font-semibold my-3">{item.name}</h3>
            <p className="text-[1.12rem] px-4">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}