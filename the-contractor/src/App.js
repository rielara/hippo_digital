import "./App.css";
import ContractForm from "./components/contractForm/ContractForm";
import { useEffect, useState } from "react";
import CandidateList from "./components/candidateList/CandidateList";

function App() {
  const [contract, setContract] = useState({});

  const updateContract = (newContract) => {
    setContract(newContract);
  };

  useEffect(() => {
    console.log("this is the contract", contract);
  }, [contract]);

  return (
    <div className="App">
      <h1>THE CONTRACTORS</h1>
      <p>Welcome</p>
      <ContractForm updateContract={updateContract} />
      <CandidateList contract={contract} />
    </div>
  );
}

export default App;
