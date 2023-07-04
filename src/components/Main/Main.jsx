import { useState } from "react";
import checkImage from "../../assets/images/icon-list.svg";
import mainImage from "../../assets/images/illustration-sign-up-desktop.svg";
import phoneImage from "../../assets/images/illustration-sign-up-mobile.svg";
import Form from "../Form/Form";
import Success from "../Sucess/Success";
import styles from "./Main.module.css";

const Main = ({ title, text, p1, p2, p3 }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <div className={styles.backdrop}> </div>}
      <main className={styles.main}>
        {showModal && (
          <Success
            setShowModal={setShowModal}
            title={"Thanks for subscribing!"}
            text={
              "A confirmation email has been sent to ash@loremcompany.com. Please open it and click the button inside to confirm your subscription."
            }
          />
        )}
        <section className={styles.summary}>
          <summary>
            <h1>{title}</h1>
            <p>{text}</p>
            <div>
              <img src={checkImage} alt="check image" />
              <p>{p1}</p>
            </div>
            <div>
              <img src={checkImage} alt="check image" />
              <p>{p2}</p>
            </div>
            <div>
              <img src={checkImage} alt="check image" />
              <p>{p3}</p>
            </div>
          </summary>
          <section className={styles.form}>
            <Form setShowModal={setShowModal} />
          </section>
        </section>
        <section className={styles.mainImage}>
          <img src={mainImage} alt="main image" />
        </section>
        <section className={styles.phoneImage}>
          <img src={phoneImage} alt="phone image" />
        </section>
      </main>
    </>
  );
};

export default Main;
