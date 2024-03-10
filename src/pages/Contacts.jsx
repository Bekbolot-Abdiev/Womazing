import React from "react";
import "./Contact.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="contacts">
        <div className="wrap">
          <div className="block-contacts">
            <h1>{t("Контакты")}</h1>
            <div className="carta">
              <p>{t("Карта с любой точкой")}</p>
            </div>
            <div className="tel-email-adres">
              <div className="card">
                <p>{t("Телефон")}</p>
                <h6>+7 (495) 823-54-12</h6>
              </div>
              <div className="card">
                <p>E-mail</p>
                <h6>info@sitename.com</h6>
              </div>
              <div className="card">
                <p>{t("Адрес")}</p>
                <h6>г. Москва, 3-я улица Строителей, 25</h6>
              </div>
            </div>
            <div className="zakaz-block">
              <h4>Напишите нам</h4>
              <div className="inputs">
                <input type="" placeholder={t("Имя")} />
                <br />
                <input type="email" placeholder="E-mail" />
                <br />
                <input type="tel" placeholder={t("Телефон")} />
              </div>
              <input id="message" type="text" placeholder={t("Сообщение")} />
              <br />
              <button>{t("Отправить")}</button>
              <div className="successfully">
                <h5>{t("Сообщение успешно отправлено")}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
