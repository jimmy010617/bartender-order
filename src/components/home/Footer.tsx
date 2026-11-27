export default function Footer() {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="max-w-[1300px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="transition hover:text-secondary">ⓒ 2024 BarMoonShine</p>
        <div className="flex gap-6 text-[1.5rem]">
          <a href="#" className="hover:text-secondary transition"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="hover:text-secondary transition"><i className="fa-brands fa-instagram"></i></a>
          <a href="#" className="hover:text-secondary transition"><i className="fa-brands fa-x-twitter"></i></a>
        </div>
        <p>
          <a href="#" className="hover:text-secondary transition">Privacy policy</a>
          <span className="mx-2 text-white">●</span>
          <a href="#" className="hover:text-secondary transition">Refund policy</a>
        </p>
      </div>
    </footer>
  );
}