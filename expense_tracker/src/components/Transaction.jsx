import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <>
      <li
        className={`flex justify-between bg-gray-100 p-1 rounded-md border-2 ${
          transaction.amount < 0 ? "border-red-300" : "border-green-400"
        } m-1`}
      >
        <span>{transaction.text}</span>
        <span>Rs.{transaction.amount}</span>
        <button
          className={`bg-red-500 px-2 text-white hover:bg-red-700 rounded-sm`}
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </>
  );
};

export default Transaction;
