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
    const filteredTherapist = therapists.filter((entry) => entry.id === id);
    setSelectedTherapist(filteredTherapist);
    setShow(true);
  };

  const exitShow = () => {
    setShow(false);
  };
  const parsedTherapists = therapists.map((therapist) => {
    return (
      <div className='card'>
        <TherapistListItem
          key={therapist.id}
          id={therapist.id}
          title={therapist.title}
          entry={therapist.entry}
          date={therapist.date}
          scale={therapist.scale}
          getTherapist={getTherapist}
        />
      </div>
    );
  });

  return (
    <>
      {show ? (
        <div>
          <TherapistShow journal={selectedTherapist} exitShow={exitShow} />
        </div>
      ) : (
        <div>{parsedTherapists}</div>
      )}
    </>
  );
};

export default TherapistList;
