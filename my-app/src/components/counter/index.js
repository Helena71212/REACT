import React from "react";
import PropTypes from "prop-types";
import { ROUTE_NAMES } from "../../router/routeNames";

import styles from "./index.module.css";

const Counter = ({
  id,
  countValue,
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
}) => {
   const isEven= countValue % 2 === 0;
  return (
    <div
      className={styles.wrapper} style={{background: isEven? "violet": "pink"}}
    >
      <div className={styles.screen}>{countValue}</div>
      {countValue>0 &&  <div className={styles.screen}>
        {isEven ? "четное" : "нечетное"}
      </div>}
     
      <div className={styles.buttonsArea}>
        <button
          onClick={() => onDecrement(id)}
          className={styles.controlButton}
        >
          -
        </button>
        <button onClick={()=>onReset(id)} className={styles.controlButton}>
          Reset
        </button>
        <button
          onClick={()=>onIncrement(id)}
          className={styles.controlButton}
        >
          +
        </button>
      </div>
      <button onClick ={()=> onDelete(id)}>Delete</button>
    </div>
  );
};
Counter.propTypes = {
  countValue: PropTypes.number.isRequired,
  isEven: PropTypes.bool,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
export default Counter;
