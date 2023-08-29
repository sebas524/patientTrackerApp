import React from "react";

const PatientInfo = ({ patient, setPatient, deletePatient }) => {
  const deleteHandler = () => {
    const answer = confirm("Are you sure you want to delete the patient?");
    if (answer) {
      deletePatient(patient.id);
    }
  };

  return (
    <div className="mt-6 bg-yellow-50 shadow-md rounded-lg pt-10 pb-5 px-5">
      <p className="block text-gray-700 uppercase font-bold mb-2">
        First Name:{" "}
        <span className="font-normal normal-case">{patient.firstName}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Last Name:{" "}
        <span className="font-normal normal-case">{patient.lastName}</span>
      </p>{" "}
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Email: <span className="font-normal normal-case">{patient.email}</span>
      </p>{" "}
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Expected Release:{" "}
        <span className="font-normal normal-case">{patient.releaseDate}</span>
      </p>
      <p className="block text-gray-700 uppercase font-bold mb-2">
        Symptoms:{" "}
        <span className="font-normal normal-case">{patient.symptoms}</span>
      </p>
      <div className="flex justify-between mt-8 ">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold uppercase "
          onClick={() => {
            return setPatient(patient);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold uppercase "
          onClick={deleteHandler}
        >
          Delete
        </button>{" "}
      </div>
    </div>
  );
};

export default PatientInfo;
