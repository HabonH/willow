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

  const setPrimaryTherapist = (id) => {
    const accessToken = localStorage.getItem("accessToken");
    const data = { id };
    axios
      .put(
        "http://localhost:3002/students/set_therapist",
        { data },
        {
          headers: { authorization: `Bearer ${accessToken}` },
        }
      )
      .catch((err) => console.log(err));
  };

  const removePrimaryTherapist = (id) => {
    const accessToken = localStorage.getItem("accessToken");
    axios
      .put("http://localhost:3002/students/set_therapist", {
        headers: { authorization: `Bearer ${accessToken}` },
      })
      .catch((err) => console.log(err));
  };

  const parsedTherapists = therapists.map((therapist) => {
    return (
      <TherapistListItem
        key={therapist.id}
        id={therapist.id}
        name={therapist.name}
        img={therapist.img}
        getTherapist={getTherapist}
        title={therapist.title}
      />
    );
  });

  return (
    <>
      {show ? (
        <TherapistShow
          therapist={selectedTherapist}
          exitShow={exitShow}
          setPrimaryTherapist={setPrimaryTherapist}
          removePrimaryTherapist={removePrimaryTherapist}
        />
      ) : (
        <div className='therapist-holder'>{parsedTherapists}</div>
      )}
    </>
  );
};

export default TherapistList;
