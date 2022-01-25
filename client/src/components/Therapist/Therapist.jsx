import TherapistList from "./TherapistList";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";

const Therapist = (props) => {
  const [therapistName, setTherapistName] = useState(0);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .get("http://localhost:3002/students/therapist-info", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        const therapistInfo = res.data[0];
        setTherapistName(therapistInfo.name);
      });
  }, [therapistName]);

  return (
    <div className='main-therapist-container'>
      <Header therapistName={therapistName} />
      <TherapistList />
    </div>
  );
};

export default Therapist;
