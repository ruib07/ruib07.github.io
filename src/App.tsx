import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GoToTopPage from "./components/GoToTopPage";
import ScrollToTop from "./components/ScrollToTopButton";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export default function App() {
  return (
    <Router>
      <Header />
      <GoToTopPage />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}
