import React from "react";
import { candidates } from "./candidates.js";
import { useEffect } from "react";


export default function CandidateList({ contract }) {

  // based on the contract use useEffect and match candidats to contracts that contain their skills
  // function takes in contract and returns an array of candidates that match the contract skills
  // establish an empty array, loop through the candidates array and check if the candidate skills match the contract skills
  // for each candidate that matches, push the candidate into the empty array
  // return top 3 candidates 


  




  return (
    <div>
      <div>
        <h1>{contract.name}</h1>
        <p>{contract.description}</p>
        {contract.startDate && contract.endDate && (
          <p>
            {contract.startDate} to {contract.endDate}
          </p>
        )}
      </div>
      <div>
        {candidates.map((candidate) => {
          return (
            <div key={candidate.id}>
              <p>{candidate.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
