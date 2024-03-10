import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Shop.css";
import { Link, useActionData } from "react-router-dom";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/slices/womazingSlice";

const Shop = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { productsData, loading, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  console.log(productsData);
  return (
    <>
      <div className="shop">
        <div className="wrap">
          <div className="block-shop">
            <h1>{t("Магазин")}</h1>
            <button>{t("Все")}</button>
            <button>{t("Пальто")}</button>
            <button>{t("Свитшоты")}</button>
            <button>{t("Кардиганы")}</button>
            <button>{t("Толстовки")}</button>
            <div className="boxes">
              {productsData.map((el) => (
                <Link className="link" to={`/detail/${el.id}`} key={el.id}>
                  <div className="boxs">
                    <img width={300} src={el.img} alt="" />
                    <h3>{el.name}</h3>
                    <p>{el.price}$</p>
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
