import Button from "../Button/Button";
import styles from "./Success.module.css";
import image from "../../assets/images/icon-success.svg";
const Success = ({ title, text, setShowModal }) => {
  const onClickHandler = (e) => {
    setShowModal(false);
  };

  return (
    <>
      <div className={styles.card}>
        <section>
          <img src={image} alt="imagen" />
          <summary>
            <h1>{title}</h1>
            <p>{text}</p>
          </summary>
          <Button onClickHandler={onClickHandler} text={"  Dismiss message"} />
        </section>
      </div>
    </>
  );
};

export default Success;
