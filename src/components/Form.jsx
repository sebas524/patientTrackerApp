import React, { useEffect, useState } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      console.log(patient);
      setFirstName(patient.firstName);
      setLastName(patient.lastName);
      setEmail(patient.email);
      setReleaseDate(patient.releaseDate);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const idGenerator = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([firstName, lastName, email, releaseDate, symptoms].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    const newPatient = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      releaseDate: releaseDate,
      symptoms: symptoms,
    };

    if (patient.id) {
      newPatient.id = patient.id;

      const updatedPatients = patients.map((prevPatient) => {
        return prevPatient.id === patient.id ? newPatient : prevPatient;
      });
      setPatients(updatedPatients);
      setPatient({});
    } else {
      newPatient.id = idGenerator();
      setPatients([...patients, newPatient]);
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setReleaseDate("");
    setSymptoms("");
  };

  // ! oooooooooooooooooooooooooooooo !
  // ! oooooooooooooooooooooooooooooo !

  return (
    <div className="w-full md:w-1/2">
      <h2 className="font-black text-3xl text-center">Patient Personal Info</h2>
      <p className="text-lg text-center mt-3 mb-6">
        Add Patients & Edit
        <span className="text-indigo-600 font-bold"> Them</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-yellow-50 shadow-md rounded-lg py-10 px-5"
      >
        {error && <Error message="All fields are mandatory !"></Error>}
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="block text-gray-700 uppercase font-bold"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text "
            placeholder="First Name Of Patient"
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-gray-400"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-gray-700 uppercase font-bold"
          >
            Last Name{" "}
          </label>
          <input
            id="lastName"
            type="text "
            placeholder="Last Name Of Patient"
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-gray-400"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>{" "}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="text "
            placeholder="Email Of Patient"
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-gray-400"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="releaseDate"
            className="block text-gray-700 uppercase font-bold"
          >
            Expected Release
          </label>
          <input
            id="releaseDate"
            type="date"
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-gray-400"
            value={releaseDate}
            onChange={(e) => {
              setReleaseDate(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            className="border-2 w-full p-2 rounded-lg mt-2 placeholder-gray-400"
            id="symptoms"
            placeholder="Describe The Patient's Symptoms..."
            value={symptoms}
            onChange={(e) => {
              setSymptoms(e.target.value);
            }}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full hover:bg-indigo-700 p-3 text-white text-lg rounded-lg uppercase font-bold cursor-pointer "
          value={patient.id ? "Update Patient" : "Add Patient"}
        />
      </form>
    </div>
  );
};

export default Form;
