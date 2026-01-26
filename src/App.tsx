import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GoToTopPage from "./components/common/GoToTopPage";
import ScrollToTop from "./components/common/ScrollToTopButton";
import Header from "./layouts/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Header />
      <GoToTopPage />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
