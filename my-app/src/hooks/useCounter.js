import {useState, useCallback } from "react";


export const useCounter= (defaultValue) =>{
   const [count,setCount] = useState(defaultValue);

   const handleIncrement= useCallback(()=>{
      setCount((state)=> state+1);
   },[]);

   const handleDecrement =useCallback(()=>{
setCount((state)=> state-1)
   },[]);

   const handleReset =useCallback(()=>{
      setCount(defaultValue)
         },[]);

         return {
            count,
            handleIncrement,
            handleDecrement,
            handleReset
         };
};