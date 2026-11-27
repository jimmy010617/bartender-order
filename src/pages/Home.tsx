import Header from '../components/home/Header';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Menu from '../components/home/Menu';
import Signature from '../components/home/Signature';
import Gallery from '../components/home/Gallery';
import Contact from '../components/home/Contact';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Signature />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}