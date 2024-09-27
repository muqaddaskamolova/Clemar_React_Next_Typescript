import '../i18n';
import Image from "next/image";
import Navbar from '../components/Navbar';
import NavLinks from '../components/NavLinks';
import Hero from '../components/Hero';

export default function Home() {
  return (
    
      <main className="overflow-hidden">
      <Navbar />
      <div className="max-w-screen-lg mx-auto px-8 sm:px-10 lg:px-12">
      <NavLinks/>
      <Hero />
      </div>

      </main>
      
  );
}
