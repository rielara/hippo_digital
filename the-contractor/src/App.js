import "./App.css";
import ContractForm from "./components/contractForm/ContractForm";
import { useState } from "react";




function App() {

  const [contract, setContract] = useState([]);

  const updateContract = (newContract) => {
    setContract([...contract, newContract]);
    console.log('this is the contract', contract)
  }

  // this is working but you have to press the submit button twice to get the console log to work


  return (
    <div className="App">
      <h1>THE CONTRACTORS</h1>
      <p>Welcome</p>
      <ContractForm updateContract={updateContract}/>
    </div>
  );
}

export default App;
