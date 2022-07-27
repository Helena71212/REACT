import React, { useCallback } from "react";
import MainCounter from "../components/Buttons";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import Counter from "../../../components/counter";

const CounterOfCountersContainer = () => {
  const [counters, setCounters] = useState([]);

  const handleCounterAdd = () => {
    const newCounter = {
      id: uuid(),
      countValue: 0,
    };
    setCounters((state) => {
      const changeValueCounter = state.map((counter) => {
        return {
          ...counter,
          countValue: counter.countValue % 2 === 0 ?counter.countValue + 1 : counter.countValue,
        };
      });
      console.log('ghjk');
      return [...changeValueCounter, newCounter];
    });
  };

  const handleResetCounters = () => {
    setCounters([]);
  };

  const handleCounterIncrement = useCallback((id) => {
    setCounters(state => {
      const countersCopy = [...state];
      const findCounter = countersCopy.find(counter => counter.id === id);
      findCounter.countValue += 1;
      console.log('123');
      return countersCopy;
    });
  }, []);

  const handleCounterDecrement = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state];
      const findCounter = countersCopy.find((counter) => counter.id === id);
      if (findCounter.countValue > 0) {
        findCounter.countValue -= 1;
      }
      return countersCopy;
    });
  }, []);

  const handleCounterReset = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state];
      const findCounter = countersCopy.find((counter) => counter.id === id);
      findCounter.countValue = 0;
      return countersCopy;
    });
  }, []);

  const handleCounterDelete = useCallback((id) => {
    setCounters((state) => {
      const countersCopy = [...state];
      const counterIndexDelete = countersCopy.findIndex(
        (counter) => counter.id === id
      );
      countersCopy.splice(counterIndexDelete, 1);

      return countersCopy.map(({ id, countValue }) => {
        return {
          id,
          countValue: countValue % 2 !== 0 ? countValue - 1 : countValue,
        };
      });
    });
  }, []);

  const sumOfCounters = counters.reduce(
    (result, { countValue }) => result + countValue,
    0
  );

  return (
    <MainCounter
      counters={counters}
      handleCounterAdd={handleCounterAdd}
      handleCounterIncrement={handleCounterIncrement}
      handleCounterDecrement={handleCounterDecrement}
      handleCounterReset={handleCounterReset}
      handleCounterDelete={handleCounterDelete}
      sumOfCounters={sumOfCounters}
      handleResetCounters={handleResetCounters}
    />
  );
};

export default CounterOfCountersContainer;
