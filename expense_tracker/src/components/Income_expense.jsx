import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Income_expense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);
  return (
    <div className="flex bg-gray-100 justify-center mt-5 shadow-lg rounded-md">
      <div className="text-center border-blue-100 p-5">
        <div className="mx-10">
          INCOME
          <p className="text-lg text-green-500">(+)Rs{income}</p>
        </div>
      </div>
      <div className="text-center border-blue-100 p-5">
        <div className="mx-10 ">
          EXPENCE
          <p className="text-red-500 text-lg">(-)Rs{expense}</p>
        </div>
      </div>
    </div>
  );
};

export default Income_expense;
