import styles from "./Button.module.css";

const Button = ({ text, onClickHandler }) => {
  return (
    <button onClick={onClickHandler} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
