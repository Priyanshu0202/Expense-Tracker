import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions?.map((transaction) => transaction.amount);
  const total = amount?.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="text-md mt-10">
      YOUR BALANCE
      <h1 className=" text-2xl">Rs {total}</h1>
    </div>
  );
};

export default Balance;
