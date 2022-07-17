import React from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const Counter = ({ countValue, isEven, onIncrement, onDecrement, onReset }) => {
  return (
    <div
      className={`${styles.wrapper} ${
        isEven ? styles.evenColor : styles.oddColor
      }`}
    >
      <div className={styles.screen}>{countValue}</div>
      <div className={styles.screen}>
        {isEven ? "Вы ввели четное число" : "Вы ввели нечетное число"}
      </div>
      <div className={styles.buttonsArea}>
        <button onClick={onDecrement} className={styles.controlButton}>
          -
        </button>
        <button onClick={onReset} className={styles.controlButton}>
          Reset
        </button>
        <button onClick={onIncrement} className={styles.controlButton}>
          +
        </button>
      </div>
    </div>
  );
};
Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  isEven: PropTypes.bool,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
export default Counter;
