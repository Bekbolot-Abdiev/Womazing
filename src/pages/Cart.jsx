import React from "react";
import "./cart.css";
import PROD from "../assets/products1.png";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Cart = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="cart">
        <div className="wrap">
          <div className="block-cart">
            <h2>{t("Корзина")}</h2>
            <div className="cart-links">
              <li>{t("Товар")}</li>
              <div className="cart-link">
                <li>{t("Цена")}</li>
                <li>{t("Количество")}</li>
                <li>{t("Всего")}</li>
              </div>
            </div>
            <hr />
            <div className="cart-product">
              <div className="cart-title">
                <p>
                  <i className="bi bi-x-lg"></i>
                </p>
                <img width={150} src={PROD} alt="" />
                <p>Футболка USA</p>
              </div>
              <div className="cart-price">
                <p>$129</p>
                <input value={1} min={1} type="tel" />
                <p>$129</p>
              </div>
            </div>
            <div className="cart-btn-inp">
              <div className="btn-inp">
                <input type="text" placeholder={t("Введите купон")} />
                <button>{t("Применить купон")}</button>
              </div>
              <button>{t("Обновить корзину")}</button>
            </div>
            <div className="cart-checkout">
              <p>{t("Подытог")}: $129</p>
              <div className="rezult">
                <p>
                  {t("Итоги")}:<span>$129</span>
                </p>
                <button>{t("Оформить заказ")}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
