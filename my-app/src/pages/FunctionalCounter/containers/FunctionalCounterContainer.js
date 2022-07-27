import React, { useCallback } from "react";
import { useState } from "react";
import { useCounter } from "../../../hooks/useCounter";
import Counter from "../../../components/counter";

const FunctionalCounterContainer = () => {
 const{ count, handleIncrement,handleDecrement,handleReset}=
 useCounter(0);

 
  return (
    <Counter
      countValue={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
    />
    )};


export default FunctionalCounterContainer;
