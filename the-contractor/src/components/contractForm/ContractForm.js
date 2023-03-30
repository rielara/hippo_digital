import React, { useState } from "react";

const ContractForm = ({ updateContract }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newContract = {
      startDate: startDate,
      endDate: endDate,
      name: name,
      description: description,
      skills: skills,
    };
    updateContract(newContract);
    // code to submit contract details
  };

  const handleSkillChange = (e) => {
    const skill = e.target.value;
    if (e.target.checked) {
      setSkills([...skills, skill]);
    } else {
      setSkills(skills.filter((r) => r !== skill));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="startDate">Start Date</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <label htmlFor="name">Project Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Enter short description of your project.</p>
      <label htmlFor="description">Project Description</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label>Select skills you are looking for:</label>
      <br />
      <input type="checkbox" value="Java" onChange={handleSkillChange} /> Java
      <input
        type="checkbox"
        value="Javascript"
        onChange={handleSkillChange}
      />{" "}
      Javascript
      <input type="checkbox" value="Python" onChange={handleSkillChange} />{" "}
      Python
      <input type="checkbox" value="AWS" onChange={handleSkillChange} /> AWS
      <br />
      <button type="submit">Find me an ideal candidate</button>
    </form>
  );
};

export default ContractForm;
