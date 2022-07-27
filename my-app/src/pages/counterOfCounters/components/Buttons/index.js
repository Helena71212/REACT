import React from "react";
import PropTypes from "prop-types";
import Counter from "../../../../components/counter";
import styles from "./index.module.css";

const MainCounter = ({
  counters,
  handleCounterAdd,
  handleResetCounters,
  handleReset,
  handleCounterIncrement,
  handleCounterDecrement,
  handleCounterReset,
  handleCounterDelete,
  sumOfCounters,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsPlace}>
        <button onClick={handleCounterAdd} className={styles.mainButton}>
          Add counter
        </button>
        <button onClick={handleResetCounters} className={styles.mainButton}>
          Reset
        </button>
      </div>
      <div>
        {counters.map(({ id, countValue }) => (
          <Counter
            countValue={countValue}
            id={id}
            key={id}
            onIncrement={handleCounterIncrement}
            onDecrement={handleCounterDecrement}
            onReset={handleCounterReset}
            onDelete={handleCounterDelete}
          />
        ))}
      </div>

      <div>
        <h4>Number of counters:{counters.length}</h4>
        <h4>Sum of value of all counters:{sumOfCounters}</h4>
      </div>
    </div>
  );
};
MainCounter.propTypes = {
  counters: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, countValue: PropTypes.number })
  ).isRequired,
};

export default MainCounter;
