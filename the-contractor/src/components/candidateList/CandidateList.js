import React from "react";
import { candidates } from "./candidates.js";

export default function CandidateList({ contract }) {
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
