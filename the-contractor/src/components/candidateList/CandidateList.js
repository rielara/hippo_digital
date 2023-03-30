import React from "react";
import { candidates } from "./candidates.js";
import { useEffect, useState } from "react";

export default function CandidateList({ contract }) {
  // based on the contract use useEffect and match candidats to contracts that contain their skills
  // function takes in contract and returns an array of candidates that match the contract skills
  // establish an empty array, loop through the candidates array and check if the candidate skills match the contract skills
  // for each candidate that matches, push the candidate into the empty array
  // return top 3 candidates

  const [showCandidates, setShowCandidates] = useState(candidates);

  useEffect(() => {
    function findMatchingCandidates() {
      // Create an empty array to store the matched candidates
      let matchedCandidates = [];

      // Loop through the candidates array
      candidates.forEach((candidate) => {
        // Create a variable to store the number of matching skills between the candidate and the new contract
        let matches = 0;

        // Loop through the skills in the new contract
        if (contract.skills) {
          contract.skills.forEach((skill) => {
            // If the candidate has the skill, increment the matches variable
            if (candidate.skills.includes(skill)) {
              matches++;
            }
          });
        }

        // Add the candidate and the number of matches to the matchedCandidates array
        matchedCandidates.push({ name: candidate.name, matches: matches });
      });

      // Sort the matchedCandidates array in descending order based on the number of matches
      matchedCandidates.sort((a, b) => b.matches - a.matches);

      // Return the top three candidates
      //return setShowCandidates(matchedCandidates.slice(0, 3))
      setShowCandidates(matchedCandidates);
    }
    findMatchingCandidates();
  }, [contract]);

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
        {showCandidates.map((candidate) => {
          return (
            <div key={candidate.id}>
              <p>{candidate.name}</p>
              <p>{candidate.matches}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
