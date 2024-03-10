import { useState, useEffect } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import "./Detail.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getDetailProduct } from "../redux/slices/womazingDetailSlices";

const Detail = () => {
  const { t } = useTranslation();

  const { id } = useParams();
  // console.log(id);

  const dispatch = useDispatch();

  const { productData, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getDetailProduct(id));
  }, []);
  console.log(productData);

  // const [data, setData] = useState(null);
  // console.log(data);
  // useEffect(() => {
  //   fetch(`https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  return (
    <>
      {productData && (
        <div className="detail">
          <div className="wrap">
            <div className="detail-block">
              <h1>{productData.name}</h1>
              <div className="img-detail-price">
                <div className="img-detail">
                  <img width={400} src={productData.img} alt="" />
                </div>
                <div className="price-btn-detail">
                  <h2>{productData.name}</h2>
                  <h3>{productData.price}$</h3>
                  <NavLink to="/cart">
                    <button>{t("Добавить в корзину")}</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
