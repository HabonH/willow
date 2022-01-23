import StudentListItem from "./StudentListItem";
// import "./Student.css";

import { useEffect, useState } from "react";
import axios from "axios";

const StudentsList = () => {
  const [show, setShow] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3002/therapists`).then((result) => {
      setStudents(result.data);
    });
  }, []);

  const getStudent = (id) => {
    const filteredStudent = students.filter((student) => student.id === id);
    setSelectedStudent(filteredStudent);
    setShow(true);
  };

  const exitShow = () => {
    setShow(false);
  };

  const parsedStudents = students.map((therapist) => {
    return (
      <StudentListItem
        key={therapist.id}
        id={therapist.id}
        name={therapist.name}
        img={therapist.img}
        getTherapist={getStudent}
        title={therapist.title}
      />
    );
  });

  return (
    <>
      {/* {show ? (
        <StudentShow therapist={selectedStudent} exitShow={exitShow} />
      ) : (
        <div className='therapist-holder'>{parsedStudents}</div>
      )} */}
    </>
  );
};

export default StudentsList;
