import React, { Component, useState } from 'react';
export default function Greeting() {
  
  const [firstName, setFirstName] = useState("Bat");
  const [lastName, setLastName] = useState("Man");;

  const handleFirstNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setFirstName(e.target.value);
  const handleLastNameChange = (e: { target: { value: React.SetStateAction<string>; }; }) => setLastName(e.target.value);

  return (
    <div>
      <input value={firstName} onChange={handleFirstNameChange} /><br />
      <input value={lastName} onChange={handleLastNameChange} />
      <p>
        Hello, <span>{firstName} {lastName}</span>
      </p>
    </div>
  );
}