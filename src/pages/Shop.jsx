import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Link, useActionData } from "react-router-dom";
const url = "https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name";

const Shop = () => {
  const [products, setProducts] = useState(null);
  async function getShop() {
    const { data } = await axios.get(url);
    console.log(data);
    setProducts(data);
  }
  useEffect(() => {
    getShop();
  }, []);
  if (products == null) {
    return <h3>Loading...</h3>;
  }
  return (
    <>
      <div className="shop">
        <div className="wrap">
          <div className="block-shop">
            <h1>Магазин</h1>
            <button>Все</button>
            <button>Пальто</button>
            <button>Свитшоты</button>
            <button>Кардиганы</button>
            <button>Толстовки</button>
            <div className="boxes">
              {products.map((el) => (
                <Link className="link" to={`/detail/${el.id}`} key={el.id}>
                  <div className="box">
                    <img width={300} src={el.img} alt="" />
                    <h3>{el.name}</h3>
                    <p>{el.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
