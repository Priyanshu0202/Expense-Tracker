import Header from "./components/Header";
import Balance from "./components/Balance";
import Income_expense from "./components/Income_expense";
import TransactionList from "./components/TransactionList";
import Add_transaction from "./components/Add_transaction";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <div className="bg-purple-300 rounded-md max-w-md mx-auto ">
      <div className="max-w-sm mx-auto mt-20 p-1">
        <GlobalProvider>
          <Header />
          <div>
            <Balance />
          </div>
          <Income_expense />
          <TransactionList />
          <Add_transaction />
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
