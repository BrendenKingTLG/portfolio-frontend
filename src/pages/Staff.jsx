import React, { useState } from "react";
import StaffRow from "../components/StaffRow";

export default function Staff() {
  const [staffArray, setStaffArray] = useState([]);

  const randomPersonEvent = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((response) => {
        setStaffArray(response.results);
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred");
      });
  };

  return (
    <>
      <section className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Staff</h2>
        <article className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p id="staffintro" className="text-center text-gray-600 mb-4">
            Choose a button to learn about a random staff member
          </p>
          <div id="staffbtns" className="text-center mb-4">
            <button
              id="browserstaffbtn"
              onClick={randomPersonEvent}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Add Member
            </button>
          </div>
          <table id="stafftable" className="w-full">
            <thead>
              <tr>
                <th className="text-left">Portrait</th>
                <th className="text-left">Name/Email</th>
                <th className="text-left">Telephone</th>
                <th className="text-left">City</th>
              </tr>
            </thead>
            <tbody id="stafftablebody">
              {staffArray.map((person, i) => (
                <StaffRow person={person} key={i} />
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
}
