import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    fetch(`https://65ce2c1fc715428e8b401f4e.mockapi.io/3/name/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      {data && (
        <div className="detail">
          <div className="wrap">
            <div className="detail-block">
              <h1>{data.name}</h1>
              <div className="img-detail-price">
                <div className="img-detail">
                  <img width={400} src={data.img} alt="" />
                </div>
                <div className="price-btn-detail">
                  <h2>{data.name}</h2>
                  <h3>{data.price}</h3>
                  <button>Добавить в корзину</button>
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
