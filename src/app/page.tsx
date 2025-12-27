import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="h-32"></div>
      <About />
      <div className="h-40"></div>
      <Experience />
      <div className="h-40"></div>
      <Projects />
      <div className="h-48"></div>
      <Contact />
      <div className="h-24"></div>
    </div>
  );
}
