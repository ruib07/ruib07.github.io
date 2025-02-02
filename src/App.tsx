import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import ScrollToTop from "./components/ScrollToTop";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";

export default function App() {
  return (
    <div className="mt-16">
      <Header />
      <AboutMe />
      <Experience />
      <ScrollToTop />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
