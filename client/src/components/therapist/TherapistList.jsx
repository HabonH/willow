import TherapistListItem from "./TherapistListItem";
import TherapistShow from "./TherapistShow";
import "./Therapist.css";

import { useEffect, useState } from "react";
import axios from "axios";

const TherapistList = () => {
  const [show, setShow] = useState(false);
  const [selectedTherapist, setSelectedTherapist] = useState(null);
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3002/therapists`).then((result) => {
      setTherapists(result.data);
    });
  }, []);

  const getTherapist = (id) => {
    const filteredTherapist = therapists.filter(
      (therapist) => therapist.id === id
    );
    setSelectedTherapist(filteredTherapist);
    setShow(true);
  };

  const exitShow = () => {
    setShow(false);
  };
  const parsedTherapists = therapists.map((therapist) => {
    return (
      <TherapistListItem
        key={therapist.id}
        id={therapist.id}
        name={therapist.name}
        phone={therapist.phone}
        organization_name={therapist.organization_name}
        getTherapist={getTherapist}
      />
    );
  });

  return (
    <>
      {show ? (
        <div>
          <TherapistShow therapist={selectedTherapist} exitShow={exitShow} />
        </div>
      ) : (
        <div>{parsedTherapists}</div>
      )}
    </>
  );
};

export default TherapistList;
