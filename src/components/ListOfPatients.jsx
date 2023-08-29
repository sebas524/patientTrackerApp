import React, { useEffect } from "react";
import PatientInfo from "./PatientInfo";

const ListOfPatients = ({ patients, setPatient, deletePatient }) => {
  return (
    <>
      <div className="w-full md:w-1/2 ">
        <h2 className="font-black text-3xl text-center">
          {patients.length === 0 ? "0 Patients" : "List Of Patients"}
        </h2>
        {patients.length == 0 ? (
          <p className="text-lg text-center mt-3">
            Start Adding Them By Filling Patient's
            <span className="text-indigo-600 font-bold"> Personal Info </span>
          </p>
        ) : (
          <p className="text-lg text-center mt-3">
            See Their
            <span className="text-indigo-600 font-bold"> Info & Symptons</span>
          </p>
        )}

        <div className="md:h-screen overflow-y-scroll">
          {patients.map((patient) => {
            return (
              <PatientInfo
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              ></PatientInfo>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListOfPatients;
