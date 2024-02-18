import React from "react";
// import "../HeaderRoot/HeaderRoot.css";
import "./FooterRoot.css";
import visa from "../../assets/visa.svg";

const FooterRoot = () => {
  return (
    <>
      <div className="footer">
        <div className="wrap">
          <div className="block-footer">
            <div className="logo-category">
              <div className="logo">
                <h4>
                  <i id="cart" className="bi bi-emoji-laughing"></i>
                </h4>
                <p>WOMAZING</p>
              </div>
              <div className="categoty">
                {/* <ul>
                  <li><Link to='/'>Главная</Link></li>
                  <li><Link to='/shop'>Магазин</Link></li>
                  <li><Link to='/about'>О бренде</Link></li>
                  <li><Link to='/contacts'>Контакты</Link></li>
                </ul> */}

                <a href="">Главная</a>
                <a href="">Магазин</a>
                <a href="">О бренде</a>
                <a href="">Контакты</a>
              </div>
            </div>
            <div className="tel-footer">
              <p>
                +7 (495) 823-54-12 <br />
                hello@womazing.com
              </p>

              <div className="inst-face-twit">
                <h4>
                  <i className="bi bi-facebook"></i>
                </h4>
                <h4>
                  <i className="bi bi-instagram"></i>
                </h4>
                <h4>
                  <i className="bi bi-twitter"></i>
                </h4>
              </div>
              <div className="visa-mastercard">
                <img src={visa} alt="" />
              </div>
            </div>
            <h4>
              <i className="bi bi-bag-"></i>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterRoot;
