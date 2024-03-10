import React from "react";
import "./App.css";
import HeaderRoot from "./components/HeaderRoot/HeaderRoot";
// import HeroRoot from "./components/HeroRoot/HeroRoot";
// import ProductsRoot from "./components/ProductsRoot/ProductsRoot";
// import AboutRoot from "./components/AboutRoot/AboutRoot";
// import TeamRoot from "./components/TeamRoot/TeamRoot";
import FooterRoot from "./components/FooterRoot/FooterRoot";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderRoot />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      {/* <HeroRoot />
      <ProductsRoot />
      <AboutRoot />
      <TeamRoot /> */}
      <FooterRoot />
    </>
  );
};

export default App;
