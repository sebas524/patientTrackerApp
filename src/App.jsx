import { useEffect, useState } from "react";
import Form from "./components/Form";
import ListOfPatients from "./components/ListOfPatients";
import Title from "./components/Title";

function App() {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patient, setPatient] = useState({});

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((prevPatient) => {
      return prevPatient.id !== id;
    });

    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-10">
      <Title></Title>
      <div className="flex flex-col md:flex-row gap-5">
        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        ></Form>
        <ListOfPatients
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        ></ListOfPatients>
      </div>
    </div>
  );
}

export default App;
