import { Button } from "@/components/ui/button";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <section className="wrapper w-full">
      <div className="container">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </div>
    </section>
  );
}
