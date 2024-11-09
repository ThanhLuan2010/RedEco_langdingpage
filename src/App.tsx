import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./app/home/page";
import AboutUs from "./app/about-us/page";
import Contact from "./app/contact-us/page";
import Header from "./components/Header";
import Products from "./app/product/page";
import Gallery from "./app/gallery/page";
import News from "./app/news/page";
import Quality from "./app/quality/page";
import Search from "./app/Search/page";
import "./index.css";
import "./App.css";
import ScrollToTop from "./ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/product" element={<Products />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;