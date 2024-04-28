import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
const Add_transaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };
    console.log(newTransaction);
    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <div className="mt-5">
      <h1 className="uppercase border-black border-b pb-1">
        Add New Transaction
      </h1>
      <form action="">
        <div className="mt-2">
          <label htmlFor="">
            Text <br />
          </label>
          <input
            type="text"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="bg-gray-100 w-full p-1 rounded-md"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="">
            Amount (negative - expence,positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="bg-gray-100 w-full p-1 rounded-md"
          />
        </div>
        <button
          className="w-full bg-blue-500 uppercase p-1 text-white rounded-md font-bold mt-3 hover:bg-blue-600 mb-10"
          onClick={onSubmit}
        >
          {" "}
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default Add_transaction;
