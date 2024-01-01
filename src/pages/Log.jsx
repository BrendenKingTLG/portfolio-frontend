import React, { useState, useEffect } from "react";
import LogTable from "../components/LogTable";
import { useNavigate } from "react-router-dom";

export default function Log() {
  const navigate = useNavigate();
  const [document, setDocument] = useState([]);
  const [error, setError] = useState(null);

  const fetchLogData = async () => {
    try {
      const response = await fetch("/log");
      if (!response.ok) {
        throw new Error("Could not fetch data from the server");
      }
      const data = await response.json();
      setDocument(data);
    } catch (error) {
      console.error(error);
      setError("Could not connect to the database. Please try again later.");
    }
  };

  useEffect(() => {
    fetchLogData();
  }, []);

  const updateOneLog = (property) => {
    navigate("/log/edit", { state: property });
  };

  const deleteLog = (property) => {
    fetch(`/log/${property["_id"]}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property),
    })
      .then((res) => {
        if (res.ok) {
          alert("Success");
        } else {
          alert("Delete attempt failed");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred during delete operation");
      });

    fetchLogData();
  };

  return (
    <>
      <h2 className="text-center">Log of Properties</h2>
      <article>
        <p className="text-center">
          Log of every property a company has purchased
        </p>
        {error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <LogTable
            data={document}
            updateFunc={updateOneLog}
            deleteFunc={deleteLog}
          />
        )}
      </article>
    </>
  );
}
