import React from "react";
import "./ProductsRoot.css";
import pro2 from "../../assets/products1.png";
import pro1 from "../../assets/products2.png";
import pro3 from "../../assets/products3.png";

const ProductsRoot = () => {
  return (
    <>
      <div className="products">
        <div className="wrap">
          <div className="block-products">
            <h1>Новая коллекция</h1>
            <div className="products-img">
              <div className="card">
                <img src={pro2} alt="" />
                <h5>Футболка USA</h5>
                <p>
                  <span>$229</span> $129
                </p>
              </div>
              <div className="card">
                <img src={pro1} alt="" />
                <h5>Купальник Glow</h5>
                <p>$129</p>
              </div>
              <div className="card">
                <img src={pro3} alt="" />
                <h5>Свитшот Sweet Shot</h5>
                <p>$129</p>
              </div>
            </div>
            <button>Открыть магазин</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsRoot;
