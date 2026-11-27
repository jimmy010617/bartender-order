export default function About() {
  return (
    <section id="owner" className="py-24 bg-light-pink scroll-mt-[80px]">
      <div className="max-w-[1300px] mx-auto px-5 flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-24">
        <div className="w-full max-w-[250px] md:max-w-[400px]">
          <img src="/images/owner/ownerBartender_.png" alt="Owner Bartender" className="w-full aspect-square object-cover rounded-full shadow-lg" />
        </div>
        <div className="flex flex-col items-center text-center max-w-xl">
          <h2 className="text-[2rem] uppercase font-bold relative after:content-[''] after:w-[80px] after:h-[5px] after:block after:mx-auto after:mt-3 after:rounded-md after:bg-secondary">Owner Bartender</h2>
          <p className="text-[1.12rem] leading-8 my-10">
            <strong>佐々倉 溜 (SASAKURA RYU)</strong><br />
            - Bar KAZE(風) : 元 Junior Bartender (1995 ~ 1999)<br />
            - Hotel Paris Litz : 元 Chief Bartender (2000 ~ 2005)<br />
            - Bar Lapin : 元 Junior Bartender (2005 ~ 2006)<br />
            - Bar Eden Hall : 元 Chief Bartender (2006 ~ 2009)<br />
            - Bar Eden Hall R&T : 元 Owner Bartender (2009 ~ 2012)<br />
            - Bar MoonShine : 現 Owner Bartender (2012 ~ )
          </p>
          <div className="flex gap-6 text-primary text-[1.5rem]">
            <a href="#" className="hover:text-secondary transition"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" className="hover:text-secondary transition"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" className="hover:text-secondary transition"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}