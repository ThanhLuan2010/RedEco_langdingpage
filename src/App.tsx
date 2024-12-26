import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/home/page";
import Header from "./components/Header";
import "./index.css";
import ScrollToTop from "./ScrollToTop";
import Footer from "./components/Footer";
import Unit from "./app/unit/page";
import Lession from "./app/Lession/page";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="">
        <Header />
        <div className="md:px-[5%] lg:px-[10%]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unit/:id" element={<Unit />} />
            <Route path="/lession/:id" element={<Lession />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// class="size-full wp-image-131 aligncenter"
