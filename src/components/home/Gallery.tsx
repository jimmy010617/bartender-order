import { galleryData } from '../../data/homeData';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 text-center scroll-mt-[80px]">
      <h2 className="text-[2rem] uppercase font-bold mb-16 relative after:content-[''] after:w-[80px] after:h-[5px] after:block after:mx-auto after:mt-3 after:rounded-md after:bg-secondary">Gallery</h2>
      <div className="max-w-[1300px] mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryData.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg aspect-video">
            <img src={`/images/gallery/${img}`} alt="Gallery" className="w-full h-full object-cover cursor-zoom-in transition duration-300 hover:scale-[1.3]" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}