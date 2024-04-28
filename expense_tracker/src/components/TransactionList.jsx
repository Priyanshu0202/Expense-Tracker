import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="mt-10">
      <h1 className="border-b pb-1 border-black uppercase">History</h1>
      <ul className="mt-5">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
