import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Form.module.css";
const Form = ({ setShowModal }) => {
  const [error, setError] = useState(false);
  const [text, setText] = useState("");

  const emailRegex = /^[A-Za-z0-9._+\-\']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/;

  const inputHandler = (e) => {
    setText(e.target.value);
    if (!emailRegex.test(text)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (!error && text !== "") setShowModal(true);
  };

  return (
    <form onSubmit={onClickHandler} className={styles.form}>
      <div className={styles.labels}>
        <label htmlFor="">Email address</label>
        {error && <label htmlFor="">Valid email required</label>}
      </div>
      <input
        className={error ? styles.inputError : ""}
        type="email"
        name="email"
        id="email"
        placeholder="email@company.com"
        value={text}
        onChange={inputHandler}
        onBlur={inputHandler}
      />
      <Button text={"Subscribe to monthly newsletter"} />
    </form>
  );
};

export default Form;
