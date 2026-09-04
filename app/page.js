import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  );
}
