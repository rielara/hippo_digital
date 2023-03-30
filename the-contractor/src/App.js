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
    <div className="app">
      <div className="app-welcome">
        <h1>THE CONTRACTORS</h1>
        <p>
          Welcome! Please enter your planned contract details to see the
          candidates that best match your requirements.
        </p>
        <ContractForm updateContract={updateContract} />
      </div>
      <CandidateList contract={contract} />
    </div>
  );
}

export default App;
